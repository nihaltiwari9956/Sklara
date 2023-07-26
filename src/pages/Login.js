import React, { useState, useEffect } from 'react'
import { Row, Col, Container, FormControl } from 'react-bootstrap'
import './login.css'
import { API } from '../API'
import { useNavigate } from 'react-router-dom'
import swal from "sweetalert";
import ClipLoader from "react-spinners/ClipLoader";
import ReCAPTCHA from "react-google-recaptcha";
import { isAutheticated } from '../components/auth/authhelper'
import axios from 'axios'
import { Button, Modal } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Alert, IconButton, Input, InputAdornment, Tooltip } from '@mui/material'
import { Info, Visibility, VisibilityOff } from '@mui/icons-material'


const Login = () => {
    const {signToken} = useParams()

const checkToken = async()=>{
    if(signToken){
        try{
            let res = await axios.put(`${API}/api/user/sign/${signToken}`)
            if(res.data.status === "ok"){
                swal('Success','Account Activated Successfully, Login to continue','success')
            }
        }catch(err){
            console.log(signToken)
            return swal('Error',`${err.response.data.message}`,'error')
        }
        
    }
}

useEffect(()=>{
    checkToken()
},[])
    

    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: "",
        showPassword: false
    });

    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: "",
    });

    const validEmailRegex = RegExp(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    const validPasswordRegex = RegExp(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{7,}$/
    );

    const [loading, setLoading] = useState(false);
    const { token } = isAutheticated();
    // const [verified, setVerifed] = useState(false)
    const [next, setNext] = useState(false)
    const [validForm, setValidForm] = useState(false);
    const [showToast, setToast] = useState(false)
    //console.log(token)
    //for modal---------------------------
    const [show, setShow] = useState(false);
    const handleClickShowPassword = () => {
        setUser({
            ...user,
            showPassword: !user.showPassword,
        });
    };
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //---------------------------------

    const validateForm = () => {
        let valid = true;
        //console.log(Object.values(errors));
        Object.values(errors).forEach((val) => {
            if (val.length > 0) {
                valid = false;
                return false;
            }
        });
        Object.values(user).forEach((val) => {
            if (val.length <= 0) {
                valid = false;
                return false;
            }
        });
        return valid;
    };

    //cheking email and password
    useEffect(() => {
        // //console.log(errors);
        if (validateForm()) {
            //   //console.log(true);
            setValidForm(true);
        } else {
            //   //console.log(false);
            setValidForm(false);
        }

        // if (!verified) {
        //     setValidForm(false);
        // }

    }, [errors]);

    // useEffect(()=>{
    //     if (token) {
    //         navigate("/dashboard");
    //     }
    //    // console.log(token)
    // },[])



    const handleNext = () => {
        if (next === false) {
            setNext(true)
        } else {
            setNext(false)
        }
    }

    // function changeVerified() {
    //     setVerifed(false);
    // }

    const handleChange = (e) => {
        // e.preventDefault();

        const { name, value } = e.target;

        switch (name) {
            case "email":
                setErrors({
                    ...errors,
                    emailError: validEmailRegex.test(value) ? "" : "Email is not valid!",
                });

                break;
            case "password":
                setErrors((errors) => ({
                    ...errors,
                    passwordError: validPasswordRegex.test(value)
                        ? ""
                        : "Password Shoud Be 8 Characters Long, Atleast One Uppercase, Atleast One Lowercase, Atleast One Digit, Atleast One Special Character",
                }));
                break;
            default:
                break;
        }

        setUser({ ...user, [name]: value });
    };



    //submit function
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user.email || !user.password) {
            return swal("Error!", "All fields are required", "error");
        }
        // if (!verified) {
        //     return swal("Error!", "Please mark the captcha field", "error");
        // }

        setLoading(true);
        let response = await axios.post(`${API}/signin`, { ...user })
        if (response.data.status === "ok") {
            setLoading(false)
            localStorage.setItem(
                "auth",
                JSON.stringify({
                    user: user.email,
                    token: response.data.token,
                })
            );
            
            navigate('/dashboard')
            setTimeout(window.location.reload(), 8000);
            //navigate('/dashboard')


        } else {
            setLoading(false);
            let message = response.data.message;
            swal({
                title: "Error",
                text: message,
                icon: "error",
                buttons: true,
                dangerMode: true,
            });
        }

    };

    const ForgotMail = async () => {
        let res = await axios.put(`${API}/generatePassword`, { email: user.email })
        console.log(res)
        if (res.data.status === 'ok') {
            let message = res.data.message;
            swal({
                title: "Success",
                text: message,
                icon: "success",
                buttons: true,
            }).then(() => {
                window.location.reload()
            })
        } else {
            swal("Oops!", "Something went wrong!", "error");
            handleClose()
        }
    }

    return (
        <>
            <>
                {/* modal start */}
                <Modal show={show} onHide={handleClose} className="p-4">
                    <Modal.Header closeButton>
                        <Modal.Title>Password Reset Request</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Forgot your password? Don't worry, click 'Confirm' to reset your password</Modal.Body>
                    {/* <FormControl placeholder='Enter your registered email address'/> */}
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancle
                        </Button>
                        <Button variant="primary" onClick={ForgotMail}>
                            Confirm
                        </Button>
                    </Modal.Footer>
                </Modal>
                {/* modal end */}
            </>
            <div className='login'>
                <Row>
                    <Col><div className="login_img"></div></Col>
                    <Col className='d-flex'>

                        <div className="login_form">
                            <div className="login_text">
                                <img src="./images/logo_sklara.svg" className='mb-5' />
                                {/* <h1 className='heading'>Welcome Back</h1> */}
                            </div>


                            <div className="login_input">
                                <p className="label">
                                    What is your email address?
                                </p>
                                <Input
                                    id="standard-adornment-password"
                                    type='email'
                                    value={user.email}
                                    fullWidth
                                    placeholder='Enter Email'
                                    name='email'
                                    onChange={handleChange}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <Tooltip title="On the next page you will be able to enter or reset your password" arrow placement='top'>
                                                <Info fontSize='smaller' />
                                            </Tooltip>
                                        </InputAdornment>
                                    }
                                />

                                {/* <input type="email" name="email" autoFocus value={user.email} onChange={handleChange} /> */}
                                <p className='text-center py-2 text-danger'>{errors.emailError}</p>
                                {!next && <button onClick={handleNext} disabled={errors.emailError || user.email === ''} className='login_button round_btn'>Continue</button>}
                            </div>
                            {next &&
                                <div className="login_input">
                                    <p className="label">
                                        Enter your password
                                    </p>
                                    <Input
                                        id="standard-adornment-password"
                                        type={user.showPassword ? 'text' : 'password'}
                                        value={user.password}
                                        name='password'
                                        fullWidth
                                        placeholder='Enter Password'
                                        onChange={handleChange}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                {/* <IconButton
                                                    aria-label="toggle password visibility"
                                                    
                                                // onMouseDown={handleMouseDownPassword}
                                                > */}
                                                {user.showPassword ? <VisibilityOff onClick={handleClickShowPassword} /> : <Visibility onClick={handleClickShowPassword} />}
                                                {/* </IconButton> */}
                                            </InputAdornment>
                                        }
                                    />
                                    {/* <input type="password" name="password" value={user.password} onChange={handleChange} /> */}
                                    {errors.passwordError && <p className='text-center py-2 text-danger'>{errors.passwordError}</p>}
                                    {/* <div className='my-2 d-flex justify-content-between'> */}
                                    {/* <ReCAPTCHA
                                            sitekey="6Lftc_4eAAAAAPIuX-wh98aCAIdczkob5lKGGboL"
                                            onChange={() => setVerifed(true)}
                                            onExpired={() => changeVerified()}
                                        /> */}
                                    {/* <div>
                                            <button className='back-btn btn badge badge-sm btn-primary round_btn' onClick={handleNext}>
                                                Back
                                            </button>
                                        </div> */}
                                    {/* </div> */}


                                    {/* <div className=''> */}
                                    <h6 className="mb-4 mt-2 label" onClick={() => handleShow()} style={{ cursor: "pointer", textAlign: 'left' }}>Forgot password ?</h6>
                                    <div className='d-flex align-items-center' style={{ textAlign: 'left' }}>
                                        <input type="checkbox" /> <span className='text-muted ms-1' style={{ fontSize: '12px' }}>Remember me</span>
                                    </div>
                                    {/* </div> */}
                                    <button disabled={!validForm} onClick={handleSubmit} className='login_button round_btn'>
                                        <ClipLoader color="white" loading={loading} size={20} />
                                        {!loading && "Log In"}
                                    </button>

                                </div>
                            }
                            {validForm}

                            <div className="certificates mt-4">
                                <img src="https://images.ctfassets.net/o1axi9nqj5lp/3tnYgF3ZkYuiVlLoiUixqw/391c6baf92beb89bf52695faf4708951/ch_ssl_en.svg" alt="" />
                                <img src="https://images.ctfassets.net/o1axi9nqj5lp/3kznp1j5tlVAGAcTQZYD6I/b4887ad02c5ea2113c3b779996a05102/ch_iso27001_en.png" alt="" />
                                <img src="https://images.ctfassets.net/o1axi9nqj5lp/3KvT24iPYRHcCXZq10i3am/0e6d5d37b3edd3f8656f42cde7a894a2/tuv_en.svg" alt="" />
                            </div>
                        </div>


                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Login
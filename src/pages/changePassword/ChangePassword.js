import React,{useEffect,useState} from 'react'
import swal from 'sweetalert';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { isAutheticated } from '../../components/auth/authhelper';
import { useNavigate } from 'react-router-dom';
import { API } from '../../API';

const ChangePassword = ({userdata}) => {
    const navigate = useNavigate()
    const [prevPass, setPrevPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [confPass, setConfPass]= useState("");
    const [loading, setLoading] = useState(false);

    const validPasswordRegex = RegExp(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{7,}$/
      );

      const [error, setError] = useState("");
      const {token} = isAutheticated();

      useEffect(()=>{
        setError(validPasswordRegex.test(newPass) ? "" : 
        "Password Shoud Be 8 Characters Long, Atleast One Uppercase, Atleast One Lowercase, Atleast One Digit, Atleast One Special Character")
      },[newPass])

const handleSubmit = async()=>{
    setLoading(true)
    if(!prevPass || !newPass || !confPass){
        setLoading(false)
        return swal("Error","All fields are required","error")
    }
    if(newPass !== confPass){
        setLoading(false)
        return swal("Error","New password and confirm passsword didn't matched","error")
    }
    const newData = {oldPassword:prevPass, newPassword:newPass}
    await axios.post(`${API}/api/user/password`,newData,{
        headers:{
            Authorization: `Bearer ${token}`,
        },
    }).then((res)=>{
        if(res.data.status === 'ok'){
            swal("Success", "Password updated successfully", 'success');
            setTimeout(navigate('/'),6000)
            setTimeout(window.location.reload(),8000)
            
            

        }
    }).catch((err)=>{
        let message = err.response.data.message;
        swal({
            title:"Unable to update password",
            text : `${message}`,
            icon:"error",
            buttons:true,
            dangerMode:true,
        })
        setLoading(false)
    })
}

    return (
        <>
        <Navbar userdata={userdata} />
        
        <div className='container my-5'>
            <h2 className='heading'>Password Change</h2>

            <div className='col-md-8 center p-5 d-flex flex-column '>
                <div className='mb-3'>
                <input type="password" onChange={(e)=>setPrevPass(e.target.value)} className='form-control' placeholder='Enter your existing password'/>
                </div>

                <div className='mb-3'>
                <input type="password" onChange={(e)=>setNewPass(e.target.value)} className='form-control' placeholder='Enter new  password'/>
                <span className='text-danger text-center'>{error}</span>
                </div>

                <div className='mb-3'>
                <input type="password" onChange={(e)=>setConfPass(e.target.value)} className='form-control' placeholder='Confirm new password'/>
                </div>

                <div className='my-5'>
                    <button onClick={handleSubmit} className='btn-primary btn' disabled={loading===true || error.length}>Confirm Change</button>
                </div>
            </div>
            
        </div>
        <Footer/>
        </>
    )
}

export default ChangePassword

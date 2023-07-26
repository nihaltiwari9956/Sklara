import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import {useNavigate} from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import swal from 'sweetalert';
import axios from 'axios';
import { isAutheticated } from '../../components/auth/authhelper';
import { API } from '../../API';

const initialValue = {
    usernameByAdmin: '',
    email: '',
    password: '',
    userType: '',
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 5
        }
    }
})

const AddUser = ({userdata}) => {
    const {token} = isAutheticated();
    const [user, setUser] = useState(initialValue);
    const {usernameByAdmin, email, password, userType} = user;
    const classes = useStyles();
    const navigate = useNavigate();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        if(!usernameByAdmin || !email || !password || !userType){
            return swal('Error','All Fields are Required','error')
        }
        console.log(user)
        try{
            let res = await axios.post(`${API}/api/user/sendSignupLink`,user,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            if(res.data.status === 'ok'){
                swal('Success','User Created Successfylly & Signup Mail Sent', 'success');
                navigate('/employee_list');
            }
        }catch(err){
            //console.log(err)
            swal('Error', `${err.response.data.message}`, 'error')
        }
        // await addUser(user);
        
    }

    return (
        <>
        <Navbar userdata={userdata} />
        <div className='mp-outer pt-3'>
          <div className='container'>
      <FormGroup className={classes.container}>
      <Typography variant="h4">Add Employee</Typography>
      
      <FormControl>
          <InputLabel htmlFor="my-input">Unique username</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='usernameByAdmin' value={usernameByAdmin} id="my-input" />
      </FormControl>
      <FormControl>
          <InputLabel htmlFor="my-input">Email</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
      </FormControl>
      <FormControl>
          <InputLabel htmlFor="my-input">Password</InputLabel>
          <Input onChange={(e) => onValueChange(e)} type='password' name='password' value={password} id="my-input" />
      </FormControl>
      <div className='form-inputs'>
          Select Role  <select className='form-input' defaultValue={'DEFAULT'} name='userType' onChange={(e) => onValueChange(e)}>
              <option value="DEFAULT" disabled hidden>Roles</option>
               <option value="employee">Employee</option>
              <option value="hr">HR</option>
              
          </select> 
        </div>
      <FormControl>
          <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add User</Button>
      </FormControl>
  </FormGroup>
  </div>
  </div>
  <Footer/>
  </>
      
    )
}

export default AddUser;
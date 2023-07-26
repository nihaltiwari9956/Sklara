import React from 'react'
import '../StepperForm.css'
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import { TextField } from '@mui/material';

const Step1 = () => {
    return (
        <div className='container-fluid px-5' >
            <div className="d-flex align-items-center justify-content-center flex-column mb-2">
                <div className="round">
                    <img src="" alt="" />
                    <AddAPhotoOutlinedIcon fontSize='large' className='add_img' />

                </div>
                <h5 className="mt-2">Upload profile picture</h5>


            </div>
            <div className="d-flex align-items-center  flex-wrap">
                <div className="border_input border_purple">
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Name' />
                </div>
                <div className="border_input ">
                    <label htmlFor="">Date of Birth</label>
                    <input type="date" placeholder='Name' />
                </div>
                <div className="border_input border_purple">
                    <label htmlFor="">Company Name</label>
                    <input type="text" placeholder='Company Name' />
                </div>
                <div className="border_input ">
                    <label htmlFor="">Current Location</label>
                    <input type="text" placeholder='Current Location' />
                </div>
                <div className="border_input border_purple">
                    <label htmlFor="">Email ID</label>
                    <input type="email" placeholder='Email ID' />
                </div>
                <div className="border_input ">
                    <label htmlFor="">Phone Number</label>
                    <input type="text" placeholder='Number' />
                </div>
            </div>
        </div>
    )
}

export default Step1
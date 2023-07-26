import React from 'react'
import '../StepperForm.css'
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import { TextField } from '@mui/material';

const Step1 = () => {
    return (
        <div className='container-fluid '>
            <div className="d-flex align-items-center justify-content-center flex-column mb-2">
                <div className="round">
                    <img src="" alt="" />
                    <AddAPhotoOutlinedIcon fontSize='large' className='add_img' />

                </div>
                <h5 className="mt-2">Upload profile picture</h5>


            </div>
            <div className="d-flex align-items-start  flex-wrap">
                <div className="border_input border_purple">
                    <label htmlFor=""> Name</label>
                    <input type="text" placeholder='Name' />
                </div>

                <div className="border_input ">
                    <label htmlFor="">Date of Birth</label>
                    <input type="date" placeholder='Name' />
                </div>
                <div className="border_input">
                    <label htmlFor="">Profession</label>
                    <select >
                        <option>Company</option>
                        <option>Freelancer</option>

                    </select>
                </div>
                <div className="border_input border_purple">
                    <label htmlFor="">Company Name</label>
                    <input type="text" placeholder='Name' />
                </div>
                <div className="border_input ">
                    <label htmlFor="">Address</label>
                    <input type="text" placeholder='Address' />
                </div>
                <div className="border_input">
                    <label htmlFor="">Current Location</label>
                    <input type="email" placeholder='Email ID' />
                </div>
                <div className="border_input ">
                    <label htmlFor="">Email ID</label>
                    <input type="text" placeholder='some123@gmail.com....' />
                </div>
                <div className="border_input ">
                    <label htmlFor="">Phone No</label>
                    <input type="text" placeholder='NO' />
                </div>
                <div className="border_input d-flex flex-column">
                    <label htmlFor="">Your tagline</label>
                    <p className="text-muted mb-0">Minimum 200 characters</p>
                    <textarea name="" id="" cols="106" rows="8" className='tagline_area'></textarea>
                </div>

                <div className="border_input ">
                    <label htmlFor="">What will you offer?</label>
                    <select >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>


            </div>
        </div>
    )
}

export default Step1
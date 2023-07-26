import React from 'react'
import '../StepperForm.css'
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import { TextField } from '@mui/material';

const Step2 = () => {
    return (
        <div className='container-fluid'>
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
                    <label htmlFor="">Location</label>
                    <input type="text" placeholder='Location' />
                </div>
                <div className="border_input border_purple">
                    <label htmlFor="">Contact Email ID</label>
                    <input type="email" placeholder='Email ID' />
                </div>
                <div className="border_input ">
                    <label htmlFor="">Phone Number</label>
                    <input type="text" placeholder='Number' />
                </div>
                <div className="border_input ">
                    <label htmlFor="">Languages</label>
                    <select >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </select>                
                </div>
                <div className="border_input">
                    <label htmlFor="">Experience</label>
                    <input type="text" placeholder='Experience' />
                </div>
               
            </div>
        </div>
    )
}

export default Step2
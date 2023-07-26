import React from 'react'
import '../StepperForm.css'
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import { TextField } from '@mui/material';

const Step1 = () => {
    return (
        <div className='container-fluid'>
           
            <div className="d-flex align-items-center  flex-wrap">
                <div className="border_input border_purple">
                    <label htmlFor="">Company Name</label>
                    <input type="text" placeholder='Name' />
                </div>
                {/* <div className="border_input ">
                    <label htmlFor="">Date of Birth</label>
                    <input type="date" placeholder='Name' />
                </div> */}
                <div className="border_input ">
                    <label htmlFor="">Address</label>
                    <input type="text" placeholder='Address' />
                </div>
                <div className="border_input">
                    <label htmlFor="">Company Size</label>
                    <select >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                </div>
                <div className="border_input ">
                    <label htmlFor="">Company Branch</label>
                    <select >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </select>                
                </div>
                <div className="border_input">
                    <label htmlFor="">Company Email ID</label>
                    <input type="email" placeholder='Email ID' />
                </div>
                <div className="border_input ">
                    <label htmlFor="">Company Phone Number</label>
                    <input type="text" placeholder='Number' />
                </div>
            </div>
        </div>
    )
}

export default Step1
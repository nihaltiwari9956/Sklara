import { Add } from '@mui/icons-material'
import Search from '@mui/icons-material/Search'
import React from 'react'

const Step3 = () => {
    return (
        <div className='container-fluid px-5'>
            <div className="d-flex align-items-center justify-content-center flex-wrap mb-2 mx-5">
                <div className="border_input">
                    <label htmlFor="">Languages of Training </label>
                    <input type="email" placeholder='Email ID' />
                </div> <div className="border_input">
                    <label htmlFor="">Highest Education</label>
                    <select name="" id="">
                        <option value="">1</option>
                    </select>
                </div> <div className="border_input">
                    <label htmlFor="">Experience</label>
                    <input type="email" placeholder='Email ID' />
                </div> <div className="border_input">
                    <label htmlFor="">Are you Certified?</label>
                    <select name="" id="">
                        <option value="">1</option>
                    </select>
                </div> <div className="border_input">
                    <label htmlFor="">Certificate</label>
                    <input type="email" placeholder='Certificate' />
                </div> <div className="border_input">
                    <label htmlFor="">Your Industry Preferences</label>
                    <input type="email" placeholder='Email ID' />
                </div>
                <div className="border_input d-flex flex-column">
                    <label htmlFor="">Description</label>
                    <p className="text-muted mb-0">Minimum 200 characters</p>
                    <textarea name="" id="" cols="106" rows="8" className='tagline_area'></textarea>
                </div>
            </div></div>
    )
}

export default Step3
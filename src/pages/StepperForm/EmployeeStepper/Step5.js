import React from 'react'
import { FacebookRounded, Instagram, LinkedIn, Twitter } from '@mui/icons-material'


const Step5 = () => {
    return (
        <div className="container px-5">
            <div className='container px-5 d-flex align-items-center justify-content-around flex-wrap' style={{ width: '90%' }}>
                <div className="border_input ">
                    <label htmlFor="">LinkedIN <LinkedIn fontSize='small' color='primary' /></label>
                    <input type="text" placeholder='link' />
                </div>
                <div className="border_input ">
                    <label htmlFor="">Facebook <FacebookRounded fontSize='small' color='primary' /></label>
                    <input type="text" placeholder='link' />
                </div><div className="border_input ">
                    <label htmlFor="">Instagram <i class="fa fa-instagram fa-lg"></i></label>
                    <input type="text" placeholder='link' />
                </div><div className="border_input ">
                    <label htmlFor="">Twitter <Twitter fontSize='small' color='primary' /></label>
                    <input type="text" placeholder='link' />
                </div>
            </div>
        </div>
    )
}

export default Step5
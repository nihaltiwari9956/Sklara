import React from 'react'
import './footer.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';



const Footer = () => {
    return (
        <div className='container-fluid py-5 shadow px-5 footer-div'>
            <hr></hr>
            <div className='row justify-content-between'>
                <div className='col-md-4 center' style={{ justifyContent: 'flex-start' }}>
                    <img src={'./assets/sklaralogo.svg'} className="footerlogo" />
                </div>
                <div className='col-md-4'>
                    <h6 className='text-secondary fw-light text-center'>© Copyright 2022 Sklara. All Rights Reserved</h6>
                </div>
                <div className='col-md-4'>
                    <div className='d-flex center' style={{ justifyContent: 'flex-end' }}>
                        <div className='footer-icon text-center text-secondary mx-1'>
                            <FacebookIcon sx={{ fontSize: "20px" }} />
                        </div>
                        <div className='footer-icon text-center text-secondary mx-1'>
                            <TwitterIcon sx={{ fontSize: "20px" }} />
                        </div>
                        <div className='footer-icon text-center text-secondary mx-1'>
                            <LinkedInIcon sx={{ fontSize: "20px" }} />
                        </div>
                        <div className='footer-icon text-center text-secondary mx-1'>
                            <PinterestIcon sx={{ fontSize: "20px" }} />
                        </div>
                        <div className='footer-icon text-center text-secondary mx-1'>
                            <InstagramIcon sx={{ fontSize: "20px" }} />
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer

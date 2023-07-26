import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import DevProgress from './DevProgress'
import Feedback from './Feedback'
import MarketPlace from './MarketPlace'
import './pdash.css'
import ProfStatsDonut from './ProfStatsDonut'

const ProfileDashboard = ({userdata}) => {
    return (<>
    <Navbar userdata={userdata} />
        <div className='container-fluid px-5 py-3'>
            <div className='row justify-content-between mx-5 mt-3'>
                <div className='col-md-6'>
                    <div className=' shadow p-2 px-3 text-center profD-rad pt-4' style={{ backgroundColor: "#fff" }}>
                        <img src={'./assets/model2.jpg'} className="profile-dp center" />
                        <h4 className='fw-normal my-3'>Marcus Portsmith</h4>
                        <p className='mb-0'>Senior Project Manager</p>
                        <p className='fw-light mb-4'>Bosch GMBH, Germany</p>
                        <h4 className='heading'>Credit Balance : &euro; 200</h4>
                        <p className='mb-3 fw-lighter'>Last login 2 hours ago</p>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className=''>
                        <h2 className='display-4'>
                            Hello <span className='heading'> Marcus</span></h2>
                        <h4>Here is a summary of your activities at SKLARA</h4>

                        <div className='w-100 bg-white shadow p-2 profD-rad mt-5'>
                            <div className='d-flex justify-content-between profD-dash'>
                                <div>
                                    <h4 className='my-3 fw-light'>CPSA Foundation Training</h4>
                                    <h5 className='fw-lighter'>Session 3 of 5 starting in 15 minutes.</h5>
                                </div>
                                <div>
                                    <button className='btn shadow btn-primary text-light'>View</button>
                                </div>
                            </div>
                        </div>

                        <div className='w-100 bg-white shadow p-2 profD-rad mt-5'>
                            <div className='d-flex justify-content-between profD-dash'>
                                <div>
                                    <h2 className='my-3 heading'>8</h2>
                                    <h5 className='fw-lighter'>actions pending for you</h5>
                                </div>
                                <div>
                                    <button className='btn shadow btn-primary text-light'>View</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
        <ProfStatsDonut />
        <DevProgress />
        <Feedback heading='Your satisfaction and feedback' />
        <MarketPlace />
        <Footer/>
    </>
    )
}

export default ProfileDashboard

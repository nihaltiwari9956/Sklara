import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import HighlightIcon from '@mui/icons-material/Highlight';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PeopleIcon from '@mui/icons-material/People';
import Calendar from 'react-calendar';
import Appointment from '../../components/Calender/Appointment';

const CoachProfile = ({ userdata }) => {

    const [value, onChange] = useState(new Date());
    const [toggle, setToggle] = useState(false)
    const handleDayClick = (day, e) => {
        setToggle(!toggle)
    }
    return (
        <>
            <Navbar userdata={userdata} />
            <div className='outer-profile pt-3'>
                <div className='container-md'>
                    <h2 >Coach's Profile :: <span className='change-color'> Martin Krugger</span></h2>
                    <p className='text-muted'><small>Business Coach</small></p>
                    <div className='row'>
                        <div className='col-lg-6 col-sm-12 common-card'>
                            <div className="card">
                                <button type="button" className="btn profile-settings"><i class="fa-solid fa-gear"></i></button>
                                <img src="http://18.157.84.45/design/images/dummy/user2_big.jpg" className="card-img-top profile-image" alt="..." />
                                <div className="card-body">
                                    <span className='profile-flag1'><img className="" src="	http://18.157.84.45/design/images/flags/de.svg" alt="" /></span>
                                    <span className="profile-flag2"><img className="img-fluid" src="http://18.157.84.45/design/images/flags/en.svg" alt="" /></span>
                                    <h4 className="card-title">Martin Krugger</h4>
                                    <small className='inner-text'>Start-Ups, Marketing & Sales, Leaderships, Negotiations</small>
                                    <br />
                                    <StarRoundedIcon style={{ color: '#ffc100' }} />
                                    <span className='rating'> 4.9</span>
                                    <small className='inner-text'> (69)</small>
                                    <div>
                                        <p className="tp-grey m-0"><small>Industry Focus</small></p>
                                        <a href="/#"><span className="badge badge-pill tp-yellow">Chemical Engineering</span></a>&nbsp;
                                        <a href="/#"><span className="badge badge-pill tp-blue">Oil & Natural Gas</span></a>&nbsp;
                                        <a href="/#"><span className="badge badge-pill tp-green">Energy</span></a>&nbsp;
                                    </div>
                                    <div className='mt-3'>
                                        <p className="tp-grey m-0"><small>Expertise</small></p>
                                        <a href="/#"><span className="badge badge-pill tp-yellow">Start-Ups</span></a>&nbsp;
                                        <a href="/#"><span className="badge badge-pill tp-light-blue">Oil & Natural Gas</span></a>&nbsp;
                                        <a href="/#"><span className="badge badge-pill tp-green">Marketing & Sales</span></a>&nbsp;
                                        <a href="/#"><span className="badge badge-pill tp-red">Leaderships</span></a>&nbsp;
                                        <a href="/#"><span className="badge badge-pill tp-blue">Negotiations</span></a>&nbsp;
                                    </div>
                                    <div className="center">
                                        <button className='btn shadow btn-primary text-light coach-btn'> <ChatBubbleRoundedIcon fontSize='small' /> Contact martin</button>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12 common-card'>
                            <div className="card coach-card" style={{ "fontSize": "14px" }}>
                                <div className="card-body row mt-3">
                                    <div className='col-4'>
                                        <div className="mb-5">
                                            <small className='text-muted m-0 p-0'>From</small>
                                            <p className='m-0 p-0' style={{ "fontWeight": "500" }}>Germany</p>
                                        </div>
                                        <div className="mb-5">
                                            <small className='text-muted m-0 p-0'>Avg. Response Time</small>
                                            <p className='m-0 p-0' style={{ "fontWeight": "500" }}>1 day</p>
                                        </div>
                                        <div className="mb-5">
                                            <small className='text-muted m-0 p-0'>Total Sessions</small>
                                            <p className='m-0 p-0' style={{ "fontWeight": "500" }}>69</p>
                                        </div>
                                    </div>
                                    <div className='col-4'>
                                        <div className="mb-5">
                                            <small className='text-muted m-0 p-0'>Experience</small>
                                            <p className='m-0 p-0' style={{ "fontWeight": "500" }}>13 Years</p>
                                        </div>
                                        <div className="mb-5">
                                            <small className='text-muted m-0 p-0'>Last Delivery</small>
                                            <p className='m-0 p-0' style={{ "fontWeight": "500" }}>3 days ago</p>
                                        </div>
                                        <div className="mb-5">
                                            <small className='text-muted m-0 p-0'>Total Participants</small>
                                            <p className='m-0 p-0' style={{ "fontWeight": "500" }}>755</p>
                                        </div>
                                    </div>
                                    <div className='col-4'>
                                        <div className="mb-5">
                                            <small className='text-muted m-0 p-0'>Trainer Since</small>
                                            <p className='m-0 p-0' style={{ "fontWeight": "500" }}>2009</p>
                                        </div>
                                        <div className="mb-5">
                                            <small className='text-muted m-0 p-0'>Languages</small>
                                            <p className='m-0 p-0' style={{ "fontWeight": "500" }}>English, German</p>
                                        </div>
                                        <div className="mb-5">
                                            <small className='text-muted m-0 p-0'>Avg. Session Size</small>
                                            <p className='m-0 p-0' style={{ "fontWeight": "500" }}>11 Participants</p>
                                        </div>
                                    </div>
                                    <div className="description">
                                        <p>Martin has corporate training experience of more than 13 years and overall experience of 25+ years. He has worked in Chemical and Fertilizer Industries for more than two decades and has excelled in leadership and mentorship positions. He has worked in Chemical and Fertilizer Industries for more than two decades and has excelled in leadership and mentorship positions.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <h3 className="card-title">Availaiblity Calender of <span className='change-color'>Martin Krugger</span></h3>
                        <p className='text-muted'><small>Select a date to find available time slots</small></p>

                        <div className='common-card'>
                            <div className="card">
                                <div className="card-body row">
                                    <div className="col-lg-6 ">
                                        <Calendar onChange={onChange} value={value} className='mb-3 ml-0' next2Label={null} prev2Label={null} onClickDay={handleDayClick} />
                                        <div className='alignRight'><small className='text-muted '>Highlights indicate martin is busy on those dates</small></div>
                                        <h6 className='mb-0 mt-5'>Want a personalized training from Martin, for you or your team?</h6>
                                        <p><small className='text-muted '>You will have the opportunity to add your requirements in the following pages.</small></p>
                                        <button className='btn shadow btn-primary text-light coach-btn mt-0'> Request Booking</button>

                                    </div>
                                    {toggle && <div className="col-lg-5 ">
                                        <Appointment />

                                    </div>}

                                </div>
                            </div>
                        </div>
                        {[1, 2, 3, 4].map(() =>
                            <div className='col-lg-6 col-sm-12 mt-3'>
                                <div className="card">
                                    <div className="card-body p-4 pb-5 row">
                                        <div className='col-1 ml-2 d-flex justify-content-end'><HighlightIcon style={{ color: '#1fd0b6' }} /></div>
                                        <div className='col-11'>
                                            <h6>How to be a pro using AI tools</h6>
                                            <span className='review-flag1'><img className="" src="	http://18.157.84.45/design/images/flags/de.svg" alt="" /></span>
                                            {[1, 1, 1, 1].map(item => <StarRoundedIcon fontSize='smaller' style={{ color: '#ffc100' }} />)}

                                            <small className='text-muted'>review from Germany</small>

                                            <p className='mt-4'> It was a great experience. Martin explained the basics very interestingly and the advanced stuff was approached with great examples.</p>
                                            <CalendarTodayIcon fontSize='smaller' style={{ color: '6c757d' }} />
                                            <PeopleIcon fontSize='smaller' style={{ color: '#6c757d', marginLeft: '25px' }} />
                                            <small className='text-muted ml-1'>10 participants</small>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        )}
                        <a href="#" className='view-all'><small> View All</small></a>
                        <div className="center">
                            <button className='btn shadow btn-primary text-light coach-btn mb-5'> <ChatBubbleRoundedIcon fontSize='small' /> Contact martin</button>
                        </div>
                    </div>
                </div>

                {/* <div className='profile-end-div'>
                    <div className='inner-profile-end text-center'>
                        <h4>Do you need support in using the Talent Platform or Sklara Joyn?</h4>
                        <p>Feel free to contact our IT Support.</p>
                        <button type="button" className="btn mx-1 px-4">Email Us</button>
                        <button type="button" className="btn mx-1 px-4">Call Us</button>
                    </div>
                </div> */}
            </div >

            <Footer />
        </>
    )
}

export default CoachProfile
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import './TrainerProfile.css';
import ContactFooter from '../../components/ContactFooter/ContactFooter';
// import Calandar from '../../components/Calandar/Calandar';
import PeopleIcon from '@mui/icons-material/People';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import CropLandscapeIcon from '@mui/icons-material/CropLandscape';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import EuroIcon from '@mui/icons-material/Euro';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CameraIcon from '@mui/icons-material/Camera';
import { Carousel } from 'react-bootstrap';
import { useRef, useState } from 'react';
import Calendar from 'react-calendar';
import Appointment from '../../components/Calender/Appointment';
import { useLocation, Link } from 'react-router-dom'


function TrainerProfile({ userdata }) {
  const location = useLocation()
  const { firstName, lastName, profilePicture } = location.state


  console.log(location)

  const arrayEvents = [1, 2, 3]
  const arrayReviews = [1, 2, 3, 4]

  const [value, onChange] = useState(new Date());
  const [toggle, setToggle] = useState(false)
  const calendarRef = useRef()
  const [toggleDate, setToggleDate] = useState('')
  const handleDayClick = (day, e) => {
    if (toggleDate.toString().slice(0, 10) !== day.toString().slice(0, 10)) {
      setToggle(true)
      setToggleDate(day)
    } else {
      setToggle(!toggle)
    }
  }


  const ref = useRef(null);

  const onPrevClick = () => {
    ref.current.prev();
  };
  const onNextClick = () => {
    ref.current.next();
  };

  return (
    <>
      <Navbar userdata={userdata} />
      <div className='mp-outer container-fluid main-div pt-3'>
        <div className='container-fluid px-0'>
          <h2>Profile of <span className='change-color'>{firstName} {lastName}</span></h2>
          <p className='text-muted'><small>Business Analysis Coach / Corporate Trainer </small></p>
          <div className='row'>
            <div className='col-lg-6 col-sm-12 common-card'>
              <div className="card">
                <img src={profilePicture} className="card-img-top tp-image profile-image" alt="..." />
                <div className="card-body">
                  <span className='mp-com-flag1'><img className='img-fluid' src="images/flags/French.png" alt="" /></span>
                  <span className="mp-com-flag2"><img className="img-fluid" src="images/flags/German.png" alt="" /></span>
                  <h4 className="card-title">{firstName} {lastName}</h4>
                  <p className='' style={{ "color": "#cccccc" }}><small>Start-Ups, Marketing & Sales, Leaderships, Negotiations</small></p>
                  <p><img src="images/star.png" alt='star' /><span style={{ "color": "#1fd0b6" }}>4.9</span><small style={{ "color": "#cccccc" }}>(69)</small></p>
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
                  <div className='d-flex justify-content-center align-items-center my-3 mx-5'>

                    <button className='btn tp-event-button mt-3 m-2'><small><ChatBubbleIcon fontSize='14px' /> Contact {firstName} </small></button>
                    <button className='btn  tp-event-button mt-3 m-2'> Request Booking</button>

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
                    <p>{firstName} has corporate training experience of more than 13 years and overall experience of 25+ years. He has worked in Chemical and Fertilizer Industries for more than two decades and has excelled in leadership and mentorship positions. He has worked in Chemical and Fertilizer Industries for more than two decades and has excelled in leadership and mentorship positions.</p>
                  </div>
                </div>

              </div>
            </div>
            <h2>Availbility Calendar of <span className='change-color'>{firstName} {lastName}</span></h2>
            <p className='text-muted'><small>Select a date to find available time slots</small></p>
            <div className='common-card'>
              <div className="card">
                <div className="card-body row">
                  <div className="col-lg-6 " style={{ width: '45%' }}>
                    <Calendar onChange={onChange} value={value} ref={calendarRef} className='mb-3 ml-0 Avail-Calender' next2Label={null} prev2Label={null} onClickDay={handleDayClick} />
                    <div className='alignRight'><small className='text-muted '>Highlights indicate {firstName} is busy on those dates</small></div>
                    <h6 className='mb-0 mt-5'>Want a personalized training from {firstName}, for you or your team?</h6>
                    <p><small className='text-muted '>You will have the opportunity to add your requirements in the following pages.</small></p>
                    <Link to="/training_request_form"><button className='btn shadow btn-primary text-light coach-btn mt-0'> Request Booking</button></Link>
                  </div>
                  {toggle && <div className="col-lg-5 d-flex align-items-center justify-content-center">
                    <Appointment />

                  </div>}

                </div>
              </div>
            </div>
            {/* <div className='col-12 common-card'>
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Your <span className='change-color'>Reports</span></h3>
                  <p className='text-muted'><small>Only you and your HR Manager can see</ small></p>
                  {/* <Calandar /> */}
            {/* </div>
                <hr className='text-muted mb-5' />
              </div>
            </div> */}
            <div className='d-flex justify-content-between'>
              <h2 className='mb-3'>Upcoming Events</h2>
              <div>
                <button
                  className="carousel-buttons mx-2 mb-3 mr-1 pb-1 shadow-sm"
                  onClick={onPrevClick}
                >
                  <ArrowBackIosNewIcon fontSize='small' />
                </button>
                <button
                  className="carousel-buttons mb-3 pb-1 shadow-sm"
                  onClick={onNextClick}
                >
                  <ArrowForwardIosIcon fontSize='small' />
                </button>
              </div>
            </div>
            <Carousel ref={ref} nextIcon="false" prevIcon="false" indicators={false} controls={false} interval={null}>
              <Carousel.Item>
                <div className='row'>
                  {arrayEvents.map((element, i) => {
                    return <div key={i} className='col-lg-4 col-sm-12 mb-4'>
                      <div className="card shadow-sm">
                        <img role="button" src="images/dummy/training01.jpg" className="card-img-top mp-com-image" alt="..." />
                        <div className="card-body">
                          <span className='mp-com-flag1'><img className='img-fluid' src="images/flags/French.png" alt="" /></span>
                          <h6 className="card-title m-0 mt-2">Understanding Analytical Tools (Expert)</h6>
                          <p className='mb-2' style={{ "color": "#cccccc" }}><small>Senior Project Manager</small></p>
                          <div className='row mb-3'>
                            <div className='col-6'>
                              <p className="tp-grey"><small>{firstName} Jenkins</small></p>
                              <small><CropLandscapeIcon fontSize="small" />6 sessions</small><br />
                              <small><CalendarMonthIcon fontSize="small" />  26 Jan, 2022</small>
                            </div>
                            <div className='col-6'>
                              <p><img src="images/star.png" alt='star' /><span style={{ "color": "#1fd0b6" }}>5.0</span><small style={{ "color": "#cccccc" }}>(7)</small></p>
                              <small><PeopleIcon fontSize="small" />10 seats</small><br />
                              <small><PeopleOutlineIcon fontSize="small" />3 seats left</small>
                            </div>
                          </div>
                          <small className='text-muted'>
                            This training is focussed on financial analytics in the banks and intervest micro financing companies. Bloomberg tools will be in focus....
                          </small>
                          <button className='btn mp-event-button col-12 mt-3'><small><ShoppingBagIcon className='pb-1' fontSize='small' /> Book Now @ <EuroIcon className='pb-1' fontSize='small' />325</small></button>
                        </div>
                      </div>
                    </div>
                  })}
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className='row'>
                  {arrayEvents.map((element, i) => {
                    return <div key={i} className='col-lg-4 col-sm-12 mb-4'>
                      <div className="card shadow-sm">
                        <img role="button" src="images/dummy/training02.jpg" className="card-img-top mp-com-image" alt="..." />
                        <div className="card-body">
                          <span className='mp-com-flag1'><img className='img-fluid' src="images/flags/French.png" alt="" /></span>
                          <h6 className="card-title m-0 mt-2">Understanding Analytical Tools (Expert)</h6>
                          <p className='mb-2' style={{ "color": "#cccccc" }}><small>Senior Project Manager</small></p>
                          <div className='row mb-3'>
                            <div className='col-6'>
                              <p className="tp-grey"><small>{firstName} Jenkins</small></p>
                              <small><CropLandscapeIcon fontSize="small" />6 sessions</small><br />
                              <small><CalendarMonthIcon fontSize="small" />  26 Jan, 2022</small>
                            </div>
                            <div className='col-6'>
                              <p><img src="images/star.png" alt='star' /><span style={{ "color": "#1fd0b6" }}>5.0</span><small style={{ "color": "#cccccc" }}>(7)</small></p>
                              <small><PeopleIcon fontSize="small" />10 seats</small><br />
                              <small><PeopleOutlineIcon fontSize="small" />3 seats left</small>
                            </div>
                          </div>
                          <small className='text-muted'>
                            This training is focussed on financial analytics in the banks and intervest micro financing companies. Bloomberg tools will be in focus....
                          </small>
                          <button className='btn mp-event-button col-12 mt-3'><small><ShoppingBagIcon className='pb-1' fontSize='small' /> Book Now @ <EuroIcon className='pb-1' fontSize='small' />325</small></button>
                        </div>
                      </div>
                    </div>
                  })}
                </div>
              </Carousel.Item>
            </Carousel>
            <h2 className='mb-3'>Pass 3 Sessions & Feedback of {firstName}</h2>
            {arrayEvents.map((element, i) => {
              return <div key={i} className='col-lg-4 col-sm-12 mb-4'>
                <div className="card shadow-sm">
                  <img role="button" src="images/dummy/training02.jpg" className="card-img-top mp-com-image" alt="..." />
                  <div className="card-body">
                    <span className='mp-com-flag1'><img className='img-fluid' src="images/flags/French.png" alt="" /></span>
                    <h6 className="card-title m-0 mt-2 mb-">Understanding Analytical Tools (Expert)</h6>
                    <p className='mb-2' style={{ "color": "#cccccc" }}><small>Senior Project Manager</small></p>
                    <div className='row mb-3'>
                      <div className='col-6'>
                        <p className="tp-grey"><small>{firstName} Jenkins</small></p>
                        <small><CalendarMonthIcon fontSize="small" />  26 Jan, 2022</small>
                      </div>
                      <div className='col-6'>
                        <p><img src="images/star.png" alt='star' /><span style={{ "color": "#1fd0b6" }}>5.0</span><small style={{ "color": "#cccccc" }}>(7)</small></p>
                        <small><PeopleIcon fontSize="small" />10 participants</small><br />
                      </div>
                    </div>
                    <small className='text-muted'>
                      10 participant attended this event on 26 Jan, 2022. The average feedback based on ratings are as follows:
                    </small>
                    <div className='d-flex mt-3'>
                      <img src="images/star.png" className='tp-star' alt='star' />
                      <img src="images/star.png" className='tp-star' alt='star' />
                      <img src="images/star.png" className='tp-star' alt='star' />
                      <img src="images/star.png" className='tp-star' alt='star' />
                      <img src="images/star.png" className='tp-star' alt='star' />
                      <small className='mx-1'>(5)</small>
                    </div>
                  </div>
                </div>
              </div>
            })}
            <h2 className='mb-3'>Trainee Reviews</h2>
            {arrayReviews.map((element, i) => {
              return <div key={i} className='col-lg-6 col-sm-12 mb-4'>
                <div className="card shadow-sm">
                  <div className="card-body">
                    <div className='d-flex'>
                      <div className='me-3 mt-3 m-3'>
                        <CameraIcon style={{ "color": "#1cd8c9" }} />
                      </div>
                      <div>
                        <h6 className="card-title m-0 mt-2 ">How to be a pro in using AI tools</h6>
                        <div className='d-flex'>
                          <img className="tp-small-flag me-1" src="images/flags/de.svg" alt="" />
                          <img src="images/star.png" className='tp-star' alt='star' />
                          <img src="images/star.png" className='tp-star' alt='star' />
                          <img src="images/star.png" className='tp-star' alt='star' />
                          <img src="images/star.png" className='tp-star' alt='star' />
                          <img src="images/star.png" className='tp-star' alt='star' />
                          <p className='mb-2 mx-1' style={{ "color": "#cccccc" }}><small>review from Germany</small></p>
                        </div>
                        <p>It was a great experience. {firstName} explained the basics very interestingly
                          and the advanced stuff was approached with great examples.</p>
                        <small className='text-muted'>
                          <CalendarMonthIcon className='me-4' fontSize="10px" /><PeopleIcon fontSize="10px" />10 participants
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            })}
            <small role="button" className='text-end'>View All</small>
            <div className='mt-5 mb-4 text-center'>
              <button className='btn tp-event-button p-2 mt-3'><small><ChatBubbleIcon fontSize='small' /> Contact {firstName} </small></button>
            </div>
          </div>
        </div>
      </div >
      {/* <ContactFooter /> */}
      <Footer />
    </>
  );
}

export default TrainerProfile;

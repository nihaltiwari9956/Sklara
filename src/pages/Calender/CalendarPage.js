import React from 'react'
import './CalendarPage.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FullCalendarApp, { Calendar } from './NewCalendar';
import TokenIcon from '@mui/icons-material/Token';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import SearchIcon from '@mui/icons-material/Search';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import { AccessTime, AssessmentOutlined, AssignmentOutlined } from '@mui/icons-material';
const CalendarPage = () => {
    return (
        <div>
            <div className="bg-1"></div>
            <div className="bg-2"></div>
            <div className="bg-6"></div>
            <div className='container-fluid px-1 '>
                <div className='row justify-content-center section'>
                    <div className="row">
                        <div className="col-md-4 left_side">
                            <div>
                                <h4 className='heading mt-4 mb-0'>Upcoming Learnings</h4>
                                <p className="text-muted mb-4">Session this month</p>
                            </div>
                            {[1, 2, 3, 4].map(item => <div className='d-flex align-items-start list_card px-2 py-3 mb-3'>
                                <div className="col-md-1">
                                    <div className='dot'></div>
                                </div>
                                <div className="col-md-10">

                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <span className="text-muted d-flex align-items-center">
                                            <CalendarTodayIcon fontSize='small' /> 13/2/2022
                                        </span>
                                        <span className="text-muted me-5 d-flex align-items-center"><AccessTime fontSize='small' /> 17:00 - 18:00</span>
                                    </div>
                                    <h6 className='heading'><img src="./images/Group 65.png" alt="" /> Lorem Ipsum</h6>
                                    <p className="text-muted mb-0">
                                        <AssignmentOutlined fontSize='small' /> Lorem ipsum dolor sit.
                                    </p>
                                </div>

                                {/* <div className='d-flex mt-3'>
                                    <div className='dot'></div>
                                    <div >
                                        <div className="d-flex align-items-center justify-content-between flex-1">
                                            <p className="text-muted">
                                                13/2/2022
                                            </p>
                                            <p className="text-muted">17:00 - 18:00</p>
                                        </div>
                                        <h6>Lorem Ipsum</h6>
                                        <p className="text-muted">
                                            Lorem ipsum dolor sit.
                                        </p>
                                    </div>
                                </div> */}
                                <div className="col-md-1">
                                    <MoreHorizIcon style={{ marginTop: '-5px' }} />
                                </div>
                            </div>
                            )}

                        </div>
                        <div className="col-md-8 py-5 paddingStart">
                            <div className="row">
                                <div className="d-flex align-items-center justify-content-between col-md-2" ><div className="shadow_new p-2 d-flex align-items-center justify-content-center text-muted"><CalendarTodayIcon fontSize='small' /></div><h4 style={{ marginLeft: '10px' }}>Calendar</h4></div>
                                <div className="d-flex align-items-center justify-content-end col-md-10" >
                                    <div className="shadow_new p-2 d-flex align-items-center justify-content-center text-muted"><SearchIcon fontSize='small' /></div>
                                    <div className="shadow_new p-2 d-flex align-items-center justify-content-center text-muted" style={{ marginLeft: '10px' }}><AddBoxOutlinedIcon fontSize='small' /></div>
                                </div>
                            </div>
                            <hr />
                            <div className="mt-5 p-3" style={{ boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)', borderRadius: '10px', background: "#fff " }}>
                                {/* <Calendar year="2020" month={1} /> */}
                                <FullCalendarApp />
                            </div>
                        </div>
                        <div className='mt-3 row' >
                            <h3 className="heading my-4">Current State of your Learning</h3>
                            {[1, 2].map(item => <> <div className='col-lg-6 col-sm-12 mt-4'>
                                <div className="card">
                                    <div className="card-body p-4  row">
                                        <div className="col-md-8">
                                            <div className="card_content">
                                                <TokenIcon fontSize='small' style={{ color: '#1CD8C9' }} /><h5 className='mb-0'>Cpsa Foundation Training</h5>
                                            </div>
                                            <div className="card_content">
                                                <CalendarTodayIcon fontSize='small' className='text-muted' /><p className="text-muted mb-0">Started On:16/01/2022</p>
                                            </div>
                                            <div className="card_content">
                                                <PendingActionsIcon fontSize='small' className='text-muted' /> <p className="text-muted mb-0">Session Remaining:2</p></div>
                                            <div className="card_content">
                                                <AssignmentIcon fontSize='small' className='text-muted' /><p className="text-muted mb-0">Assignment Score : 16/01/2022</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 d-flex justify-content-center">
                                            <div style={{ width: 180, height: 180 }}>
                                                <CircularProgressbar
                                                    text="75%"
                                                    value={75}
                                                    strokeWidth={12}
                                                    styles={{
                                                        // Customize the root svg element
                                                        root: {
                                                        },
                                                        path: {
                                                            stroke: '#1CD8C9',
                                                            strokeLinecap: "round",
                                                        },
                                                        trail: {
                                                            stroke: 'rgba(28, 216, 201, 0.25)',
                                                        },
                                                        text: {
                                                            fill: '#1CD8C9',
                                                            fontSize: '1rem',
                                                            fontWeight: "800"
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div className='col-lg-6 col-sm-12 mt-4'>
                                    <div className="card">
                                        <div className="card-body p-4  row">
                                            <div className="col-md-8">
                                                <div className="card_content">
                                                    <TokenIcon fontSize='small' style={{ color: '#1CD8C9' }} /><h5 className='mb-0'>Cpsa Foundation Training</h5>
                                                </div>
                                                <div className="card_content">
                                                    <CalendarTodayIcon fontSize='small' className='text-muted' /><p className="text-muted mb-0">Started On:16/01/2022</p>
                                                </div>
                                                <div className="card_content">
                                                    <PendingActionsIcon fontSize='small' className='text-muted' /> <p className="text-muted mb-0">Session Remaining:2</p></div>
                                                <button className='btn btn-primary round_btn px-5 my-2'>Create Assignment</button>
                                                <div className="card_content">
                                                    <AssignmentIcon fontSize='small' className='text-muted' /><p className="text-muted mb-0">Assignment Score : 16/01/2022</p>
                                                </div>
                                            </div>
                                            <div className="col-md-4 d-flex justify-content-center">
                                                <div style={{ width: 180, height: 180 }}>
                                                    <CircularProgressbar
                                                        text="75%"
                                                        value={75}
                                                        strokeWidth={12}
                                                        styles={{
                                                            // Customize the root svg element
                                                            root: {
                                                            },
                                                            path: {
                                                                stroke: '#28A745',
                                                                strokeLinecap: "round",
                                                            },
                                                            trail: {
                                                                stroke: '#c9e9d0',
                                                            },
                                                            text: {
                                                                fill: '#28A745',
                                                                fontSize: '1rem',
                                                                fontWeight: "800"
                                                            },
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div></>
                            )}



                        </div>


                    </div></div></div>
        </div >
    )
}

export default CalendarPage
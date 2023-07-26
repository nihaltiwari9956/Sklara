import React, { useRef, useState, useEffect } from 'react'
import { ProgressBar } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';
import BarChart from './BarChart';
import DognutChart from './DognutChart';
// import Award from '../../../public/images/Award.png'
import './NewDashboard.css'
import Calendar from 'react-calendar';
import {
    AccessTimeRounded, ErrorOutlineRounded, AssignmentOutlined, PersonAddAlt1Rounded,
    ComputerRounded, MoreVert, AutoAwesomeMosaic, CloseFullscreen, BorderInner, AccountTreeOutlined, Bento,
    Forum,
    ArrowDownward,
    KeyboardArrowDown,
} from '@mui/icons-material';
import Carousel from 'react-grid-carousel';
import styled from "styled-components";
import Feedback from '../profileDashboard/Feedback';
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import swal from 'sweetalert';

const NewDashboard = ({ userdata }) => {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    const [value, onChange] = useState(new Date());
    const labels = [1, 2, 3, 4, 5, 6]
    const arrayEvents = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    const ref = useRef(null);

    const onPrevClick = () => {
        ref.current.prev();
    };
    const onNextClick = () => {
        ref.current.next();
    };

    const Linedata = {
        labels,
        datasets: [
            {
                label: 'Earnings in €',
                data: [10, 4, 10, 3, 10, 0],
                // backgroundColor: 'linear-gradient(to right, #20f08b, #07dfb1)',
                fill: {
                    target: 'origin',
                    above: 'rgb(255, 0, 0)',   // Area will be red above the origin
                    below: 'rgb(0, 0, 255)'    // And blue below the origin
                },
                borderColor: '#FEA31E',

            },
        ],
    };
    const lineChartOptions = {
        layout: {
            padding: {
                top: 30,
                bottom: 10
            }
        },
        plugins: {
            legend: {
                display: false
            },
        },
        lineTension: 0.5,
        borderWidth: 5,
        pointHitRadius: 20,
        pointRadius: 6,
        pointBackgroundColor: '#FEA31E',
        pointBorderColor: '#fff',
        scales: {
            xAxis: {
                display: false
            }
            ,
            yAxis: {
                display: false
            }
        }
    }
    const ArrowBtn = styled.span`
        display: block;
        position: absolute;
        top: -16%;
        right: ${({ type }) => (type === "right" ? "-10px" : "unset")};
        left: ${({ type }) => (type === "left" ? "92%" : "unset")};
        width: 40px;
        height: 40px;
        background: #fff;
        border-radius: 50%;
        box-shadow: 0 3px 15px rgba(0, 0, 0, 0.15);
        cursor: pointer;
        &::after {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: ${({ type }) =>
            type === "right"
                ? "translate(-75%, -50%) rotate(45deg)"
                : "translate(-25%, -50%) rotate(-135deg)"};
        width: 8px;
        height: 8px;
        border-top: 2px solid #666;
        border-right: 2px solid #666;
        }
        &:hover::after {
        border-color: #333;
        }
        `;

    const showOpt = () => {
        setShow(!show)
    }

    // useEffect(() => {
    //     if (userdata && userdata.profileCompleted === false) {
    //         swal('Alert', 'Your profile is not completed, Please complete your profile', 'warning').then(() => {
    //             navigate('/profileSetup')
    //         })
    //     }
    // }, [])

    return (
        <>
            <div className="bg-3"></div>
            <div className="bg-4"></div>
            <div className="bg-5"></div>
            <Navbar userdata={userdata} />
            <div className='container-fluid px-1 '>
                <div className='row justify-content-center section'>
                    <div className="row">
                        <div className="col-md-8 left_side py-3">
                            <div className="heading">
                                <p className='yellow mb-4'>👋 Hey {userdata && userdata.firstName}</p>
                                <h1 className='heading mb-3'>You’ve got 236,90 $ in Credit Balance</h1>
                                <button className='btn btn-primary round_btn' >Request TopUp</button>
                            </div>
                            <div className='time_spending '>
                                <div className='mt-4 d-flex justify-content-between align-items-center'>
                                    <h3>Time Spendings</h3>
                                    <div>
                                        <span className="text-muted">Month</span>
                                        <button className='round_btn shadow_new text-muted btn-light btn p-0 ms-1' onClick={showOpt}><KeyboardArrowDown /></button>
                                        {show && <li className="text-muted nav-link dropdown-menu">Week</li>}
                                    </div>
                                </div>
                                <div style={{ height: '200px' }}>
                                    <BarChart />

                                </div>
                            </div>
                            <div className="row gx-0">
                                <div className="shadow p-4 profD-rad pt-4 col-md-6 green">
                                    <h3>Statistics</h3>
                                    <div className="col-md-12 mt-0">
                                        <div className='center m-auto progressBar' style={{ width: 280, height: 280 }}>
                                            <CircularProgressbarWithChildren
                                                value={75}
                                                strokeWidth={15}
                                                text="09 Courses"
                                                styles={{
                                                    // Customize the root svg element
                                                    root: {},
                                                    path: {
                                                        stroke: '#BDD8B5',
                                                    },
                                                    trail: {
                                                        stroke: '#DFEEDB',
                                                    },
                                                    text: {
                                                        fill: '#98C38B',
                                                        fontSize: '10px',
                                                        fontWeight: "800"
                                                    },
                                                }}
                                            >
                                                <CircularProgressbar
                                                    strokeWidth={15}
                                                    value={65}
                                                    styles={{
                                                        // Customize the root svg element
                                                        root: {},
                                                        path: {
                                                            stroke: '#98C38B',
                                                        },
                                                        trail: {
                                                            stroke: 'transparent', trailColor: "transparent",
                                                        },
                                                    }}
                                                />
                                            </CircularProgressbarWithChildren>
                                        </div>
                                        <div className='d-flex justify-content-between mt-4 flex-wrap'>
                                            <div className='d-flex'><div className='statistics-dot' style={{ "backgroundColor": "#98C38B" }}></div>
                                                <div><div>60%</div><small className='text-muted'>Completed</small></div>
                                            </div>
                                            <div className='d-flex'><div className='statistics-dot' style={{ "backgroundColor": "#BDD8B5" }}></div>
                                                <div><div>10%</div><small className='text-muted'>Progress</small></div>
                                            </div>
                                            <div className='d-flex'><div className='statistics-dot' style={{ "backgroundColor": "#DFEEDB" }}></div>
                                                <div><div>30%</div><small className='text-muted'>To Start</small></div>
                                            </div>

                                        </div>
                                        {/* <DognutChart /> */}
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className='shadow p-4 mb-2 profD-rad pt-4 short_div short_div1'>
                                        <h3 className='mb-4'>Awards</h3>
                                        <div className="d-flex justify-content-between">
                                            <img src={'./images/Award.png'} style={{ height: '100%', marginRight: '10px' }} />
                                            <div className="d-flex flex-column justify-content-center">
                                                <h4>Levels</h4>
                                                <p className="text-muted mb-0">Congratulations! You’re at 71.</p>
                                                <div className='progress_bar'>
                                                    <ProgressBar now={71} />
                                                    <p style={{ color: '#F37658', marginTop: '10px', marginLeft: '10px' }}>71/90</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='shadow p-3 mt-1 profD-rad pt-4 short_div short_div2'>
                                        <h3>Growth</h3>
                                        <div className="d-flex">
                                            <Line data={Linedata} options={lineChartOptions} height={80} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="shadow py-4 mt-5 row gx-1 profD-rad pt-4 satisfaction" style={{ backgroundColor: '#F6EEFB' }}>
                                <h3 className='px-4 mb-0'>Satisfaction and Feedback</h3>
                                <div className="col-md-6">
                                    {/* <h5 className='bold'>Average Session Rating</h5> */}
                                    <p className="text-muted px-4">Based on 36 ratings</p>
                                    <div style={{ width: 280, height: 280, display: 'grid', placeItems: 'center', margin: 'auto' }}>
                                        <CircularProgressbar
                                            text="3.7/5"
                                            value={66}
                                            strokeWidth={15}
                                            styles={{
                                                // Customize the root svg element
                                                root: {
                                                },
                                                path: {
                                                    stroke: '#8441AF',
                                                    strokeLinecap: "round",
                                                },
                                                trail: {
                                                    stroke: '#D7C0E5',
                                                },
                                                text: {
                                                    fill: '#8441AF',
                                                    fontSize: '1rem',
                                                    fontWeight: "800"
                                                },
                                            }}
                                        />
                                        {/* <CircularProgressbar value={66} /> */}
                                    </div>
                                </div>
                                <div className="col-md-6 px-4">
                                    <h5 className='bold' >Questions on individual Level</h5>

                                    <div className='mt-3 mb-4' >
                                        <h5 style={{ fontSize: '16px' }}>I felt heard, understood & respected</h5>
                                        <ProgressBar variant="success" now={3.5} max={5} />
                                    </div>
                                    <div className='mb-4'>
                                        <h5 style={{ fontSize: '16px' }}>My trainer/coach brought me closer to my goal</h5>
                                        <ProgressBar variant="primary" now={3} max={5} />
                                    </div>
                                    <div className='mb-4'>
                                        <h5 style={{ fontSize: '16px' }}>I will recommend the trainer/coach to my colleagues</h5>
                                        <ProgressBar variant="warning" now={4} max={5} />
                                    </div>
                                    <div className='mb-4'>
                                        <h5 style={{ fontSize: '16px' }}>The technical quality of the video was good</h5>
                                        <ProgressBar variant="danger" now={4.5} max={5} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="right_card  ml-5" >
                                <h1 className='mb-4'>Action Recomended</h1>
                                <p className="text-muted action"><AssignmentOutlined style={{ marginRight: '5px' }} />3 assignment submission pending</p>
                                <p className="text-muted action"><ErrorOutlineRounded style={{ marginRight: '5px' }} />2 skills needs to be added</p>

                                <p className="text-muted action"><PersonAddAlt1Rounded style={{ marginRight: '5px' }} />2 skills needs to be added</p>
                            </div>
                            <div className="right_card  d-flex flex-column justify-content-center"  >
                                <Calendar prev2Label={null} next2Label={null} nextLabel={null} prevLabel={null} onChange={onChange} value={value} />
                                <div className='px-4'>
                                    <p style={{ color: '#F37658', fontSize: '20px', marginBottom: '-2px' }} >Today</p>
                                    <h2 className='heading'>Basic Marketing</h2>
                                    <p style={{ fontSize: '17px' }}>The course is hugely interactive with projects, checklists & actionable lectures built in to every section.</p>
                                </div>
                                <div className='p-4'>
                                    <div className='d-flex'>
                                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" className='round_icon ml' />
                                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" className='round_icon ml' />
                                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" className='round_icon ml' />
                                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" className='round_icon ml ' />
                                        <p className='mt-1 ms-2'>30 participants</p>
                                    </div>
                                </div>

                                <div className='p-4'>
                                    <div className="d-flex ">
                                        <AccessTimeRounded />
                                        <div>
                                            <h6 className='mb-0'>55 mins</h6>
                                            <p className='text-muted' style={{ fontSize: '15px' }}>Duration</p>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="d-flex">

                                        <ComputerRounded />
                                        <div>
                                            <h6 className='mb-0'>55 mins</h6>
                                            <p className='text-muted' style={{ fontSize: '15px' }}>Course Online</p>
                                        </div>
                                    </div>
                                    <hr className='text-muted mb-4' />
                                    <div className='d-flex padding justify-content-between '>
                                        <button className='btn py-2 btn-primary round_btn' style={{ "padding": "0 10%", fontWeight: '600' }}>Join</button>
                                        <button className='btn px-4 py-2 btn-light round_btn' style={{ backgroundColor: '#fff', border: '1px solid grey', fontWeight: '600' }}>Reschedule</button>
                                    </div>

                                </div>


                            </div>
                        </div>
                        <div className='row px-0 mt-3 m-auto'>
                            <h4 className='fw-bold mb-4'>SKLARA Marketplace</h4>
                            <div className='col-lg-6 col-sm-12 dashboard-card'>
                                <div className='card ' style={{ height: '100%' }}>
                                    <div className='card-body'>
                                        <div className='card-title d-flex justify-content-between'>
                                            <div>
                                                <div className='fw-bold'>Top Focus Area</div>
                                                <small className='text-muted'>Based on 45 sessions</small>
                                            </div>
                                            <MoreVert />
                                        </div>
                                        <div>
                                            <div className='d-flex mb-4'>
                                                <AutoAwesomeMosaic className='mt-2' color='success' fontSize='large' />
                                                <div className='w-100 px-4'>
                                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                                        <h6>Business Analysis</h6>
                                                        <button className='btn btn-primary px-3 py-0 round_btn event_btn '  ><small className='fw-bold'>62 events</small></button>
                                                    </div>
                                                    <ProgressBar variant="success" now={5} max={5} />
                                                </div>
                                            </div>
                                            <div className='d-flex mb-4'>
                                                <CloseFullscreen className='mt-2' style={{ "color": "#C026B7" }} fontSize='large' />
                                                <div className='w-100 px-4'>
                                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                                        <h6>Social Media Marketing</h6>
                                                        <button className='btn btn-primary px-3 py-0 round_btn event_btn' ><small className='fw-bold'>621 events</small></button>
                                                    </div>
                                                    <ProgressBar variant='pb-pink' now={5} max={5} />
                                                </div>
                                            </div>
                                            <div className='d-flex mb-4'>
                                                <BorderInner className='mt-2' color='primary' fontSize='large' />
                                                <div className='w-100 px-4'>
                                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                                        <h6>Artificial Intelligence</h6>
                                                        <button className='btn btn-primary px-3 py-0 round_btn event_btn' ><small className='fw-bold'>62 events</small></button>
                                                    </div>
                                                    <ProgressBar variant="primary" now={5} max={5} />
                                                </div>
                                            </div>
                                            <div className='d-flex mb-4'>
                                                <AccountTreeOutlined className='mt-2' style={{ "color": "#DC3545" }} fontSize='large' />
                                                <div className='w-100 px-4'>
                                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                                        <h6>Sales & Market</h6>
                                                        <button className='btn btn-primary px-3 py-0 round_btn event_btn' ><small className='fw-bold'>62 events</small></button>
                                                    </div>
                                                    <ProgressBar variant="danger" now={5} max={5} />
                                                </div>
                                            </div>
                                            <div className='d-flex mb-4'>
                                                <Bento className='mt-2' style={{ "color": "#1CD8C9" }} fontSize='large' />
                                                <div className='w-100 px-4'>
                                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                                        <h6>Al in Buisness Decissions</h6>

                                                        <button className='btn btn-primary px-3 py-0 round_btn event_btn' ><small className='fw-bold'>62 events</small></button>
                                                    </div>
                                                    <ProgressBar variant="pb-light-blue" now={5} max={5} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-sm-12 pe-0 dashboard-card'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <div className='card-title d-flex justify-content-between'>
                                            <div>
                                                <div className='fw-bold'>Top Focus Area</div>
                                                <small className='text-muted'>Based on your focus areas</small>
                                            </div>
                                            <MoreVert />
                                        </div>
                                        <div>
                                            <div className='d-flex mb-3'>
                                                <AutoAwesomeMosaic className='mt-2' color='success' fontSize='large' />
                                                <div className='w-100 px-4 d-flex justify-content-between'>
                                                    <div>
                                                        <h6 className='m-0'>Buisness Analysis changes the...</h6>
                                                        <small className='text-muted'>Martin Krugger</small>
                                                    </div>
                                                    <div className='d-flex flex-column align-items-center'>
                                                        <div className='d-flex '>
                                                            <div className="d-flex align-items-center mb-0">
                                                                <h1 className='m-0 p-0'>24</h1>
                                                                <div>
                                                                    <h6 className='m-0 p-0'> JAN </h6>
                                                                    <h6 className='m-0 p-0'>2022</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="text-muted my-0 p-0">5 sessions</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='d-flex mb-3'>
                                                <CloseFullscreen className='mt-2' style={{ "color": "#C026B7" }} fontSize='large' />
                                                <div className='w-100 px-4 d-flex justify-content-between'>
                                                    <div>
                                                        <h6 className='m-0'>Social Media & business promition</h6>
                                                        <small className='text-muted'>Danny Rankins</small>
                                                    </div>
                                                    <div className='d-flex flex-column align-items-center'>
                                                        <div className='d-flex '>
                                                            <div className="d-flex align-items-center mb-0">
                                                                <h1 className='m-0 p-0'>24</h1>
                                                                <div>
                                                                    <h6 className='m-0 p-0'> JAN </h6>
                                                                    <h6 className='m-0 p-0'>2022</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="text-muted my-0 p-0">5 sessions</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='d-flex mb-3'>
                                                <BorderInner className='mt-2' color='primary' fontSize='large' />
                                                <div className='w-100 px-4 d-flex justify-content-between'>
                                                    <div>
                                                        <h6 className='m-0'>Implementing AI for management</h6>
                                                        <small className='text-muted'>Cameron Niaken</small>
                                                    </div>
                                                    <div className='d-flex flex-column align-items-center'>
                                                        <div className='d-flex '>
                                                            <div className="d-flex align-items-center mb-0">
                                                                <h1 className='m-0 p-0'>24</h1>
                                                                <div>
                                                                    <h6 className='m-0 p-0'> JAN </h6>
                                                                    <h6 className='m-0 p-0'>2022</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="text-muted my-0 p-0">5 sessions</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='d-flex mb-3'>
                                                <AccountTreeOutlined className='mt-2' style={{ "color": "#DC3545" }} fontSize='large' />
                                                <div className='w-100 px-4 d-flex justify-content-between'>
                                                    <div>
                                                        <h6 className='m-0'>Easiest techniques to boost...</h6>
                                                        <small className='text-muted'>Faith Sulinan</small>
                                                    </div>
                                                    <div className='d-flex flex-column align-items-center'>
                                                        <div className='d-flex '>
                                                            <div className="d-flex align-items-center mb-0">
                                                                <h1 className='m-0 p-0'>24</h1>
                                                                <div>
                                                                    <h6 className='m-0 p-0'> JAN </h6>
                                                                    <h6 className='m-0 p-0'>2022</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="text-muted my-0 p-0">5 sessions</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='d-flex mb-3'>
                                                <Bento className='mt-2' style={{ "color": "#1CD8C9" }} fontSize='large' />
                                                <div className='w-100 px-4 d-flex justify-content-between'>
                                                    <div>
                                                        <h6 className='m-0'>sourcing decisions to Algo...</h6>
                                                        <small className='text-muted'>Steve Mclnshaw</small>
                                                    </div>
                                                    <div className='d-flex flex-column align-items-center'>
                                                        <div className='d-flex '>
                                                            <div className="d-flex align-items-center mb-0">
                                                                <h1 className='m-0 p-0'>24</h1>
                                                                <div>
                                                                    <h6 className='m-0 p-0'> JAN </h6>
                                                                    <h6 className='m-0 p-0'>2022</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="text-muted my-0 p-0">5 sessions</p>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row mb-2'>
                            <div>
                                <h4 className='fw-bold mb-4'>Top Corporate Trainers</h4>
                            </div>
                            <div className='mx-0 px-0'>
                                <Carousel
                                    responsiveLayout={[
                                        {
                                            breakpoint: 1200,
                                            cols: 3
                                        },
                                        {
                                            breakpoint: 990,
                                            cols: 2
                                        }
                                    ]}
                                    arrowRight={<ArrowBtn type="right" />}
                                    arrowLeft={<ArrowBtn type="left" />}
                                    mobileBreakpoint={670} cols={4} rows={1} gap={20} loop>
                                    {arrayEvents.map((element, i) => {
                                        return <Carousel.Item>
                                            <div key={i} className='mb-4'>
                                                <div className="card shadow-sm">
                                                    <img role="button" src="images/dummy/training01.jpg" className="card-img-top mp-com-image" alt="..." />
                                                    <div className="card-body pb-0">
                                                        <span className='tp-com-flag1'><img className="" src="images/flags/de.svg" alt="" /></span>
                                                        <h6 className="card-title m-0 mt-2">Martin Jenkins {i}</h6>
                                                        <small className='text-muted'>Business Analysis</small>
                                                        <div className='mb-2'>
                                                            <small>Martin specializes in Buisness
                                                                Analysis training for Start-Ups.</small>
                                                        </div>
                                                        <div className='d-flex justify-content-between'>
                                                            <p><img src="images/star.png" alt='star' /><span style={{ "color": "#1fd0b6" }}>5.0</span><small style={{ "color": "#cccccc" }}>(29)</small></p>
                                                            <Forum className='mt-1' style={{ "color": "#1B1464" }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Carousel.Item>
                                    })}
                                </Carousel>
                            </div>
                        </div>
                        <div className='row mb-2'>
                            <div>
                                <h4 className='fw-bold mb-4'>Top Buisness Coaches</h4>
                            </div>
                            <div className='mx-0 px-0'>
                                <Carousel
                                    responsiveLayout={[
                                        {
                                            breakpoint: 1200,
                                            cols: 3
                                        },
                                        {
                                            breakpoint: 990,
                                            cols: 2
                                        }
                                    ]}
                                    arrowRight={<ArrowBtn type="right" />}
                                    arrowLeft={<ArrowBtn type="left" />}
                                    mobileBreakpoint={670} cols={4} rows={1} gap={20} loop>
                                    {arrayEvents.map((element, i) => {
                                        return <Carousel.Item>
                                            <div key={i} className='mb-4'>
                                                <div className="card shadow-sm">
                                                    <img role="button" src="images/dummy/training01.jpg" className="card-img-top mp-com-image" alt="..." />
                                                    <div className="card-body pb-0">
                                                        <span className='tp-com-flag1'><img className="" src="images/flags/de.svg" alt="" /></span>
                                                        <h6 className="card-title m-0 mt-2">Martin Jenkins {i}</h6>
                                                        <small className='text-muted'>Business Analysis</small>
                                                        <div className='mb-2'>
                                                            <small>Martin specializes in Buisness
                                                                Analysis training for Start-Ups.</small>
                                                        </div>
                                                        <div className='d-flex justify-content-between'>
                                                            <p><img src="images/star.png" alt='star' /><span style={{ "color": "#1fd0b6" }}>5.0</span><small style={{ "color": "#cccccc" }}>(29)</small></p>
                                                            <Forum className='mt-1' style={{ "color": "#1B1464" }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Carousel.Item>
                                    })}
                                </Carousel>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default NewDashboard
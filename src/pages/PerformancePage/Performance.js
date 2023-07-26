import { AccountTreeOutlined, AutoAwesomeMosaic, Bento, BorderInner, Circle, CloseFullscreen, MoreVert } from '@mui/icons-material'
import { flexbox } from '@mui/system'
import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import { Line } from 'react-chartjs-2'
import { CircularProgressbar } from 'react-circular-progressbar'
import LineChart from '../../components/Charts/LineChart'
import { PolarAreaChart } from '../../components/Charts/PolarAreaChart'
import PolarChart from '../../components/Charts/PolarChart'
import BarChart from '../NewDashboard/BarChart'
import DognutChart from '../NewDashboard/DognutChart'
import './Performance.css'

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Sessions',
            data: [1, 3, 4, 5, 7],
            backgroundColor: '#fd7e14',
            borderColor: '#fd7e14'
        },
    ],
};


const Performance = () => {

    const options = {
        responsive: true,
        maintainAspectRatio: true,


    };
    const Linedata = {
        labels,
        datasets: [
            {
                label: 'Earnings in €',
                data: [10, 4, 10, 3, 10, 0, 15, 30, 22, 5.31, 45],
                backgroundColor: 'linear-gradient(to right, #20f08b, #07dfb1)',
                fill: true,
                borderColor: '#FEA31E',

            },
            {
                label: 'Earnings in €',
                data: [15, 30, 22, 5, 10, 4, 10, 3, 10, 0, 11, 44],
                backgroundColor: 'linear-gradient(to right, #20f08b, #07dfb1)',
                fill: true,
                borderColor: 'blue',

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
        fill: true,
        lineTension: 0,
        borderWidth: 3,
        pointHitRadius: 20,
        pointRadius: 6,
        pointBackgroundColor: '#FEA31E',
        pointBorderColor: '#fff',
        // scales: {
        //     xAxis: {
        //         display: true
        //     }
        //     ,
        //     yAxis: {
        //         display: false
        //     }
        // }
    }

    const skills = [{
        color: "#336222",
        createdAt: "2022-04-11T11:41:32.200Z",
        priorityValue: 6,
        skill: "Conceptual Skills",
        skillValue: 8,
        updatedAt: "2022-04-12T07:04:58.658Z",
        utility: 2,
        _id: "625420d9cb7e851e56ec0b02"
    },
    {
        color: "#660000",
        createdAt: "2022-04-11T11:41:32.200Z",
        priorityValue: 3,
        skill: "Conceptual Skills",
        skillValue: 6,
        updatedAt: "2022-04-12T07:04:58.658Z",
        utility: 2,
        _id: "625420d9cb7e851e56ec0b02"
    },
    {
        color: "#660000",
        createdAt: "2022-04-11T11:41:32.200Z",
        priorityValue: 3,
        skill: "Conceptual Skills",
        skillValue: 2,
        updatedAt: "2022-04-12T07:04:58.658Z",
        utility: 2,
        _id: "625420d9cb7e851e56ec0b02"
    },

    ]



    return (
        <div className='mp-outer container-fluid main-div pt-3'>
            <div className='container-fluid px-0'>
                <h2 className='pb-5'>Your Company's  <span className='change-color'>Statistics</span></h2>
                <div className="row mb-4">
                    <div className="col-md-6">
                        <div className='card ' style={{ height: '100%' }}>
                            <div className='card-body'>
                                <div className='card-title d-flex justify-content-between mb-5'>
                                    <div>
                                        <div className='fw-bold'>Top skills in your company</div>
                                        <small className='text-muted'>Based on 250 employees in your company</small>
                                    </div>
                                    <MoreVert />
                                </div>
                                <div>
                                    <div className='d-flex mb-4'>
                                        <AutoAwesomeMosaic className='mt-2' color='success' fontSize='large' />
                                        <div className='w-100 px-4'>
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                                <h6>Business Analysis</h6>
                                                <p className="text-muted">185 participants</p>
                                            </div>
                                            <ProgressBar variant="success" now={5} max={5} />
                                        </div>
                                    </div>
                                    <div className='d-flex mb-4'>
                                        <CloseFullscreen className='mt-2' style={{ "color": "#C026B7" }} fontSize='large' />
                                        <div className='w-100 px-4'>
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                                <h6>Social Media Marketing</h6>
                                                <p className="text-muted">185 participants</p>
                                            </div>
                                            <ProgressBar variant='pb-pink' now={5} max={5} />
                                        </div>
                                    </div>
                                    <div className='d-flex mb-4'>
                                        <BorderInner className='mt-2' color='primary' fontSize='large' />
                                        <div className='w-100 px-4'>
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                                <h6>Artificial Intelligence</h6>
                                                <p className="text-muted">185 participants</p>
                                            </div>
                                            <ProgressBar variant="primary" now={5} max={5} />
                                        </div>
                                    </div>
                                    <div className='d-flex mb-4'>
                                        <AccountTreeOutlined className='mt-2' style={{ "color": "#DC3545" }} fontSize='large' />
                                        <div className='w-100 px-4'>
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                                <h6>Sales & Market</h6>
                                                <p className="text-muted">185 participants</p>
                                            </div>
                                            <ProgressBar variant="danger" now={5} max={5} />
                                        </div>
                                    </div>
                                    <div className='d-flex mb-4'>
                                        <Bento
                                            className='mt-2' style={{ "color": "#1CD8C9" }} fontSize='large' />
                                        <div className='w-100 px-4'>
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                                <h6>Al in Buisness Decissions</h6>

                                                <p className="text-muted">185 participants</p>
                                            </div>
                                            <ProgressBar variant="pb-light-blue" now={5} max={5} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='card' style={{ height: '100%' }}>
                            <div className='card-body'>
                                <div className='card-title d-flex justify-content-between'>
                                    <div>
                                        <div className='fw-bold'>State of your Employees</div>
                                        <small className='text-muted'>Distribution of courses according to their state</small>
                                    </div>
                                    <MoreVert />
                                </div>

                                <DognutChart />
                                <div className='d-flex justify-content-between px-3 py-1'>
                                    <div><Circle fontSize='smaller' style={{ color: 'red' }} /> Courses Planned</div>
                                    <p className="text-muted">5 Courses</p>
                                    <p className="text-muted">25%</p>
                                </div>
                                <div className='d-flex justify-content-between px-3 py-1' >
                                    <div><Circle fontSize='smaller' style={{ color: 'green' }} /> Courses Planned</div>
                                    <p className="text-muted">5 Courses</p>
                                    <p className="text-muted">25%</p>
                                </div>
                                <div className='d-flex justify-content-between px-3 py-1' >
                                    <div><Circle fontSize='smaller' style={{ color: 'yellow' }} /> Courses Planned</div>
                                    <p className="text-muted">5 Courses</p>
                                    <p className="text-muted">25%</p>
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="card col-md-12 card-body mb-4">
                    <div>
                        <div className='fw-bold'>Top skills in your company</div>
                        <small className='text-muted'>Based on 250 employees in your company</small>
                    </div>
                    <div className=" m-auto" style={{ width: '800px' }}>
                        <PolarAreaChart skills={skills} />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-6">
                        <div className='card ' style={{ height: '100%' }}>
                            <div className='card-body'>
                                <div className='card-title d-flex justify-content-between mb-5'>
                                    <div>
                                        <div className='fw-bold'>Leaderboard</div>
                                        <small className='text-muted'>Top 5 lesrners at your companuy</small>
                                    </div>

                                </div>
                                {[1, 2, 3, 4].map(item => <div className='d-flex leaderboard'>
                                    <img src="/images/dummy/user4_big.jpg" alt="" style={{ marginRight: '20px' }} />
                                    <div>
                                        <div className='fw-bold'>Martin Kruger</div>
                                        <p className="text-muted ">5 skills / Average skill level 5</p>
                                        <div className='my-3'>
                                            <a href="/#"><span className="badge badge-pill tp-yellow">Start-Ups</span></a>&nbsp;
                                            <a href="/#"><span className="badge badge-pill tp-light-blue">Oil & Natural Gas</span></a>&nbsp;
                                            <a href="/#"><span className="badge badge-pill tp-green">Marketing & Sales</span></a>&nbsp;
                                            <a href="/#"><span className="badge badge-pill tp-red">Leaderships</span></a>&nbsp;
                                            <a href="/#"><span className="badge badge-pill tp-blue">Negotiations</span></a>&nbsp;

                                        </div>
                                    </div>
                                </div>)}
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                    <div className="col-md-6">
                        <div className='card ' style={{ height: '100%' }}>
                            <div className='card-body'>
                                <div className='card-title d-flex justify-content-between mb-5'>
                                    <div>
                                        <div className='fw-bold'>Skill Map</div>
                                        <small className='text-muted'>Skill mapping of your employees </small>
                                    </div>
                                </div>
                                {[1, 2, 3].map(item => <div className='d-flex leaderboard'>
                                    <div className='d-flex flex-column' style={{ width: '100%' }}>
                                        <div className='fw-bold'>Leadership Skills</div>
                                        <div className="d-flex justify-content-between">
                                            {[1, 2, 3, 4, 5].map(item => <div className='my-3 d-flex flex-column align-items-center'>
                                                <img src="/images/dummy/user4_big.jpg" alt="" />

                                                <p className="text-muted ">Martin kruger</p>

                                            </div>)}
                                        </div>

                                    </div>
                                </div>)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card col-md-12 card-body mb-4">
                    <div>
                        <div className='fw-bold'>Hours Spend on Learning</div>
                        <small className='text-muted'>Percieved overall progress</small>
                    </div>
                    <div className=" m-auto" style={{ width: '100%' }}>
                        <BarChart />
                    </div>
                </div>
                <div className="card col-md-12 card-body mb-4">
                    <div>
                        <div className='fw-bold'>Average Development progress of your company</div>
                        <small className='text-muted'>Based on top 5 skills</small>
                    </div>
                    <div className=" m-auto" style={{ width: '100%' }}>
                        <Line options={lineChartOptions} data={Linedata} height='50%' />
                    </div>
                </div>
                <div className="card col-md-12 card-body mb-4">
                    <div>
                        <div className='fw-bold'>Your learning investments</div>
                        <small className='text-muted'>Percieved overall progress</small>
                    </div>
                    <div className=" m-auto" style={{ width: '100%' }}>
                        <BarChart />
                    </div>
                </div>
                <div className="shadow py-4 mt-5 row gx-1 profD-rad pt-4 satisfaction" style={{ backgroundColor: '#ffffff' }}>
                    <div className='fw-bold ms-4'>Satisfaction and Feedback</div>
                    <div className="col-md-6">
                        {/* <h5 className='bold'>Average Session Rating</h5> */}
                        <small className="text-muted px-4">Based on 36 ratings</small>
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



            </div >
        </div >
    )
}

export default Performance


import React from 'react'
import './profStats.css'
import { ProgressBar, Row, Col } from 'react-bootstrap';


import PieChartIcon from '@mui/icons-material/PieChart';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import NfcIcon from '@mui/icons-material/Nfc';
import LayersIcon from '@mui/icons-material/Layers';
import LightIcon from '@mui/icons-material/Light';



const MarketPlace = () => {




    return (
        <div className='container-fluid px-5'>
            <h3 className='mx-5 mt-5 heading'>SKLARA Marketplace</h3>
            <div className='row justify-content-between mx-5'>

                <div className='col-md-6 col-sm-12'>
                    <div className='shadow bg-white p-rad p-3' style={{ height: "100%" }}>
                        <div className='p-1'>
                            <h4 className='fw-light mt-2'>Top Focus Areas</h4>
                            <h5 className='fw-light'>Based on 45 sessions</h5>
                        </div>
                        <div className='p-3 mt-4'>
                            <Row>
                                <Col xs lg="2"><PieChartIcon sx={{ fontSize: "40px" }} className="text-success" /></Col>
                                <Col>
                                    <h5>Business Analysis</h5>
                                </Col>
                            </Row>

                            <Row className='mt-4'>
                                <Col xs lg="2"><CompareArrowsIcon sx={{ fontSize: "40px" }} className="text-primary" /></Col>
                                <Col>
                                    <h5>Social Media Marketing</h5>
                                    <ProgressBar now={100} /></Col>
                            </Row>

                            <Row className='mt-4'>
                                <Col xs lg="2"><NfcIcon sx={{ fontSize: "40px" }} className="text-warning" /></Col>
                                <Col>
                                    <h5>Artificial Intelligence</h5>
                                    <ProgressBar variant="warning" now={100} /></Col>
                            </Row>

                            <Row className='mt-4'>
                                <Col xs lg="2"><LayersIcon sx={{ fontSize: "40px" }} className="text-danger" /></Col>
                                <Col>
                                    <h5>Sales & Marketing</h5>
                                    <ProgressBar variant="danger" now={100} /></Col>
                            </Row>

                            <Row className='mt-4'>
                                <Col xs lg="2"><LightIcon sx={{ fontSize: "40px" }} className="text-info" /></Col>
                                <Col>
                                    <h5>Sales & Marketing</h5>
                                    <ProgressBar variant="info" now={100} /></Col>
                            </Row>

                        </div>

                        <button className='btn btn-primary center my-4'>Show All</button>

                    </div>
                </div>
                {/* left div end */}
                {/* right div start */}

                <div className='col-md-6 col-sm-12'>
                    <div className='shadow bg-white p-rad p-3' style={{ height: "100%" }}>
                        <div className='p-1'>
                            <h4 className='fw-light mt-2'>Top Focus Areas</h4>
                            <h5 className='fw-light'>Based on 45 sessions</h5>
                        </div>
                        <div className='p-3 mt-4'>
                            <Row>
                                <Col xs lg="2"><PieChartIcon sx={{ fontSize: "40px" }} className="text-success" /></Col>
                                <Col>
                                    <h5>How Business Analysis changes the...</h5>
                                    <p classsName='text-muted'>Martin Krugger</p>
                                </Col>
                                <div class="col-3 col-md-3">
                                    <div class="row">
                                        <div class="col-7 col-md-7 event-date-day-component">24<span class="event-date-filler-component">&nbsp;</span></div>
                                        <div class="col-5 col-md-5 event-date-month-component">&nbsp;JAN<br />2022</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 col-md-12 text-muted event-date-session-component">5 sessions</div>
                                    </div>
                                </div>
                            </Row>

                            <Row >
                                <Col xs lg="2"><CompareArrowsIcon sx={{ fontSize: "40px" }} className="text-primary" /></Col>
                                <Col>
                                    <h5>How Business Analysis changes the...</h5>
                                    <p classsName='text-muted'>Martin Krugger</p>
                                </Col>
                                <div class="col-3 col-md-3">
                                    <div class="row">
                                        <div class="col-7 col-md-7 event-date-day-component">24<span class="event-date-filler-component">&nbsp;</span></div>
                                        <div class="col-5 col-md-5 event-date-month-component">&nbsp;JAN<br />2022</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 col-md-12 text-muted event-date-session-component">5 sessions</div>
                                    </div>
                                </div>
                            </Row>

                            <Row >
                                <Col xs lg="2"><CompareArrowsIcon sx={{ fontSize: "40px" }} className="text-primary" /></Col>
                                <Col>
                                    <h5>How Business Analysis changes the...</h5>
                                    <p classsName='text-muted'>Martin Krugger</p>
                                </Col>
                                <div class="col-3 col-md-3">
                                    <div class="row">
                                        <div class="col-7 col-md-7 event-date-day-component">24<span class="event-date-filler-component">&nbsp;</span></div>
                                        <div class="col-5 col-md-5 event-date-month-component">&nbsp;JAN<br />2022</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 col-md-12 text-muted event-date-session-component">5 sessions</div>
                                    </div>
                                </div>
                            </Row>
                            <Row >
                                <Col xs lg="2"><CompareArrowsIcon sx={{ fontSize: "40px" }} className="text-primary" /></Col>
                                <Col>
                                    <h5>How Business Analysis changes the...</h5>
                                    <p classsName='text-muted'>Martin Krugger</p>
                                </Col>
                                <div class="col-3 col-md-3">
                                    <div class="row">
                                        <div class="col-7 col-md-7 event-date-day-component">24<span class="event-date-filler-component">&nbsp;</span></div>
                                        <div class="col-5 col-md-5 event-date-month-component">&nbsp;JAN<br />2022</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 col-md-12 text-muted event-date-session-component">5 sessions</div>
                                    </div>
                                </div>
                            </Row>

                        </div>

                        <button className='btn btn-primary center my-4'>Show All</button>

                    </div>
                </div>
            </div>
        </div>





    )
}

export default MarketPlace

import React from 'react'
import Navbar from "../../components/navbar/Navbar"
import SideNav from '../../components/SideNav/SideNav'
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom"
import "./Quiz.css";
const Quiz = (userdata) => {
    return (
        <>
            <Navbar userdata={userdata} />
            <div >
                <div className='container-fluid px-1 Manage'>
                    <div className='row justify-content-center'>
                        <div className="row">
                            <SideNav />
                            <div
                  style={{  textAlign: "left" }}
                  className="col-md-10"
                >

                            <div className='Manage-right' >
                                <div className="col-md-12 py-2 ps-2">
                                    <div style={{ marginBottom: '-22px' }} className="d-flex align-items-center flex-wrap">
                                        <div className='d-flex justify-content-end px-5' style={{ marginLeft: '97px' }}>
                                            <Link to="/Manage_form"><button className='add_new btn px-3 py-2 btn-primary round_btn' style={{
                                                backgroundColor: '#fff', height: "40px",

                                                top: "201px", border: '1px solid grey', color: 'white', width: '202px', fontWeight: '600'
                                            }}><AddIcon /> Add new question</button></Link>
                                        </div>
                                        <div className='Addq_marks'>
                                            <div className='d-flex flex-row'>
                                                <div>
                                                    <span style={{ marginLeft: '30px', width: "400px" }} className=' py-1'> Question #</span><br />
                                                    <input className='check my-3' type="checkbox" name="" id="" />
                                                    <input className='search-box my-3' type="search" name="" id="" />  </div>
                                                <div>
                                                    <span style={{ marginLeft: '200px', }} className=' py-1'> Question</span>
                                                    <br />

                                                    <input style={{ marginLeft: '250px', width: "500px" }} className='search-box my-3' type="search" name="" id="" />  </div>
                                                <div>
                                                    <span style={{ marginLeft: '500px', }} className='my-1'>Marks</span>

                                                </div>
                                            </div>
                                        </div>
                                        <div className=' Addq_Date_marks'>
                                            <div className='d-flex flex-row '>
                                                <input className=' ' style={{
                                                    width: "20px",
                                                    height: "30px"
                                                    , left: "10px",
                                                }} type="checkbox" name="" id="" />
                                                <span style={{ marginLeft: '15px', }}>15,May 2021</span>
                                                <br />

                                                <span style={{ marginLeft: '150px', }} className="text-muted  ">Text...</span>
                                                <span style={{ marginLeft: '520px', }} className='my-1 text-muted'>1.00</span>
                                                <i className="fa fa-ellipsis-v ellipsis-icon-font" aria-hidden="true"></i>

                                            </div>
                                            <span style={{ marginLeft: '-850px' }} className="text-muted small ">
                                                ET01987
                                            </span>
                                            <hr />
                                            <div className='d-flex flex-row '>
                                            <input className=' ' style={{
                                                    width: "20px",
                                                    height: "30px"
                                                    , left: "10px",
                                                }} type="checkbox" name="" id="" />

                                                <span style={{ marginLeft: '15px', }}>15,May 2021</span>
                                                <span style={{ marginLeft: '150px', }} className="text-muted  ">Text...</span>
                                                <span style={{ marginLeft: '520px', }} className='my-1 text-muted'>1.00</span>
                                                <i className="fa fa-ellipsis-v ellipsis-icon-font" aria-hidden="true"></i>

                                            </div>
                                            <span style={{ marginLeft: '-850px' }} className="text-muted small ">
                                                ET01987
                                            </span>
                                            <hr />
                                            <div className='d-flex flex-row '>
                                            <input className=' ' style={{
                                                    width: "20px",
                                                    height: "30px"
                                                    , left: "10px",
                                                }} type="checkbox" name="" id="" />

                                                <span style={{ marginLeft: '15px', }}>15,May 2021</span>
                                                <span style={{ marginLeft: '150px', }} className="text-muted  ">Text...</span>
                                                <span style={{ marginLeft: '520px', }} className='my-1 text-muted'>1.00</span>
                                                <i className="fa fa-ellipsis-v ellipsis-icon-font" aria-hidden="true"></i>

                                            </div>
                                            <span style={{ marginLeft: '-850px' }} className="text-muted small ">
                                                ET01987
                                            </span>
                                            <hr />
                                            <div className='d-flex flex-row '>
                                            <input className=' ' style={{
                                                    width: "20px",
                                                    height: "30px"
                                                    , left: "10px",
                                                }} type="checkbox" name="" id="" />

                                                <span style={{ marginLeft: '15px', }}>15,May 2021</span>
                                                <span style={{ marginLeft: '150px', }} className="text-muted  ">Text...</span>
                                                <span style={{ marginLeft: '520px', }} className='my-1 text-muted'>1.00</span>
                                                <i className="fa fa-ellipsis-v ellipsis-icon-font" aria-hidden="true"></i>

                                            </div>
                                            <span style={{ marginLeft: '-850px' }} className="text-muted small ">
                                                ET01987
                                            </span>

                                            <hr />

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                       </div> 
                    </div>
                </div>
            </div>

        </>
    )
}

export default Quiz

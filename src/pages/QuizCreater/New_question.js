import React from 'react'
import Navbar from "../../components/navbar/Navbar"
import SideNav from '../../components/SideNav/SideNav'
import "./New_question.css"
const New_question = (userdata) => {
    return (
        <>
            <Navbar userdata={userdata} />
            <div>
                <div >

                    <SideNav />

                </div>


                <div>
                    <div className='main'>
                        <p className="New_Qc  " >Create a new Quiz question</p>
                    </div>


                    <div className="mx-4  ">
                        <p className='Select_types fw-bold small'>Select type of Quiz</p>
                        {/* <label htmlFor="">Company Size</label> */}

                        <select style={{ width: '19vw' }} className='select_options'  >
                            <option></option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                </div>


                <div className=' Addq_Date_marks'>
                    <div className='d-flex flex-row '>
                        <input className='' style={{
                            width: "20px",
                            height: "30px"
                            , left: "10px",
                        }} type="checkbox" name="" id="" />
                        <span style={{ marginLeft: '15px', }}>15,May 2021</span>
                        <br />

                        <span style={{ marginLeft: '150px', }} className="text-muted  ">Text...</span>
                        <span style={{ marginLeft: '520px', }} className='my-1 text-muted'>1.00</span>

                    </div>
                    <span style={{ marginLeft: '-850px' }} className="text-muted small ">
                        ET01987
                    </span>
                    <hr />
                    <div className='d-flex flex-row '>

                        <span style={{ marginLeft: '40px', }}>15,May 2021</span>
                        <span style={{ marginLeft: '150px', }} className="text-muted  ">Text...</span>
                        <span style={{ marginLeft: '520px', }} className='my-1 text-muted'>1.00</span>

                    </div>
                    <span style={{ marginLeft: '-850px' }} className="text-muted small ">
                        ET01987
                    </span>
                    <hr />
                    <div className='d-flex flex-row '>

                        <span style={{ marginLeft: '40px', }}>15,May 2021</span>
                        <span style={{ marginLeft: '150px', }} className="text-muted  ">Text...</span>
                        <span style={{ marginLeft: '520px', }} className='my-1 text-muted'>1.00</span>

                    </div>
                    <span style={{ marginLeft: '-850px' }} className="text-muted small ">
                        ET01987
                    </span>
                    <hr />
                    <div className='d-flex flex-row '>

                        <span style={{ marginLeft: '40px', }}>15,May 2021</span>
                        <span style={{ marginLeft: '150px', }} className="text-muted  ">Text...</span>
                        <span style={{ marginLeft: '520px', }} className='my-1 text-muted'>1.00</span>

                    </div>
                    <span style={{ marginLeft: '-850px' }} className="text-muted small ">
                        ET01987
                    </span>


                </div>

            </div>




        </>
    )
}

export default New_question
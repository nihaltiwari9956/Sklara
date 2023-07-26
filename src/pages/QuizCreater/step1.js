import React, { useState } from 'react'
import Navbar from "../../components/navbar/Navbar"
import SideNav from '../../components/SideNav/SideNav'

import "./step1.css";

function Step1(userdata) {

    const [numOfSessions, setNumOfSessions] = useState(0);
    return (
        <>
        <Navbar userdata={userdata} />
        <div>
          <div className="container-fluid px-1 Manage">
            <div className="row justify-content-center">
              <div className="row">
                <SideNav />
                <div
                  style={{  textAlign: "left" }}
                  className="col-md-10"
                >
                  <div style={{ paddingLeft: "32px" }}>
                    <p className="quiz-heading">Quiz Creator</p>
  
                    <p style={{ marginBottom: "0px" }} className="fw-bold">
                    Create a quiz for your event
                    </p>
                    <p className="text-muted">
                    After saving the quiz will be saved to your event, but only visible the stated time frame.
                    </p>
  
                    <p className="fw-bold select-qtype">Select type of Quiz</p>
                    <div style={{ margin: "10px 8px" }} className="border_input">
                      <select style={{ borderBottom: "none" }}>
                        <option></option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
  
                    <p className="fw-bold name-quiz">Name of Quiz</p>
                    <form style={{ width: "28vh" }} class="d-flex search_bar">
                      <input
                        style={{ boxShadow: "0px 0px 4px rgb(0 0 0 / 25%)" }}
                        class="form-control search-input"
                        type="search"
                        aria-label="Search"
                      />
                    </form>
  
                    <div className="form-group">
                      <p className="fw-bold">Description</p>
                      <textarea  className="description-text" style={{ width: "1079px", height: "259px" }} />
                    </div>
  
                    <div className="form-group" style={{ marginTop: "22px" }}>
                      <label class="col-md-4 control-label fw-bold">
                        Timing
                      </label>
                      <p className="text-muted small"> Activation Date</p>
  
                      <div
                         
                        className="d-flex align-items-center flex-wrap my-0"
                      >
                        <div
                          style={{ margin: "10px 8px" }}
                          className="border_input"
                        >
                          <select style={{ borderBottom: "none" }}>
                            <option>DD/MM/YY</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
  
                        <input
                          style={{ width: "70px" }}
                          type="number"
                          value={numOfSessions}
                          onChange={(e) => setNumOfSessions(e.target.value)}
                          className="form-control"
                        />
  
                        <input
                          style={{ width: "70px" }}
                          type="number"
                          value={numOfSessions}
                          onChange={(e) => setNumOfSessions(e.target.value)}
                          className="form-control"
                        />
                      </div>
  
                      <p className="text-muted small"> Due Date</p>
  
                      <div
                        className="d-flex align-items-center flex-wrap my-0"
                      >
                        <div
                          style={{ margin: "10px 8px" }}
                          className="border_input"
                        >
                          <select style={{ borderBottom: "none" }}>
                            <option>DD/MM/YY</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
  
                        <input
                          style={{ width: "70px" }}
                          type="number"
                          value={numOfSessions}
                          onChange={(e) => setNumOfSessions(e.target.value)}
                          className="form-control"
                        />
  
                        <input
                          style={{ width: "70px" }}
                          type="number"
                          value={numOfSessions}
                          onChange={(e) => setNumOfSessions(e.target.value)}
                          className="form-control"
                        />
                      </div>
                    </div>
  
  
                    <div className="form-group" style={{ marginTop: "22px" }}>
  
                      <p className="text-muted small">Time Limit</p>
                      <div
                        className="d-flex align-items-center flex-wrap my-0"
                      >
                        <div
                          style={{ margin: "10px 8px" }}
                          className="border_input new-time-select-last"
                        >
                          <select style={{ borderBottom: "none" }}>
                            <option>0</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
  
                        <input
                          style={{ width: "280px" }}
                          type="number"
                          placeholder="Minutes"
                          value={numOfSessions==0 ? "Minutes" : numOfSessions}
                          onChange={(e) => setNumOfSessions(e.target.value)}
                          className="form-control"
                        />
  
                       <div><input type="checkbox" className=''/> Enable</div>
                      </div>
                      <button className='btn px-3 py-2 btn-primary round_btn' style={{ "padding": "0 20px", fontWeight: '600', float: 'right' }}>Continue</button>

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
export default Step1




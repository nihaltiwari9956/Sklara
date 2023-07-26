import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import SideNav from "../../components/SideNav/SideNav";

function Assignment({ userdata }) {
  const [numOfSessions, setNumOfSessions] = useState(0);
  const [assignmentType,setAssignmentType] = useState('')
  const [assignmentName,setAssignmentName] = useState('')
  const [assignmentDescription,setAssignmentDescription] = useState('')
  const [uploadedDocs,setUploadedDocs] = useState('')
  const [uploadedDocsId,setUploadedDocsId] = useState('')
  const [activationDate,setActivationDate] = useState('')
  const [activationHour,setActivationHour] = useState('')
  const [activationMinute,setActivationMinute] = useState('')
  const [dueDate,setDueDate] = useState('')
  const [dueHour, setDueHour] = useState('')
  const [dueMinute,setDueMinute] = useState('')
const [activationTimeStart,setActivationTimeStart] = useState('')
const [activationTimeEnd,setActivationTimeEnd] = useState('')
const [durationHour,setDurationHour] = useState('')
const [durationMinute,setDurationMinute] = useState('')
const [assignmentStatus,setAssignmentStatus] = useState(false)

  return (
    <>
      <Navbar userdata={userdata} />
      <div>
        <div className="container-fluid px-1 Manage">
          <div className="row justify-content-center">
            <div className="row">
              <SideNav />
              <div
                style={{ width: "1245px", textAlign: "left" }}
                className="container "
              >
                <div style={{ paddingLeft: "32px" }}>
                  <p className="fw-bold my-5">Assignment Creator</p>

                  <p style={{ marginBottom: "0px" }} className="fw-bold">
                    Create an assignment for your event{" "}
                  </p>
                  <p className="text-muted">
                    After saving the assignment will be saved to your event, but
                    only visible the stated time frame.
                  </p>

                  <p className="fw-bold">Select type of Assignment</p>
                  <div style={{ margin: "10px 8px" }} className="border_input">
                    <select style={{ borderBottom: "none" }} value={assignmentType} onChange={(e)=>setAssignmentType(e.target.value)}>
                      <option selected disabled></option>
                      <option>Type One</option>
                      <option>Type Two</option>
                    </select>
                  </div>

                  <p className="text-muted" style={{ marginBottom: "0px" }}>
                    Session assignment are supposed to be done or completed in a
                    running session.
                  </p>
                  <p className="text-muted">
                    General assignment are supposed to be done or completed
                    before or after a session
                  </p>

                  <p className="fw-bold">Name of Assignment</p>
                  <form style={{ width: "28vh" }} class="d-flex search_bar">
                    <input
                      style={{ boxShadow: "0px 0px 4px rgb(0 0 0 / 25%)" }}
                      class="form-control search-input"
                      type="text"
                      value={assignmentName}
                      onChange={(e)=>setAssignmentName(e.target.value)}
                    />
                  </form>

                  <div className="form-group">
                    <p className="fw-bold">Description</p>
                    <textarea style={{ width: "1079px", height: "259px" }} 
                    value={assignmentDescription}
                    onChange={(e)=>setAssignmentDescription(e.target.value)}
                    />
                  </div>
                  <div className="d-flex">
                    <button
                      className="btn px-1 py-2 btn-primary round_btn"
                      style={{
                        backgroundColor: "#fff",
                        border: "1px solid grey",
                        color: "white",
                        width: "157px",
                        fontWeight: "600",
                      }}
                    >
                      Upload File
                    </button>
                  </div>

                  <div className="form-group" style={{ marginTop: "22px" }}>
                    <label class="col-md-4 control-label fw-bold">
                      Availability
                    </label>
                    <p className="text-muted small"> Activation Date</p>

                    <div
                      style={{ justifyContent: "space-between", width: "37%" }}
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
                      style={{ justifyContent: "space-between", width: "37%" }}
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
                    <div className="d-flex justify-content-end">
                      <button
                        className="btn btn-primary round_btn"
                        style={{
                          backgroundColor: "#fff",
                          border: "1px solid grey",
                          color: "white",
                          fontWeight: "600",
                          margin: "11px 0 ",
                          padding: "8px 40px ",
                        }}
                      >
                        Save
                      </button>
                    </div>           
                  </div>


                  <div className="form-group" style={{ marginTop: "22px" }}>
                    <label class="col-md-4 control-label fw-bold">
                      Availability
                    </label>
                    <p className="text-muted small">Activation time</p>

                    <div
                      style={{ justifyContent: "space-between", width: "50%" }}
                      className="d-flex align-items-center flex-wrap my-0"
                    >
                      <div
                        style={{ margin: "10px 8px" }}
                        className="border_input"
                      >
                        <select style={{ borderBottom: "none" }}>
                          <option>Time</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>

                      <div
                        style={{ margin: "10px 8px" }}
                        className="border_input"
                      >
                        <select style={{ borderBottom: "none" }}>
                          <option>Time</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>      
                     
                    </div>

                    <p className="text-muted small">Duration</p>

                    <div
                      style={{ justifyContent: "space-between", width: "58%" }}
                      className="d-flex align-items-center flex-wrap my-0"
                    >
                      <div
                        style={{ margin: "10px 8px" }}
                        className="border_input"
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

                     <div><input type="checkbox" checked={()=>setAssignmentStatus(true)} className='largeCheck'/> Enable</div>
                    </div>
                   
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Assignment;

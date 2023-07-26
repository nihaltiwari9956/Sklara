import React from "react";
import "./Step1.css"

function Step2() {
  return (
    <div style={{ paddingLeft: "32px" }} className="TrainingStep2">
      <div
        style={{ marginBottom: "-22px" }}
        className="d-flex align-items-center flex-wrap my-4"
      >
        <div className="input-group mx-0 mp-input-div d-flex flex-column">
        <p className="fw-bold my-2">Expected number of participants</p>
        <form style={{width:'460px', height: '57px'}} class="d-flex">
              <input style={{boxShadow: '0px 0px 10px rgb(0 0 0 / 10%);', height: '42px', borderRadius: '10px'}} class="form-control search-input" type="search" aria-label="Search" />
        </form> 
        </div>

        <div className="d-flex flex-column">
          <p className="fw-bold my-0">Preffered language of Delievery</p>
          <div style={{ margin: "10px 0px" }} className="border_input">
            <select style={{ borderBottom: "none" }}>
              <option>A off-the-shelf trainning</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
      </div>
      <p style={{ marginBottom: "0px" }} className="fw-bold">
        Are there any distinct problems that you or your team is focing?
      </p>
      <p className="text-muted">
        Trainers are able to design training content effective if they
        understand your problems and where exactly you want to improve.
      </p>
      <textArea
        style={{
          width: "1078px",
          height: "200px",
          border: "1px solid #e0d6d6",
          borderRadius: "10px",
          padding: "1rem"
        }}
      ></textArea>

<p style={{ marginBottom: "0px" }} className="fw-bold">
            What are your expectations?
      </p>
      <p className="text-muted">
        We will be able to meet your satisfaction if we know your expectations.
      </p>
      <textArea
        style={{
          width: "1078px",
          height: "200px",
          border: "1px solid #e0d6d6",
          borderRadius: "10px",
          padding: "1rem"

        }}
      ></textArea>
    </div>
  );
}

export default Step2;

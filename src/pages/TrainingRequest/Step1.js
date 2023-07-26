import React from "react";
import "./Step1.css";
import BookData from "./Data.json";
import SearchBar from "./SearchBar";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function Step1() {
  return (
    <div style={{ paddingLeft: "32px" }} className="TrainingStep1">
      <p style={{ marginBottom: "0px" }} className="fw-bold">
        For whom you are looking for a training?
      </p>
      <input
        class="input-checkbox"
        id="createaccount"
        type="checkbox"
        name="createaccount"
        value="1"
      />
      <p className="text-muted cent">For Myself (1:1)</p>
      <input
        class="input-checkbox"
        id="createaccount"
        type="checkbox"
        name="createaccount"
        value="2"
      />
      <p className="text-muted cent">For My team or a group of Colleagues</p>

      {/* <div className="input-group my-3 mp-input-div shadow-sm">
        <input
        style={{width: '560px'}}
          type="text"
          className="form-control"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <span style={{borderRadius: '0px 10px 10px 0px'}} className="input-group-text mp-icon" id="basic-addon2">
                Send Invite
          </span>
        </div>
      </div> */}
      <SearchBar placeholder="Enter a Name..." data={BookData} />

      <div className="d-flex align-items-start list_card-1 p-1 my-3" style={{overflowX:"scroll"}}>
       
            <div className="nav-box m-2 skill-box skillBtn">
            <p className="py-1 mb-0 px-1" style={{position : 'static', width: '222px', display: 'flex'}}>  
                <span className='mp-com-flag1'><img className='img-fluid' src="images/flags/French.png" alt="" /></span>
                <div className="deleteOpt"> Muskan Sirola <DeleteOutlineIcon fontSize="small" /> </div>
            </p>
            </div>
            <div className="nav-box m-2 skill-box skillBtn">
            <p className="py-1 mb-0 px-1" style={{position : 'static', width: '222px', display: 'flex'}}>  
                <span className='mp-com-flag1'><img className='img-fluid' src="images/flags/French.png" alt="" /></span>
                <div className="deleteOpt"> Muskan Sirola <DeleteOutlineIcon fontSize="small" /> </div>
            </p>
            </div>
      </div>
        
       

      <p style={{ marginBottom: "0px" }} className="fw-bold">
        What are you looking for?
      </p>
      <p className="text-muted">
        Describe briefly what you want to learn or excel. Based on your
        description your trainer will create a name for the training and design
        the training content and plan the sessions.
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

export default Step1;

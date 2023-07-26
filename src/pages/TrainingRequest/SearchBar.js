import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };


  return (
    <div className="TrainerSearch">
      <div className="searchInputs input-group my-3 mp-input-div shadow-sm">
        <input
        type="text"
        className="form-control"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
       <div className="input-group-append">
          <span style={{borderRadius: '0px 10px 10px 0px'}} className="input-group-text mp-icon" id="basic-addon2">
                Send Invite
          </span>
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <div className="dataItem" style={{position : 'static'}} >
                <span className='mp-com-flag1'><img className='img-fluid' src="images/flags/French.png" alt="" /></span>
                <p className="my-0">{value.title} </p>
                <p className="text-muted my-0">sirohamuskan@gmail.com </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
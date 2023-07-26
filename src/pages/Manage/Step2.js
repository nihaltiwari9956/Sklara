import React, { useState,useEffect } from "react";
import CreateIcon from "@mui/icons-material/Create";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
// import ReactChipInput from "react-chip-input";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from 'axios'
import {API} from '../../API'
import Modal from '@mui/material/Modal';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import swal from 'sweetalert'
import './manage.css'


ClassicEditor.defaultConfig = {
  toolbar: {
    items: [
      'heading',
      '|',
      'bold',
      'italic',
      'link',
      '|',
      'bulletedList',
      'numberedList',
      // '|',
      // 'insertTable',
      // '|',
      // 'imageUpload',
      // '|',
      // 'undo',
      // 'redo'
    ]
  },
  image: {
    toolbar: [
      'imageStyle:full',
      'imageStyle:side',
      '|',
      'imageTextAlternative'
    ]
  },
  table: {
    contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
  },
  language: 'en'
};

function Step2({setProceed, eventTitle, setEventTitle, focusSkill, setFocusSkill, description, setDesc, requirements, setRequirements,
  contents, setContents,numOfSessions, setNumOfSessions, maxParticipants,setMaxParticipants,language, setLanguage,eventLanugage}) {
  
    const [searchTerm, setSearchTerm] = useState('')
    const [searchData, setSearchData] = useState([]) 
    const [index, setIndex] = useState(null)
    const [blank, setBlank] = useState(false)
    const [editMode,setEditMode] = useState(false)

  useEffect(()=>{
    if(eventTitle.length > 0 && focusSkill.length > 0 && description.length > 0 &&
      requirements.length > 0 && contents.length > 0 && language.length > 0){
      setProceed(true)
    }else{
      setProceed(false)
    }
  },[eventTitle,focusSkill,description,requirements,contents,language])

  const setToggle = () => {
    if (editMode === false) {
      setEditMode(true)
    } else {
      setEditMode(false)
    }
  }

  const handleSearch = async () => {
    let res = await axios.get(`${API}/api/focusSkills/search/${searchTerm}`);
    if (res.data.status === 'ok') {
      setSearchData(res.data.data)
      // console.log('yes')
      //console.log(res)
      setBlank(false)
    } else if (res.data.data.length === 0) {
      setBlank(true)
    }
  }

  useEffect(() => {
    handleSearch();
  }, [searchTerm])

  //select funtion
  const handleSelect = async (skill, color) => {
    const exists = focusSkill.find(item => item.skill === skill)
    if (exists) {
      return swal('Error', 'This skill is alreay present in your profile', 'error')
    } else if (focusSkill.length >= 5) {
      return swal('Error', 'Already having 5 skills in your profile. Please remove one to add new skill', 'error')
    }
    swal('Success','Skill added successfully','success')

    const newData = {
      skill:skill,
      color:color,
    }
    setFocusSkill([...focusSkill,newData])
    console.log(focusSkill)
  }
  
  //delete function
  const removeSkill = async (i) => {
    const confirm = window.confirm('Are you sure you want to delete this skill')
    if (!confirm) {
      return
    }
    if (i > -1) {
     const newFocus =  focusSkill.splice(i, 1)
     setFocusSkill([...focusSkill])
    }
  }

  useEffect(()=>{
    setFocusSkill(focusSkill)
  },[removeSkill])
  // const [state, setstate] = useState({ tags:[]})

  // const addChip = (value) => {
  //     const tags = state.tags.slice();
  //     tags.push(value);
  //     setstate({...state,tags:tags});
  //   }
  //   const removeChip = (index) => {
  //     const tags = state.tags.slice();
  //     tags.splice(index, 1);
  //   setstate({...state,tags:tags });
  //   };

  return (
    <div style={{paddingLeft: '32px'}} className="step2">

        {/* for skill selection */}
        <Modal
          open={editMode}
          onClose={() => setEditMode(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className='modal-scroll py-5 center'

        >
          <div className='container bg-light p-4 px-5 mt-2'>
            <div className='d-flex justify-content-end'>
              <button className='btn btn-secondary btn-sm' onClick={() => setEditMode(false)}><CloseOutlinedIcon /></button>
            </div>
              <>
                <div className='row justify-content-center my-1'>
                  <div className='col-md-12'>
                    <h5 className='text-center'>Select the Skills, suitable for Training</h5>
                  </div>
                  <div className='col-md-12'>
                    <p className='text-center text-secondary'>Now, choose some skills you would like to add so we can better curate your events.</p>
                  </div>
                  <div className='col-md-4 my-3'>
                    <h5 className='text-center'>Add any skill you'd like</h5>
                    <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='form-control skill-search' placeholder={`Search for skills`} />
                    <h5 className='text-center mt-4'>Top Skills</h5>
                  </div>

                </div>
                <div className='row justify-content-center my-3'>
                  {searchData.length > 0 ? searchData.map((item, i) => (
                    <>
                      {item.skills && item.skills.map((itm) => (
                        <div className='m-2' style={{ width: 'auto' }}>
                          <button className='btn btn-rounded btn-outline-info' onClick={() => handleSelect(itm.skill, itm.color)}>{itm.skill}</button>
                        </div>
                      ))}
                    </>
                  )) :
                    <>
                      <div className='m-2' style={{ width: 'auto' }}>
                        <button className='btn btn-rounded btn-outline-info'>Life Skills</button>
                      </div>
                      <div className='m-2' style={{ width: 'auto' }}>
                        <button className='btn btn-rounded btn-outline-info'>Communication Skills</button>
                      </div>
                      <div className='m-2' style={{ width: 'auto' }}>
                        <button className='btn btn-rounded btn-outline-info'>Creative Skills</button>
                      </div>
                      <div className='m-2' style={{ width: 'auto' }}>
                        <button className='btn btn-rounded btn-outline-info'>Communication Skills</button>
                      </div>
                      <div className='m-2' style={{ width: 'auto' }}>
                        <button className='btn btn-rounded btn-outline-info'>IT Skills</button>
                      </div>
                      <div className='m-2' style={{ width: 'auto' }}>
                        <button className='btn btn-rounded btn-outline-info'>Management Skills</button>
                      </div>
                      <div className='m-2' style={{ width: 'auto' }}>
                        <button className='btn btn-rounded btn-outline-info'>Adaptability Skills</button>
                      </div>
                      <div className='m-2' style={{ width: 'auto' }}>
                        <button className='btn btn-rounded btn-outline-info'>Agile Skills</button>
                      </div>
                      <div className='m-2' style={{ width: 'auto' }}>
                        <button className='btn btn-rounded btn-outline-info'>Teamwork Skills</button>
                      </div>
                      <div className='m-2' style={{ width: 'auto' }}>
                        <button className='btn btn-rounded btn-outline-info'>Recruitment Skills</button>
                      </div>
                    </>
                  }
                  {searchData.length === 0 && searchTerm.length !== 0 && <h3 className='text-center text-danger my-5'>No matching value found</h3>}

                </div>
              </>
          </div>
        </Modal>


      <p className="fw-bold">What do you want to name this event?</p>
      <form class="d-flex edit_bar">
        <input
          style={{ boxShadow: "0px 0px 4px rgb(0 0 0 / 25%)" }}
          class="form-control search-input"
          type="text" value={eventTitle}
          onChange={(e)=>setEventTitle(e.target.value)}
          placeholder="Creative Thinking for Beginers"
          aria-label="Search"
        />
        <CreateIcon />
      </form>
      <p className="fw-bold">
        Select the skills area or areas that are most suitable for this training
      </p>

      <form class="d-flex search_bar">
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="SearchIcon"
        >
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
        <input
          class="form-control search-input"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onClick={()=>setEditMode(true)}
        />
      </form>
      {/* <ReactChipInput
                classes="class1 class2"
                chips={state.tags}
                onSubmit={value =>addChip(value)}
                onRemove={index => removeChip(index)}
        /> */}
      <div className="d-flex align-items-start list_card-1 p-1 my-3" style={{overflowX:"scroll"}}>
       {focusSkill.length > 0 && focusSkill.map((item,i)=>(
        <div
          className="nav-box m-2 skill-box skillBtn"
          onClick={()=>removeSkill(i)}
        >
          <p className="py-1 mb-0 px-1">
            {item.skill} <DeleteOutlineIcon fontSize="small" />
          </p>
        </div>
       ))}
        
      </div>
      <div className="form-group">
        <label class="col-md-4 control-label fw-bold">Description</label>
        <p className="text-muted small">
          Explain the objective and possible outcomes of the training.
        </p>
        <CKEditor
          editor={ClassicEditor}
          removePlugins= 'toolbar'
          allowedContent= 'p h1 h2 strong em; a[!href]; img[!src,width,height];'
          data={description}
          onChange={(event, editor) => {
            let data = editor.getData();
            setDesc(data);
          }}
        />
      </div>
      <div className="form-group">
        <label class="col-md-4 control-label fw-bold">Requirements </label>
        <p className="text-muted small">
          Explain if you want the participants to have prior knowledge or
          experience required for the training
        </p>
        <CKEditor
          editor={ClassicEditor}
          data={requirements}
          onChange={(event, editor) => {
            let data = editor.getData();
            setRequirements(data);
          }}
        />
      </div>
      <div className="form-group">
        <label class="col-md-4 control-label fw-bold">Contents</label>
        <p className="text-muted small">
          Explain the topic covered as a summary..
        </p>
        <CKEditor
          editor={ClassicEditor}
          data={contents}
          onChange={(event, editor) => {
            let data = editor.getData();
            setContents(data);
          }}
        />
      </div>

      <div style={{ marginBottom: "-22px" }} className="d-flex align-items-center flex-wrap my-4">
            
            <div className="input-group mx-4 mp-input-div shadow-sm d-flex flex-column">
            <p className="fw-bold">Enter the number of sessions</p>
                <input style={{width:'300px'}} type="number" value={numOfSessions}
               onChange={(e)=>setNumOfSessions(e.target.value)} className="form-control"
                />
            </div>

            <div className="input-group mx-4 mp-input-div shadow-sm d-flex flex-column">
            <p className="fw-bold">Maximum participants</p>
                <input style={{width:'300px'}} type="number" value={maxParticipants}
              onChange={(e)=>setMaxParticipants(e.target.value)}  className="form-control"
                />
            </div>

            <div className="input-group mx-4 mp-input-div shadow-sm d-flex flex-column">
            <p className="fw-bold">Language of Delivery</p>
                {/* <input style={{width:'300px'}} type="text" value={language}
               onChange={(e)=>setLanguage(e.target.value)} className="form-control"
                /> */}
   
                <select className="form-control w-100" style={{borderBottom: 'none'}} onChange={(e)=>setLanguage(e.target.value)}>
                    <option disabled selected>Select</option>
                    {eventLanugage.map((item)=>(
                      <option>{item}</option>
                    ))}
                </select>

            </div>
      </div>
    </div>
  );
}

export default Step2;

import React, { useState, useEffect } from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import StyleIcon from '@mui/icons-material/Style';
import DonutChart from './DonutChart';
import { Add, Circle, Delete, ImportantDevices } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import CalculateIcon from '@mui/icons-material/Calculate';
import axios from 'axios';
import { API } from '../../API';
import { isAutheticated } from '../../components/auth/authhelper';
import swal from 'sweetalert';
import PolarChart from '../../components/Charts/PolarChart';
import { PolarAreaChart } from '../../components/Charts/PolarAreaChart';
import DevProgress from '../profileDashboard/DevProgress';
import CircleIcon from '@mui/icons-material/Circle';
import Modal from '@mui/material/Modal';
import { CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import './skill.css'



const Skill = ({ userdata }) => {
  const [editMode, setEditMode] = useState(false)
  const { token } = isAutheticated()

  const [searchTerm, setSearchTerm] = useState('')
  const [searchData, setSearchData] = useState([])
  const [blank, setBlank] = useState(false)
  const [selected, setSelected] = useState(false)
  const [rating, setRating] = useState(5)
  const [step, setStep] = useState(1)
  const [skill, setSkill] = useState('')
  const [color, setColor] = useState('')
  const [utility, setUtility] = useState(1)
  const [priorityValue, setPriorityValue] = useState(1)
  const [skillValue, setSkillValue] = useState(1)
  const [updateMode, setUpdateMode] = useState(false)
  const [index, setIndex] = useState(null)
  const [modalShow, setModalShow] = useState(false);
  const [topSkills, setTopSkills] = useState([]);

  // console.log(utility)

  const setToggle = () => {
    if (editMode === false) {
      setEditMode(true)
    } else {
      setEditMode(false)
    }
  }
  //get top skills
  useEffect(() => {
    const getTopSkills = async () => {
      let res = await axios.get(`${API}/api/focusSkills`)
      if (res.data.status === 'ok') {
        console.log(res.data.data)
        setTopSkills(res.data.data)
      }
    };
    getTopSkills()
  }, [])
  console.log(topSkills)
  //search function
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

  let arr = [];
  let len = userdata && userdata.skills && userdata.skills.length || 0;
  arr.length = 5 - len;
  for (let i = 0; i <= 5 - len - 1; i++) {
    arr[i] = i
  }
  console.log(arr)

  //select funtion
  const handleSelect = async (skill, color) => {
    const exists = userdata.skills.find(item => item.skill === skill)
    if (exists) {
      return swal('Error', 'This skill is alreay present in your profile', 'error')
    } else if (userdata.skills.length >= 5) {
      return swal('Error', 'Already having 5 skills in your profile. Please remove one to add new skill', 'error')
    }

    //seting variables
    setSkill(skill)
    setColor(color)

  }
  //confirm Selection
  const confirmSelection = async () => {
    if (!skill || !skillValue || !priorityValue || !color || !utility) {
      return swal('Error', 'Please select all fields', 'error')
    }
    const newData = {
      skill: skill,
      skillValue: skillValue,
      priorityValue: priorityValue,
      color: color,
      utility: utility
    }
    // console.log(selectedItem)
    const updatedData = userdata.skills
    updatedData.push(newData)
    try {
      let res = await axios.patch(`${API}/api/user/update`, { skills: updatedData }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      //console.log(res)
      if (res.data.status === 'ok') {
        localStorage.setItem(
          "userData",
          JSON.stringify({
            userData: res.data.data
          }))
        swal('Success', 'Skill added successfully', 'success').then(() => {
          window.location.reload()
        })

      }
      setSkill('')
      setColor('')
      setUtility(1)
      setPriorityValue(1)
      setSkillValue(1)
    } catch (err) {
      console.log(err.message)
      swal('Error', `${err.response.message}`, 'error')
    }
  }

  //delete function
  const removeSkill = async (i) => {
    const confirm = window.confirm('Are you sure you want to delete this skill')
    if (!confirm) {
      return
    }
    if (i > -1) {
      // console.log(userdata.skills)
      userdata.skills.splice(i, 1)
      // console.log(userdata.skills)
      try {
        let res = await axios.patch(`${API}/api/user/update`, { skills: userdata.skills }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        //console.log(res)
        if (res.data.status === 'ok') {
          localStorage.setItem(
            "userData",
            JSON.stringify({
              userData: res.data.data
            }))
          swal('Success', 'Skill removed successfully', 'success').then(() => {
            window.location.reload()
          })

        }
      } catch (err) {
        console.log(err)
        swal('Error', `${err.message}`, 'error')
      }
    }
  }

  //editSkill
  const editSkill = async (i) => {
    setStep(2);
    setUpdateMode(true)
    setIndex(i)
    let s = userdata.skills[i].skill
    let u = userdata.skills[i].utility
    let p = userdata.skills[i].priorityValue
    let v = userdata.skills[i].skillValue
    setSkill(s)
    setUtility(u)
    setPriorityValue(p)
    setSkillValue(v)
  }

  const confirmUpdate = async () => {

    const newData = userdata.skills
    newData[index].utility = utility;
    newData[index].priorityValue = priorityValue;
    newData[index].skillValue = skillValue;
    newData[index].updatedAt = Date.now();

    try {
      let res = await axios.patch(`${API}/api/user/update`, { skills: newData }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      //console.log(res)
      if (res.data.status === 'ok') {
        localStorage.setItem(
          "userData",
          JSON.stringify({
            userData: res.data.data
          }))
        swal('Success', 'Skill updated successfully', 'success').then(() => {
          window.location.reload()
        })

      }
      setSkill('')
      setColor('')
      setUtility(1)
      setPriorityValue(1)
      setSkillValue(1)
    } catch (err) {
      console.log(err)
      swal('Error', `${err.message}`, 'error')
    }

  }
  function hexToRgbA(hex) {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split('');
      if (c.length == 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = '0x' + c.join('');
      return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',0.5)';
    }
    throw new Error('Bad Hex');
  }


  return (
    <>
      <Navbar userdata={userdata} />

      <div className='container-fluid main-div my-4'>
        <h1>Your Skill <span className='change-color'>Focus Areas</span></h1>
        <h6 className='text-muted'>You can add at the most 5 skills to your portfolio</h6>
        <div className='d-flex justify-content-end'>
          <Link to="/manage_skill" className='btn btn-primary text-light'><StyleIcon /> Manage</Link>
        </div>

        {/* Modal */}

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
              <button className='btn btn-secondary btn-sm' onClick={() => window.location.reload()}><CloseOutlinedIcon /></button>
            </div>
            {step === 1 &&
              <>
                <div className='row justify-content-center my-1'>
                  <div className='col-md-12'>
                    <h5 className='text-center'>Select the Skills You Want to Develop</h5>
                  </div>
                  <div className='col-md-12'>
                    <p className='text-center text-secondary'>Now, choose some skills you would like to develop so we can better curate your learning experience.</p>
                  </div>
                  <div className='col-md-4 my-3'>
                    <h5 className='text-center'>Add any skill you'd like</h5>
                    <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='form-control skill-search' placeholder={`Search for skills`} />
                    <h5 className='text-center mt-4'>Top Skills</h5>
                  </div>
                  {/* <div className='col-md-12'>
      {topSkills.map((items)=>{

        items.skills.map((itms)=>(
          <div className='col-md-2 m-2'>
        <button className='btn btn-rounded btn-outline-info' onClick={()=>handleSelect(itms.skill,itms.color)}>{itms.skill}</button>
        </div>
        ))

      })}
    </div> */}

                </div>
                <div className='d-flex flex-wrap justify-content-center my-3'>
                  {searchData.length > 0 ? searchData.map((item, i) => (
                    <>
                      {item.skills && item.skills.map((itm) => (
                        <div className='m-1' style={{ width: 'auto' }}>
                          <button className={skill !== itm.skill ? 'btn btn-rounded btn-outline-info' : 'btn btn-rounded btn-info'} onClick={() => handleSelect(itm.skill, itm.color)}>{itm.skill}</button>
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
                <div className='d-flex justify-content-end'>
                  <button className='btn btn-primary' disabled={!skill && !color} onClick={() => setStep(2)}>Next</button>
                </div>
              </>
            }
            {step === 2 &&
              <>
                <div className='row justify-content-center my-3'>
                  <h5 className='text-center my-5'>How import or critical is this Skill related to your career?</h5>
                  <div className='d-flex justify-content-between'>
                    <h6>Not so critical</h6>
                    <h6>Sometimes it's useful</h6>
                    <h6>Critical</h6>
                    <h6>Very critical</h6>
                  </div>
                  <input type="range" class="form-range" min="1" max="4" step="1" value={utility} onChange={(e) => setUtility(e.target.value)} id="customRange3"></input>
                </div>

                <div className='row justify-content-center my-5'>
                  <h5 className='text-center my-5'>How soon you want to start mastering this skill?</h5>
                  <div className='d-flex justify-content-between'>
                    <h6>As soon as<br></br>possible</h6>
                    <h6>In a few months</h6>
                    <h6>Whenever possible, with<br></br> no stress</h6>
                    <h6>No time limit</h6>
                  </div>
                  <input type="range" class="form-range" min="1" max="4" step="1" value={priorityValue} onChange={(e) => setPriorityValue(e.target.value)} id="customRange3"></input>
                </div>

                <div className='d-flex justify-content-between'>
                  <button className='btn btn-primary' onClick={() => setStep(1)}>Back</button>
                  <button className='btn btn-primary' disabled={!utility && !priorityValue} onClick={() => setStep(3)}>Next</button>
                </div>

              </>
            }
            {step === 3 &&
              <>
                <div className='row justify-content-center my-3'>
                  <h3 className='text-center mt-5 mb-2'>It's Time to Rate Yourself on Your Skills!</h3>
                  <h5 className='text-center'>Rate your skills to find relevant learning content and to keep tracks of your progress.</h5>
                  <div className='card my-5 py-5'>

                    <h1 className='text-center mb-5'>{skill}</h1>

                    <div className='d-flex justify-content-between'>
                      <h6>1</h6>
                      <h6>2</h6>
                      <h6>3</h6>
                      <h6>4</h6>
                      <h6>5</h6>
                      <h6>6</h6>
                      <h6>7</h6>
                      <h6>8</h6>
                      <h6>9</h6>
                      <h6>10</h6>

                    </div>
                    <input type="range" class="form-range" min="1" max="10" step="1" value={skillValue} onChange={(e) => setSkillValue(e.target.value)} id="customRange3"></input>
                    <div className='d-flex justify-content-between'>
                      <h6>BEGINNER</h6>
                      <h6>EXPERT</h6>
                    </div>
                  </div>
                </div>
                <div className='d-flex justify-content-between'>
                  <button className='btn btn-primary' onClick={() => setStep(2)}>Back</button>
                  {updateMode ?
                    <button className='btn btn-primary' disabled={!skillValue} onClick={confirmUpdate}>Update</button>
                    :
                    <button className='btn btn-primary' disabled={!skillValue} onClick={confirmSelection}>Confirm</button>
                  }

                </div>
              </>
            }
          </div>
        </Modal>

        {/* skill selection ends */}

        <div className='my-4'>
          <div className='d-flex justify-content-center overflow-auto py-5 w-100'>
            {userdata.skills.length > 0 && userdata.skills.map((item, i) => (
              <div className='mx-3 blank-donut main-donut card px-3 p-4' style={{ width: "260px" }}>
                <h6 className='center my-3' style={{ color: item.color }}>{item.skill}</h6>
                {editMode &&
                  <div className='d-flex donut-action-div'><Delete className='donut-action-item text-danger' onClick={() => removeSkill(i)} /><CalculateIcon onClick={() => editSkill(i)} className='donut-action-item text-success' /></div>
                }
                {/* <DonutChart value={item.skillValue} color={item.color} rate={item.skillValue}/> */}
                <div style={{ width: 200, height: 200 }} className="center">
                  <CircularProgressbarWithChildren
                    // text={`${item.skillValue}/10`}
                    value={item.skillValue * 10}
                    strokeWidth={15}
                    styles={{
                      // Customize the root svg element
                      root: {
                      },
                      path: {
                        stroke: `${item.color}`,
                        strokeLinecap: "round",
                      },
                      trail: {
                        stroke: hexToRgbA(item.color),
                      },
                      text: {
                        fill: '#8441AF',
                        fontSize: '1rem',
                        fontWeight: "800"
                      },
                    }}
                  >
                    <div className='d-flex align-items-baseline'><h1 className='mb-0' style={{ color: item.color, lineHeight: '1' }}>{item.skillValue}</h1><h4 style={{ color: item.color }}>/10</h4></div>
                  </CircularProgressbarWithChildren>
                  {/* <CircularProgressbar value={66} /> */}
                </div>
              </div>
            ))}
            {/* {userdata.skills.length <=4 &&
<div className='mx-3 blank-donut card p-4'>
<h5 className='center my-3' style={{color:"#fff"}}>-</h5>
<DonutChart value={10} color='#BFBFBF'/>
 <div className='blank-div-items d-flex justify-content-center align-items-center center mt-5'>
 <Add sx={{ fontSize: 50 }} style={{color:'lightgray', cursor:'pointer'}} onClick={setToggle}/>

</div>
<div style={{width:'180px'}} className="mt-4 text-center">
  <h6 style={{color:"lightgray"}}>Click the add icon to add another focus skill</h6>
</div>
<div className='blank-donut-item2'>
<Add sx={{ fontSize: 80 }} style={{color:"lightgreen", cursor:'pointer'}} onClick={setToggle}/>
</div>
 <div className='circle2'></div>
</div>
} */}

            {/* <div className='mx-3 blank-donut card p-4'>
 <h5 className='center my-3' style={{color:"#fff"}}>-</h5>
 <div className='blank-donut-item'>
<SentimentVeryDissatisfiedIcon sx={{ fontSize: 50 }} style={{color:"#BFBFBF"}}/>
</div>
 <div className='circle'></div>
 </div> */}

            {arr.length > 0 && arr.map(() => (
              <div className='mx-3 blank-donut card p-4' style={{ width: "260px" }}>
                <h5 className='center my-3' style={{ color: "#fff" }}>-</h5>
                <div className='blank-div-items d-flex justify-content-center align-items-center center mt-5'>
                  <Add sx={{ fontSize: 50 }} style={{ color: 'lightgray', cursor: 'pointer' }} onClick={setToggle} />

                </div>
                <div style={{ width: '180px' }} className="mt-4 text-center">
                  <h6 style={{ color: "lightgray" }}>Click the add icon to add another focus skill</h6>
                </div>
              </div>

            ))}

          </div>
        </div>

        <div className='row justify-content-between mt-5'>
          <div className='col-md-6'>
            <h2 className=''>Your Skill <span className='heading'>Priorities Graph</span></h2>
            <p className='fw-light text-secondary'>Based on your skill utility & urgency</p>
            <div className='card px-3 polar-div-in' style={{ height: '90%' }}>
              <div className='skill-value'>
                <div className='felx flex-column'>
                  {userdata.skills.length > 0 && userdata.skills.map((item) => (
                    <h6 style={{ color: item.color }} className="py-0 my-0">{item.priorityValue === 1 && '100'}
                      {item.priorityValue === 2 && '75'}
                      {item.priorityValue === 3 && '50'}
                      {item.priorityValue === 4 && '25'}
                      %</h6>
                  ))}
                </div>
              </div>
              <PolarChart skills={userdata.skills.reverse()} />
              <div className='row'>
                <hr></hr>
                {userdata.skills.length > 0 && userdata.skills.map((item) => (
                  <div className='col-md-4'>
                    <div className='d-flex'>
                      <CircleIcon style={{ color: item.color }} />
                      <p className='fw-light'>{item.skill}</p>
                    </div>
                  </div>
                ))}
                <hr></hr>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <h2 className=''>Your Skill <span className='heading'>Levels Graph</span></h2>
            <p className='fw-light text-secondary'>Based on your skill utility & urgency</p>
            <div className='card px-3'>
              <div className='p-5'>
                <PolarAreaChart skills={userdata.skills} />
              </div>
              <div className='row'>
                <hr></hr>
                {userdata.skills.length > 0 && userdata.skills.map((item) => (
                  <div className='col-md-4'>
                    <div className='d-flex'>
                      <CircleIcon style={{ color: item.color }} />
                      <p className='fw-light'>{item.skill}</p>
                    </div>
                  </div>
                ))}
                <hr></hr>
              </div>
            </div>
          </div>


        </div>

        <div className='row justify-content-center'>
          <DevProgress skills={userdata.skills} />
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Skill

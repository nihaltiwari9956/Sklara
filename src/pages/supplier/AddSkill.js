import React, { useState, useEffect, useRef } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CameraIcon from '@mui/icons-material/Camera';
import { Carousel, Card } from 'react-bootstrap';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './skill.css'
import { Search } from '@mui/icons-material';
import axios from 'axios';
import { API } from '../../API';
import { isAutheticated } from '../../components/auth/authhelper';
import swal from 'sweetalert';
import DonutChart from './DonutChart';
import { Button, Modal, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AddSkill = ({ userdata }) => {
  const { token } = isAutheticated();

  const [searchTerm, setSearchTerm] = useState('')
  const [searchData, setSearchData] = useState([])
  const [blank, setBlank] = useState(false)
  const [rating, setRating] = useState(5)
  const [toggle, setToggle] = useState(false)

  const addToggle = () => {
    if (toggle === false) {
      setToggle(true)
    } else {
      setToggle(false)
    }
  }


  const ref = useRef(null);

  const onPrevClick = () => {
    ref.current.prev();
  };
  const onNextClick = () => {
    ref.current.next();
  };

  //for modal---------------------------
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //---------------------------------

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
  // console.log(searchData)



  const handleSelect = async (skill, color) => {
    const exists = userdata.skills.find(item => item.skill === skill)
    if (exists) {
      return swal('Error', 'This skill is alreay present in your profile', 'error')
    } else if (userdata.skills.length >= 5) {
      return swal('Error', 'Already having 5 skills in your profile. Please remove one to add new skill', 'error')
    }
    setShow(true)
    console.log(show)

    const newData = {
      skill: skill,
      skillValue: rating,
      priorityValue: 1,
      color: color,
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
    } catch (err) {
      console.log(err)
      swal('Error', `${err.message}`, 'error')
    }

  }

  return (
    <>
      <Navbar userdata={userdata} />
      <>
        {/*
         <Modal show={show} onHide={handleClose} className="p-4">
        <Modal.Header closeButton>
          <Modal.Title>Rating</Modal.Title>
        </Modal.Header>
        <Modal.Body>Give yourself rating out of 10</Modal.Body>
        <FormControl onChange={(e)=>setRating(e.target.value)} type="number"  min="1" max="10" placeholder='Rate'/>
        <Modal.Footer>
          <Button variant="secondary" disabled={!rating} onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
     */}
      </>

      <div className='container'>
        <button className='btn-primary btn my-3' onClick={addToggle}>{toggle ? 'Hide' : 'Add Skill'}</button>
        {/* for skill selection */}
        {toggle &&
          <>
            <div className='container center'>
              <div className='col-md-3 mb-5'>
                <h5 className='text-center'>Add any skill you'd like</h5>
                <input type="text" onChange={(e) => setSearchTerm(e.target.value)} className='form-control skill-search' placeholder={`Search for skills`} />
              </div>
            </div>
            <div className='container'>
              <div className='row justify-content-center my-3'>
                {searchData.length > 0 && searchData.map((item, i) => (
                  <>
                    {item.skills && item.skills.map((itm) => (
                      <div className='col-md-2 m-2'>
                        <button className='btn btn-rounded btn-outline-info' onClick={() => handleSelect(itm.skill, itm.color)}>{itm.skill}</button>
                      </div>
                    ))}
                  </>

                ))}
                {searchData.length === 0 && searchTerm.length !== 0 && <h3 className='text-center text-danger my-5'>No matching value found</h3>}
              </div>
            </div>
          </>
        }
        {/* skill selection ends */}


        <div className='d-flex justify-content-between my-5'>
          <h2 className='mb-3'>Your Skill <span className='heading'>Focus Areas</span></h2>
          <div>
            <button
              className="carousel-buttons mx-2 mb-3 mr-1 pb-1 shadow-sm"
              onClick={onPrevClick}
            >
              <ArrowBackIosNewIcon fontSize='small' />
            </button>
            <button
              className="carousel-buttons mb-3 pb-1 shadow-sm"
              onClick={onNextClick}
            >
              <ArrowForwardIosIcon fontSize='small' />
            </button>
          </div>
        </div>
        <Carousel ref={ref} nextIcon="false" prevIcon="false" indicators={false} controls={false} interval={null}>
          <Carousel.Item>
            <div className='row'>
              {userdata.skills.length > 0 && userdata.skills.slice(0, 3).map((item, i) => (

                <div className='col-lg-4 col-sm-12'>
                  <Card className='py-1'>
                    <h5 className='center' style={{ color: item.color }}>{item.skill}</h5>
                  </Card>
                  <DonutChart value={item.skillValue} color={item.color} rate={item.skillValue} />
                </div>
              ))}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='row'>
              {userdata.skills.length > 0 && userdata.skills.slice(3).map((item, i) => (

                <div className='col-lg-4 col-sm-12'>
                  <Card className='py-1'>
                    <h5 className='center' style={{ color: item.color }}>{item.skill}</h5>
                  </Card>
                  <DonutChart value={item.skillValue} color={item.color} rate={item.skillValue} />
                </div>
              ))}
            </div>
          </Carousel.Item>
          {/* {userdata.skills.length < 5 &&
             <Carousel.Item>
                <div className='row'>
                  
                    
                     <div className='col-lg-4 col-sm-12'>
                        <Card className='py-1'>
                       <h5 className='center heading'>Add Another</h5>
                       </Card>
                    </div>
             </div>
             </Carousel.Item>
 */}

        </Carousel>

        <Link to="/manage_skill" className='btn btn-primary center my-5'>Manage Skills</Link>

      </div>

      <Footer />
    </>
  )
}

export default AddSkill

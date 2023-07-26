import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import Search from '@mui/icons-material/Search';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import Flags from 'country-flag-icons/react/3x2'
import Select, { components } from "react-select";
import PersonIcon from '@mui/icons-material/Person';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import ReactCountryFlag from "react-country-flag"
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShopTwoOutlinedIcon from '@mui/icons-material/ShopTwoOutlined';
import FilterCenterFocusOutlinedIcon from '@mui/icons-material/FilterCenterFocusOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import LogoutIcon from '@mui/icons-material/Logout';
import { isAutheticated, signout } from '../auth/authhelper';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ForumIcon from '@mui/icons-material/Forum';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';


import './navbar.css'
import { FolderCopyOutlined, ManageAccounts, Password, People } from '@mui/icons-material';
import ReactFlagsSelect from 'react-flags-select';


const Navbar = ({ userdata }) => {
  const [selected, setSelected] = useState("US");
  const navigate = useNavigate()
  let location = useLocation();
  const userFlag = useRef()
  const options = [
    { value: "England", label: "English", icon: "assets/britishflag.png" },
    // { value: "Germany", label: "Germany", icon: "germany.svg" }
  ];

  const { Option } = components;
  const IconOption = props => (
    <Option {...props}>
      <img
        src={require('./' + props.data.icon)}
        style={{ width: 36 }}
        alt={props.data.label}
      />
      {props.data.label}
    </Option>
  );

  const ActiveClr = (curr) => {
    if (location.pathname === curr) {
      return "active";
    }
  };

  //console.log(userdata)
  const signOut = () => {
    navigate('/')
    signout()
  }

  const modeChanger = (mode) => {
    userdata.mode = mode
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userData: userdata
      }))
    swal('Success', 'Mode changed successfully', 'success').then(() => {
      window.location.reload()
    })
  }
  const onSelectFlag = (countryCode) => {
    console.log(userFlag);

    // userFlag.current.updateSelected(countryCode)
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light nav-div" style={{ backgroundColor: "transparent", padding: '1rem 4%' }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/dashboard"><img src={'./assets/sklaralogo.svg'} className="sklara-logo" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">

            <form className="d-flex search_bar">
              <Search />
              <input className="form-control search-input" type="search" placeholder={'Search'} aria-label="Search" />

            </form>

            <ul className="navbar-nav mb-2 mb-lg-0">
              <div className='d-flex'>
                <li className="nav-item box shadow-sm py-0">
                  <Link className="nav-link" to="/"><ForumIcon style={{ fontSize: '30px' }} /></Link>
                </li>
                <li className="nav-item box mx-3 shadow-sm py-0">
                  <Link className="nav-link" to="/"><NotificationsIcon style={{ fontSize: '30px' }} /></Link>
                </li>
                <div class="btn-group dropafter box shadow-sm py-0" style={{ width: '190px' }}>
                  <button type="button" className="btn dropdown-toggle d-flex justify-content-between align-items-center py-1" data-bs-toggle="dropdown" aria-expanded="false">

                    {userdata && userdata.profilePicture ?
                      <img src={userdata.profilePicture} className="dp-logo" alt='profile image' />
                      :
                      <AccountCircleOutlinedIcon style={{ marginRight: '20px', fontSize: "30px" }} />
                    }
                    <>

                      {userdata && <h6 className='fw-bold py-0 mb-0 mt-1'>{userdata.firstName} <KeyboardArrowDownRoundedIcon style={{ color: "#8C8C8C" }} className='down-icon' /></h6>}


                    </>
                  </button>
                  <ul class="dropdown-menu" style={{ width: '220px' }}>
                    {/* <li><AccountCircleOutlinedIcon /> {userdata && userdata.firstName} </li>
                    <li><hr class="dropdown-divider" /></li> */}
                    <li><Link className="nav-link" to="/"><DashboardIcon style={{ color: '#550b7c' }} /> Learning Dashboard</Link></li>
                    <li><Link className="nav-link" to="/profile"><PersonIcon style={{ color: '#ffc100' }} /> My Profile</Link></li>
                    <li onClick={() => modeChanger(userdata.mode === 'training' ? 'coaching' : 'training')}><Link className="nav-link" to="">
                      <SwitchAccountIcon style={{ color: '#0062e3' }} /> {userdata.mode === 'training' ? 'Switch to Training' : 'Switch to Coaching'}
                    </Link></li>
                    <li><Link className="nav-link" to="/"><ContentCopyOutlinedIcon style={{ color: '#28a745' }} /> Booking Requests</Link></li>
                    {/* <li><hr class="dropdown-divider" /></li> */}
                    {/* <li><Link className="nav-link" to="/"><TranslateOutlinedIcon /> Change Language</Link></li> */}
                    <li onClick={(e) => e.stopPropagation()}>
                      <ReactFlagsSelect
                        optionsSize={13}
                        onSelect={(code) => setSelected(code)}
                        selected={selected}

                        showOptionLabel={true}
                        ref={userFlag}
                        showSelectedLabel={true}
                        countries={["US", "FR", "IN", "IT"]}
                        customLabels={{ "US": "English", "FR": "French", "IN": "Hindi", 'IT': 'Italian' }}
                      />
                    </li>
                    {userdata && userdata.userType === 'hr' &&
                      <li><Link className="nav-link" to="/employee_list"><People /> Your Employees</Link></li>
                    }
                    {/* <li><Link className="nav-link" to="/changePassword"><Password /> Change Password</Link></li> */}
                    <li><hr class="dropdown-divider" /></li>
                    {isAutheticated() &&
                      <li><Link className="nav-link" to="/" onClick={signOut}><LogoutIcon style={{ color: '#F37658 ' }} /> Logout</Link></li>
                    }
                  </ul>
                </div>
              </div>
            </ul>

          </div>
        </div>
      </nav>

      {/* bottom navigation */}

      <nav className="navbar navbar-expand-lg navbar-light  nav-div px-5" style={{ backgroundColor: "transparent", borderBottom: '1px solid lightGray' }}>
        <div className="container-fluid">
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button> */}
          <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <div className='d-flex'>
                <li className={`nav-item ${ActiveClr("/")}`}>
                  <Link className="nav-link" to="/"><HomeOutlinedIcon /> Home</Link>
                </li>
                <li className={`nav-item ${ActiveClr("/calendar")}`}>
                  <Link className="nav-link" to="/calendar"><EventOutlinedIcon /> Learning Plan</Link>
                </li>
                <li className={`nav-item ${ActiveClr("/market_place")}`}>
                  <Link className="nav-link" to="/market_place"><ShopTwoOutlinedIcon /> Market Place</Link>
                </li>
                <li className={`nav-item ${ActiveClr("/focus_skill")}`}>
                  <Link className="nav-link" to="/focus_skill"><FilterCenterFocusOutlinedIcon /> Focus Area</Link>
                </li>

                {userdata && userdata.userType === 'hr' &&
                  <li className={`nav-item ${ActiveClr("/employee_list")}`}>
                    <Link className="nav-link" to="/employee_list"><FolderCopyOutlined /> Manage</Link>
                  </li>
                }
                {userdata && userdata.userType === 'hr' &&
                  <li className={`nav-item ${ActiveClr("/performance")}`}>
                    <Link className="nav-link" to="/performance"><FolderCopyOutlined /> Performance</Link>
                  </li>
                }
                {userdata && userdata.userType === 'supplier' &&
                  <li className={`nav-item ${ActiveClr("/EventManage")}`}>
                    <Link className="nav-link" to="/EventManage"><FolderCopyIcon /> Manage</Link>
                  </li>
                }
              </div>
            </ul>
          </div>
          {/*userdata && userdata._id &&
          <ul className="navbar-nav mb-2 mb-lg-0">
          <div className='d-flex'>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <SchoolOutlinedIcon style={{ color: 'green' }} /> {userdata.mode === 'training' ? 'Training Mode' : 'Coaching Mode'}
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li onClick={()=>modeChanger(userdata.mode === 'training' ?'coaching' : 'training')}><Link className="dropdown-item" to="/">
                    <CastForEducationOutlinedIcon style={{ color: "blue" }} /> {userdata.mode === 'training' ?'Coaching Mode' : 'Training Mode'}</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown dropleft">
                <Link className="nav-link dropdown-toggle dropleft" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={'./assets/britishflag.png'} className='language-logo' /> English
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/">
                    <img src={'./assets/germanflag.png'} className='language-logo' /> German</Link></li>
                </ul>
              </li>
            </div>
          </ul>
                */}
        </div>
      </nav>
    </>
  )
}

export default Navbar


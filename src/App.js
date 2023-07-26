import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './components/Calender/Calender.css'
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Login from './pages/Login';
import Profile from './pages/Profile/Profile';
import MarketPlace from './pages/MarketPlace/MarketPlace';

import ProfileDashboard from './pages/profileDashboard/ProfileDashboard';
import CoachProfile from './pages/CoachProfile/CoachProfile';
import { isAutheticated } from './components/auth/authhelper';
import axios from 'axios';
import { API } from './API';
import NotFound from './pages/notFound/NotFound';
import TrainerProfile from './pages/TrainerProfile/TrainerProfile';
import ChangePassword from './pages/changePassword/ChangePassword';
import SPDashboard from './pages/SPDashboard';
import { Dashboard } from '@mui/icons-material';
import NewDashboard from './pages/NewDashboard/NewDashboard';
import AddSkill from './pages/supplier/AddSkill';
import SpDashboard from './pages/NewDashboard/SP_dashboard';
import CalendarPage from './pages/Calender/CalendarPage';
import ManageSkill from './pages/supplier/ManageSkill';
import Skill from './pages/supplier/Skill';
import StepperForm from './pages/StepperForm/StepperForm';
import EmployeeList from './pages/Employee/EmployeeList';
import AddUser from './pages/Employee/AddUser';
import EmployeeForm from './pages/StepperForm/EmployeeStepper/EmployeeForm';
import YourEvent from './pages/Manage/YourEvent';
import ManageForm from './pages/Manage/ManageForm';
import QuizCreater from './pages/QuizCreater/step1'
import Quiz from "./pages/QuizCreater/Quiz"
import New_question from "./pages/QuizCreater/New_question"
import HRForm from './pages/StepperForm/HrStepper/HrForm';
import SPForm from './pages/StepperForm/SPStepper/SPForm';
import Performance from './pages/PerformancePage/Performance';
import Assignment from './pages/Manage/Assignment';
import OpenRequest from './pages/YourRequest/OpenRequest';
import BookingRequest from './pages/YourRequest/BookingRequest';
import TrainerForm from './pages/TrainingRequest/TrainerForm';
import Test from './pages/test/Test';

function App() {
  const [userdata, setUserData] = useState(null)
  const { token } = isAutheticated()
  //console.log(token)

  useEffect(() => {
    getUser()

  }, []);
  //getting user profile
  const getUser = async () => {
    let existanceData = JSON.parse(localStorage.getItem("userData"));
    if (existanceData) {
      // console.log(existanceData.userData)
      setUserData(JSON.parse(localStorage.getItem("userData")).userData);
    } else {
      try {
        console.log('requesting user data from server')
        const response = await axios.get(`${API}/api/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        //console.log(response)

        //setUserData(response.data.data);
        localStorage.setItem(
          "userData",
          JSON.stringify({
            userData: response.data.data
          })
        );
        setUserData(JSON.parse(localStorage.getItem("userData")).userData);

      }
      catch (err) {
        console.log(err);
      };
    }

  }
  console.log(userdata)

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={userdata && userdata._id ? <NewDashboard userdata={userdata} /> : <Login />}></Route>
        <Route exact path="/api/signup/:signToken" element={userdata && userdata._id ? <NewDashboard userdata={userdata} /> : <Login />}></Route>
        <Route exact path="/market_place" element={userdata && userdata._id ? <MarketPlace userdata={userdata} /> : <Login />}></Route>
        <Route exact path="/profile" element={userdata && userdata._id ? <Profile userdata={userdata} /> : <Login />}></Route>
        <Route exact path="/coachprofile" element={userdata && userdata._id ? <CoachProfile userdata={userdata} /> : <Login />}></Route>
        <Route exact path="/old_dashboard" element={userdata && userdata._id ? <ProfileDashboard userdata={userdata} /> : <Login />}></Route>

        {userdata && userdata.userType === 'supplier' &&
          <Route exact path="/dashboard" element={userdata && userdata._id ? <><Navbar userdata={userdata} /><SpDashboard userdata={userdata} /> <Footer /> </> : <Login />}></Route>
        }

        <Route exact path="/dashboard" element={userdata && userdata._id ? <NewDashboard userdata={userdata} /> : <Login />}></Route>

        <Route exact path="/trainer_profile" element={userdata && userdata._id ? <TrainerProfile userdata={userdata} /> : <Login />}></Route>
        <Route exact path='/changePassword' element={userdata && userdata._id ? <ChangePassword userdata={userdata} /> : <Login />}></Route>
        {/* <Route exact path="/sp_dashboard" element={userdata && userdata._id ? <SPDashboard userdata={userdata} /> : <Login />}></Route> */}

        <Route exact path="/calendar" element={userdata && userdata._id ? <><Navbar userdata={userdata} /><CalendarPage userdata={userdata} /> <Footer /> </> : <Login />}></Route>
        <Route exact path="/add_skill" element={userdata && userdata._id ? <AddSkill userdata={userdata} /> : <Login />}></Route>
        <Route exact path="/manage_skill" element={userdata && userdata._id ? <ManageSkill userdata={userdata} /> : <Login />}></Route>
        <Route exact path="/focus_skill" element={userdata && userdata._id ? <Skill userdata={userdata} /> : <Login />}></Route>
        <Route exact path="/emp_form" element={userdata && userdata._id ? <EmployeeForm userdata={userdata} /> : <Login />}></Route>
        <Route exact path="/sp_form" element={userdata && userdata._id ? <SPForm userdata={userdata} /> : <Login />}></Route>
        <Route exact path="/hr_form" element={userdata && userdata._id ? <HRForm userdata={userdata} /> : <Login />}></Route>
        <Route exact path="/performance" element={userdata && userdata._id ? <><Navbar userdata={userdata} /><Performance userdata={userdata} /><Footer /> </> : <Login />}></Route>
        <Route exact path="/Manage_form" element={userdata && userdata._id ? <ManageForm userdata={userdata} /> : <Login />}></Route>
        <Route exact path="/OpenRequest" element={userdata && userdata._id ? <OpenRequest userdata={userdata} /> : <Login />}></Route>
        <Route exact path="/BookingRequest" element={userdata && userdata._id ? <BookingRequest userdata={userdata} /> : <Login />}></Route>
        <Route exact path="/training_request_form" element={userdata && userdata._id ? <TrainerForm userdata={userdata} /> : <Login />}></Route>

        {/* quiz creater */}
        <Route exact path="/Quiz_Creater" element={userdata && userdata._id ? <QuizCreater userdata={userdata} /> : <Login />}></Route>
        <Route exact path="/Quiz_Creater/Quiz" element={userdata && userdata._id ? <Quiz userdata={userdata} /> : <Login />}></Route>
        <Route exact path="/Quiz_Creater/New_question" element={userdata && userdata._id ? <New_question userdata={userdata} /> : <Login />}></Route>

        {/*  */}
        <Route exact path="/EventManage" element={userdata && userdata._id ? <YourEvent userdata={userdata} /> : <Login />}></Route>
        <Route exact path="/Assignment" element={userdata && userdata._id ? <Assignment userdata={userdata} /> : <Login />}></Route>
        <Route exact path="/employee_list" element={userdata && userdata._id && userdata.userType === 'hr' ? <EmployeeList userdata={userdata} /> : <Login />}></Route>
        <Route exact path="/employee_list/Add" element={userdata && userdata._id && userdata.userType === 'hr' ? <AddUser userdata={userdata} /> : <Login />}></Route>
        <Route exact path='*' element={<NotFound userdata={userdata} />} />
      
      {/* Test */}
      <Route exact path="/test" element={userdata && userdata._id ? <Test userdata={userdata} /> : <Login />}></Route>

      </Routes>
    </Router>

  );
}

export default App;

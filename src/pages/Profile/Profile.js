import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import './Profile.css';
import ContactFooter from '../../components/ContactFooter/ContactFooter';
import { user } from '../../components/auth/authhelper';
import { useEffect, useState } from 'react';
import formatDistance from 'date-fns/formatDistance'



function Profile({ userdata }) {
  console.log(userdata)
  const [profPic, setProfPic] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png")
  const LanguageArr = userdata.communicationLanguages;

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  const firstLogin = formatDate(userdata.firstLogin)
  const lastLogin = userdata.lastLogin && formatDate(userdata.lastLogin)

  useEffect(() => {
    if (userdata.profilePicture) {
      setProfPic(userdata.profilePicture)
    }
  }, [])


  function getTimeFormat(dateStr) {

    const str = formatDistance(
      new Date(dateStr),
      new Date()
    );
    return <>{str}</>

  }


  return (
    <>
      <Navbar userdata={userdata} />
      <div className='outer-profile container-fluid main-div pt-3'>
        <div className='container-fluid px-0'>
          <h2 className='change-color'>My Profile</h2>
          <p className='text-muted'><small>Trainer & Coaches can see limited information about you </ small></p>
          <div className='row'>
            <div className='col-lg-6 col-sm-12 common-card'>
              <div className="card">
                <button type="button" className="btn profile-settings"><i class="fa-solid fa-gear"></i></button>
                <img src={profPic} className="card-img-top profile-image" alt="..." />
                <div className="card-body">
                  {userdata.communicationLanguages && userdata.communicationLanguages.map((item, i) => {
                    return (
                      <>
                        <span className='profile-flag1' style={{ right: `${2 * i}rem` }}><img className="img-fluid" src={`/images/flags/${item}.png`} alt="" /></span>

                      </>
                    )
                  })}
                  {/* <span className='profile-flag1'><img className="img-fluid" src="/images/flags/French.png" alt="" /></span>

                <span className="profile-flag1"><img className="img-fluid" src="/images/flags/English.png" alt="" /></span> */}
                  <h4 className="card-title mb-5">{userdata.firstName} {userdata.lastName}</h4>
                  <p className='mb-5' style={{ "color": "#cccccc" }}><small>{userdata.UserRoleType}</small></p>
                  <hr className='text-muted' />
                  <div className='d-flex justify-content-between'>
                    <small className='text-muted'>Platform Language</small>
                    <small className='text-muted'>Default Platform Mode</small>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <p>{userdata.dashboardLanguage}</p>
                    <p>Training</p>

                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-sm-12 common-card'>
              <div className="card" style={{ "fontSize": "14px" }}>
                <div className="card-body row mt-3">
                  <div className='col-6'>
                    <div className="mb-4">
                      <small className='text-muted m-0 p-0'>From</small>
                      <p className='m-0 p-0' style={{ "fontWeight": "500" }}>{userdata.currentLocation}</p>
                    </div>
                    <div className="mb-4">
                      <small className='text-muted m-0 p-0'>Works At</small>
                      <p className='m-0 p-0' style={{ "fontWeight": "500" }}>{userdata.companyName}</p>
                    </div>
                    <div className="mb-4">
                      <small className='text-muted m-0 p-0'>Email Address</small>
                      <p className='m-0 p-0' style={{ "fontWeight": "500" }}>{userdata.email}</p>
                    </div>
                    <div className="mb-4">
                      <small className='text-muted m-0 p-0'>Date of Birth</small>
                      <p className='m-0 p-0' style={{ "fontWeight": "500" }}>{userdata.dob}</p>
                    </div>
                    <div className="mb-4">
                      <small className='text-muted m-0 p-0'>Gender</small>
                      <p className='m-0 p-0' style={{ "fontWeight": "500" }}>{userdata.gender}</p>
                    </div>
                  </div>
                  <div className='col-6'>
                    <div className="mb-4">
                      <small className='text-muted m-0 p-0'>Experience</small>
                      <p className='m-0 p-0' style={{ "fontWeight": "500" }}>{userdata.experience} Years</p>
                    </div>
                    <div className="mb-4">
                      <small className='text-muted m-0 p-0'>Languages</small>
                      <p className='m-0 p-0' style={{ "fontWeight": "500" }}>{LanguageArr?.map((item, index) => {
                        return (
                          <> {index != 0 ? `,${item}` : item} </>
                        )
                      })}</p>
                    </div>
                    <div className="mb-4">
                      <small className='text-muted m-0 p-0'>Phone Number</small>
                      <p className='m-0 p-0' style={{ "fontWeight": "500" }}>{userdata.phoneNumber}</p>
                    </div>
                    <div className="mb-4">
                      <small className='text-muted m-0 p-0'>Highest Qualification</small>
                      <p className='m-0 p-0' style={{ "fontWeight": "500" }}>{userdata.highestEducation}</p>
                    </div>
                    <div className="mb-4">
                      <small className='text-muted m-0 p-0'>Linked In Profile</small>
                      <div>
                        <a href={userdata.linkedIn} className='m-0 p-0' style={{ "fontWeight": "500", "textDecoration": "none" }}>Open Profile</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-sm-12 common-card'>
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Your <span className='change-color'>Reports</span></h3>
                  <p className='text-muted'><small>Only you and your HR Manager can see</ small></p>
                  <div className='mx-4 mt-4 mb-2'>
                    <div>
                      <i className="fa-solid fa-circle-check" style={{ "color": "#08c208", "fontWeight": "500" }}></i>
                      <small className='text-muted mx-1'>My Activities & Learnings</small>
                    </div>
                    <div>
                      <i className="fa-solid fa-circle-check" style={{ "color": "#08c208", "fontWeight": "900" }}></i>
                      <small className='text-muted mx-1'>My Skillsets</small>
                    </div>
                    <div>
                      <i className="fa-solid fa-circle-check" style={{ "color": "#08c208", "fontWeight": "900" }}></i>
                      <small className='text-muted mx-1'>My Certificates</small>
                    </div>
                    <div>
                      <i className="fa-solid fa-circle-check" style={{ "color": "#08c208", "fontWeight": "900" }}></i>
                      <small className='text-muted mx-1'>My Badges</small>
                    </div>
                    <div>
                      <i className="fa-solid fa-circle-check" style={{ "color": "#08c208", "fontWeight": "900" }}></i>
                      <small className='text-muted mx-1'>My Browser Sessions</small>
                    </div>
                  </div>
                </div>
                <hr className='text-muted mb-5' />
              </div>
            </div>
            <div className='col-lg-6 col-sm-12 common-card'>
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Our <span className='change-color'>Privacy and Policies</span></h3>
                  <p className='text-muted'><small>Upskilly's policies pertaining to your data</ small></p>
                  <div className='mx-4 mt-4 mb-2'>
                    <div>
                      <i className="fa-solid fa-circle-check" style={{ "color": "#08c208", "fontWeight": "500" }}></i>
                      <small className='text-muted mx-1'>Contact the Privacy Officer</small>
                    </div>
                    <div>
                      <i className="fa-solid fa-circle-check" style={{ "color": "#08c208", "fontWeight": "900" }}></i>
                      <small className='text-muted mx-1'>Data Requests</small>
                    </div>
                    <div>
                      <i className="fa-solid fa-circle-check" style={{ "color": "#08c208", "fontWeight": "900" }}></i>
                      <small className='text-muted mx-1'>Export My Data</small>
                    </div>
                    <div>
                      <i className="fa-solid fa-circle-check" style={{ "color": "#08c208", "fontWeight": "900" }}></i>
                      <small className='text-muted mx-1'>Delete My Account</small>
                    </div>
                  </div>
                </div>
                <hr className='text-muted mb-5' />
              </div>
            </div>
            <div className='col-12 common-card'>
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title"><span className='change-color'>Login Activity</span></h3>
                  <p className='text-muted'><small>Only you and your HR Manager can see</ small></p>
                  <div className='card mb-5' style={{ "boxShadow": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", "backgroundColor": "#fff3cd" }}>
                    <div className='card-body pb-1'>
                      <p style={{ "fontWeight": "500" }}><small>First access to site</small></p>
                      <p><small>{firstLogin}, {getTimeFormat(userdata.firstLogin)}</small></p>
                    </div>
                  </div>
                  <div className='card' style={{ "boxShadow": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", "backgroundColor": "#d4edda" }}>
                    <div className='card-body pb-1'>
                      <p style={{ "fontWeight": "500" }}><small>Last access to site</small></p>
                      <p><small>{lastLogin}, {userdata.lastLogin && getTimeFormat(userdata.lastLogin)}</small></p>
                    </div>
                  </div>
                </div>
                <hr className='text-muted mb-5' />
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <ContactFooter /> */}
      {/* </div > */}
      <Footer />
    </>
  );
}

export default Profile;

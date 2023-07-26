import React, { useState } from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import PeopleIcon from '@mui/icons-material/People';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import CropLandscapeIcon from '@mui/icons-material/CropLandscape';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import EuroIcon from '@mui/icons-material/Euro';
import "./MarketPlace.css"
import ContactFooter from '../../components/ContactFooter/ContactFooter';
import { InstantSearch, SearchBox, Hits, HitsPerPage, RefinementList, Configure,NumericMenu ,rangeSlider } from "react-instantsearch/dom";
import algoliasearch from 'algoliasearch/lite';
import { Link } from 'react-router-dom';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import ToggleSwitch from './ToggleSwitch';
import { AiFillCloseCircle} from "react-icons/ai";



export default function MarketPlace({ userdata }) {
  const searchClient = algoliasearch('2K13UYSXQ2', '8f12d53915b3f1fd369866d295ac2c40');
  const [input, setInput] = useState('')
  const array = [1, 2, 3, 4, 5, 6, 7, 8]
  const arrayEvents = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const [showAll, setShowAll] = useState(false);
  const [focus, setFocus] = useState("");
  const [lang, setLang] = useState("");


  function Hit({ hit }) {
    console.log(hit, "Algolia Result-------")
    return (
      <Link to="/trainer_profile" state={hit} >
        <div className='col-lg-28 col-sm-35 mb-1'>
          <div className="card shadow-sm me-1">
            <img role="button" src={hit.profilePicture ? hit.profilePicture : "images/dummy/user4_big.jpg"} className="card-img-top mp-com-image" alt="..." />
            <div className="card-body">
              <span className='mp-com-flag1'><img className='img-fluid' src="images/flags/French.png" alt="" /></span>
              <span className="mp-com-flag2"><img className="img-fluid" src="images/flags/German.png" alt="" /></span>
              <h5 className="card-title m-0" style={{ color: 'black' }}>{hit.firstName} {hit.lastName}</h5>
              <p className='mb-2' style={{ "color": "#cccccc" }}><small>Senior Project Manager</small></p>
              <p className="mp-experience"><small>Experience of 26 years</small></p>
              <p><img src="images/star.png" alt='star' /><span style={{ "color": "#1fd0b6" }}>5.0</span><small style={{ "color": "#cccccc" }}>(7)</small></p>
            </div>

          </div>
        </div>
      </Link>
    )
  }




  return (
    <>
      <Navbar userdata={userdata} />
      <div className='mp-outer container-fluid main-div pt-3 market-Place'>
        <div className='container-fluid px-0'>


          <h1 className='mb-4'>Find the perfect <span className="change-color">trainer or coach</span></h1>
          <InstantSearch searchClient={searchClient} indexName="sklara_search">

            {/* <div className="input-group mb-3 mp-input-div shadow-sm">

            <input type="text" className="form-control" placeholder="Try 'Business Analysis'" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <span className="input-group-text mp-icon" id="basic-addon2"><i className="fa fa-search fa-sm py-1"></i></span>
            </div>

          </div>  */}

           
           {/* {focus.length>1 && console.log(`"${focus}"`) && <Configure
              filters={`focusArea:"${focus}"`}
            />} */}
           {lang.length>1 && <Configure
              filters={`trainingLanguages:${lang}`}
            />}
            <div id="header" className="input-group mb-3 mp-input-div shadow-sm">
              <div className="input-group-append shadow-sm">
                <SearchBox translations={{ placeholder: "Try 'Business Analysis'" }} onChange={(e) => setInput(e.target.value)} />
              </div>
            </div>
            <div className='mb-5'>

              <p align="left">
                <span className='mp-popular'>Popular:</span>
                <a href="/#"><span style={{ background: '#CC0000' }} className="badge badge-pill mp-violet">Business Analysis</span></a>&nbsp;
                <a href="/#"><span style={{ background: "#663300" }} className="badge badge-pill mp-violet">AI in Business Decisions</span></a>&nbsp;
                <a href="/#"><span style={{ background: "#660000" }} className="badge badge-pill mp-violet">Sales & Marketing</span></a>&nbsp;
                <a href="/#"><span style={{ background: "#CC6600" }} className="badge badge-pill mp-violet">No Code App Development</span></a>
              </p>
            </div>
           {input.length==0 && <> <div className='mb-4'>
              <h3>Our Reccomendations</h3>
              <p className='text-secondary'>based on your profile, preferences and activities</p>
            </div>
            </>}
            {/* <RefinementList attribute="trainingLanguages" /> */}

            {input.length>=1 && <> <h3>Your Search Results</h3> 
             <div className="d-flex align-items-center flex-wrap" style={{ backgroundColor: "transparent", justifyContent: 'space-between', marginBottom: '25px' }}> 
              <div className="d-flex align-items-center flex-wrap">
              <div class="btn-group dropafter box shadow-sm py-0" style={{ width: '145px', marginRight: '5px', border: '1px solid #dfd7d7' }}>
                  <button type="button" className="small btn dropdown-toggle d-flex justify-content-between align-items-center py-0" data-bs-toggle="dropdown" aria-expanded="false">
                  Focus Area  <KeyboardArrowDownRoundedIcon style={{color:"#8C8C8C"}} className='down-icon'/>
                  </button>
                  <ul class="dropdown-menu" style={{ width: '220px' }}>
                  
                    {/* <li> <input type="checkbox" checked={focus===`AI in Business Decisions`} onChange={() => setFocus(`AI in Business Decisions`)}/> AI in Business Decisions</li>
                    <li> <input type="checkbox" checked={focus==="Business Analysis"} onChange={() => setFocus(`Business Analysis`)}/> Business Analysis</li>
                    <li> <input type="checkbox" checked={focus==="Sales & Marketing"} onChange={() => setFocus("Sales & Marketing")}/> Sales & Marketing</li> */}
                     <RefinementList attribute="focusArea" />
                   
                  </ul>
                </div>
                <div class="btn-group dropafter box shadow-sm py-0" style={{ width: '130px', marginRight: '5px', border: '1px solid #dfd7d7' }}>
                  <button type="button" className="small btn dropdown-toggle d-flex justify-content-between align-items-center py-0" data-bs-toggle="dropdown" aria-expanded="false">
                   Urgency  <KeyboardArrowDownRoundedIcon style={{color:"#8C8C8C"}} className='down-icon'/>
                  </button>
                  <ul class="dropdown-menu" style={{ width: '220px' }}>
                  
                    <li>15 Days</li>
                    <li>1 Month</li>
                    <li>3 Months</li>
                    <li>6 Months</li>
                   
                  </ul>
                </div>
                <div class="btn-group dropafter box shadow-sm py-0" style={{ width: '130px', marginRight: '5px', border: '1px solid #dfd7d7' }}>
                  <button type="button" className="small btn dropdown-toggle d-flex justify-content-between align-items-center py-0" data-bs-toggle="dropdown" aria-expanded="false">
                   Types  <KeyboardArrowDownRoundedIcon style={{color:"#8C8C8C"}} className='down-icon'/>
                  </button>
                  <ul class="dropdown-menu" style={{ width: '220px' }}>
                  
                    <li>Personal Corporate Training</li>
                    <li>Group Corporate Training</li>
                    <li>Off-The-Shelf Events</li>
                    <li>Business Coaching</li>
                   
                  </ul>
                </div>
                <div class="btn-group dropafter box shadow-sm py-0" style={{ width: '130px', marginRight: '5px', border: '1px solid #dfd7d7' }}>
                  <button type="button" className="small btn dropdown-toggle d-flex justify-content-between align-items-center py-0" data-bs-toggle="dropdown" aria-expanded="false">
                   Language  <KeyboardArrowDownRoundedIcon style={{color:"#8C8C8C"}} className='down-icon'/>
                  </button>
                  <ul class="dropdown-menu" style={{ width: '220px' }}>
                  
                    <li> <input type="checkbox" checked={lang===""} onChange={() => setLang("")}/> Any</li>
                    <li> <input type="checkbox" checked={lang==="English"} onChange={() => setLang("English")}/> English</li>
                    <li> <input type="checkbox" checked={lang==="German"} onChange={() => setLang("German")}/> German</li>
                    <li> <input type="checkbox" checked={lang==="French"} onChange={() => setLang("French")}/> French</li>
                                   
                  </ul>
                </div>
            </div>

            <div className="d-flex align-items-center flex-wrap">
              <p style={{width: '64px', marginBottom: '0px'}}>Team</p>
              <div style={{width: '90px', height: '50px'}}><ToggleSwitch label="Notifications" /></div>
              <p style={{width: '64px', marginBottom: '0px'}}>MySelf</p>

            </div>
          </div>
          </>
}
      {/* <div className="d-flex align-items-start list_card-1 p-1 my-3 ">
        
        <div style={{ width: "5rem" }}
          className="filt">Filter : </div>
        <div
          style={{ width: "7rem" }}
          className="col-md-12 nav-box m-2 skill-box"
        >
          <p className="py-1 mb-0 px-1 small badge">
            Leadership <AiFillCloseCircle fontSize="larger" />
          </p>
        </div>
        <div
          style={{ width: "9rem" }}
          className="col-md-12 nav-box m-2 skill-box"
        >
          <p className="py-1 mb-0 px-1 small badge">
            Critical Thinking <AiFillCloseCircle fontSize="larger" />
          </p>
        </div>
      </div> */}


            <div key="companies">
              <div className='mp-top-company'>
                <p className='mp-first m-0'>Top Corporate Trainers</p>
              </div>
              <div className='row'>
                <Hits hitComponent={Hit} />
                <div className="Hidehit">
                  {!showAll && <HitsPerPage
                    defaultRefinement={8}
                    items={[]}
                  />
                  }
                </div>

              </div>
              <div onClick={() => setShowAll(!showAll)} className="text-end mb-4"><div style={{ "color": "#550b7c" }}><small className='text-muted'>{!showAll ? "Show All" : "Hide All"}</small></div></div>

            </div>
            <div key="coaches">
              <div className='mp-top-company'>
                <p className='mp-first m-0'>Top Coaches</p>
                {input === '' && <p className='text-secondary'>based on your preferences</p>}
              </div>
              <div className='row'>
                {array.map((element, i) => {
                  return <div key={i} className='col-lg-3 col-sm-12 mb-4'>
                    <div className="card shadow-sm me-1">
                      <img role="button" src="images/dummy/user4_big.jpg" className="card-img-top mp-com-image" alt="..." />
                      <div className="card-body">
                        <span className='mp-com-flag1'><img className='img-fluid' src="images/flags/French.png" alt="" /></span>
                        <span className="mp-com-flag2"><img className="img-fluid" src="images/flags/German.png" alt="" /></span>
                        <h5 className="card-title m-0">Rebecca Finch</h5>
                        <p className='mb-2' style={{ "color": "#cccccc" }}><small>Senior Project Manager</small></p>
                        <p className="mp-experience"><small>Experience of 26 years</small></p>
                        <p><img src="images/star.png" alt='star' /><span style={{ "color": "#1fd0b6" }}>5.0</span><small style={{ "color": "#cccccc" }}>(7)</small></p>
                      </div>

                    </div>
                  </div>
                })}
              </div>
              <div className="text-end mb-4"><a href="/#" style={{ "color": "#550b7c", "textDecoration": "none" }}><small className='text-muted'>Show All</small></a></div>
            </div>
            <div key="events">
              <div className='mp-top-company'>
                <p className='mp-first m-0'>Top Training Events</p>
                {input === '' && <p className='text-secondary'>based on your preferences</p>}
              </div>
              <div className='row'>
                {arrayEvents.map((element, i) => {
                  return <div key={i} className='col-lg-4 col-sm-12 mb-4'>
                    <div className="card shadow-sm me-1">
                      <img role="button" src="images/dummy/user4_big.jpg" className="card-img-top mp-com-image" alt="..." />
                      <div className="card-body">
                        <span className="mp-com-flag2"><img className="img-fluid" src="images/flags/German.png" alt="" /></span>
                        <h6 className="card-title m-0 mt-2">Understanding Analytical Tools (Expert)</h6>
                        <p className='mb-2' style={{ "color": "#cccccc" }}><small>Senior Project Manager</small></p>
                        <div className='row mb-3'>
                          <div className='col-6'>
                            <p className="mp-experience"><small>Martin Jenkins</small></p>
                            <small><CropLandscapeIcon fontSize="small" />6 sessions</small><br />
                            <small><CalendarMonthIcon fontSize="small" />  26 Jan, 2022</small>
                          </div>
                          <div className='col-6'>
                            <p><img src="images/star.png" alt='star' /><span style={{ "color": "#1fd0b6" }}>5.0</span><small style={{ "color": "#cccccc" }}>(7)</small></p>
                            <small><PeopleIcon fontSize="small" />10 seats</small><br />
                            <small><PeopleOutlineIcon fontSize="small" />3 seats left</small>
                          </div>
                        </div>
                        <small className='text-muted'>
                          This training is focussed on financial analytics in the banks and intervest micro financing companies. Bloomberg tools will be in focus....
                        </small>
                        <button className='btn mp-event-button col-12 mt-3'><small><ShoppingBagIcon className='pb-1' fontSize='small' /> Book Now @ <EuroIcon className='pb-1' fontSize='small' />325</small></button>
                      </div>
                    </div>
                  </div>
                })}
              </div>
              <div className="text-end mb-4"><a href="/#" style={{ "color": "#550b7c", "textDecoration": "none" }}><small className='text-muted'>Show All</small></a></div>
            </div>
          </InstantSearch>
        </div >
        {/* <ContactFooter /> */}
      </div>
      <Footer />
    </>
  )
}


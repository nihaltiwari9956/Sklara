import React from 'react'
import Navbar from "../../components/navbar/Navbar"
import "./YourEvent.css"
import SideNav from '../../components/SideNav/SideNav';
import AddIcon from '@mui/icons-material/Add';
import {Link} from "react-router-dom"
import Footer from '../../components/footer/Footer';


function YourEvent({userdata}) {
  return (
      <>
    <Navbar userdata={userdata} />
    <div >
            <div className='container-fluid px-1 Manage'>
                <div className='row justify-content-center'>
                    <div className="row">
                      <SideNav />
                       

                      <div className='Manage-right' >
                       <div className="col-md-12 py-2 ps-2">

                            <div style={{marginBottom: '-22px'}} className="d-flex align-items-center flex-wrap">

                               <div className="border_input cat-box">
                                    {/* <label htmlFor="">Company Size</label> */}
                                    <select >
                                        <option>All Categories</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>    
                                <div className="input-group mx-4 mp-input-div shadow-sm">

                                        <input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                        <div className="input-group-append">
                                        <span className="input-group-text mp-icon" id="basic-addon2"><i className="fa fa-search fa-sm py-1"></i></span>
                                        </div>

                                </div> 
                                <div className='d-flex justify-content-end px-5' style={{marginLeft: '97px'}}>
                                    <Link to="/Manage_form"><button className='btn px-3 py-2 btn-primary round_btn' style={{ backgroundColor: '#fff', border: '1px solid grey', color: 'white', width: '157px', fontWeight: '600' }}><AddIcon /> New Event</button></Link>
                                </div>
                            </div>

                            <div className="d-flex align-items-center flex-wrap">
                                <div className="border_input">
                                    <label htmlFor="">Name</label>
                                    <input type="text" placeholder='Name' />
                                </div>
                            
                                <div className="border_input ">
                                    <label htmlFor="">Type</label>
                                    <input type="text" placeholder='Type' />
                                </div>
                                <div className="border_input">
                                    <label htmlFor="">Customer/Id</label>
                                    <select >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                                </div>
                                <div className="border_input ">
                                    <label htmlFor="">Status</label>
                                    <select >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </select>                
                                </div>
                            </div>
                            <table>
                                <tbody>
                                    <tr>
                                    <td style={{width: '33px'}} ><input className='largeCheck' type="checkbox" /></td>
                                    <td style={{color: '#1B1464', fontWeight: '500', width: '300px'}}>Creative thinking for Begginers <div className='text-muted' >5468754</div></td>
                                    <td style={{width: '250px'}} className='text-muted'>Public Training</td>
                                    <td style={{width: '250px'}} className='text-muted'>N/A</td>
                                    <td style={{width: '250px'}} className='text-muted'>In Progress</td>
                                    </tr>
                                    <tr>
                                    <td style={{width: '33px'}} ><input className='largeCheck' type="checkbox" /></td>
                                    <td style={{color: '#1B1464', fontWeight: '500', width: '300px'}}>Creative thinking for Begginers <div className='text-muted' >5468754</div></td>
                                    <td style={{width: '250px'}} className='text-muted'>Public Training</td>
                                    <td style={{width: '250px'}} className='text-muted'>N/A</td>
                                    <td style={{width: '250px'}} className='text-muted'>In Progress</td>
                                    </tr>
                                    <tr>
                                    <td style={{width: '33px'}} ><input className='largeCheck' type="checkbox" /></td>
                                    <td style={{color: '#1B1464', fontWeight: '500', width: '300px'}}>Creative thinking for Begginers <div className='text-muted' >5468754</div></td>
                                    <td style={{width: '250px'}} className='text-muted'>Public Training</td>
                                    <td style={{width: '250px'}} className='text-muted'>N/A</td>
                                    <td style={{width: '250px'}} className='text-muted'>In Progress</td>
                                    </tr>
                                    <tr>
                                    <td style={{width: '33px'}} ><input className='largeCheck' type="checkbox" /></td>
                                    <td style={{color: '#1B1464', fontWeight: '500', width: '300px'}}>Creative thinking for Begginers <div className='text-muted' >5468754</div></td>
                                    <td style={{width: '250px'}} className='text-muted'>Public Training</td>
                                    <td style={{width: '250px'}} className='text-muted'>N/A</td>
                                    <td style={{width: '250px'}} className='text-muted'>In Progress</td>
                                    </tr>
                                  
                            
                                </tbody>
                            </table>
                       </div>
                       </div>
                    </div>

                    
                    
                </div>
            </div>   

    </div>
    <Footer/>
    </>
  )
}

export default YourEvent
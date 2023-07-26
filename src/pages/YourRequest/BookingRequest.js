import React from 'react'
import Navbar from "../../components/navbar/Navbar"
import SideNav from '../../components/SideNav/SideNav';
import AddIcon from '@mui/icons-material/Add';
import {Link} from "react-router-dom"
import Footer from '../../components/footer/Footer';
import "./OpenRequest.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';


function BookingRequest({userdata}) {
  return (
    <>
    <Navbar userdata={userdata} />
    <div >
            <div className='container-fluid px-1 Manage OpenRequest'>
                <div className='row justify-content-center'>
                    <div className="row">
                      <SideNav />
                       

                      <div className='Manage-right' >
                       <div className="col-md-12 py-2 ps-2">
                       <h1 className='mb-4' style={{textAlign: 'left'}}> Booking <span className="change-color">Requests</span></h1>

                       <div style={{border: '1px solid #e2d5d5', padding: '1rem', boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.25)' }} className="d-flex align-items-center flex-wrap my-3">
            
            <div className="input-group mx-3 mp-input-div shadow-sm">
            <p className='text-muted' style={{marginBottom: '0px'}}>Request Date/ID</p>
                <input style={{width:'220px'}} type="number" className="form-control"
                />
            </div>

            <div className="input-group mx-3 mp-input-div shadow-sm">
            <p className='text-muted' style={{marginBottom: '0px'}}>Request Type</p>
                <input style={{width:'220px'}} type="number" className="form-control"
                />
            </div>

            <div className="input-group mx-3 mp-input-div shadow-sm">
            <p className='text-muted' style={{marginBottom: '0px'}}>Status</p>
                <input style={{width:'220px'}} type="number" className="form-control"
                />
            </div>

            <div className="input-group mx-3 mp-input-div shadow-sm">
            <p className='text-muted' style={{marginBottom: '0px'}}>Trainer / Coach</p>
                <input style={{width:'220px'}} type="text" className="form-control"
                />
            </div>
        </div>
        <table>
            <tbody>
                <tr>
                <td style={{color: '#1B1464', fontWeight: '500', width: '550px'}}>15th February, 2022 <div className='text-muted small' >5468754</div></td>
                <td style={{width: '550px'}} className='text-muted'>Public Training</td>
                <td style={{width: '550px'}} className='text-muted'>Martin Krugger<div className='text-muted small' >Corporate Trainer</div></td>
                <td style={{width: '550px'}} className='text-muted'>Quoted<div className='text-muted small' >View Quote</div></td>
                <td style={{width: '350px'}} className='text-muted'><button type="button" className="small btn dropdown-toggle d-flex justify-content-between align-items-center py-0" data-bs-toggle="dropdown" aria-expanded="false">
                <MoreVertIcon style={{color:"#8C8C8C"}} className='down-icon'/>
            </button>
            <ul class="dropdown-menu" style={{ width: '190px', padding: '1rem' }}>
                <li>View Request</li>
                <li>Edit Request</li>
                <li>View Quote</li>
                <li>Approve Quote</li>                     
            </ul></td>
               
                </tr>
                <tr>
                <td style={{color: '#1B1464', fontWeight: '500', width: '550px'}}>15th February, 2022 <div className='text-muted small' >5468754</div></td>
                <td style={{width: '550px'}} className='text-muted'>Public Training</td>
                <td style={{width: '550px'}} className='text-muted'>Martin Krugger<div className='text-muted small' >Corporate Trainer</div></td>
                <td style={{width: '550px'}} className='text-muted'>Quoted<div className='text-muted small' >View Quote</div></td>
                <td style={{width: '350px'}} className='text-muted'><button type="button" className="small btn dropdown-toggle d-flex justify-content-between align-items-center py-0" data-bs-toggle="dropdown" aria-expanded="false">
                <MoreVertIcon style={{color:"#8C8C8C"}} className='down-icon'/>
            </button>
            <ul class="dropdown-menu" style={{ width: '190px', padding: '1rem' }}>

            <li>View Request</li>
                <li>Edit Request</li>
                <li>View Quote</li>
                <li>Approve Quote</li>                     
            </ul></td>
               
                </tr>
                <tr>
                <td style={{color: '#1B1464', fontWeight: '500', width: '550px'}}>15th February, 2022 <div className='text-muted small' >5468754</div></td>
                <td style={{width: '550px'}} className='text-muted'>Public Training</td>
                <td style={{width: '550px'}} className='text-muted'>Martin Krugger<div className='text-muted small' >Corporate Trainer</div></td>
                <td style={{width: '550px'}} className='text-muted'>Quoted<div className='text-muted small' >View Quote</div></td>
                <td style={{width: '350px'}} className='text-muted'><button type="button" className="small btn dropdown-toggle d-flex justify-content-between align-items-center py-0" data-bs-toggle="dropdown" aria-expanded="false">
                <MoreVertIcon style={{color:"#8C8C8C"}} className='down-icon'/>
            </button>
            <ul class="dropdown-menu" style={{ width: '190px', padding: '1rem' }}>
            <li>View Request</li>
                <li>Edit Request</li>
                <li>View Quote</li>
                <li>Approve Quote</li>                       
            </ul></td>
               
                </tr>
                <tr>
                <td style={{color: '#1B1464', fontWeight: '500', width: '550px'}}>15th February, 2022 <div className='text-muted small' >5468754</div></td>
                <td style={{width: '550px'}} className='text-muted'>Public Training</td>
                <td style={{width: '550px'}} className='text-muted'>Martin Krugger<div className='text-muted small' >Corporate Trainer</div></td>
                <td style={{width: '550px'}} className='text-muted'>Quoted<div className='text-muted small' >View Quote</div></td>
                <td style={{width: '350px'}} className='text-muted'><button type="button" className="small btn dropdown-toggle d-flex justify-content-between align-items-center py-0" data-bs-toggle="dropdown" aria-expanded="false">
                <MoreVertIcon style={{color:"#8C8C8C"}} className='down-icon'/>
            </button>
            <ul class="dropdown-menu" style={{ width: '190px', padding: '1rem' }}>
            <li>View Request</li>
                <li>Edit Request</li>
                <li>View Quote</li>
                <li>Approve Quote</li>                     
            </ul></td>
               
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

export default BookingRequest
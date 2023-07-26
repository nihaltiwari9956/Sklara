import React from 'react'
import { FolderCopyIcon ,AssignmentOutlined } from '@mui/icons-material';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ErrorIcon from '@mui/icons-material/Error';
import "./SideNav.css"

function SideNav() {
  return (
    <>
          <div className="col-md-2 left_nav">
                        <div className='d-flex align-items-start list_card-1 p-1 my-3 side-nav'>
                               
                                <div className="col-md-12 nav-box my-2">
                                    {/* <h6 className='heading'><img src="./images/Group 65.png" alt="" /> Lorem Ipsum</h6> */}
                                    <p className="text-muted px-3 mb-0">
                                        <FolderOpenIcon fontSize='small' /> Open Request
                                    </p>
                                </div>
                        </div>
                        
                        <div className='d-flex align-items-start list_card-1 p-1 my-3 side-nav'>
                               
                               <div className="col-md-12 nav-box my-2">
                                   {/* <h6 className='heading'><img src="./images/Group 65.png" alt="" /> Lorem Ipsum</h6> */}
                                   <p className="text-muted px-3 mb-0">
                                       <FormatQuoteIcon fontSize='small' /> Your Quotes
                                   </p>
                               </div>
                       
                       </div> 
                       <div className='d-flex align-items-start list_card-1 p-1 my-3 side-nav active'>
                               
                               <div className="col-md-12 nav-box my-2">
                                   {/* <h6 className='heading'><img src="./images/Group 65.png" alt="" /> Lorem Ipsum</h6> */}
                                   <p className=" px-3 mb-0">
                                       <AssignmentOutlined fontSize='small' /> Your Events
                                   </p>
                               </div>
                       
                       </div> 
                       <div className='d-flex align-items-start list_card-1 p-1 my-3 side-nav'>
                               
                               <div className="col-md-12 nav-box my-2">
                                   {/* <h6 className='heading'><img src="./images/Group 65.png" alt="" /> Lorem Ipsum</h6> */}
                                   <p className="text-muted px-3 mb-0">
                                       <ReceiptLongIcon fontSize='small' /> Bills
                                   </p>
                               </div>
                        </div>
                        <div className='d-flex align-items-start list_card-1 p-1 my-3 side-nav'>
                               
                               <div className="col-md-12 nav-box my-2">
                                   {/* <h6 className='heading'><img src="./images/Group 65.png" alt="" /> Lorem Ipsum</h6> */}
                                   <p className="text-muted px-3 mb-0">
                                       <ErrorIcon fontSize='small' /> Legal Info
                                   </p>
                               </div>
                        </div>
                       
                    </div>   
    </>
  )
}

export default SideNav
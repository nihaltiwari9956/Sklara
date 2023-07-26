import React,{useEffect} from 'react'
import CreateIcon from '@mui/icons-material/Create';


function Step1({eventType, setEventType, eventTitle, setEventTitle,setProceed}) {

  useEffect(()=>{
    if(eventType.length > 0 && eventTitle.length > 0){
      setProceed(true)
    }else{
      setProceed(false)
    }
  },[eventType,eventTitle])

  return (
    <div style={{paddingLeft: '32px'}}>
        <p style={{marginBottom: '0px'}} className='fw-bold'>Design your off-sheld offering or personalized trainning or coaching series. </p>
        <p className='text-muted'>You can publish or save to edit later, Saved events will be available from Create Events page with status “In Progress</p>
    
        <p className='fw-bold'>What do you want to design?</p>
        <div style={{margin: '10px 8px'}} className="border_input">
                <select style={{borderBottom: 'none'}} onChange={(e)=>setEventType(e.target.value)}>
                    <option>A off-the-shelf trainning</option>
                    <option>Personal Corporate Training</option>
                    <option>Group Corporate Training</option>
                    <option>Business Coaching</option>
                </select>
        </div>

        <p className='text-muted'>Do you know, you can copy fields from apast existing training created by you, which can be later be modified.</p>
        <div className='d-flex justify-content-start'>
            <button className='btn px-3 py-2 btn-primary round_btn' style={{ backgroundColor: '#fff', border: '1px solid grey', color: 'white', fontWeight: '600',margin: '11px 0 '}}>Search Your Event</button>
        </div>

        <p style={{marginBottom: '0px'}} className='fw-bold'>Want to create a new or couldn’t find a matching template </p>
        <p className='text-muted'>No problem, enter a name for your training and click preoceed.</p>
    
        <p className='fw-bold'>What do you want to name this event?</p>
        <form style={{width:'28vh'}} class="d-flex search_bar">
              <input style={{boxShadow: '0px 0px 4px rgb(0 0 0 / 25%)'}} class="form-control search-input" type="search" placeholder="Creative Thinking for Beginers" aria-label="Search" onChange={(e)=>setEventTitle(e.target.value)} />
              <CreateIcon />
        </form> 
    </div>
  )
}

export default Step1
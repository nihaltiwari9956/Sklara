import React,{useState} from 'react';
import "./Model.css"
import CancelIcon from '@mui/icons-material/Cancel';
import SaveIcon from '@mui/icons-material/Save';


const Modal = ({ open, onClose,data , index, items}) => {
  // console.log(items, data, "ddddddddddd")
  const [topic, setTopic] = useState(items ? items.sessionName : '')
  const [hours, setHours] = useState(items ? items.hours : '')
  const [minutes,setMinutes] = useState(items ? items.minutes : '')
  const [covered,setCovered] = useState(items ? items.topicsCovered : '')
   

const saveData = () => {
  const obj = {topicsCovered: covered, sessionName: topic, hours: hours, minutes: minutes};
  data.session.splice(index, 1, obj)
  onClose()
}



  const handleTopic = (value) =>{
    setTopic(value)
    // data.session[index].topicsCovered = value
  }
  const handleHours = (value) =>{
    setHours(value)
    // data.session[index].hours = value
  }
  const handleMinutes = (value) =>{
    setMinutes(value)
    // data.session[index].minutes = value
  }
  const handleCovered = (value) =>{
    setCovered(value)
    // data.session[index].topicsCovered = value
  }

  if (!open) return null;
  return (
    <>
    {!items ? 
    <>
     <div onClick={onClose} className='overlay Modal-box' style={{color: 'black'}}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            <CancelIcon style={{fontSize: '37px'}} />
          </p>

          <p onClick={()=>saveData()}>
            <SaveIcon style={{fontSize: '37px'}} />
          </p>
          <div className='content'>
              <div className="input-group mx-4 mp-input-div shadow-sm d-flex flex-column">
                <p className="fw-bold text-left">Topic</p>
                    <input style={{width:'460px'}} type="text"
                    value={data.session[index]? data.session[index].sessionName : topic}
                    onChange={(e)=>handleTopic(e.target.value)}
                    className="form-control"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2" />
              </div>
              
              <div style={{ marginBottom: "-22px"}} className="d-flex align-items-center flex-wrap my-4">
            
                <div className="input-group mx-4 mp-input-div d-flex flex-column">
                   <p className="fw-bold">Duration</p>
                   <div className="d-flex justify-content-between">
                      <input style={{width:'210px'}} type="number"
                      value={data.session[index]? data.session[index].hours: hours}
                      onChange={(e)=>handleHours(e.target.value)}
                      className="form-control"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2" />
                      
                      <input style={{width:'210px'}} type="number"
                      value={data.session[index]? data.session[index].minutes: minutes}
                      onChange={(e)=>handleMinutes(e.target.value)}
                      className="form-control"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2" />
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>Hours</p>
                      <p style={{width:'210px'}}>Minutes</p>
                    </div>
                </div>
              </div>

              <div className="input-group mx-4 mp-input-div shadow-sm d-flex flex-column">
                <p className="fw-bold text-left">What's Covered</p>
                    <textarea style={{width:'460px', height: '260px'}} type="text"
                    value={data.session[index]? data.session[index].topicsCovered : covered}
                    onChange={(e)=>handleCovered(e.target.value)}
                    className="form-control"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2" />
              </div>
          </div>
        
        </div>
      </div>
    </div>
    </> 
    :
    <>
    <div onClick={onClose} className='overlay Modal-box' style={{color: 'black'}}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            <CancelIcon style={{fontSize: '37px'}} />
          </p>

          <p onClick={()=>saveData()}>
            <SaveIcon style={{fontSize: '37px'}} />
          </p>
          <div className='content'>
              <div className="input-group mx-4 mp-input-div shadow-sm d-flex flex-column">
                <p className="fw-bold text-left">Topic</p>
                    <input style={{width:'460px'}} type="text"
                    value={topic}
                    onChange={(e)=>handleTopic(e.target.value)}
                    className="form-control"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2" />
              </div>
              
              <div style={{ marginBottom: "-22px"}} className="d-flex align-items-center flex-wrap my-4">
            
                <div className="input-group mx-4 mp-input-div d-flex flex-column">
                   <p className="fw-bold">Duration</p>
                   <div className="d-flex justify-content-between">
                      <input style={{width:'210px'}} type="number"
                      value={hours}
                      onChange={(e)=>handleHours(e.target.value)}
                      className="form-control"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2" />
                      
                      <input style={{width:'210px'}} type="number"
                      value={minutes}
                      onChange={(e)=>handleMinutes(e.target.value)}
                      className="form-control"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2" />
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>Hours</p>
                      <p style={{width:'210px'}}>Minutes</p>
                    </div>
                </div>
              </div>

              <div className="input-group mx-4 mp-input-div shadow-sm d-flex flex-column">
                <p className="fw-bold text-left">What's Covered</p>
                    <textarea style={{width:'460px', height: '224px'}} type="text"
                    value={covered}
                    onChange={(e)=>handleCovered(e.target.value)}
                    className="form-control"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2" />
              </div>
          </div>
        
        </div>
      </div>
    </div>
    </>
    }
    </>
  );
};

export default Modal;
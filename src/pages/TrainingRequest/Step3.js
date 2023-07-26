import React, {useState, useRef} from 'react'
import Calendar from 'react-calendar';
import "./Step3.css"

function Step3() {
    const [value, onChange] = useState(new Date());
  const [toggle, setToggle] = useState(false)
  const calendarRef = useRef()
  const [toggleDate, setToggleDate] = useState('')
  const handleDayClick = (day, e) => {
    if (toggleDate.toString().slice(0, 10) !== day.toString().slice(0, 10)) {
      setToggle(true)
      setToggleDate(day)
    } else {
      setToggle(!toggle)
    }
  }
  const ref = useRef(null);


  return (
    <div style={{ paddingLeft: "32px" }} className="TainerStep3">
            <p style={{ marginBottom: "0px" }} className="fw-bold">
            Preferred Appointments
      </p>
      <p className="text-muted">We recommend you to select multiple date recommendations. (Max: 3)</p>
      <div className='common-card d-flex'>
            <div className="card" style={{width: '33rem'}}>
              <div className="card-body row">
                  <div className="col-lg-12 ">
                    <Calendar onChange={onChange} value={value} ref={calendarRef} className='mb-3 ml-0 Avail-Calender' next2Label={null} prev2Label={null} onClickDay={handleDayClick} />
                </div>
              </div>
              
            </div>
            <div className="rightBox" style={{width: '10rem', marginLeft: '68px'}}>
              <div className='fw-bold my-2'>Appointments</div>
              <p>May 13, 2020</p>
              <p style={{width: '16rem', padding:'2px', height: '32px'}}>May 13, 2020 - May 15,2020</p>
              <p>May 13, 2020</p>
              <p style={{width: '16rem'}}>May 13, 2020 - May 15,2020</p>
              
            </div>
        </div>
    
    </div>
    
  )
}

export default Step3
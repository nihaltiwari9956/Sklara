import React,{useState} from 'react';
import "./Model.css"
import {
  DatePicker,
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns"
import TextField from '@mui/material/TextField';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import { TimePicker } from 'antd';
import moment from 'moment';
import SaveIcon from '@mui/icons-material/Save';




const BreakTimeModel = ({open, onClose,data, index, start, end }) => {
  console.log(start, end, "huhu")
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [value, setValue] = useState(0);

  const [startTime, setStartTime] = useState('')
  const [endTime, setEndtime] = useState('')

  const saveData = () => {
    const obj = {BreakStart: startTime, BreakEnd:endTime};
    data.session.splice(index, 1, obj)
    onClose()
  }

  function onChangeStart(time, timeString) {
    console.log(time, timeString);
    const startTime = time.format("HH:mm")
    // console.log(startTime)
    setStartTime(time)
  }
  function onChangeEnd(time, timeString) {
    console.log(time, timeString);
    const startTime = time.format("HH:mm")
    // console.log(startTime)
    setEndtime(time)
  }

  if (!open) return null;

  return (
    <div onClick={onClose} className='overlay Modal-box'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={{height: '117px', top: '60%'}}
        className='modalContainer modalTime'
      >
        <div className='modalRight' style={{padding: '10px'}}>
           <p style={{paddingBottom: '0px', textAlign: 'end'}} onClick={()=>saveData()}>
            <SaveIcon style={{fontSize: '37px', color: 'black'}} />
          </p>
          
        <div className="d-flex justify-content-between mt-3">

               <div style={{ marginRight: "10px" , width: '210px'}} className="d-flex Timer">
               <TimePicker onChange={onChangeStart} value={startTime} format="HH:mm a" use12Hours="true" bordered="false" placeholder="Break Start with" defaultOpenValue={moment('00:00', 'HH:mm')} />
            </div>

            <div style={{width: '210px'}} className="d-flex Timer">
               <TimePicker onChange={onChangeEnd} value={endTime} format="HH:mm a" use12Hours="true" bordered="false" placeholder="Break End with" defaultOpenValue={moment('00:00', 'HH:mm')} />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default BreakTimeModel;
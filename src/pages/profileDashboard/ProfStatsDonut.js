import React from 'react'
import './profStats.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

ChartJS.register(ArcElement, Tooltip, Legend);


const ProfStatsDonut = () => {

    const data = {
        labels: ['Not Selected', 'Ongoing', 'Waiting For Evaluation', 'Paused', 'Completed'],
        datasets: [
          {
            label: '# of Votes',
            data: [25, 35, 12, 24, 4],
            backgroundColor: [
              'rgb(255,99,132)',
              'rgb(54,162,235)',
              'rgb(255,206,86)',
              'rgb(75,192,192)',
              'rgb(125,42,227)',
            ],
          },
        ],
      };


    return (
        <div className='container-fluid px-5'>
            <h3 className='mx-5 mt-5 heading'>Your Statistics</h3>
            <div className='row justify-content-between mx-5'>

<div className='col-md-6'>
  <div className='shadow bg-white p-rad p-3' style={{height:"100%"}}>
    <div className='p-1'>
    <h4 className='fw-light mt-2'>Your Learnings</h4>
    <h5 className='fw-light'>Distribution of learning according to their state</h5>
    </div>
    <div className='center donut-div'>
<Doughnut data={data} />
</div>
<div className='px-2'>
<hr></hr>
<div className='d-flex justify-content-between'>
<FiberManualRecordIcon style={{color:"#FF6384"}}/>
<h6 className='fw-light donut-h'>Course Not Started</h6>
<h6 className='fw-light'>12</h6>
<h6 className='fw-light'>25%</h6>
</div>
<hr></hr>
<div className='d-flex justify-content-between'>
<FiberManualRecordIcon style={{color:"#36A2EB"}}/>
<h6 className='fw-light donut-h'>Course Ongoing</h6>
<h6 className='fw-light'>19</h6>
<h6 className='fw-light'>35%</h6>
</div>
<hr></hr>
<div className='d-flex justify-content-between'>
<FiberManualRecordIcon style={{color:"#FFCE56"}}/>
<h6 className='fw-light donut-h'>Waiting for Evaluation</h6>
<h6 className='fw-light'>4</h6>
<h6 className='fw-light'>12%</h6>
</div>
<hr></hr>
<div className='d-flex justify-content-between'>
<FiberManualRecordIcon style={{color:"#4BC0C0"}}/>
<h6 className='fw-light donut-h'>Paused</h6>
<h6 className='fw-light'>8</h6>
<h6 className='fw-light'>24%</h6>
</div>
<hr></hr>
<div className='d-flex justify-content-between'>
<FiberManualRecordIcon style={{color:"#7D2AE3"}}/>
<h6 className='fw-light donut-h'>Completed</h6>
<h6 className='fw-light'>2</h6>
<h6 className='fw-light'>4%</h6>
</div>
</div>
</div>
</div>
{/* left div end */}

<div className='col-md-6'>
<div className='shadow bg-white p-rad p-3'style={{height:"100%"}}>
<div className='p-1'>
    <h4 className='fw-light mt-2'>Your focus areas</h4>
    <h5 className='fw-light'>Distribution of focus areas according to their states</h5>
    </div>
<div className='p-2 my-4'>
  <div className='d-flex justify-content-between'><h5>Business Analysis</h5> <div><span class="badge rounded-pill bg-primary">12 events</span></div></div>
  <div className='d-flex'>
  <div className='linearD p-red' style={{width:"20%"}}></div>
  <div className='linearD p-blue' style={{width:"30%"}}></div>
  <div className='linearD p-yellow' style={{width:"15%"}}></div>
  <div className='linearD p-green' style={{width:"15%"}}></div>
  <div className='linearD p-purple' style={{width:"20%"}}></div>
</div>
</div>

<div className='p-2 my-4'>
  <div className='d-flex justify-content-between'><h5>Role of AI in Business Decisions</h5> <div><span class="badge rounded-pill bg-primary">6 events</span></div></div>
  <div className='d-flex'>
  <div className='linearD p-red' style={{width:"10%"}}></div>
  <div className='linearD p-blue' style={{width:"20%"}}></div>
  <div className='linearD p-yellow' style={{width:"20%"}}></div>
  <div className='linearD p-green' style={{width:"30%"}}></div>
  <div className='linearD p-purple' style={{width:"20%"}}></div>
</div>
</div>


<div className='p-2 my-4'>
  <div className='d-flex justify-content-between'><h5>No Code App Development</h5> <div><span class="badge rounded-pill bg-primary">9 events</span></div></div>
  <div className='d-flex'>
  <div className='linearD p-red' style={{width:"10%"}}></div>
  <div className='linearD p-blue' style={{width:"15%"}}></div>
  <div className='linearD p-yellow' style={{width:"10%"}}></div>
  <div className='linearD p-green' style={{width:"15%"}}></div>
  <div className='linearD p-purple' style={{width:"50%"}}></div>
</div>
</div>


<div className='p-2 my-4'>
  <div className='d-flex justify-content-between'><h5>Business Analysis</h5> <div><span class="badge rounded-pill bg-primary">21 events</span></div></div>
  <div className='d-flex'>
  <div className='linearD p-red' style={{width:"20%"}}></div>
  <div className='linearD p-blue' style={{width:"30%"}}></div>
  <div className='linearD p-yellow' style={{width:"15%"}}></div>
  <div className='linearD p-green' style={{width:"15%"}}></div>
  <div className='linearD p-purple' style={{width:"20%"}}></div>
</div>
</div>


<div className='p-2 my-4'>
  <div className='d-flex justify-content-between'><h5>Role of AI in Business Decisions</h5> <div><span class="badge rounded-pill bg-primary">6 events</span></div></div>
  <div className='d-flex'>
  <div className='linearD p-red' style={{width:"20%"}}></div>
  <div className='linearD p-blue' style={{width:"20%"}}></div>
  <div className='linearD p-yellow' style={{width:"10%"}}></div>
  <div className='linearD p-green' style={{width:"30%"}}></div>
  <div className='linearD p-purple' style={{width:"20%"}}></div>
</div>
{/* <div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
</div> */}
</div>

<div className='mt-5'>
<table class="table">
  <tbody>
    <tr>
      <th scope="row"><FiberManualRecordIcon style={{color:"#FF6384"}}/></th>
      <td>Course Not Started</td>
      <td><FiberManualRecordIcon style={{color:"#36A2EB"}}/></td>
      <td>Course Ongoing</td>
    </tr>
    <tr>
      <th scope="row"><FiberManualRecordIcon style={{color:"#FFCE56"}}/></th>
      <td>Waiting for Evaluation</td>
      <td><FiberManualRecordIcon style={{color:"#4BC0C0"}}/></td>
      <td>Paused</td>
    </tr>

    <tr>
    <th scope="row"><FiberManualRecordIcon style={{color:"#7D2AE3"}}/></th>
      <td>Completed</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
</div>


</div>
</div>
            </div>
            
        </div>
    )
}

export default ProfStatsDonut

import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { ProgressBar } from 'react-bootstrap';


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));


ChartJS.register(ArcElement, Tooltip, Legend);
const Feedback = ({ heading }) => {

  const data = {
    labels: ['Score', 'Remaining'],
    datasets: [
      {
        label: '# of Votes',
        data: [3.7, 1.3],
        backgroundColor: [
          'rgb(125,42,227)',
          'rgb(179,179,179)',
        ],
      },
    ],
  };


  return (
    <div className='container-fluid mt-4'>
      <div className='container'>
        <h2 className='mx-0 mt-5 heading'>{heading}</h2>
      </div>
      <div className='container p-3 bg-white shadow'>
        <div className='row justify-content-between'>
          <div className='col-md-6'>
            <h3 className='fw-light'>Average session rating</h3>
            <h4 className='fw-light text-secondary'>Based on 36 ratings</h4>
          </div>
          <div className='col-md-6'>
            <h3 className='fw-light'>Questions on Individual Level</h3>
          </div>
        </div>
        <div className='row justify-content-between'>
          <div className='col-md-6'>
            <div className='center donut-div mt-3'>
              <Doughnut data={data} />
            </div>
          </div>
          <div className='col-md-6'>
            <div className='mt-3 mb-4'>
              <h5>I felt heard, understood & respected</h5>
              <ProgressBar variant="success" now={3.5} max={5} label={3.5} />
            </div>
            <div className='mb-4'>
              <h5>My trainer/coach brought me closer to my goal</h5>
              <ProgressBar variant="primary" now={3} max={5} label={3} />
            </div>
            <div className='mb-4'>
              <h5>I will recommend the trainer/coach to my colleagues</h5>
              <ProgressBar variant="warning" now={4} max={5} label={4} />
            </div>
            <div className='mb-4'>
              <h5>The technical quality of the video was good</h5>
              <ProgressBar variant="danger" now={4.5} max={5} label={4.5} />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Feedback

import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import '../../pages/profileDashboard/devProg.css'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);



const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Sessions',
            data: [1, 3, 4, 5, 7],
            backgroundColor: '#fd7e14',
            borderColor: '#fd7e14'
        },
    ],
};

const LineChart = () => {
    const options = {
        responsive: true,
        maintainAspectRatio: true,


    };
    return (
        <>
            <div className='container-fluid px-5'>
                <h3 className='mx-5 mt-5 heading'></h3>
                <div className='row justify-content-between mx-5'>

                    <div className='col-md-12'>
                        <div className='shadow bg-white p-rad p-3' >
                            <div className='p-1'>
                                <h4 className='fw-light mt-2'>Your Learnings</h4>
                                <h5 className='fw-light'>Percieved overall progress</h5>
                            </div>

                            <Line options={options} data={data} height='50%' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LineChart
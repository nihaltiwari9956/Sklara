import React from 'react'
import { Bar } from 'react-chartjs-2'
export const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Earnings in €',
            data: [3, 1, 3.5, 2, 4, 2.1, 3, 1, 3.6, 2, 3, 1],
            backgroundColor: '#B5DAE9',
        },
    ],
};

const BarChart = () => {

    const options = {
        barThickness: 40,
        borderRadius: 10,
        responsive: true,
        maintainAspectRatio: false,
        minBarLength: 5,
        layout: {
            padding: {
                top: 30,
                bottom: 20
            }
        },
        scales: {

            xAxis: {
                display: true,
                grid: {
                    display: false,
                    drawBorder: false,
                    borderColor: '#fff',
                },
                ticks: {
                    color: ['#CCCCCC'],
                },


            },
            yAxis: {

                grid: {
                    drawBorder: false,
                    borderDash: [4, 5],
                    color: '#CCCCCC',
                    borderColor: '#fff',

                },
                ticks: {
                    color: ['#CCCCCC'],
                    // Include a hr sign in the ticks
                    callback: function (value, index, ticks) {
                        return value + ' hr';
                    },
                    maxTicksLimit: 3
                    ,
                    tickMarkLength: 0
                },

            }
        },
        plugins: {
            legend: {
                display: false
            },

        }

    };
    return (
        <div className="chart">
            <Bar options={options} data={data} height='200' width={'100%'} />

        </div>
    )
}

export default BarChart
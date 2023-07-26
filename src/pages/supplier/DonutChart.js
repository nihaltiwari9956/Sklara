import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({value,color,rate}) => {

    const data = {
        labels: ['Score', 'Remaining'],
        datasets: [
          {
            label: '# of Votes',
            data: [value, 10-value],
            backgroundColor: [
              `${color}`,
              '#bfbfbf',
            ],
          },
        ],
      };

      const plugins = [

        {
            id: 'text',
            beforeDraw: function (chart, a, b) {
                var width = chart.width,
                    height = chart.height,
                    ctx = chart.ctx;

                ctx.restore();
                ctx.font = '600 30px OpenSans';
                ctx.textBaseline = 'middle';
                ctx.fillStyle = '#000';

                let text = rate ? `${rate}/10` : ' ',
                    textX = Math.round((width - ctx.measureText(text).width) / 1.98),
                    textY = height / 2.2;

                ctx.fillText(text, textX, textY);
                ctx.save();
            },
        },
    ];

    const options = {        
      responsive: true,
      maintainAspectRatio: true,
      cutout: 80,
      plugins: {
        legend: {
          display: false
        }
      }
  };


    return (

                <div className='center donut-div'>
<Doughnut data={data} plugins={plugins} options={options}/>
</div>

    )
}

export default DonutChart

import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Chart, PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);



// export const data = {
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.5)',
//         'rgba(54, 162, 235, 0.5)',
//         'rgba(255, 206, 86, 0.5)',
//         'rgba(75, 192, 192, 0.5)',
//         'rgba(153, 102, 255, 0.5)',
//         'rgba(255, 159, 64, 0.5)',
//       ],
//       borderWidth: 2,
//     },
//   ],
// };




const options = {
  responsive: true,
  maintainAspectRatio: true,
  opacity: 0.5,
  // cutout: 80,
  scales: {
    r: {
      pointLabels: {
        display: true,
        centerPointLabels: true,
        font: {
          size: 12
        }
      }
    }
  },
  plugins: {
    legend: {
      display: false
    },
  },

};

export function PolarAreaChart({ skills }) {
  const [label, setLabel] = useState()
  const [datas, setData] = useState()
  const [color, setColor] = useState()
  //console.log(skills, "skill")

  function hexToRgbA(hex) {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split('');
      if (c.length == 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = '0x' + c.join('');
      return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',0.5)';
    }
    throw new Error('Bad Hex');
  }


  async function getSkill() {

    let newArray = Object.values(skills);
    const newArr1 = newArray.map((v) => (Math.floor((v.skillValue / 10) * 100)));
    setData(newArr1);
    const newArr2 = newArray.map((v) => (v.skill));
    setLabel(newArr2);
    const newArr3 = newArray.map((v) => hexToRgbA(v.color));
    setColor(newArr3);
  }

  useEffect(() => {
    getSkill();
  }, [skills])

  const data = {
    labels: label,
    datasets: [
      {
        label: '# of Votes',
        data: datas,
        backgroundColor: color,
        borderWidth: 5,
      },
    ],
  };

  return <PolarArea data={data} options={options} />;
}

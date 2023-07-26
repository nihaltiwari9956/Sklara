import React, { useEffect, useState } from 'react';
import { RadialBarChart, RadialBar, Legend, PolarAngleAxis, LabelList,ResponsiveContainer } from 'recharts';


const PolarChart = ({skills}) => {
	const [data, setData] = useState()
	console.log(skills, "skill")

	async function getSkill() {
		
		let newArray = Object.values(skills);
		const newArr1 = newArray.map((v) => ({ name: v.skill, x:125-Math.floor((v.priorityValue / 4) * 100), fill: v.color }));
		setData(newArr1);
	  }
	
	  useEffect(() => {
		getSkill();
	  }, [skills]);

// Sample data
// const data = [
// 	{
// 	  name: 'A',
// 	  x: 81.47,
// 	  fill: '#8784d8',
// 	},
// 	{
// 	  name: 'B',
// 	  x: 76.69,
// 	  fill: '#84a6ed',
// 	},
// 	{
// 	  name: 'C',
// 	  x: 65.69,
// 	  fill: '#8ed1e1',
// 	},
// 	{
// 	  name: 'D',
// 	  x: 80.22,
// 	  fill: '#82da9d',
// 	},
// 	{
// 	  name: 'E',
// 	  x: 78.63,
// 	  fill: '#a2de6c',
// 	},
// 	{
// 	  name: 'F',
// 	  x: 42.63,
// 	  fill: '#d0dd57',
// 	},
// 	{
// 	  name: 'G',
// 	  x: 36.67,
// 	  fill: '#ffa658',
// 	},
//   ];
  const style = {
	top: 0,
	left: 350,
	lineHeight: '24px',
};


return (
    <>
	<ResponsiveContainer height={600}>
 <RadialBarChart data={data}
 barSize={20} 
    innerRadius="50%" outerRadius="80%" startAngle={90}
    endAngle={-270}>
    {/* <RadialBar label={{ position: 'insideStart', fill: '#8784d8' }} minAngle={30} dataKey="x" clockWise/>
	<Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={style} /> */}
     <PolarAngleAxis type="number" domain={[0, 110]} dataKey={'x'} tick={false} />
	{/* add background after label as 'background' to show background */}
	{/* label={{ position: "insideLeft", fill: "#000" }} */}
     <RadialBar isAnimationActive={true} minAngle={15}   clockWise dataKey="x"/>
  </RadialBarChart>
  </ResponsiveContainer>
</>
);
}

export default PolarChart;

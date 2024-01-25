import React from "react";
import { LineChart,Line,Legend,Tooltip,YAxis,ResponsiveContainer,XAxis } from "recharts";
function Linegraph() {
  return (
    <div>
<ResponsiveContainer width='100%' height="80%" aspect={4/1}>
      <LineChart
        width={880}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        
      >
       
        <XAxis dataKey="name" />
        <YAxis />
       <Tooltip />
        <Line type="bump" dataKey="pv" stroke="#8884d8" />
      </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Linegraph;

const data = [
  {
   
    "pv": 2400,
    
  },
  {
    "pv": 1398,
    "amt": 2210
  },
  {
    "pv": 5800,
    "amt": 2290
  },
  {
    "pv": 3908,
    "amt": 2000
  },
  {
    "pv": 4800,
    "amt": 2181
  },
  {
    "pv": 3800,
    "amt": 2500
  },
  {
    "pv": 4800,
    "amt": 3000
  },
  {
    "pv": 4000,
    "amt": 2000
  },
  {
    "pv": 6000,
    "amt": 3000
  },
]
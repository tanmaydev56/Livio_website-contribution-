import React from 'react';
import "../styles/Transaction.css";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', '2023': 70, '2024': 38 },
  { name: 'Feb', '2023': 5, '2024': 30 },
  { name: 'Mar', '2023': 97, '2024': 53 },
  { name: 'Apr', '2023': 8, '2024': 4 },
  { name: 'May', '2023': 85, '2024': 97 },
  { name: 'Jun', '2023': 72, '2024': 67 },
  { name: 'Jul', '2023': 62, '2024': 102 },
  { name: 'Aug', '2023': 97, '2024': 35 },
  { name: 'Sep', '2023': 60, '2024': 18 },
  { name: 'Oct', '2023': 30, '2024': 40 },
  { name: 'Nov', '2023': 30, '2024': 76 },
  { name: 'Dec', '2023': 76, '2024': 12 },
];

const CustomLegend = () => (
  <div className="custom-legend">
    <div className="legend-item">
      <div className="legend-color" style={{ backgroundColor: '#FD9207' }}></div>
      <span>2023</span>
    </div>
    <div className="legend-item">
      <div className="legend-color" style={{ backgroundColor: '#997760' }}></div>
      <span>2024</span>
    </div>
  </div>
);

const Transactions = () => {
  return (
    <div className="line-chart-container">
      <h2>Transactions</h2>
      <LineChart width={525} height={250} data={data}>
        <XAxis 
          dataKey="name" 
          tick={{ fill: 'black', fontSize: 10 }} 
          axisLine={false} 
          tickLine={false}
        />
        <YAxis 
          tick={{ fill: 'black', fontSize: 10 }} 
          axisLine={false} 
          tickLine={false}
        />
        <Tooltip contentStyle={{ color: 'black' }} itemStyle={{ color: 'black' }} />
        <Legend content={<CustomLegend />} />
        <Line type="monotone" dataKey="2023" stroke="#FD9207" strokeWidth={2} dot={{ r: 0 }} />
        <Line type="monotone" dataKey="2024" stroke="#997760" strokeWidth={2} dot={{ r: 0 }} />
      </LineChart>
    </div>
  );
};

export default Transactions;

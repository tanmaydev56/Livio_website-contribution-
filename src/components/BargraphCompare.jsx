'use client';

import { Bar, BarChart, ResponsiveContainer, XAxis, Tooltip, Legend, YAxis, CartesianGrid } from "recharts";

const data = [
  {
    name: 'Jan',
    Lastmonth: 13500,
    thismonth: 12000,
  },
  {
    name: 'Feb',
    Lastmonth: 18000,
    thismonth: 12000,
  },
  {
    name: 'Mar',
    Lastmonth: 5000,
    thismonth: 22000,
  },
  {
    name: 'Apr',
    Lastmonth: 17000,
    thismonth: 6000,
  },
  {
    name: 'May',
    Lastmonth: 13000,
    thismonth: 11000,
  },
  {
    name: 'June',
    Lastmonth: 18000,
    thismonth: 14000,
  },
];

const BargraphCompare = () => {
  return (
    <ResponsiveContainer width="100%" height="80%">
      <BarChart data={data}>
        {/* Add CartesianGrid for better visualization */}
        <CartesianGrid strokeDasharray="3 3" />
        
        {/* Add YAxis to show values */}
        <YAxis />
        
        <Tooltip />
        
        {/* Add Legend for better understanding */}
        <Legend />
        
        <XAxis
          dataKey="name"
          stroke="#8884d8"
          tickLine={false}
          axisLine={false}
          interval={0}
          tickMargin={5}
          style={{
            fontSize: '12px',
            fontFamily: "Apfel Grotezk",
            fontWeight: '400',
            lineHeight: '16px',
            textAlign: "center",
            color: 'var(--Primary-200, #7B91B0)',
          }}
        />
        
        {/* Bars */}
        <Bar dataKey="Lastmonth" fill="#4AB58E" radius={[3, 3, 0, 0]} />
        <Bar dataKey="thismonth" fill="#FFCF00" radius={[3, 3, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BargraphCompare;

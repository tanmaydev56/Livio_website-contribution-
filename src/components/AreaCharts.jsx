'use client';

import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";

const data = [
  {
    name: 'Jan',
    Lastmonth: 280,
    thismonth: 500,
  },
  {
    name: 'Feb',
    Lastmonth: 350,
    thismonth: 400,
  },
  {
    name: 'Mar',
    Lastmonth: 130,
    thismonth: 520,
  },
  {
    name: 'Apr',
    Lastmonth: 130,
    thismonth: 450,
  },
  {
    name: 'May',
    Lastmonth: 200,
    thismonth: 550,
  },
  {
    name: 'Jun',
    Lastmonth: 170,
    thismonth: 500,
  },
  {
    name: 'Jul',
    Lastmonth: 400,
    thismonth: 700,
  },
];

const AreaChartsCompo = () => {
  return (
    <>
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart data={data}>
          {/* Define gradient for area fills */}
          <defs>
            <linearGradient id="colorLastMonth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#009DFF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorThisMonth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00E096" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* Add CartesianGrid for better visualization */}
          <CartesianGrid strokeDasharray="3 3" />

          {/* Add Tooltip and Legend */}
          <Tooltip />
          <Legend />

          {/* X and Y Axes */}
          <XAxis dataKey="name" />
          <YAxis />

          {/* Area Charts */}
          <Area
            type="monotone"
            dataKey="Lastmonth"
            stroke="#009DFF"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorLastMonth)"
            dot={{ stroke: '#009DFF', strokeWidth: 2, r: 3 }}
          />
          <Area
            type="monotone"
            dataKey="thismonth"
            stroke="#00E096"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorThisMonth)"
            dot={{ stroke: '#00E096', strokeWidth: 2, r: 3 }}
          />
        </AreaChart>
      </ResponsiveContainer>

      {/* Divider */}
      <div
        style={{
          marginLeft: "4px",
          width: "335px",
          height: "2px",
          background: "#999",
          borderRadius: "1px",
        }}
      ></div>
    </>
  );
};

export default AreaChartsCompo;

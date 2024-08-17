'use-client';

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  {
    name: 'Monday',
    Lastmonth: 13500,
    thismonth: 12000,
  },
  {
    name: 'Tuesday',
    Lastmonth: 18000,
    thismonth: 12000,
  },
  {
    name: 'Wednesday',
    Lastmonth: 5000,
    thismonth: 22000,
  },
  {
    name: 'Thursday',
    Lastmonth: 17000,
    thismonth: 6000,
  },
  {
    name: 'Friday',
    Lastmonth: 13000,
    thismonth: 11000,
  },
  {
    name: 'Saturday',
    Lastmonth: 18000,
    thismonth: 14000,
  },
  {
    name: 'Sunday',
    Lastmonth: 22000,
    thismonth: 12500,
  },
];

const BarCharts = () => {
  return (
    <ResponsiveContainer width="100%" height="80%">
      <BarChart data={data}>
        <Tooltip
          wrapperStyle={{
            fontSize: '12px',
            fontFamily: "Apfel Grotezk",
            fontWeight: '400',
            lineHeight: '6px',
            textAlign: "center",
            color: 'var(--Primary-200, #7B91B0)',
          }}
        />
        <Legend
          verticalAlign="bottom"
          align="center"
          height={50}
          iconType="circle"
          iconSize={10}
          wrapperStyle={{
            fontSize: '12px',
            fontFamily: "Apfel Grotezk",
            fontWeight: '400',
            lineHeight: '90px',
            color: 'var(--Primary-200, #7B91B0)',
          }}
        />
        <XAxis
          dataKey="name"
          stroke="#8884d8"
          tickLine={false}
          axisLine={false}
          interval={0}
          tickMargin={17}
          style={{
            fontSize: '12px',
            fontFamily: "Apfel Grotezk",
            fontWeight: '400',
            lineHeight: '16px',
            textAlign: "center",
            color: 'var(--Primary-200, #7B91B0)',
          }}
        />
        <YAxis
          stroke="#8884d8"
          tickLine={false}
          axisLine={false}
          domain={[0, 25000]}
          tickMargin={14}
          ticks={[0, 5000, 10000, 15000, 20000, 25000]}
          tickFormatter={(value) => `${value / 1000}k`}
        />
        <Bar dataKey="Lastmonth" fill="#0095FF" />
        <Bar dataKey="thismonth" fill="#00E096" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarCharts;

'use client'

import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const Data = [
    {
      name: 'jan',
      LoyalCustomers: 200,
      NewCustomers: 300,
      UniqueCustomers: 250,
    },
    {
      name: 'feb',
      LoyalCustomers: 100,
      NewCustomers: 200,
      UniqueCustomers: 350,
    },
    {
      name: 'mar',
      LoyalCustomers: 200,
      NewCustomers: 320,
      UniqueCustomers: 240,
    },
    {
      name: 'apr',
      LoyalCustomers: 130,
      NewCustomers: 280,
      UniqueCustomers: 170,
    },
    {
      name: 'may',
      LoyalCustomers: 200,
      NewCustomers: 350,
      UniqueCustomers: 290,
    },
    {
      name: 'jun',
      LoyalCustomers: 170,
      NewCustomers: 300,
      UniqueCustomers: 210,
    },
    {
      name: 'july',
      LoyalCustomers: 300,
      NewCustomers: 370,
      UniqueCustomers: 150,
    },
    {
      name: 'aug',
      LoyalCustomers: 150,
      NewCustomers: 330,
      UniqueCustomers: 300,
    },
    {
      name: 'sep',
      LoyalCustomers: 270,
      NewCustomers: 290,
      UniqueCustomers: 210,
    },
    {
      name: 'oct',
      LoyalCustomers: 200,
      NewCustomers: 320,
      UniqueCustomers: 230,
    },
    {
      name: 'nov',
      LoyalCustomers: 260,
      NewCustomers: 350,
      UniqueCustomers: 170,
    },
    {
      name: 'dec',
      LoyalCustomers: 270,
      NewCustomers: 290,
      UniqueCustomers: 250,
    },
  ];
  

const LineCharts = () => {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={Data} margin={{ right: 30 }}>
          <Tooltip />
          <XAxis
            dataKey="name"
            stroke="#464E5F"
            tickLine={false}
            axisLine={false}
            interval={0}
            tickMargin={4}
            style={{
              fontSize: '16px',
              fontFamily: "Apfel Grotezk",
              fontWeight: '500',
              lineHeight: '16px',
              textAlign: "center",
              color: 'var(--Primary-200, #000)',
            }}
          />
          <YAxis

            type="number"
            domain={[0, 400]}
            ticks={[0, 100, 200, 300, 400]}
            allowDecimals={false}
            axisLine={false}

            tickLine={false}
          
            tick={{ fill: "#8884d8" }}
            grid
            style={{
                
                
              fontSize: '16px', 
              fontFamily: "Apfel Grotezk",
              fontWeight: '400',
              lineHeight: '16px',
              textAlign: "center",
              color: 'var(--Primary-200, #7B91B0)',
            }}
            
          />
          <Line
            type="monotone"
            dataKey="LoyalCustomers"
            stroke="#A700FF"
            strokeWidth={4}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="NewCustomers"
            stroke="#EF4444"
            strokeWidth={4}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="UniqueCustomers"
            stroke="#3CD856"
            strokeWidth={4}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default LineCharts;

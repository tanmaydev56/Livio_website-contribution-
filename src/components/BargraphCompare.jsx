
'use client'


import { Bar,BarChart,ResponsiveContainer ,XAxis,YAxis,CartesianAxis,CartesianGrid,Tooltip,Legend} from "recharts"


 const Data=[
  {
    name: 'Jan',
    Lastmonth: 13500,
    thismonth: 12000
  },
  {
    name: 'Feb',
    Lastmonth: 18000,
    thismonth: 12000
  },
  {
    name: 'Mar',
    Lastmonth: 5000,
    thismonth: 22000
  },
  {
    name: 'Apr',
    Lastmonth: 17000,
    thismonth: 6000
  },
  {
    name: 'May',
    Lastmonth: 13000,
    thismonth: 11000
  },
  {
    name: 'June',
    Lastmonth: 18000,
    thismonth: 14000
  },
  
]
const BargraphCompare = () => {
  return (
   
    <ResponsiveContainer  width="100%" height="80%" >
<BarChart  data={Data} >
 
<Tooltip/>

  

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
      color: 'var(--Primary-200, #7B91B0)'
    }}
  />
 
  
  <Bar
    x={5}
    type="monotone"
    dataKey="Lastmonth"
    stroke="#009DFF"
    fillOpacity={1}
    fill="#4AB58E"
    width={10}
    height={70}
    radius={3}
  />
  <Bar
    x={20}
    y="8"
    fill="#FFCF00"
    type="monotone"
    dataKey="thismonth"
    stroke="#00E096"
    fillOpacity={1}
    width={10}
    height={70}
   radius={3}
  />
  
</BarChart>
   </ResponsiveContainer>
   
   
  
   
  )
}



export default BargraphCompare;

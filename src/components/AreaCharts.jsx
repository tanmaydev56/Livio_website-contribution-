'use client'


import { Area,AreaChart,ResponsiveContainer ,XAxis,YAxis,CartesianAxis,CartesianGrid,Tooltip} from "recharts"
const Data=[
  {
    name:'jan',
    Lastmonth:280,
    thismonth:500,
      }
      , 
      {
        name:'feb',
        Lastmonth:350,
        thismonth:400,
      }
      , 
      
      {
        name:'mar',
        Lastmonth:130,
        thismonth:520,
      }
      ,
      {
        name:'apr',
        Lastmonth:130,
        thismonth:450,
      }
      ,
      {
        name:'may',
        Lastmonth:200,
        thismonth:550,
      },
      {
        name:'jun',
        Lastmonth:170,
        thismonth:500,
      }
      ,
      {
        name:'july',
        Lastmonth:400,
        thismonth:700,


      }
      ,
    
]
const AreaChartsCompo = () => {
 
  return (<>
    <ResponsiveContainer width="100%" height="80%">
   <AreaChart width={400} height={300} data={Data}>
   <defs>
   <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#009DFF" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#00E096" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
    </defs>
    <Tooltip/>
    
    <Area type="monotone" dataKey="Lastmonth" stroke="#009DFF" fillOpacity={1}
    dot={true}

    strokeWidth={3}
    fill="url(#colorUv)"/>
  < Area   dot={true} type="monotone" strokeWidth={3} dataKey="thismonth" stroke="#00E096" fillOpacity={1} fill="url(#colorPv)" />

   </AreaChart>
   </ResponsiveContainer>
   <div style={{
    marginLeft:"4px",
    width: "335px",
    height: "2px",
    flexShrink:"0"
    ,background: "#999",
    borderRadius:"1px",
    border:"0px solid #4D4D4D"
   }}></div>
   </>

  )
}

export default AreaChartsCompo

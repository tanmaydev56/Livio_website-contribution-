import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ProgressBar from '@ramonak/react-progress-bar';
import { ResponsiveContainer } from 'recharts';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


export default function AccessibleTable() {
  return (
    <ResponsiveContainer>
    <TableContainer style={{
      background:"#E9EEE9",
    }} component={Paper}>
      <Table width="100%"  style={{
        background:"#E9EEE9",
        borderRadius:"30px"
      }}>
        
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
         <TableCell align="left">Name</TableCell>
            <TableCell >Populatriy</TableCell>
            <TableCell align="right">Sales</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow

          >
           <TableCell component="th" scope="row">01</TableCell>
           <TableCell component="th" scope="row">Home Decore </TableCell>
           <TableCell component="th" scope="row" align='left'> <ProgressBar  height="4px"
  width="100%"
  bgColor="#0095FF"
  borderColor="#0095FF"
  borderRadius="10px"
  background="#0095FF"
  animateOnRender
  labelColor="#0095FF"
  trackHeight="4px"
  transitionDuration="0.5s"
  transitionTimingFunction="ease-in-out"
  transitionDelay="0s"
  completed={90} /></TableCell>
           <TableCell align='right' component="th" scope="row"> <button style={{
          
            width:"43.4px",
            height:"30px",
            flexShrink:"0",
           borderRadius:"8px",
          border:" 1px solid #0095FF",
         
background:"#F0F9FF" 
           }}>
            <text style={{
             
              color:"#0095FF",
              textAlign:"centre",
              fontFamily:"Apfel Grotezk",
              fontSize:"12px",
              fontStyle:"normal",
              fontWeight:"bold",
              lineHeight:"16px",
               

            }}>
              45
            </text>
            </button></TableCell>

          
          </TableRow>
          <TableRow

>
 <TableCell component="th" scope="row">02</TableCell>
 <TableCell component="th" scope="row">Merch </TableCell>
 <TableCell component="th" scope="row" align='left'> <ProgressBar
  height="4px"
  width="100%"
  bgColor="#00E096"
  borderColor="#00E096"
  borderRadius="10px"
  background="#8CFAC7"
  animateOnRender
  labelColor="#00E096"
  trackHeight="4px"
  transitionDuration="0.9s"
  transitionTimingFunction="ease-in-out"
  transitionDelay="0s"
  completed={78}
/></TableCell>
 <TableCell align='right' component="th" scope="row"> <button style={{

  width:"43.4px",
  height:"30px",
  flexShrink:"0",
 borderRadius:"8px",
border:" 1px solid #00E58F",

background:"#F0FDF4" 
 }}>
   <text 
     style={{
             
      color:"#00E58F",
      textAlign:"centre",
      fontFamily:"Apfel Grotezk",
      fontSize:"12px",
      fontStyle:"normal",
      fontWeight:"bold",
      lineHeight:"16px",

    }}
  >29</text>
  </button></TableCell>


</TableRow>
<TableRow

>
 <TableCell component="th" scope="row">03</TableCell>
 <TableCell component="th" scope="row">Bathroom Essentials </TableCell>
 <TableCell component="th" scope="row" align='left'> <ProgressBar  height="4px"
  width="100%"
  bgColor="#884DFF"
  borderColor="#884DFF"
  borderRadius="10px"
  background="#884DFF"
  animateOnRender
  labelColor="#884DFF"
  trackHeight="4px"
  transitionDuration="0.5s"
  transitionTimingFunction="ease-in-out"
  transitionDelay="0s"
  completed={49} /></TableCell>
 <TableCell align='right' component="th" scope="row"> <button style={{

  width:"43.4px",
  height:"30px",
  flexShrink:"0",
 borderRadius:"8px",
border:"1px solid #884DFF",

background:"#FBF1FF" 
 }}>
  <text 
     style={{
             
      color:"#884DFF",
      textAlign:"centre",
      fontFamily:"Apfel Grotezk",
      fontSize:"12px",
      fontStyle:"normal",
      fontWeight:"bold",
      lineHeight:"16px",

    }}
  >18</text>
  </button></TableCell>


</TableRow>
<TableRow

>
 <TableCell component="th" scope="row">03</TableCell>
 <TableCell component="th" scope="row">Apple </TableCell>
 <TableCell component="th" scope="row" align='left'> <ProgressBar  height="4px"
  width="100%"
  bgColor="#FF8F0D"
  borderColor="#FF8F0D"
  borderRadius="10px"
  background="#FF8F0D"
  animateOnRender
  labelColor="#FF8F0D"
  trackHeight="4px"
  transitionDuration="0.5s"
  transitionTimingFunction="ease-in-out"
  transitionDelay="0s"
  completed={69} /></TableCell>
 <TableCell align='right' component="th" scope="row"> <button style={{

  width:"43.4px",
  height:"30px",
  flexShrink:"0",
 borderRadius:"8px",
 border: "1px solid #FF8900",

background:"#FEF6E6" 
 }}>
   <text 
     style={{
             
      color:"#FF8900",
      textAlign:"centre",
      fontFamily:"Apfel Grotezk",
      fontSize:"12px",
      fontStyle:"normal",
      fontWeight:"bold",
      lineHeight:"16px",

    }}
  >25</text>
  </button></TableCell>


</TableRow>
        
        </TableBody>
      </Table>
    </TableContainer>
    </ResponsiveContainer>
  );
}

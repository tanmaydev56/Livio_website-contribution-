import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'rgba(81, 80, 98, 0.50)',
    color: theme.palette.common.black,
    border:"none"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border:"none"
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
    border:"none"
  },

  '&:last-child td, &:last-child th': {
    border: 0,
    border:"none"
  },
}));
const CustomTableContainer = styled(TableContainer)({
  boxShadow: 'none',
  border: 'none',
});

export default function CustomizedTables() {
  return (
    <div style={{
      display:'flex',
      flexDirection:"column",
      border:"none"
    }}>
      <div style={{
        display:"flex",
       justifyContent:"space-between",
       border:"none"
      }}>
        <div style={{
          display:"flex",
          gap:"20px",
          border:"none"
        }}>
          <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
        <text style={{
          
          color:"#F47D4A",
          fontFamily:"Apfel Grotezk",
          fontSize:"26px",
          fontStyle:"normal",
          fontWeight:"600",
          lineHeight:"normal",
         border:"none"

        }}>
        Recent Feedback Ratings
        </text>
        <text style={{
         
          color:"#515062",
          fontFamily:"Apfel Grotezk",
          fontSize:"24px",
          fontStyle:"normal",
          fontWeight:"400",
          lineHeight:"50px",
           textTransform:"none"
        }}>(Last 12 Months)</text>
        </div>
        </div>
       <div style={{
      
width:"45px",
height:"45px",
flexShrink:"0",
borderRadius:"10px",
backgroundColor:"rgba(81, 80, 98, 0.50)",
display:"flex",
justifyContent:"center",
alignItems:"center",
paddingBottom:"2px"
       }}><text style={{
      
color:"rgba(0, 0, 0, 0.75)",
fontFamily:"Apfel Grotezk",
fontSize:"36px",
fontStyle:"normal",
fontWeight:"600",
lineHeight:"normal",
       }}>?</text></div>
      </div>
    <CustomTableContainer style={{border:"none", }}component={Paper}>
      <Table sx={{ minWidth: 700,border:"none",  }} aria-label="customized table">
        <TableHead style={{border:"none",}}>
          <TableRow style={{
             fontFamily:"Apfel Grotezk",
            fontSize:"36px",
            fontStyle:"normal",
            fontWeight:"600",
            lineHeight:"normal",
            border:"none",
             
          
          }}>
            <StyledTableCell style={{
              color:"rgba(0,0,0,0.75)",
              fontFamily:"Apfel Grotezk",
              fontSize:"26px",
              fontStyle:"normal",
              fontWeight:"600",
              lineHeight:"normal",
              border:"none"
            }}></StyledTableCell>
            <StyledTableCell align="center" style={{
              color:"rgba(0,0,0,0.75)",
              fontFamily:"Apfel Grotezk",
              fontSize:"22px",
              fontStyle:"normal",
              fontWeight:"600",
              lineHeight:"normal",
              border:"none"
            }}>1 month</StyledTableCell>
            <StyledTableCell align="center" style={{
              color:"rgba(0,0,0,0.75)",
              fontFamily:"Apfel Grotezk",
              fontSize:"22px",
              fontStyle:"normal",
              fontWeight:"600",
              lineHeight:"normal",
              border:"none",
            
            }}>6 months</StyledTableCell>
            <StyledTableCell align="center" style={{
              color:"rgba(0,0,0,0.75)",
              fontFamily:"Apfel Grotezk",
              fontSize:"22px",
              fontStyle:"normal",
              fontWeight:"600",
              lineHeight:"normal",
              border:"none",
              
            }}> 12 months</StyledTableCell>
          </TableRow>
        </TableHead >
        <TableBody style={{border:"none",}}>
          <StyledTableRow style={{
            background:"#E9EEE9",
            border:"none"
          }}>
            <StyledTableCell component="th" scope="row" style={{border:"none", border:"0px"}}>
              <div style={{
                display:"flex",
                gap:"20px",
                border:"0px",
               
              }}>
                <img src="src/assets/images/emotsmile_svgrepo.com.png" alt="" />
                <text style={{
                  color:"rgba(0, 0, 0, 0.75)",
                  fontFamily:"Apfel Grotezk",
                  fontSize:"24px",
                  fontStyle:"normal",
                  fontWeight:"600",
                  lineHeight:"normal",
                   border:"0px",
                    height:"10px"
                }}>
                  Positive
                </text>
              </div>
            </StyledTableCell>
            <StyledTableCell align="center" style={{
              color:"#515062",
              fontFamily:"Apfel Grotezk",
              fontSize:"24px",
              fontStyle:"normal",
              fontWeight:"400",
              lineHeight:"50px",
              margin:"0",
               height:"10px"
             
            }}>15</StyledTableCell>
            <StyledTableCell align="center" style={{
              color:"#515062",
              fontFamily:"Apfel Grotezk",
              fontSize:"24px",
              fontStyle:"normal",
              fontWeight:"400",
              lineHeight:"50px",
               height:"20px"
            }}>105</StyledTableCell>
            <StyledTableCell align="center" style={{
              color:"#515062",
              fontFamily:"Apfel Grotezk",
              fontSize:"24px",
              fontStyle:"normal",
              fontWeight:"400",
              lineHeight:"50px",
            }}>315</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow style={{
            background:"#E9EEE9",
             border:"0px",
              
           margin:"0px",
           padding:"0"
          }}>
            <StyledTableCell component="th" scope="row" style={{ height:"10px"}}>
              <div style={{
                display:"flex",
                gap:"20px",
                 border:"0px",
                 
              }}>
                <img src="src/assets/images/neutral-face_svgrepo.com.png" alt="" />
                <text style={{
                  color:"rgba(0, 0, 0, 0.75)",
                  fontFamily:"Apfel Grotezk",
                  fontSize:"24px",
                  fontStyle:"normal",
                  fontWeight:"600",
                  lineHeight:"normal",
                   border:"0px",
                  
                }}>
                  Neutral
                </text>
              </div>
            </StyledTableCell>
            <StyledTableCell align="center" style={{
              color:"#515062",
              fontFamily:"Apfel Grotezk",
              fontSize:"24px",
              fontStyle:"normal",
              fontWeight:"400",
              lineHeight:"50px",
               border:"0px",
               
              
            }}>2</StyledTableCell>
            <StyledTableCell align="center" style={{
              color:"#515062",
              fontFamily:"Apfel Grotezk",
              fontSize:"24px",
              fontStyle:"normal",
              fontWeight:"400",
              lineHeight:"50px",
               border:"0px"
            }}>3</StyledTableCell>
            <StyledTableCell align="center" style={{
              color:"#515062",
              fontFamily:"Apfel Grotezk",
              fontSize:"24px",
              fontStyle:"normal",
              fontWeight:"400",
              lineHeight:"50px",
               border:"0px"
            }}>18</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow style={{
            background:"#E9EEE9",
            margin:"0",
            height:"0px",
            border:"0px"
          }}>
            <StyledTableCell component="th" scope="row">
              <div style={{
                display:"flex",
                 gap:"20px"
              }}>
                <img src="src/assets/images/sad-face_svgrepo.com.png" alt="" />
                <text style={{
                  color:"rgba(0, 0, 0, 0.75)",
                  fontFamily:"Apfel Grotezk",
                  fontSize:"24px",
                  fontStyle:"normal",
                  fontWeight:"600",
                  lineHeight:"normal",
                   border:"0px"
                }}>
                  Negative
                </text>
              </div>
            </StyledTableCell>
            <StyledTableCell align="center" style={{
              color:"#515062",
              fontFamily:"Apfel Grotezk",
              fontSize:"24px",
              fontStyle:"normal",
              fontWeight:"400",
              lineHeight:"50px",
            }}>0</StyledTableCell>
            <StyledTableCell align="center" style={{
              color:"#515062",
              fontFamily:"Apfel Grotezk",
              fontSize:"24px",
              fontStyle:"normal",
              fontWeight:"400",
              lineHeight:"50px",
            }}>1</StyledTableCell>
            <StyledTableCell align="center" style={{
              color:"#515062",
              fontFamily:"Apfel Grotezk",
              fontSize:"24px",
              fontStyle:"normal",
              fontWeight:"400",
              lineHeight:"50px",
            }}>4</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </CustomTableContainer>
    </div>
  );
}
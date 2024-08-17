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
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
export default function CustomizedTables() {
    const starArray = [ {
        
        id: 1,
        
        
    }, {
        
        id: 1,
        
        
    }, {
        
        id: 1,
       
        
    },{
        
        id: 1,
       
        
    } 
    ,{
        
        id: 1,
       
        
    }
 ];
 const CustomTableContainer = styled(TableContainer)({
  boxShadow: 'none',
  border: 'none',
});
  return (
    <div style={{
      display:'flex',
      flexDirection:"column"
    }}>
      <div style={{
        display:"flex",
       justifyContent:"space-between",
       marginBottom:"5px"
      }}>
        <div style={{
          display:"flex",
          gap:"20px"
        }}>
          <div style={{display:"flex",alignItems:"center", gap:"10px"}}>
        <text style={{
          
         
          color:"#F47D4A",
          fontFamily:"Apfel Grotezk",
          fontSize:"26px",
          fontStyle:"normal",
          fontWeight:"600",
          lineHeight:"normal",
         border:"none"

        }}>
       Detailed Seller Ratings
        </text>
        <text style={{
         
          color:"#515062",
          fontFamily:"Apfel Grotezk",
          fontSize:"24px",
          fontStyle:"normal",
          fontWeight:"400",
          lineHeight:"45px"
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

       }}><text style={{
      
        color:"rgba(0, 0, 0, 0.75)",
        fontFamily:"Apfel Grotezk",
        fontSize:"36px",
        fontStyle:"normal",
        fontWeight:"600",
        lineHeight:"normal",
        marginBottom:"2px"
       }}>?</text></div>
      </div>
    <CustomTableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow style={{
            fontFamily:"Integral CF",
            fontSize:"36px",
            fontStyle:"normal",
            fontWeight:"400",
            lineHeight:"normal",
             borderRadius:"10px",
          }}>
            <StyledTableCell style={{
              color:"rgba(0,0,0,0.75)",
              fontFamily:"Apfel Grotezk",
                  fontSize:"26px",
                  fontStyle:"normal",
                  fontWeight:"600",
              lineHeight:"normal",
              border:"0px"
            
            }}>Criteria</StyledTableCell>
            <StyledTableCell align="center" style={{
              color:"rgba(0,0,0,0.75)",
              fontFamily:"Apfel Grotezk",
              fontSize:"26px",
              fontStyle:"normal",
              fontWeight:"600",
              lineHeight:"normal",
            }}>Average Ratings</StyledTableCell>
            <StyledTableCell align="center" style={{
              color:"rgba(0,0,0,0.75)",
              fontFamily:"Apfel Grotezk",
              fontSize:"26px",
              fontStyle:"normal",
              fontWeight:"600",
              lineHeight:"normal",
            }}>No of Ratings</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow style={{
            background:"#E9EEE9",
             border:"0px"
          }}>
            <StyledTableCell component="th" scope="row">
              <div style={{                  
                display:"flex",
                gap:"20px"
                , border:"none"
              }}>
               
                <text style={{
                  color:"rgba(0, 0, 0, 0.75)",
                  fontFamily:"Apfel Grotezk",
                  fontSize:"22px",
                  fontStyle:"normal",
                  fontWeight:"600",
                  lineHeight:"normal",
                  
                }}>
                  Item as described
                </text>
              </div>
            </StyledTableCell>
            <StyledTableCell align="center" style={{
              color:"#515062",
              fontFamily:"Apfel Grotezk",
              fontSize:"24px",
              fontStyle:"normal",
              fontWeight:"400",
              

            }}>
                <div style={{
                   
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    gap:"10px",
                    alignSelf:"strech"
                }}>
                     {starArray.map((star, index) => (


                    <img key={index} src="/src/assets/images/Star.svg" style={{
                       
                    }}
                    
                     />
    ))}
                </div>


                
            </StyledTableCell>
            <StyledTableCell align="center" style={{
              color:"#515062",
              fontFamily:"Apfel Grotezk",
              fontSize:"24px",
              fontStyle:"normal",
              fontWeight:"400",
             
            }}>100</StyledTableCell>
           
          </StyledTableRow>
          <StyledTableRow style={{
            background:"#E9EEE9"
          }}>
            <StyledTableCell component="th" scope="row">
              <div style={{
                display:"flex",
                gap:"20px"
              }}>
               
                <text style={{
                  color:"rgba(0, 0, 0, 0.75)",
                  fontFamily:"Apfel Grotezk",
                  fontSize:"22px",
                  fontStyle:"normal",
                  fontWeight:"600",
                  lineHeight:"normal",
                }}>
                  Communication
                </text>
              </div>
            </StyledTableCell>
            <StyledTableCell align="center" style={{
              color:"#515062",
              fontFamily:"Apfel Grotezk",
              fontSize:"24px",
              fontStyle:"normal",
              fontWeight:"400",
          
            }}>
                 <div style={{
                   
                   display:"flex",
                   alignItems:"center",
                   justifyContent:"center",
                   gap:"10px",
                   alignSelf:"strech"
               }}>
                    {starArray.map((star, index) => (


                   <img key={index} src="/src/assets/images/Star.svg" style={{
                      
                   }}
                   
                    />
   ))}
               </div>


            </StyledTableCell>
            <StyledTableCell align="center" style={{
              color:"#515062",
              fontFamily:"Apfel Grotezk",
              fontSize:"24px",
              fontStyle:"normal",
              fontWeight:"400",
              
            }}>144</StyledTableCell>
         
          </StyledTableRow>
          <StyledTableRow  style={{
            background:"#E9EEE9"
          }}>
            <StyledTableCell component="th" scope="row">
              <div style={{
                display:"flex",
                 gap:"20px"
              }}>
                
                <text style={{
                  color:"rgba(0, 0, 0, 0.75)",
                  fontFamily:"Apfel Grotezk",
                  fontSize:"22px",
                  fontStyle:"normal",
                  fontWeight:"600",
                  lineHeight:"normal",
                }}>
                  Dispatch time
                </text>
              </div>
            </StyledTableCell>
            <StyledTableCell align="center" style={{
              color:"#515062",
              fontFamily:"Apfel Grotezk",
              fontSize:"24px",
              fontStyle:"normal",
              fontWeight:"400",
              
            }}>
                 <div style={{
                   
                   display:"flex",
                   alignItems:"center",
                   justifyContent:"center",
                   gap:"10px",
                   alignSelf:"strech"
               }}>
                    {starArray.map((star, index) => (


                   <img key={index} src="/src/assets/images/Star.svg" style={{
                      
                   }}
                   
                    />
   ))}
               </div>

            </StyledTableCell>
            <StyledTableCell align="center" style={{
              color:"#515062",
              fontFamily:"Apfel Grotezk",
              fontSize:"24px",
              fontStyle:"normal",
              fontWeight:"400",
              
            }}>567</StyledTableCell>
          
          </StyledTableRow>
          <StyledTableRow  style={{
            background:"#E9EEE9"
          }}>
          <StyledTableCell component="th" scope="row">
              <div style={{
                display:"flex",
                 gap:"20px"
              }}>
               
                <text style={{
                  color:"rgba(0, 0, 0, 0.75)",
                  fontFamily:"Apfel Grotezk",
                  fontSize:"22px",
                  fontStyle:"normal",
                  fontWeight:"600",
                  lineHeight:"normal",
                }}>
                  Postage & packaging charges
                </text>
              </div>

            </StyledTableCell>
            <StyledTableCell align="center" style={{
              color:"#515062",
              fontFamily:"Apfel Grotezk",
              fontSize:"24px",
              fontStyle:"normal",
              fontWeight:"400",
              
            }}>   <div style={{
                   
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                gap:"10px",
                alignSelf:"strech"
            }}>
                 {starArray.map((star, index) => (


                <img key={index} src="/src/assets/images/Star.svg" style={{
                   
                }}
                
                 />
))}
            </div></StyledTableCell>
            <StyledTableCell align="center" style={{
              color:"#515062",
              fontFamily:"Apfel Grotezk",
              fontSize:"24px",
              fontStyle:"normal",
              fontWeight:"400",
             
            }}>89</StyledTableCell>
          </StyledTableRow>

        </TableBody>
      </Table>
    </CustomTableContainer>
    </div>
  );
}

// import React from 'react';

// function App() {
//   

//   return (
//     <div>
//      
//     </div>
//   );
// }

// export default App;
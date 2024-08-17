
import AreaChartsCompo from "../components/AreaCharts"
import BarCharts from "../components/BarChartsRevenue"
import BargraphCompare from "../components/BargraphCompare"
import DashboardHead from "../components/DashboardHead"
import SideButtons from "../components/SideButtons"
import ProgressBar from "@ramonak/react-progress-bar"
import AccessibleTable from "../components/Tabels"
import { color } from "chart.js/helpers"
import LineCharts from "../components/LineCharts"


const TheDashboard = () => {


   
  return (
    <div  style={{
      display: 'flex',
      flexDirection:"column",
      justifyContent:"center",
     padding:"30px",
     gap:"40px"
    }} >
       <DashboardHead/>










        <div style={{
            display:"flex",
            justifyContent:"space-around"
            
          
           
            
        }}> 
          
             <SideButtons/>
                




   <div style={{
    display:"flex",
    flexDirection:'column',
    gap:"29px"
   }}>
    <div style={{
        width:"953px",
        height:"336px",
        background:"#E9EEE9",
        borderRadius:"30px",
        
        boxShadow:"4px 4px 16px 0px rgba(0, 0, 0, 0.10), -4px -4px 16px 0px rgba(244, 125, 74, 0.10)"
    }}>
        <div style={{
            display:"flex",
            justifyContent:"space-between",
            padding:"30px"
        }}>
                <div style={{
                    display:"flex",
                    flexDirection:"column",
                    gap:"5px"
                }}>
                     <text style={{
                color:"#515062",
                fontFamily:"Integral CF",
                fontSize:"32px",
                fontWeight:"400",
                fontStyle:"normal",
                lineHeight:"30px"
            }}>Today’s Sales</text>
            <text style={{
                color:"#515062",
                fontFamily:"Apfel Grotezk",
                fontSize:"20px",
                fontWeight:"500",
                fontStyle:"normal",
                lineHeight:"30px",
                

                
            }}> Sales Summary</text>
                </div>
                
            <button style={{
               display: "flex",
               width:"127px",
               height:"40px",
               cursor:"pointer",
               padding:"5px 20px",
               justifyContent:"center",
               alignItems:"center",
               gap:"10px",
               flexShrink:"0",
               borderRadius:"20px",
               border:"3px solid #C3D3E2",
               color: "#0F3659",
               fontFamily:"Integral CF",
               fontSize:"16px",
               fontStyle:"normal",
               fontWeight:"400",
               lineHeight:"30px",
               background:"transparent"
              
            }}>
                <img src="/Union.svg" alt="" style={{
                    
                    width:"20px"
                }} />
                Export</button>
        </div>
        <div style={{display:"flex",
        justifyContent:"space-around"

}}>
     <div style={{        
        width:"180px",       
         height:"184px",      
           flexShrink:"0",    
               borderRadius:" 16px",     
                 background: "#D9DED9",
                  display:"flex",
                
                  flexDirection:"column"}}>
                                        <img src="/Icon1.svg" alt="" style={{
                       padding:"15px",
                        width:"70px",
                        height:"70px",
                        flexShrink:"0",
                        
                     }}/> 
                     <text style={{
                        color: "#425166",
                        fontFamily: "Apfel Grotezk",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "24px",
                        /* 150% */
                        paddingBottom:"20px",
                        paddingLeft:"10px"

                      
                     }}>Total Sales</text>
                     <text style={{
                        color: "#F47D4A",
                        fontFamily: "Apfel Grotezk",
                        fontSize: "24px",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight: "24px",
                        /* 100% */ 
                        paddingLeft:"10px"

                       
                     }}>$1k</text>
                      <text style={{
                        color: "#4079ED",
                        fontFamily: "Apfel Grotezk",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "24px",
                        textAlign:'center',
                        paddingTop:"14px",
                        paddingLeft:"5px"

                       
                     }}>+8% from yesterday</text>
                 

    
    
    </div>




    <div style={{        
        width:"180px",       
         height:"184px",      
           flexShrink:"0",    
               borderRadius:" 16px",     
                 background: "#D9DED9",
                  display:"flex",
                
                  flexDirection:"column"}}>
                                        <img src="/Icon2.svg" alt="" style={{
                       padding:"15px",
                       width:"70px",
                       height:"70px",
                        flexShrink:"0",
                        
                     }}/> 
                     <text style={{
                        color: "#425166",
                        fontFamily: "Apfel Grotezk",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "24px",
                        /* 150% */
                        paddingBottom:"20px",
                        paddingLeft:"10px"

                      
                     }}>Total Orders</text>
                     <text style={{
                        color: "#F47D4A",
                        fontFamily: "Apfel Grotezk",
                        fontSize: "24px",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight: "24px",
                        /* 100% */ 
                        paddingLeft:"10px"

                       
                     }}>300</text>
                      <text style={{
                        color: "#4079ED",
                        fontFamily: "Apfel Grotezk",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "24px",
                        textAlign:'center',
                        paddingTop:"14px",
                        paddingLeft:"5px"

                       
                     }}>+5% from yesterday</text>
                 

    
    
    </div>



    <div style={{        
        width:"180px",       
         height:"184px",      
           flexShrink:"0",    
               borderRadius:" 16px",     
                 background: "#D9DED9",
                  display:"flex",
                
                  flexDirection:"column"}}>
                                        <img src="/Icon3.svg" alt="" style={{
                       padding:"15px",
                       width:"70px",
                       height:"70px",
                        flexShrink:"0",
                        
                     }}/> 
                     <text style={{
                        color: "#425166",
                        fontFamily: "Apfel Grotezk",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "24px",
                        /* 150% */
                        paddingBottom:"20px",
                        paddingLeft:"10px"

                      
                     }}> Product Sold</text>
                     <text style={{
                        color: "#F47D4A",
                        fontFamily: "Apfel Grotezk",
                        fontSize: "24px",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight: "24px",
                        /* 100% */ 
                        paddingLeft:"10px"

                       
                     }}>5</text>
                      <text style={{
                        color: "#4079ED",
                        fontFamily: "Apfel Grotezk",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "24px",
                        textAlign:'center',
                        paddingTop:"14px",
                        paddingLeft:"5px"

                       
                     }}>+1.2% from yesterday</text>
                 

    
    
    </div>



    <div style={{        
        width:"180px",       
         height:"184px",      
           flexShrink:"0",    
               borderRadius:" 16px",     
                 background: "#D9DED9",
                  display:"flex",
                
                  flexDirection:"column"}}>
                                        <img src="/Icon4.svg" alt="" style={{
                       padding:"15px",
                       width:"70px",
                       height:"70px",
                        flexShrink:"0",
                        
                     }}/> 
                     <text style={{
                        color: "#425166",
                        fontFamily: "Apfel Grotezk",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "24px",
                        /* 150% */
                        paddingBottom:"20px",
                        paddingLeft:"10px"

                      
                     }}>New Customers</text>
                     <text style={{
                        color: "#F47D4A",
                        fontFamily: "Apfel Grotezk",
                        fontSize: "24px",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight: "24px",
                        /* 100% */ 
                        paddingLeft:"10px"

                       
                     }}>8</text>
                      <text style={{
                        color: "#4079ED",
                        fontFamily: "Apfel Grotezk",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "24px",
                        textAlign:'center',
                        paddingTop:"14px",
                        paddingLeft:"5px"

                       
                     }}>+0.5% from yesterday</text>
                 

    
    
    </div>
   
    </div>

    </div>


    <div style={{
        display:"flex",
        justifyContent:"space-between"
    }}>

    <div style={{
        width:"579px",
        height:"348px",
        flexShrink:"0",
        borderRadius:"20px",
        background:"#E9EEE9",
     
        display:"flex",
        flexDirection:"column",
            justifyContent:"center",
            placeItems:"center",
        boxShadow:" 4px 4px 16px 0px rgba(0, 0, 0, 0.10), -4px -4px 16px 0px rgba(244, 125, 74, 0.10)"
    }}>
       
        <text style={{
            color:"#515062",
            fontFamily:"Integral CF",
            fontSize:"24px",
            fontStyle:"normal",
            fontWeight:"400",
            paddingBottom:"25px",
            paddingLeft:"40px",
           
           width:"100%"
           
        }}> Visitor Insights</text>
        <LineCharts/>
        
        </div>
        
    <div style={{
        width:"352px",
        height:"351px",
        flexShrink:"0",
        borderRadius:"20px",
        background:"#E9EEE9",
        display:"flex",
        flexDirection:"column",
        
            justifyContent:"center",
            
         boxShadow:" 4px 4px 16px 0px rgba(0, 0, 0, 0.10), -4px -4px 16px 0px rgba(244, 125, 74, 0.10)"
    }}>
        <text style={{
            color: "#515062",
            fontFamily: "Integral CF",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "30px",
            padding: "20px", /* 125% */
        }}>Target vs Reality</text>
        <BargraphCompare/>
        <div>
            <div style={{display:"flex",
            justifyContent:"space-around",
           paddingBottom:"10px"
            }}>
                <div style={{
                    display:"flex",
                    gap:"10px"
                }}>
                     <img src="/Avatar.svg" alt="" />
                    <div style={{
                        display:"flex",
                        flexDirection:"column",
                        
                    }}>
                        
                          <text 
                          style={{
                            color:" #151D48",
                            fontFamily: "Apfel Grotezk",
                            fontStyle: "normal",
                            fontWeight: "500",
                            lineHeight: "30px",
                            fontSize:"16px"
                          }}>Realty Sales</text>
                     <text style={{
                           color:" #737791",
                           fontFamily: "Apfel Grotezk",
                           fontStyle: "normal",
                           fontWeight: "400",
                           
                           fontSize:"16px"

                     }}>Global</text>
                     </div>
                    
                </div>
                <div style={{
                     color: " #27AE67",
                     textAlign:"right",
                     /* sm/Medium */
                     fontFamily: "Poppins",
                     fontSize: "14px",
                     fontStyle: "normal",
                     fontWeight: "bold",

                     marginTop:"10px", 

                    
                }}>8.822</div>
            </div>
            <div style={{display:"flex",
            justifyContent:"space-around",
            }}>
                <div style={{
                    display:"flex",
                    gap:"10px"
                }}>
                     <img src="/Avatar 2.svg" alt="" />
                    <div style={{
                        display:"flex",
                        flexDirection:"column"
                    }}>
                        
                          <text  style={{
                           
                            color:" #151D48)",
                            fontFamily: "Apfel Grotezk",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "30px",
                            fontSize:"16px"
                            
                          }}>Target Sales</text>
                     <text style={{
                         color:" #737791",
                         fontFamily: "Apfel Grotezk",
                         fontStyle: "normal",
                         fontWeight: "400",
                         
                         fontSize:"16px"
                     }}>Commercial</text>
                     </div>
                    
                </div>
                <div style={{
                    color: " #FFA412",
                    textAlign:"right",
                    /* sm/Medium */
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "bold",

                      marginTop:"10px", 
                     /* 142.857% */

                   
                   
                }}>12.122</div>
            </div>
        </div>
    </div>

    </div>

    <div style={{
        display:"flex",
        justifyContent:"space-between"
    }}>

<div style={{
        width:"371px",
        height:"361px",
        flexShrink:"0",
        borderRadius:"20px",
        background:"#E9EEE9",
        display:"flex",
        flexDirection:"column   ",
            justifyContent:"center",
            placeItems:"center",
            
         boxShadow:" 4px 4px 16px 0px rgba(0, 0, 0, 0.10), -4px -4px 16px 0px rgba(244, 125, 74, 0.10)"
    }}>  <text style={{
        color:"#515062",
        fontFamily:"Integral CF",
        fontSize:"24px",
        fontStyle:"normal",
        fontWeight:"400",
        marginTop:"15px"
        
        
        
    }}> Customer Satisfaction</text>
    <AreaChartsCompo/>
    <div style={{
        display:"flex",
        gap:"20px",
        paddingBottom:"20px"
    }}>
        <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            placeItems:"center"
        }}>
        <div style={{
            display:"flex",
           gap:"10px"
        }}> 
        <img src="/Group 18.svg" alt="" />
        <text style={{
        color:"#96A5B8",
        fontFamily:"Apfel Grotezk",
        fontSize:"16px",
        fontStyle:"normal",
        fontWeight:"400",
        lineHeight:"30px",


 }}> Last Month

        </text>
       

        </div> <text style={{
            
            color:"#222B45",
            fontFamily:"Apfel Grotezk",
            fontSize:"14px",
            fontStyle:"normal",
            fontWeight:"400",
            lineHeight:"20px",

          
        }}>$3,004</text>
        <div>

        </div>
        </div>
        <div style={{
            
            width:"0.883px",
            height:"24px",
            flexShrink:"0",
            background:" #BDC9D3",
            marginTop:"10px"

        }}>

        </div>

        <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:'center',
            placeItems:"center"
        }}>
        <div style={{
            display:"flex",
            gap:"10px"
        }}> 
        <img src="/Group 19.svg" alt="" />
        <text style={{
        color:"#96A5B8",
        fontFamily:"Apfel Grotezk",
        fontSize:"16px",
        fontStyle:"normal",
        fontWeight:"400",
        lineHeight:"30px",


 }}> This Month

        </text>

        </div>
        <text style={{
            
            color:"#222B45",
            fontFamily:"Apfel Grotezk",
            fontSize:"14px",
            fontStyle:"normal",
            fontWeight:"400",
            lineHeight:"20px",

          
        }}>$4,504</text>
        <div>

        </div>
        </div>


    </div>
    </div>
     <div style={{
        width:"556px",
        height:"351px",
        flexShrink:"0",
        borderRadius:"20px",
        background:"#E9EEE9",
        display:"flex"
        ,
        flexDirection:"column",
            justifyContent:"center",
            
        boxShadow:" 4px 4px 16px 0px rgba(0, 0, 0, 0.10), -4px -4px 16px 0px rgba(244, 125, 74, 0.10)"
    }}>
        <text style={
            {paddingLeft:"30px",
                paddingBottom:"10px",
              display:"flex",
              justifyContent:"flex-start",
                color:"#515062",
                fontFamily:"Integral CF",
                fontSize:"24px",
                fontStyle:"normal",
                fontWeight:"400",
                lineHeight:"30px"



            }
        }>Total Revenue</text>
        
        <BarCharts/></div>


    </div>


    <div style={{
        display:"flex",
        justifyContent:"space-between"
    }}>



<div style={{
        width:"560px",
        height:"351px",
        flexShrink:"0",
        borderRadius:"20px",
        background:"#E9EEE9",
        display:"flex",
        justifyContent:"center",
        
        gap:"15px",
        flexDirection:"column",
         boxShadow:" 4px 4px 16px 0px rgba(0, 0, 0, 0.10), -4px -4px 16px 0px rgba(244, 125, 74, 0.10)"
    }}>
        <text style={{
          display:"flex",
          paddingLeft:"30px",
          paddingTop:"10px",
          justifyContent:"flex-start",
            color:"#515062",
            fontFamily:"Integral CF",
            fontSize:"24px",
            fontStyle:"normal",
            fontWeight:"400",
            lineHeight:"32px",
            

       
        }}>Top Products</text>
        <AccessibleTable/>



    </div>
     <div style={{
        width:"370.119px",
        height:"351px",
        flexShrink:"0",
        borderRadius:"20px",
        background:"#E9EEE9",
        display:"flex",
        justifyContent:"center",
        placeItems:"center",
        flexDirection:"column",
        gap:"40px",
        boxShadow:" 4px 4px 16px 0px rgba(0, 0, 0, 0.10), -4px -4px 16px 0px rgba(244, 125, 74, 0.10)"
    }}>
        <text style={{
            paddingLeft:"10px",
            
            color:"#515062",
            fontFamily:"Integral CF",
            fontSize:"21px",
            fontStyle:"normal",
            fontWeight:"400",
            lineHeight:"32px",
            paddingBottom:"15px",
            width:"100%",
        }}>Sales Mapping by Country</text>
        <img src="/Map.png" alt="" style={{
           background:"transparent",
            width:"334px",
            height:"229px",
            flexShrink:"0",
        }} />
    </div>


    </div>





   </div>




            





        </div>

      
    </div>
  
  )
}

export default TheDashboard;






const SideButtons = () => {
    return (
      <ul
        style={{
          display: "flex",
  
          flexDirection: "column",
  
          gap: "25px",
        }}
      >
        <li
          style={{
            listStyle: "none",
          }}
        >
          <a href="/dashboard" style={{
               textDecoration: "none",
             
          }}>
          <button
            style={{
              width: "194px",
              height: "57px",
              flexShrink: "0",
              gap: "10px 20px",
              borderRadius: "41px",
              border: "3px solid #515062",
              background: "#F2F7F2",
              display: "flex",
               justifyContent:"space-evenly",
              placeItems: "center",
            }}
          >
            
            <img src="/Dash.svg" alt="" style={{
              
            }} />
             
               <text style={{
                   color: "#515062",
                   fontFamily: "Apfel Grotezk",
                   fontSize: "24px",
                   fontStyle: "normal",
                   fontWeight: "500",
                   lineHeight: "100px",
                  
               }}> Dashboard </text>
              
           
            
          </button>
          </a>
        </li>
  
        <li
          style={{
            listStyle: "none",
          }}
        >
         <a href="/productThree" style={{
               textDecoration: "none",
             
          }}>
          <button
            style={{
              width: "175px",
              height: "57px",
              flexShrink: "0",
              gap: "10px 20px",
              borderRadius: "41px",
              border: "3px solid #515062",
              background: "#F2F7F2",
              display: "flex",
               justifyContent:"space-evenly",
              placeItems: "center",
            }}
          >
            
            <img src="/Box.svg" alt="" style={{
              
            }} />
             
               <text style={{
                   color: "#515062",
                   fontFamily: "Apfel Grotezk",
                   fontSize: "24px",
                   fontStyle: "normal",
                   fontWeight: "500",
                   lineHeight: "100px",
                  
               }}> Products </text>
              
           
            
          </button>
          </a>
        </li>
  
        <li
          style={{
            listStyle: "none",
          }}
        >
           <a href="/analytics" style={{
               textDecoration: "none",
             
          }}>
          <button
            style={{
              width: "175px",
              height: "57px",
              flexShrink: "0",
              gap: "10px 20px",
              borderRadius: "41px",
              border: "3px solid #515062",
              background: "#F2F7F2",
              display: "flex",
               justifyContent:"space-evenly",
              placeItems: "center",
            }}
          >
            
            <img src="/Graph.svg" alt="" style={{
              
            }} />
             
               <text style={{
                   color: "#515062",
                   fontFamily: "Apfel Grotezk",
                   fontSize: "24px",
                   fontStyle: "normal",
                   fontWeight: "500",
                   lineHeight: "100px",
                  
               }}> Analytics </text>
              
           
            
          </button>
          </a>
        </li>
  
        <li
          style={{
            listStyle: "none",
          }}
        >
           <a href="/customers" style={{
               textDecoration: "none",
             
          }}>
          <button
            style={{
              width: "195px",
              height: "57px",
              flexShrink: "0",
              gap: "10px 20px",
              borderRadius: "41px",
              border: "3px solid #515062",
              background: "#F2F7F2",
              display: "flex",
               justifyContent:"space-evenly",
              placeItems: "center",
            }}
          >
            
            <img src="/people.svg" alt="" style={{
              
            }} />
             
               <text style={{
                   color: "#515062",
                   fontFamily: "Apfel Grotezk",
                   fontSize: "24px",
                   fontStyle: "normal",
                   fontWeight: "500",
                   lineHeight: "100px",
                  
               }}> Customers </text>
              
           
            
          </button>
          </a>
        </li>
  
        <li
          style={{
            listStyle: "none",
          }}
        >
            <a href="/profile" style={{
               textDecoration: "none",
             
          }}>
          <button
            style={{
              width: "150px",
              height: "57px",
              flexShrink: "0",
              gap: "10px 20px",
              borderRadius: "41px",
              border: "3px solid #515062",
              background: "#F2F7F2",
              display: "flex",
               justifyContent:"space-evenly",
              placeItems: "center",
            }}
          >
            
            <img src="/Profile.svg" alt="" style={{
              
            }} />
             
               <text style={{
                   color: "#515062",
                   fontFamily: "Apfel Grotezk",
                   fontSize: "24px",
                   fontStyle: "normal",
                   fontWeight: "500",
                   lineHeight: "100px",
                  
               }}> Profile </text>
              
           
            
          </button>
          </a>
        </li>
  
        <li
          style={{
            listStyle: "none",
          }}
        >
          <a href="/settings" style={{
               textDecoration: "none",
             
          }}>
          <button
            style={{
              width: "168px",
              height: "57px",
              flexShrink: "0",
              gap: "10px 20px",
              borderRadius: "41px",
              border: "3px solid #515062",
              background: "#F2F7F2",
              display: "flex",
               justifyContent:"space-evenly",
              placeItems: "center",
            }}
          >
            
            <img src="/src/assets/images/Settings1.svg" alt="" style={{
              
            }} />
             
               <text style={{
                   color: "#515062",
                   fontFamily: "Apfel Grotezk",
                   fontSize: "24px",
                   fontStyle: "normal",
                   fontWeight: "500",
                   lineHeight: "100px",
                  
               }}> Settings </text>
              
           
            
          </button>
          </a>
        </li>
      </ul>
    );
  }
  
  export default SideButtons
  
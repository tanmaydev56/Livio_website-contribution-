import React from 'react'

const ProductPageCompo = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <div
        style={{
          width: "592px",
          height: "498px",
          flexShrink: "0",
          padding: "10px",

          display: "flex",
          borderRadius: "12px",
          background: "rgba(252, 114, 31, 0.22)",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>
            <text
              style={{
                color: "#171A1F",
                fontFamily: "Alata",
                fontSize: "45px",
                fontStyle: "normal",
                fontWeight: "400",
              }}
            >
              NEW COLLECTION{" "}
            </text>
            <text
              style={{
                color: "#171A1F",
                fontFamily: "Alata",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "400",
              }}
            >
              FURNITURE DESIGNS IDEAS
            </text>
          </div>
          <text
            style={{
              width: "230px",
              height: "35px",
              flexShrink: "0",
              color: "#171A1F",
              fontFamily: "Alata",
              fontSize: "35px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "100px",
            }}
          >
            Rocking Chair
          </text>
          <p
            style={{
              width: "218px",
              height: "94px",
              flexShrink: "0",
              color: "#7B7D7B",
              fontFamily: "Alata",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              marginTop: "55px",
            }}
          >
            Crafted with a sturdy wooden frame, it provides gentle rocking
            motion for relaxation. Plush comfort & gentle sway. Relax in living
            room, nursery, or anywhere!
          </p>
          <button
            style={{
              flexShrink: "0",
              display: "flex",
              width: "161px",
              height: "58px",
              padding: "14px 18px",
              gap: "10px",
              flexDirection: "column",
              alignItems: "centre",
              background: "#FE7865",
              justifyContent: "center",
              marginTop: "50px",
              color: "#FFF",
              fontFamily: "Alta",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
              letterSpacing: "2px",
              
              textTransform: "uppercase",
            }}
          >
            Shop Now
          </button>
        </div>
        <div style={{}}>
          {" "}
          <img src="/image 10.svg" alt="" />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap:"25px"
        }}
      >
        <div
          style={{
            width: "611px",
            height: "211px",
            flexShrink: "0",
            borderRadius: "12px",
            background: "rgba(241, 238, 238, 0.33)",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "136px",
              height: "231px",
              flexShrink: "0",
              marginLeft: "30px",
              
            }}
          >
            {" "}
            <img src="/image 14.svg" alt="" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",

            }}
          >
            <text
              style={{
                width: "313px",
                height: "100px",
                flexShrink: "0",
                color: "#F47D4A",
                fontFamily: "Alata",
                fontSize: "45px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "100px",
                marginLeft:"10px"
              }}
            >
              Swinging Chair
            </text>
            <text style={{
             
width:"398px",
color:"#7B7D7B",
fontFamily:"Alata",
fontSize:"16px",
fontStyle:"normal",
fontWeight:"400",
lineHeight:"normal",
marginLeft:"10px"
            }}>
              Crafted with a sturdy wooden frame, it provides gentle rocking
              motion for relaxation. Plush comfort & gentle sway. Relax in
              living room, nursery, or anywhere!
            </text>
            <div style={{
              display:"flex",
              justifyContent:"flex-end",
              gap:"10px"

            }}>
            <text style={{
              
              color:"#171A1F",
              fontFamily:"Alta",
              fontSize:"16px",
              fontStyle:"normal",
              fontWeight:"400",
              lineHeight:"normal",
              letterSpacing:"2px",
              textTransform:"uppercase",
             
             
              marginTop:"10px"
            }}>Shop Now</text>
            <a href="/cart" style={{
              marginTop:"10px"
            }}>
            <img src="/arrow.svg" alt="" /> </a>
            </div>
          </div>
          
        </div>
        <div
          style={{
            width: "611px",
            height: "281px",
            flexShrink: "0",
            borderRadius: "12px",
            background: "rgba(241, 238, 238, 0.31)",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <text
              style={{
                width: "313px",
                height: "100px",
                flexShrink: "0",
                color: "#F47D4A",
                fontFamily: "Alata",
                fontSize: "45px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "100px",
                marginLeft:"10px"
              }}
            >
            Center Table
            </text>
            <text style={{
             
width:"182px",
height:"131px",
color:"#7B7D7B",
fontFamily:"Alata",
fontSize:"16px",
fontStyle:"normal",
fontWeight:"400",
lineHeight:"normal",
marginLeft:"10px",
textAlign:"left"
,marginBottom:"10px",
            }}>
              Enhance your living space with our Elegant Modern Center Table, a perfect blend of functionality and sophisticated design. 
            </text>
            <div style={{
              display:"flex",
              justifyContent:"flex-start",
              gap:"10px",
              marginLeft:"10px",

            }}>
            <text style={{
              
              color:"#171A1F",
              fontFamily:"Alta",
              fontSize:"16px",
              fontStyle:"normal",
              fontWeight:"400",
              lineHeight:"normal",
              letterSpacing:"2px",
              textTransform:"uppercase",
             
              marginTop:"20px"
            }}>Shop Now</text>
            <a href="/cart" style={{
              marginTop:"20px"
            }}>
            <img src="/arrow.svg" alt="" /> </a>
            </div>
          </div>
          <img style={{
          
    
       position:"absolute",
       marginLeft:"180px"
            
        }} src="/d5ce3c67e79418b619f0566ecc86c1b5-removebg-preview 2.svg" alt="" />


        </div>
      </div>
    </div>
  );
}

export default ProductPageCompo

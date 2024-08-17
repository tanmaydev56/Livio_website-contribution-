import React from 'react'
import SideBar from "../components/sideBar";
import SettingsHead from "../components/settingsHead";
export default function Footer() {
  return (
    <>
    <div style={{marginTop:"-50px"}}>
    <SettingsHead/>
    <div style={{display:"flex",paddingLeft:"20px",paddingBottom:"30px",gap:"45px"}}>
    <SideBar/>
    <div style={{background: "#FFF",
    width: "973px",
boxShadow: "4px 4px 20px 0px rgba(0, 0, 0, 0.25)"}}>
        <h1 style={{color: "#FF7E48", fontSize:"64px" , margin:'10px'}}>
          Language
        </h1>
        <div style={{fontSize:"25px", margin:'20px'}}>
        <div>
          <input type='radio'/>
          <label> English </label>
        </div>
        <div>
        <input type='radio' />
          <label> Hindi </label>
        </div>
        <div>
        <input type='radio' />
          <label> Marathi </label>
        </div>
        <div>
        <input type='radio' />
          <label> Tamil </label>
        </div>
        <div>
        <input type='radio' />
          <label> Telugu </label>

        </div>
        <div>
        <input type='radio' />
          <label> Malayalam </label>
          
        </div>
        <div>
        <input type='radio' />
          <label> Kannada </label>
          
        </div>
        <div>
        <input type='radio' />
          <label> Bengali </label>

        </div>
        <div>
        <input type='radio' />
        <label> Gujarati </label>
        </div>
        </div>
        <button type='button' style={{border:"2px solid black", margin:'10px',padding:'18px',fontSize:'20px', backgroundColor:'#FF7E48', borderRadius:'20px'}}>Save Changes</button>
    </div>
    </div>
    </div>
    </>
  )
}

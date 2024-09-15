import { IoIosArrowBack } from "react-icons/io";
const SettingsHead=()=>{
    return(
        <>
        <div style={{display:'flex',alignItems:"center",paddingLeft:"80px",gap:"400px"}}>
          <a href="/dashboard">  <button style={{width: "70px",height: "70px",background:"#D9D9D9",border:"none",borderRadius:"35px"}}>< IoIosArrowBack style={{width:"55px",height:"70px"}}/></button></a>
            <p style={{color: "#F47D4A",
marginLeft:"600px",
fontFamily: "Apfel Grotezk",
fontSize: "96px",
fontStyle: "normal",
fontWeight: "500",
lineHeight: "100px"}}>Settings<hr style={{width:"350px",margin:"0",height:"5px",backgroundColor:"#CCC",border:'none'}}/></p>
        </div>
        </>
    )
}
export default SettingsHead;
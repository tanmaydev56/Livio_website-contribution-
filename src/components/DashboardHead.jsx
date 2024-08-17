

const DashboardHead = () => {
  return (
    <div style={{
        display:"flex",
        justifyContent:"flex-start",
        flexDirection:"column",
        marginLeft:"90px"
    }}>
        <text style={{
            color:"#F47D4A",
            fontFamily:"Apfel Grotezk ",
            fontSize:"96px",
            fontWeight:"600",
            fontStyle:"normal",
            lineHeight:"100px"
        }}>Dashboard</text>
        <div style={{
            width:"457px",
            height:"5px",
            flexShrink:"0",
            marginTop:"10px",
           
            backgroundColor:"#CCC",
            
        }}></div>
    </div>
  )
}

export default DashboardHead

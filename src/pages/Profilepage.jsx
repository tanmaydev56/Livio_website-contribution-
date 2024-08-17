import Seller from "../components/sellerDetails";
import styles from "../styles/profile.module.css"
import SideButtons from "../components/SideButtons"
import DashboardHead from "../components/DashboardHead"
import ProfileCompo from "../components/ProfileCompo";
const Profile =()=>{
    return(
        <>
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
                   justifyContent:"space-around",
            gap:"30px"
                 
                
                 
                  
              }}> 
             < div style={{
              marginLeft:"5px"
             }}>
         
          <SideButtons/>
          </div>
          <div style={{
    display:"flex",
    flexDirection:'column',
    gap:"29px"
   }}>
    <div className={styles.background}>
        <Seller/>
        <ProfileCompo/>
    </div>
    </div>
    </div>
    </div>
        </>
    )
}
export default Profile;
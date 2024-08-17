import styles from "../styles/seller.module.css"
import share from "../assets/images/share.png"
import email from "../assets/images/email.png"
import phone from "../assets/images/phone.png"
import user from "../assets/images/user.png"
import face from "../assets/images/face.png"
import x from "../assets/images/x.png"
import facebook from "../assets/images/facebook.png"
import insta from "../assets/images/insta.png"
import whatsapp from "../assets/images/whatsapp.png"
import num from "../assets/images/786.png"

const Seller=()=>{
    return(
        <>
        <div className={styles.sellerContainer}>
            <div className={styles.heading}>
                <p className={styles.seller}>SELLER DETAILS</p>
                <button style={{background:"transparent",border:"none"}}><img src={share}/></button>
            </div>
            <div className={styles.details}>
                <img src={face}/>
                <div className={styles.contact}>
                  <div style={{display:"flex",alignItems:"center",justifyItems:"center",gap:"10px"}}><img src={user}/> <p >John Doe</p></div> 
                  <div style={{display:"flex",alignItems:"center",justifyItems:"center",gap:"10px"}}> <img src={phone}/> <p>+0-111-222-333</p></div>
                  <div style={{display:"flex",alignItems:"center",justifyItems:"center",gap:"10px"}}><img src={email}/><p>johndoe@gmail.com</p></div>
                </div>
            </div>
            <div className={styles.business}>
                <p className={styles.sellerB}>BUSINESS INFORMATION</p>
                <div style={{display:"flex",alignItems:"center",justifyItems:"center",gap:"10px"}}> <p className={styles.elegant}>Elegant Interiors Furniture Co. </p><img  style={{height:"35px",paddingTop:"20px"}}src={num}/></div>
                 <p className={styles.elegantTxt}>Elegant Interiors Furniture Co. specializes in high-quality, handcrafted furniture. We offer a wide range of products including sofas, dining tables, beds, and custom pieces tailored to fit your home’s unique style. Our commitment is to provide timeless designs with superior craftsmanship.</p>
                 <p className={styles.member}>Member since: <span style={{color:"#515062",fontFamily:"Apfel Grotezk", fontSize:"24px", fontWeight:"400"}}> 20-Sep-2020</span></p>
                <div style={{display:"flex",alignItems:"center",gap:"10px"}}> <p className={styles.member}>Social Media Accounts:</p><div className={styles.socialMedia}><img src={insta}/><img src={whatsapp}/><img src={facebook}/><img src={x}/></div></div>
            </div>
        </div>
        </>
    )
}
export default Seller;
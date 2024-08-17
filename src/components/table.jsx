;
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ResponsiveContainer } from 'recharts';
import zIndex from '@mui/material/styles/zIndex';
import black from "../assets/images/black.png"
import yellow from "../assets/images/yellow.png"
import gray from "../assets/images/gray.png"
import red from "../assets/images/red.png"
import green from "../assets/images/green.png"
import styles from "../styles/table.module.css"
 function AccessibleTableTwo() {
  return (
    <ResponsiveContainer>
     <div style={{width: "1000px",
height: "410.502px",background: "#E9EEE9",borderRadius: "20.366px",
border: "2px solid #EFEEEB",paddingTop:"10px",boxShadow:"4px 4px 16px 0px rgba(0, 0, 0, 0.10), -4px -4px 16px 0px rgba(244, 125, 74, 0.10)",marginTop:"20px"}}>
   <div style={{display:"flex", justifyContent:"space-between",zIndex:"2" ,paddingLeft:"30px",paddingRight:"30px",transform:"translateY(10px)"}}>
          <text style={{color: "#000",

fontFamily: "Apfel Grotezk",
fontSize: "18px",
fontStyle: "normal",
fontWeight: "400",
lineHeight: "normal"}} >Selling Products</text>
          <div style={{ position: 'relative', display: 'inline-block' }}>
      <select style={{
        height: "30px",
        border: "none",
        padding: "7px",
        paddingLeft: "9px",
        paddingRight: "34px",  // Add padding to the right side
        borderRadius: "12px",
        background: "#F6F6F6",
        color: "#000",
        fontFamily: "Apfel Grotezk",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
        appearance: "none", // Remove default arrow
        WebkitAppearance: "none", // For Safari
        MozAppearance: "none",
        cursor:"pointer" // For Firefox
      }}>
        <option>8 Jul - 24 Jul</option>
        <option>8-24 July</option>
        <option>8-24 July</option>
        <option>8-24 July</option>
      </select>
      <div style={{
        
        position: 'absolute',
        top: '50%',
        right: '15px', // Adjust this value to control the padding
        pointerEvents: 'none',
        transform: 'translateY(-50%)',
        borderLeft: '5px solid transparent',
        borderRight: '5px solid transparent',
        borderTop: '5px solid #000', // Adjust color to match the text
      }}></div>
    </div>
                </div>
     <div className={styles.headings}><p>Product Name</p>
     <div className={styles.adjust}>
     <p>Price</p>
     <p>Sold</p>
     <p>Status</p>
     </div>
</div>
      <div className={styles.contentPro}>
        <div style={{
          display:"flex",
         gap:"140px"
        }}>
       <div className={styles.ProCol}>
        <div className={styles.images}>
          <img className={styles.tshirt}src={black}/>
          <img className={styles.tshirt}src={yellow}/>
          <img className={styles.tshirt}src={gray}/>
        </div>
         <div className={styles.proName}>
          <p>Marvel Thor Movie Print Marble T...</p>
          <p>Aero Shorts Pants Multipacks S...</p>
          <p>Erigo T-Shirts Green</p>
        </div>
        </div>
     <div style={{
      display:"flex",
      gap:"125px",
    
     }}>
      <div className={styles.ProPrice}>
        <p>$23</p>
        <p>$23</p>
        <p>$23</p>
      </div>
      <div className={styles.ProSold}>
      <p>53pcs</p>
        <p>53pcs</p>
        <p>53pcs</p>
      </div>
      
      <div className={styles.ProStatus}>
        <p className={styles.status}><img className={styles.dot}src={green}/>In Stock</p>
        <p className={styles.status}><img className={styles.dot}src={red}/>Out of Stock</p>
        <p className={styles.status}><img className={styles.dot}src={green}/>In Stock</p>
      </div>
      </div>
      </div>
      </div>

     </div>
    </ResponsiveContainer>
  );
}
export default AccessibleTableTwo;
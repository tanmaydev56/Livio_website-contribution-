import Analytics from "../components/analytics"
import styles from "../styles/AnalyticsPage.module.css"
import AccessibleTableTwo from "../components/table.jsx"
import dots from '../assets/images/dots.png'
import bag from '../assets/images/bag.png'
import up from '../assets/images/UP.png'
import monitor from '../assets/images/monitor.png'
import rectangle from '../assets/images/rectangle.png'
import wallet3 from '../assets/images/wallet3.png'
import wallet from '../assets/images/wallet.png'
import us from '../assets/images/us.png'
import uk from '../assets/images/uk.png'
import italy from '../assets/images/italy.png'
import france from '../assets/images/france.png'
import switz from '../assets/images/switz.png'
import down from '../assets/images/down.png'
import SideButtons from "../components/SideButtons"
import DashboardHead from "../components/DashboardHead"
const AnalyticsPage=()=>{
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
            gap:"100px"
            
          
           
            
        }}> 
       < div style={{
        marginLeft:"75px"
       }}>
   
    <SideButtons/>
    </div>
    <div style={{
    display:"flex",
    flexDirection:'column',
    gap:"29px"
   }}>
    <div className={styles.containerBox}>
        <div className={styles.Sales}>
        <Analytics/>
        <div className={styles.box2}>
            <div className={styles.part2}>
                <div className={styles.row1}>
                    <div className={styles.lock}>
                      <img  className={styles.bag}src={bag}/>
                    </div>
                    <img src={dots}/>
                </div>
                <div className={styles.row2}>
                    <p className={styles.total}>Total Sales</p>
                    <p className={styles.number}>$108,560.93</p>
                </div>
                <div className={styles.row3}>
                    <img className={styles.up} src={up}/>
                    <div className={styles.percent}>13.02%</div>
                    <p className={styles.total}>From May</p>
                </div>
            </div>
            <div className={styles.part2}>
            <div className={styles.row1}>
                    <div className={styles.lock}>
                    <img  className={styles.bag}src={monitor} />
                    <img  className={styles.rectangle}src={rectangle} />
                    </div>
                    <img src={dots}/>
                </div>
                <div className={styles.row2}>
                    <p className={styles.total}>Online Sessions</p>
                    <p className={styles.number}>$130,234</p>
                </div>
                <div className={styles.row3}>
                <img className={styles.up} src={up}/>
                    <div className={styles.percent}>6.02%</div>
                    <p className={styles.total}>From May</p>
                </div>
            </div>
        </div>
        </div>
        <div >
        
            <div className={styles.sellHead}>
                {/* <p style={{color: "#000",

fontFamily: "Apfel Grotezk",
fontSize: "18px",
fontStyle: "normal",
fontWeight: "400",
lineHeight: "normal"}}>Selling Products</p>
                <select style={{height:"30px",
                border:"none",
                padding:"7px",
                    borderRadius: "12px",
                    background: "#F6F6F6"
                }}>
                    <option>8-24 July</option>
                    <option>8-24 July</option>
                    <option>8-24 July</option>
                    <option>8-24 July</option>
                </select> */}
                
            </div>
            <div >
           
            <AccessibleTableTwo/>
            </div>
           
        </div>
         <div className={styles.country}>
            <div className={styles.topCountry}>
            <p className={styles.countryHead}>Top Countries</p>
            <div className={styles.countriesBox}>
                <div className={styles.serial}>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                   
                </div>
                <div className={styles.flags}>
                <img className={styles.flag} src={france}/>
                <img className={styles.flag}src={italy}/>
                <img className={styles.flag} src={switz}/>
                
                <img className={styles.flag}src={us}/>
                <img className={styles.flag} src={uk}/>
                </div>
                
                <div className={styles.countryName}>
                <p className={styles.names}>France</p>
                    <p className={styles.names}>Italy</p>
                    <p className={styles.names}>Switzerland</p>
                    <p className={styles.names}>United States</p>
                    <p className={styles.names}>United King...</p>
                </div>
                <div className={styles.num}>
                    <p>48%</p>
                    <p>12%</p>
                    <p>9%</p>
                    <p>6%</p>
                    <p>5%</p>
                </div>
            </div>
            <button className={styles.load}>Load More</button>
            </div>
            <div className={styles.box3}>
            <div className={styles.part1}>
                <div className={styles.row1}>
                    <div className={styles.lock}>
                      <img  className={styles.bag}src={wallet}/>
                    </div>
                    <img src={dots}/>
                </div>
                <div className={styles.row2}>
                    <p className={styles.total}>Conversion Rate</p>
                    <p className={styles.number}>$86.34</p>
                </div>
                <div className={styles.row3}>
                    <img className={styles.up} src={down}/>
                    <div className={styles.percent2}>0.32%</div>
                    <p className={styles.total}>From May</p>
                </div>
            </div>
            <div className={styles.part1}>
            <div className={styles.row1}>
                    <div className={styles.lock}>
                    <img  className={styles.bag}src={wallet3} />
                    
                    </div>
                    <img src={dots}/>
                </div>
                <div className={styles.row2}>
                    <p className={styles.total}>Avg. Order Value</p>
                    <p className={styles.number}>$564.34</p>
                </div>
                <div className={styles.row3}>
                <img className={styles.up} src={up}/>
                    <div className={styles.percent}>3.02%</div>
                    <p className={styles.total}>From May</p>
                </div>
            </div>
        </div>
         </div>
         </div>
    </div>
    </div>
    </div>
    
    </>

   )
}
export default AnalyticsPage;
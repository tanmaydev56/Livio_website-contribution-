import styles from "../styles/furnitureGrid.module.css"
import GrayChair from '../assets/images/GrayChair.png'
import GrayChair2 from '../assets/images/GrayChair2.png'
import GrayChair3 from '../assets/images/GrayChair3.png'
import Sofa from '../assets/images/Sofa.png'
import LuxTable from '../assets/images/LuxTable.png'
import Lounge from '../assets/images/lounge.png'
import BarStool from '../assets/images/barStool.png'
import  RockingChair from '../assets/images/rockingChair.png'
import Stars from '../assets/images/stars.png'
import Discount from '../assets/images/discount.png'
const Grid=()=>{
    return(
        <>
        <div className={styles.gridBox}>
            <div className={styles.row1}>
            <div className={styles.furniture}>
                <img src={GrayChair} className={styles.img1}/>
                <img className={styles.discount} src={Discount}/>
                <div className={styles.background}>
                   
                </div>
                <div className={styles.furnitureData}>
                    <p className={styles.luxuryHead}>Luxury Chair</p>
                    <p className={styles.price}>$100</p>
                    <div className={styles.rating}>
                  <img  src={Stars} /><p className={styles.starsRating}>(572)</p> 
                  </div>
                        <p className={styles.pvt}>Ayal Production Ltd</p>
                </div>
            </div>
            <div className={styles.furniture}>
                <img src={GrayChair2} className={styles.img1}/>
                <img className={styles.discount} src={Discount}/>
                <div className={styles.background}>
                
                </div>
                <div className={styles.furnitureData}>
                    <p className={styles.luxuryHead}>Luxury Chair</p>
                    <p className={styles.price}>$100</p>
                    <div className={styles.rating}>
                  <img  src={Stars} /><p className={styles.starsRating}>(572)</p> 
                  </div>
                        <p className={styles.pvt}>Ayal Production Ltd</p>
                </div>
            </div>
            <div className={styles.furniture}>
            <img src={GrayChair3} className={styles.img1}/>
            
                <div className={styles.background}>
                
                </div>
                <img className={styles.discount} src={Discount}/>
                <div className={styles.furnitureData}>
                    <p className={styles.luxuryHead}>Luxury Chair</p>
                    <p className={styles.price}>$100</p>
                    <div className={styles.rating}>
                  <img  src={Stars} /><p className={styles.starsRating}>(572)</p> 
                  </div>
                        <p className={styles.pvt}>Ayal Production Ltd</p>
                </div>
            </div>
            </div>
            <div className={styles.row1}>
             <div className={styles.furniture}>
             <img src={Sofa} className={styles.img1}/>
             <img className={styles.discount} src={Discount}/>
                <div className={styles.background}> </div>
                <div className={styles.furnitureData}>
                    <p className={styles.sofa}>Sofa</p>
                    <p className={styles.price}>$100</p>
                    <div className={styles.rating}>
                  <img  src={Stars} /><p className={styles.starsRating}>(572)</p> 
                  </div>
                        <p className={styles.pvt}>Ayal Production Ltd</p>
                </div>
               </div>
            <div className={styles.furniture}>
            <img src={LuxTable} className={styles.img1}/>
            <img className={styles.discount} src={Discount}/>
                <div className={styles.background}> </div>
                <div className={styles.furnitureData}>
                    <p className={styles.luxuryHead}>Centre Table</p>
                    <p className={styles.price}>$100</p>
                    <div className={styles.rating}>
                  <img  src={Stars} /><p className={styles.starsRating}>(572)</p> 
                  </div>
                        <p className={styles.pvt}>Ayal Production Ltd</p>
                </div>
            </div>
            <div className={styles.furniture}>
            <img src={Lounge} className={styles.img2}/>
            <img className={styles.discount} src={Discount}/>
                <div className={styles.background}> </div>
                <div className={styles.furnitureData}>
                    <p className={styles.luxuryHead}>Chaise Lounge</p>
                    <p className={styles.price}>$100</p>
                    <div className={styles.rating}>
                  <img  src={Stars} /><p className={styles.starsRating}>(572)</p> 
                  </div>
                        <p className={styles.pvt}>Ayal Production Ltd</p>
                </div>
            </div>
                </div>
                <div className={styles.row1}>
                <div className={styles.furniture}>
                <img src={BarStool} className={styles.img1}/>
                <img className={styles.discount} src={Discount}/>
                <div className={styles.background}> </div>
                <div className={styles.furnitureData}>
                    <p className={styles.barStool}>Bar Stool</p>
                    <p className={styles.price}>$100</p>
                    <div className={styles.rating}>
                  <img  src={Stars} /><p className={styles.starsRating}>(572)</p> 
                  </div>
                        <p className={styles.pvt}>Ayal Production Ltd</p>
                </div>
                </div>
                <div className={styles.furniture}>
                <img src={RockingChair} className={styles.img1}/>
                <img className={styles.discount} src={Discount}/>
                <div className={styles.background}></div>
                <div className={styles.furnitureData}>
                    <p className={styles.luxuryHead}>Rocking Chair</p>
                    <p className={styles.price}>$100</p>
                    <div className={styles.rating}>
                  <img  src={Stars} /><p className={styles.starsRating}>(572)</p> 
                  </div>
                        <p className={styles.pvt}>Ayal Production Ltd</p>
                </div>
                </div>
                <div className={styles.furniture}>
                <img src={RockingChair} className={styles.img1}/>
                <img className={styles.discount} src={Discount}/>
                <div className={styles.background}> </div>
                <div className={styles.furnitureData}>
                    <p className={styles.luxuryHead}>Rocking Chair</p>
                    <p className={styles.price}>$100</p>
                    <div className={styles.rating}>
                  <img  src={Stars} /><p className={styles.starsRating}>(572)</p> 
                  </div>
                        <p className={styles.pvt}>Ayal Production Ltd</p>
                </div>
                </div>
                
                </div>
                <div className={styles.row1}>
            <div className={styles.furniture}>
                <img src={GrayChair} className={styles.img1}/>
                <img className={styles.discount} src={Discount}/>
                <div className={styles.background}> </div>
                <div className={styles.furnitureData}>
                    <p className={styles.luxuryHead}>Luxury Chair</p>
                    <p className={styles.price}>$100</p>
                    <div className={styles.rating}>
                  <img  src={Stars} /><p className={styles.starsRating}>(572)</p> 
                  </div>
                        <p className={styles.pvt}>Ayal Production Ltd</p>
                </div>
            </div>
            <div className={styles.furniture}>
            <img src={GrayChair2} className={styles.img1}/>
            <img className={styles.discount} src={Discount}/>
                <div className={styles.background}> </div>
                <div className={styles.furnitureData}>
                    <p className={styles.luxuryHead}>Luxury Chair</p>
                    <p className={styles.price}>$100</p>
                    <div className={styles.rating}>
                  <img  src={Stars} /><p className={styles.starsRating}>(572)</p> 
                  </div>
                        <p className={styles.pvt}>Ayal Production Ltd</p>
                </div>
            </div>
            <div className={styles.furniture}>
            <img src={GrayChair3} className={styles.img1}/>
            <img className={styles.discount} src={Discount}/>
                <div className={styles.background}> </div>
                <div className={styles.furnitureData}>
                    <p className={styles.luxuryHead}>Luxury Chair</p>
                    <p className={styles.price}>$100</p>
                    <div className={styles.rating}>
                  <img  src={Stars} /><p className={styles.starsRating}>(572)</p> 
                  </div>
                        <p className={styles.pvt}>Ayal Production Ltd</p>
                </div>
            </div>
            </div>
            <div className={styles.row1}>
             <div className={styles.furniture}>
             <img src={Sofa} className={styles.img1}/>
             <img className={styles.discount} src={Discount}/>
                <div className={styles.background}> </div>
                <div className={styles.furnitureData}>
                <p className={styles.sofa}>Sofa</p>
                    <p className={styles.price}>$100</p>
                    <div className={styles.rating}>
                  <img  src={Stars} /><p className={styles.starsRating}>(572)</p> 
                  </div>
                        <p className={styles.pvt}>Ayal Production Ltd</p>
                </div>
               </div>
            <div className={styles.furniture}>
            <img src={LuxTable} className={styles.img1}/>
            <img className={styles.discount} src={Discount}/>
                <div className={styles.background}> </div>
                <div className={styles.furnitureData}>
                    <p className={styles.luxuryHead}>Centre Table</p>
                    <p className={styles.price}>$100</p>
                    <div className={styles.rating}>
                  <img  src={Stars} /><p className={styles.starsRating}>(572)</p> 
                  </div>
                        <p className={styles.pvt}>Ayal Production Ltd</p>
                </div>
            </div>
            <div className={styles.furniture}>
            <img src={Lounge} className={styles.img2}/>
            <img className={styles.discount} src={Discount}/>
                <div className={styles.background}> </div>
                <div className={styles.furnitureData}>
                    <p className={styles.luxuryHead}>Chaise Lounge</p>
                    <p className={styles.price}>$100</p>
                 <div className={styles.rating}>
                  <img  src={Stars} /><p className={styles.starsRating}>(572)</p> 
                  </div>
                        <p>Ayal Production Ltd</p>
                </div>
            </div>
                </div>
                <div className={styles.row1}>
                <div className={styles.furniture}>
                <img src={BarStool} className={styles.img1}/>
                <img className={styles.discount} src={Discount}/>
                <div className={styles.background}> </div>
                <div className={styles.furnitureData}>
                <p className={styles.barStool}>Bar Stool</p>
                    <p className={styles.price}>$100</p>
                    <div className={styles.rating}>
                  <img  src={Stars} /><p className={styles.starsRating}>(572)</p> 
                  </div>
                        <p className={styles.pvt}>Ayal Production Ltd</p>
                </div>
                </div>
                <div className={styles.furniture}>
                <img src={RockingChair} className={styles.img1}/>
                <img className={styles.discount} src={Discount}/>
                <div className={styles.background}> </div>
                <div className={styles.furnitureData}>
                    <p className={styles.luxuryHead}>Rocking Chair</p>
                    <p className={styles.price}>$100</p>
                    <div className={styles.rating}>
                  <img  src={Stars} /><p className={styles.starsRating}>(572)</p> 
                  </div>
                        <p className={styles.pvt}>Ayal Production Ltd</p>
                </div>
                </div>
                <div className={styles.furniture}>
                <img src={RockingChair} className={styles.img1}/>
                <img className={styles.discount} src={Discount}/>
                <div className={styles.background}> </div>
                <div className={styles.furnitureData}>
                    <p className={styles.luxuryHead}>Rocking Chair</p>
                    <p className={styles.price}>$100</p>
                    <div className={styles.rating}>
                  <img  src={Stars} /><p className={styles.starsRating}>(572)</p> 
                  </div>
                        <p className={styles.pvt}>Ayal Production Ltd</p>
                </div>
                </div>
                
                </div>
                <div className={styles.row1}>
            <div className={styles.furniture}>
                <img src={GrayChair} className={styles.img1}/>
                <img className={styles.discount} src={Discount}/>
                <div className={styles.background}></div>
                <div className={styles.furnitureData}>
                    <p className={styles.luxuryHead}>Luxury Chair</p>
                    <p className={styles.price}>$100</p>
                    <div className={styles.rating}>
                  <img  src={Stars} /><p className={styles.starsRating}>(572)</p> 
                  </div>
                        <p className={styles.pvt}>Ayal Production Ltd</p>
                </div>
            </div>
            <div className={styles.furniture}>
            <img src={GrayChair2} className={styles.img1}/>
            <img className={styles.discount} src={Discount}/>
                <div className={styles.background}> </div>
                <div className={styles.furnitureData}>
                    <p className={styles.luxuryHead}>Luxury Chair</p>
                    <p className={styles.price}>$100</p>
                    <div className={styles.rating}>
                  <img  src={Stars} /><p className={styles.starsRating}>(572)</p> 
                  </div>
                        <p className={styles.pvt}>Ayal Production Ltd</p>
                </div>
            </div>
            <div className={styles.furniture}>
            <img src={GrayChair3} className={styles.img1}/>
            <img className={styles.discount} src={Discount}/>
                <div className={styles.background}> </div>
                <div className={styles.furnitureData}>
                    <p className={styles.luxuryHead}>Luxury Chair</p>
                    <p className={styles.price}>$100</p>
                    <div className={styles.rating}>
                  <img  src={Stars} /><p className={styles.starsRating}>(572)</p> 
                  </div>
                        <p className={styles.pvt}>Ayal Production Ltd</p>
                </div>
            </div>
            </div>
            <div className={styles.row1}>
             <div className={styles.furniture}>
             <img src={Sofa} className={styles.img1}/>
             <img className={styles.discount} src={Discount}/>
                <div className={styles.background}> </div>
                <div className={styles.furnitureData}>
                <p className={styles.sofa}>Sofa</p>
                    <p className={styles.price}>$100</p>
                    <div className={styles.rating}>
                  <img  src={Stars} /><p className={styles.starsRating}>(572)</p> 
                  </div>
                        <p className={styles.pvt}>Ayal Production Ltd</p>
                </div>
               </div>
            <div className={styles.furniture}>
            <img src={LuxTable} className={styles.img1}/>
            <img className={styles.discount} src={Discount}/>
                <div className={styles.background}> </div>
                <div className={styles.furnitureData}>
                    <p className={styles.luxuryHead}>Centre Table</p>
                    <p className={styles.price}>$100</p>
                    <div className={styles.rating}>
                  <img  src={Stars} /><p className={styles.starsRating}>(572)</p> 
                  </div>
                        <p className={styles.pvt}>Ayal Production Ltd</p>
                </div>
            </div>
            <div className={styles.furniture}>
            <img src={Lounge} className={styles.img2}/>
            <img className={styles.discount} src={Discount}/>
                <div className={styles.background}> </div>
                <div className={styles.furnitureData}>
                    <p className={styles.luxuryHead}>Chaise Lounge</p>
                    <p className={styles.price}>$100</p>
                    <div className={styles.rating}>
                  <img  src={Stars} /><p className={styles.starsRating}>(572)</p> 
                  </div>
                        <p className={styles.pvt}>Ayal Production Ltd</p>
                </div>
            </div>
                </div>
               
                
               
        </div>
        </>
    )
}
export default Grid;

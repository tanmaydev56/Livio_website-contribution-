import styles from '../styles/WishlistCard.module.css';
function wishlistCard(props){
    return(
        <div className={styles.card}>
            <img src={props.img} alt="product" />
            <div className={styles.cardBody}>
                <h4>{props.name}</h4>
                <p>{props.desc}</p>
                <p>{props.price}</p>
                <button onClick={()=>props.remove(props.id)}>Move To Cart</button>
                <p>X Remove</p>
            </div>
        </div>
    )
}

export default wishlistCard;
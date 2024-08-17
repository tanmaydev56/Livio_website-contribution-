
import { useState } from 'react';
import MultiRangeSlider from "multi-range-slider-react";
import styles from "../styles/filter.module.css";
import oneStar from "../assets/one.png";
import twoStar from "../assets/two.png";
import threeStar from "../assets/three.png";
import fourStar from "../assets/four.png";

const Filter = ({ onCategoryChange }) => {
    const [categories, setCategories] = useState(["Sofa", "Bed"]);
    const [additionalCategories, setAdditionalCategories] = useState([]);
    const [space, setSpace] = useState(0); // Initial space state
    const [minValue, set_minValue] = useState(25);
    const [maxValue, set_maxValue] = useState(75);
    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };
    const handleAddCategory = () => {
        setAdditionalCategories(["Table", "Chair", "Couch", "Lounge"]);
        setSpace(80); // Adjust this value as needed for added space
    };

    const handleCategoryClick = (category) => {
        onCategoryChange(category);
    };

    return (
        <>
            <div className={styles.filterContainer} style={{ paddingBottom: `${space}px` }}>
                <div className={styles.filterHead}>
                    <p>Filters</p>
                    <p className={styles.underline}></p>
                </div>
                <div className={styles.categories}>
                    <p className={styles.catergoryHead}>Categories</p>
                    <div className={styles.buttons}>
                        {categories.map((category, index) => (
                            <button key={index} className={styles.button} onClick={() => handleCategoryClick(category)}>{category}</button>
                        ))}
                        {additionalCategories.map((category, index) => (
                            <button key={index + categories.length} className={styles.button} onClick={() => handleCategoryClick(category)}>{category}</button>
                        ))}
                        {additionalCategories.length === 0 && (
                            <button className={styles.plus} onClick={handleAddCategory}>+</button>
                        )}
                    </div>
                </div>
                <div className={styles.priceColumn} style={{ marginTop: `${space}px` }}>
                    <p className={styles.priceHead}>Price</p>
                    <div className={styles.priceRange}>
                        <div className={styles.range}>
                            <h4>$<span style={{ textDecorationLine: "underline",paddingLeft:"0px" }}>{minValue}</span></h4>
                            <MultiRangeSlider style={{ width: "100px", height: "0px", border: "none", boxShadow: "none", color: "transparent" }}
                                min={0}
                                max={1000}
                                step={5}
                                minValue={minValue}
                                maxValue={maxValue}
                                barInnerColor="rgb(255, 255, 255)"
                                barRightColor="rgb(135, 141, 140)"
                                barLeftColor="rgb(135, 141, 140)"
                                onInput={(e) => {
                                    handleInput(e);
                                }}
                            />
                            <h4> $<span style={{ textDecorationLine: "underline" }}>{maxValue}</span></h4>
                        </div>
                    </div>
                </div>
                <div className={styles.ratingsBox}>
                    <p className={styles.priceHead}>Ratings</p>
                    <div className={styles.starRating}>
                        <p><img src={threeStar} />4 Stars & above</p>
                        <p><img src={fourStar} /> 3 Stars & above</p>
                        <p><img src={twoStar} /> 2 Stars & above</p>
                        <p><img src={oneStar} /> 1 Star & above</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Filter;


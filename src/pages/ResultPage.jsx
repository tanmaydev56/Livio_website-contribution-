
import  { useState } from 'react'
import '../styles/ResultPage.css'
import product1 from '../assets/luxurychair.png'
import product2 from '../assets/image 2.png'
import product3 from '../assets/image 3.png'
import product4 from '../assets/image 4.png'
import product5 from '../assets/image 5.png'
import product6 from '../assets/image 6.png'
import product7 from '../assets/image 7.png'
import product8 from '../assets/image 8.png'
import { HiOutlineViewList } from "react-icons/hi"
import { MdGrid3X3 } from "react-icons/md"
import { IoMdStar } from "react-icons/io"
import Filter from './Filter'

const ResultPage = () => {
    const [viewMode, setViewMode] = useState('grid');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const products = [
        { image: product1, name: "Luxury Chair" },
        { image: product2, name: "Luxury Chair" },
        { image: product3, name: "Luxury Chair" },
        { image: product5, name: "Luxury Sofa" },
        { image: product4, name: "Centre Table" },
        { image: product6, name: "Luxury Chair" },
        { image: product7, name: "Bar Stool" },
        { image: product8, name: "Rocking Chair" }
    ];

    const handleViewChange = (mode) => {
        setViewMode(mode);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(product => product.name.includes(selectedCategory));

    return (
        <div className="ResultPage">
            <div>
                <div className="result-name">
                    <h1>Results< hr style={{width:"300px"}}/></h1>
                </div>
                <div className="result-search">
                    <h3>"Search term"</h3>
                    <hr />
                </div>
                <div className="result-btn">
                    <button className={`btn-r ${selectedCategory === 'Sofa' ? 'selected' : ''}`} onClick={() => handleCategoryChange('Sofa')}>Sofa</button>
                    <button className={`btn-r ${selectedCategory === 'Bed' ? 'selected' : ''}`} onClick={() => handleCategoryChange('Bed')}>Bed</button>
                    <button className={`btn-r ${selectedCategory === 'Chair' ? 'selected' : ''}`} onClick={() => handleCategoryChange('Chair')}>Chair</button>
                    <button className={`btn-r ${selectedCategory === 'Table' ? 'selected' : ''}`} onClick={() => handleCategoryChange('Table')}>Table</button>
                    <button className={`btn-r ${selectedCategory === 'Cabinet' ? 'selected' : ''}`} onClick={() => handleCategoryChange('Cabinet')}>Cabinet</button>
                    <button className={`btn-r ${selectedCategory === 'All' ? 'selected' : ''}`} onClick={() => handleCategoryChange('All')}>All</button>
                </div>
                <div className="view-container">
                    <div className="view-part" style={{ marginBottom: '1em' }}>
                        <button className={`grid-btn ${viewMode === 'grid' ? 'type' : ''}`} onClick={() => handleViewChange('grid')}><MdGrid3X3 size={18} /> Grid</button>
                        <span className='vline'></span>
                        <button className={`list-btn ${viewMode === 'list' ? 'type' : ''}`} onClick={() => handleViewChange('list')}><HiOutlineViewList size={18} /> List</button>
                    </div>
                </div>
                <div className="result-products-container">
                    <Filter onCategoryChange={handleCategoryChange} />
                    {viewMode === "grid" && (
                        <div className={`products-container ${viewMode}`}>
                            {filteredProducts.map((product, index) => (
                                <div key={index} className="product-item">
                                    <div className='product-img'>
                                        <img src={product.image} alt={product.name} width={250} height={250} />
                                    </div>
                                    <div className="product-sec">
                                        <div style={{transform:"translateX(-20px)"}}>
                                            <button >10% OFF</button>
                                        </div>
                                        <h4 style={{color: "#211B18",


fontFamily: "Apfel Grotezk",
fontSize: "20px",
fontStyle: "normal",
fontWeight: "800",
lineHeight: "normal",paddingLeft:"15px"}}>{product.name}</h4>
                                        <h4 style={{ color: '#F47D4A' ,paddingLeft:"25px"}}>$100</h4>
                                        <div>
                                            <span className="star rated" style={{ color: "#FFA800" }}>
                                                <IoMdStar size={18} />
                                            </span>
                                            <span className="star rated" style={{ color: "#FFA800" }}>
                                                <IoMdStar size={18} />
                                            </span>
                                            <span className="star rated" style={{ color: "#FFA800" }}>
                                                <IoMdStar size={18} />
                                            </span>
                                            <span className="star rated" style={{ color: "#FFA800" }}>
                                                <IoMdStar size={18} />
                                            </span>
                                            <span className="star" style={{ color: "#7D807D" }}>
                                                <IoMdStar size={18} />
                                            </span>
                                            <span style={{ color: "#211B18", fontWeight: "bold" }}>
                                                (572)
                                            </span>
                                        </div>
                                        <p>Ayal Production Ltd</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    {viewMode === "list" && (
                        <div className={`products-container ${viewMode}`}>
                            {filteredProducts.map((product, index) => (
                                <div key={index} className="product-item">
                                    <img src={product.image} alt={product.name} width={150} height={150} />
                                    <div className="product-sec">
                                        <div className='product-list'>
                                            <h4 style={{ color: '#F47D4A',fontSize:"24px",fontWeight:"600" }}>{product.name}</h4>
                                            <div>
                                                <span className="star rated" style={{ color: "#FFA800" }}>
                                                    <IoMdStar size={18} />
                                                </span>
                                                <span className="star rated" style={{ color: "#FFA800" }}>
                                                    <IoMdStar size={18} />
                                                </span>
                                                <span className="star rated" style={{ color: "#FFA800" }}>
                                                    <IoMdStar size={18} />
                                                </span>
                                                <span className="star rated" style={{ color: "#FFA800" }}>
                                                    <IoMdStar size={18} />
                                                </span>
                                                <span className="star" style={{ color: "#7D807D" }}>
                                                    <IoMdStar size={18} />
                                                </span>
                                                <span style={{ color: "#211B18", fontWeight: "bold" }}>
                                                    (572)
                                                </span>
                                            </div>
                                            <ul>
                                                <li>Oak wood legs</li>
                                                <li>Faux Leather</li>
                                                <li>Matte finish</li>
                                            </ul>
                                        </div>
                                        <div className="offer-box">
                                            <h4 style={{ color: '#F47D4A',fontSize:"36px" }}>$100</h4>
                                            <p>Delivery in 2 weeks</p>
                                            <p>Bank Offers available</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ResultPage


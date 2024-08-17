import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ProductsPage.css";

const ProductCard = ({ discount, title, price, rating, company, image, link }) => (
  <Link to={link} style={{ textDecoration: 'none' }}>
    <div
      style={{
        position: 'relative',
        borderRadius: "16px",
        boxShadow: "-4px -4px 16px 0px rgba(229, 184, 138, 0.1), 4px 4px 16px 0px rgba(194, 84, 82, 0.1)",
        background: "#E1E5E1",
        paddingBottom: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#211b18",
        fontWeight: "bold",
        marginTop: "100px",
        width: "400px"
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          position: "absolute",
          top: "-75px",
          left: "50%",
          transform: "translate(-50%, -24%)",
          width: "60%",
          height: "auto",
          objectFit: "contain",
        }}
      />
      <label
        style={{
          marginLeft: "12px",
          borderRadius: "7px",
          boxShadow: "0px 0px 8px 0px rgba(244, 125, 74, 0.25)",
          background: "#f47d4a",
          color: "#f2f7f2",
          padding: "4px",
          alignSelf: "flex-start",
          fontSize: "15px",
          fontFamily: "Apfel Grotezk, sans-serif",
          marginTop: "70px",
        }}
      >
        {discount}% OFF
      </label>
      <h3 style={{
        fontSize: "20px",
        marginTop: "4px",
        fontWeight: "500"
      }}
      >
        {title}
      </h3>
      <h4 style={{
        color: "#f47d4a",
        fontSize: "24px",
        fontWeight: "700",
        fontFamily: "Apfel Grotezk, sans-serif",
        marginTop: "4px",
      }}>
        ${price}
      </h4>
      <div style={{ display: "flex", marginTop: "4px" }}>
        <div
          style={{
            width: "110px",
            height: "23px",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <img src="/Group 75.svg" style={{ width: "100%", height: "100%" }} alt="rating" />
        </div>
        <h3 style={{
          fontSize: "16px",
          fontFamily: "Apfel Grotezk, sans-serif",
          marginTop: "4px",
          marginLeft: "4px"
        }} >({rating})</h3>
      </div>
      <h3 style={{
        fontSize: "14px",
        fontFamily: "General Sans Variable, -apple-system, Roboto, Helvetica, sans-serif",
        fontWeight: "500",
        marginTop: "4px"
      }}
      >
        {company}
      </h3>
    </div>
  </Link>
);

const ProductsPageLast = () => {
  const [selectedCategory, setSelectedCategory] = useState("ON SALE");

  const productsGrid1 = [
    {
      discount: 10,
      image: "/src/assets/images/Chair3.svg",
      title: "Luxury Chair",
      price: 100,
      rating: 572,
      company: "Ayal Production Ltd",
      link: "/product1"
    },
    {
      discount: 10,
      image: "/src/assets/images/CenterTable.svg",
      title: "Centre Table",
      price: 100,
      rating: 572,
      company: "Ayal Production Ltd",
      link: "/product2"
    },
    {
      discount: 10,
      image: "/src/assets/images/Sofa1.svg",
      title: "Chaise Lounge",
      price: 100,
      rating: 572,
      company: "Ayal Production Ltd",
      link: "/product3"
    },
    {
      discount: 10,
      image: "/src/assets/images/Chair1.svg",
      title: "Bar Stool",
      price: 100,
      rating: 572,
      company: "Ayal Production Ltd",
      link: "/product4"
    },
    {
      discount: 10,
      image: "/src/assets/images/Chair2.svg",
      title: "Rocking Chair",
      price: 100,
      rating: 572,
      company: "Ayal Production Ltd",
      link: "/product5"
    },
    {
      discount: 10,
      image: "/src/assets/images/Sofa2.svg",
      title: "Luxury Sofa",
      price: 100,
      rating: 572,
      company: "Ayal Production Ltd",
      link: "/product6"
    }
  ];

  const productsGrid2 = [...productsGrid1].sort(() => Math.random() - 0.5);
  const productsGrid3 = [...productsGrid1].sort(() => Math.random() - 0.5);

  const getCurrentProducts = () => {
    switch (selectedCategory) {
      case "LATEST":
        return productsGrid2;
      case "BEST SELLER":
        return productsGrid3;
      default:
        return productsGrid1;
    }
  };

  return (
    <div className="last-cont">
      <div className="product-classifications">
        {["ON SALE", "LATEST", "BEST SELLER"].map((category, index, array) => (
          <>
            <div
              key={category}
              className={`product-classification ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </div>
            {index !== array.length - 1 && <div className="product-classification">|</div>}
          </>
        ))}
      </div>
      <div className="productclassifiedouter">
        <div className="productclassified">
          {getCurrentProducts().map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPageLast;
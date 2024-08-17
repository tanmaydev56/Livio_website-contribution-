import React from "react";
import "../styles/ProductsPage1.css"
import Stars from "../assets/images/Stars.svg"

const ProductCard = ({ discount, title, price, rating, company, image }) => (
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
      width: "288px"
    }}
  >
    <img
      src={image}
      alt={title}
      style={{
        position: "absolute",
        top: "-80px",
        left: "50%",
        transform: "translate(-50%, -24%)",
        width: "80%",
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
        <img src={Stars} style={{ width: "100%", height: "100%" }} alt="rating" />
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
);

const ProductsPageLast = () => {
  const productsGrid1 = [
    {
      discount: 10,
      image:"/src/assets/images/Chair1.svg",
      title: "Luxury Chair",
      price: 100,
      rating: 572,
      company: "Ayal Production Ltd"
    },
    {
      discount: 10,
      image: "/src/assets/images/Chair2.svg",
      title: "Centre Table",
      price: 100,
      rating: 572,
      company: "Ayal Production Ltd"
    },
    {
      discount: 10,
      image: "/src/assets/images/Chair3.svg",
      title: "Chaise Lounge",
      price: 100,
      rating: 572,
      company: "Ayal Production Ltd"
    },
    {
      discount: 10,
      image:"/src/assets/images/Chair1.svg",
      title: "Bar Stool",
      price: 100,
      rating: 572,
      company: "Ayal Production Ltd"
    },
    {
      discount: 10,
      image: "/chair3.svg",
      title: "Chaise Lounge",
      price: 100,
      rating: 572,
      company: "Ayal Production Ltd"
    },
    {
      discount: 10,
      image: "/chair4.svg",
      title: "Bar Stool",
      price: 100,
      rating: 572,
      company: "Ayal Production Ltd"
    }
  ];

  return (
    <>
      <div className="product-cont">
        <div className="product-title">Top Rated Products</div>
        <div className="product">
          {productsGrid1.slice(0, 4).map((product, index) => (
            <ProductCard key={index} {...product}  />
          ))}
        </div>
      </div>
      
    </>
  );
};

export default ProductsPageLast;
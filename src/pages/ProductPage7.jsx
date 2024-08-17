import  { useState, useRef, useEffect } from "react";
import "../styles/ProductPage.css";
import {
  FaArrowRight,
  FaArrowLeft,
  FaRegStar,
  FaRegUserCircle,
  FaArrowDown,
  FaArrowUp,
} from "react-icons/fa";
import { MdCompare } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { LuSofa } from "react-icons/lu";

import swingingchair from "../assets/Product7.png";

const ProductPage = () => {
  const [activeSection, setActiveSection] = useState("top");
  const [isReviewVisible, setIsReviewVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [swingingchair, swingingchair, swingingchair];

  const topRef = useRef(null);
  const middleRef = useRef(null);
  const bottomRef = useRef(null);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 100));
  };

  const toggleReview = () => {
    setIsReviewVisible(!isReviewVisible);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    const top = topRef.current;
    const middle = middleRef.current;
    const bottom = bottomRef.current;

    if (top) observer.observe(top);
    if (middle) observer.observe(middle);
    if (bottom) observer.observe(bottom);

    return () => {
      if (top) observer.unobserve(top);
      if (middle) observer.unobserve(middle);
      if (bottom) observer.unobserve(bottom);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const sectionRef = {
      top: topRef.current,
      middle: middleRef.current,
      bottom: bottomRef.current,
    }[sectionId];

    if (sectionRef) {
      sectionRef.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="product-page">
      <div className="product-container">
        <div className="left-side">
          <div className="product-image">
            <FaArrowLeft
              className="btn arrowleft"
              size={20}
              onClick={handlePrev}
            />
            <img src={images[currentIndex]}  />
            <FaArrowRight
              className="btn arrowright"
              size={20}
              onClick={handleNext}
            />
          </div>
          <div>
            <div className="rectangle">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`btn dot ${
                    index === currentIndex ? "active" : ""
                  }`}
                  style={{
                    backgroundColor:
                      index === currentIndex ? "#F47D4A" : "#515062",
                  }}
                ></span>
              ))}
            </div>
          </div>
        </div>

        <div className="right-side-container">
          <div className="right-side">
            <div ref={topRef} id="top" className="scroll-section">
              <div className="product-name-container">
                <div className="product-name">
                  <h1 style={{ color: "#F47D4A" }}>Swinging Chair</h1>
                </div>
                <div>
                  <button className="compare-btn">
                    <MdCompare />
                    <span>Compare</span>
                  </button>
                </div>
              </div>
              <hr />
              <div className="price-container">
                <div className="dallor-price">
                  <h1>$100</h1>
                </div>
                <div>
                  <span className="star rated" style={{ color: "#FFA800" }}>
                    <IoMdStar size={26} />
                  </span>
                  <span className="star rated" style={{ color: "#FFA800" }}>
                    <IoMdStar size={26} />
                  </span>
                  <span className="star rated" style={{ color: "#FFA800" }}>
                    <IoMdStar size={26} />
                  </span>
                  <span className="star rated" style={{ color: "#FFA800" }}>
                    <IoMdStar size={26} />
                  </span>
                  <span className="star" style={{ color: "#7D807D" }}>
                    <IoMdStar size={26} />
                  </span>
                  <span style={{ color: "#211B18", fontWeight: "bold" }}>
                    (572)
                  </span>
                </div>
              </div>
              <div className="desc-container">
                <h3
                  style={{
                    color: "#515062",
                    margin: 0,
                    paddingBottom: "0.4em",
                  }}
                >
                  Product Description
                </h3>
                <p
                  style={{
                    color: "#9A9D9A",
                    margin: 0,
                    paddingBottom: "0.4em",
                  }}
                >
                  Recline upon the plush seat, designed for optimal comfort
                  and support. With its sturdy hardwood frame and sumptuous
                  upholstery, Sink into comfort with the plush cushioning and
                  extended chaise of the chair.
                </p>
              </div>
              <div className="color-container">
                <span
                  className="btn chooseColor clicked"
                  style={{ backgroundColor: "#A9A39F" }}
                ></span>
                <span
                  className="btn chooseColor"
                  style={{ backgroundColor: "#515062" }}
                ></span>
                <span
                  className="btn chooseColor"
                  style={{ backgroundColor: "#33291F" }}
                ></span>
                <span
                  className="btn chooseColor"
                  style={{ backgroundColor: "#294043" }}
                ></span>
              </div>
              <div className="btn-container">
                <div className="quantity">
                  <span className="sub" onClick={handleDecrease}>
                    -
                  </span>
                  <span className="number">{quantity}</span>
                  <span className="add" onClick={handleIncrease}>
                    +
                  </span>
                </div>
                <button
                  className="btn add-to-cart"
                  style={{ backgroundColor: "#515062", color: "#F2F7F2" }}
                >
                  Add to cart
                </button>
              </div>
            </div>

            <div ref={middleRef} id="middle" className="scroll-section">
              <div className="product-specification-container">
                <div className="product-specification">
                  <h1 style={{ color: "#9A9D9A" }}>Product Specifications</h1>
                </div>
              </div>
              <hr />
              <div className="product-detail-container">
                <div className="h-detail">
                  <div className="detail-border">Material</div>
                  <div>Oak wood legs</div>
                </div>
                <div className="h-detail">
                  <div className="detail-border">Product Measurements</div>
                  <div>42 Depth x 47 Width x 82 Height (cms)</div>
                </div>
                <div className="v-detail">
                  <div className="detail-border">Size</div>
                  <div>Single</div>
                </div>
                <div className="v-detail">
                  <div className="detail-border">Black Style</div>
                  <div>Upholstered</div>
                </div>
                <div className="v-detail">
                  <div className="detail-border">Product Weight</div>
                  <div>20 KG</div>
                </div>
              </div>
            </div>

            <div ref={bottomRef} id="bottom" className="scroll-section">
              <div className="product-review-container">
                <div className="product-review">
                  <h1 style={{ color: "#9A9D9A" }}>Reviews</h1>
                </div>
              </div>
              <hr />
              <div className="review-report-container">
                <div style={{ marginTop: "1em" }}>
                  <span className="star rated" style={{ color: "#FFA800" }}>
                    <IoMdStar size={26} />
                  </span>
                  <span className="star rated" style={{ color: "#FFA800" }}>
                    <IoMdStar size={26} />
                  </span>
                  <span className="star rated" style={{ color: "#FFA800" }}>
                    <IoMdStar size={26} />
                  </span>
                  <span className="star rated" style={{ color: "#FFA800" }}>
                    <IoMdStar size={26} />
                  </span>
                  <span className="star" style={{ color: "#7D807D" }}>
                    <IoMdStar size={26} />
                  </span>
                  <span style={{ color: "#211B18", fontWeight: "bold" }}>
                    (572)
                  </span>
                </div>
                <div
                  style={{ marginTop: "1em" }}
                  className="review-btn-container"
                >
                  <button
                    className="btn-review review-active"
                    style={{ backgroundColor: "#F47D4A" }}
                  >
                    Most Popular
                  </button>
                  <button className="btn-review">Comfort</button>
                  <button className="btn-review">Quality</button>
                  <button className="btn-review">Stability</button>
                </div>
                <div className="review-report" style={{ marginTop: "1em" }}>
                  <div className="user-container">
                    <div>
                      <FaRegUserCircle size={34} style={{ color: "#FF7E48" }} />
                    </div>
                    <div className="user-report">
                      <div className="review-user">
                        <div style={{ marginInline: "1em" }}>
                          <h3
                            style={{
                              margin: 0,
                              padding: 0,
                              textAlign: "left",
                            }}
                          >
                            Anil M.
                          </h3>
                          <div>
                            <span
                              className="star rated"
                              style={{ color: "#FFA800" }}
                            >
                              <IoMdStar size={22} />
                            </span>
                            <span
                              className="star rated"
                              style={{ color: "#FFA800" }}
                            >
                              <IoMdStar size={22} />
                            </span>
                            <span
                              className="star rated"
                              style={{ color: "#FFA800" }}
                            >
                              <IoMdStar size={22} />
                            </span>
                            <span
                              className="star rated"
                              style={{ color: "#FFA800" }}
                            >
                              <IoMdStar size={22} />
                            </span>
                            <span className="star rated" style={{ color: "#7D807D" }}>
                              <IoMdStar size={22} />
                            </span>
                          </div>
                        </div>
                        <div onClick={toggleReview} className="arrow-btn">
                          {isReviewVisible ? (
                            <FaArrowUp className="btn-up" size={22} />
                          ) : (
                            <FaArrowDown className="btn-down" size={22} />
                          )}
                        </div>
                      </div>
                      {isReviewVisible && (
                        <div className="review-content">
                          <p style={{ textAlign: "left", color: "#5B5B5B" }}>
                            I recently purchased this cozy luxury chair and it
                            has quickly become my favorite piece of furniture.
                            The craftsmanship is impeccable, with premium
                            materials that not only look stunning but also
                            feel incredibly comfortable. The cushioning is
                            plush yet supportive, making it perfect for long
                            reading sessions or relaxing after a long day.
                          </p>
                          <div
                            className="review-pictures"
                            style={{ textAlign: "left" }}
                          >
                            <button className="btn-pic">Picture</button>
                            <button className="btn-pic">Picture</button>
                            <button className="btn-pic">Picture</button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-container">
          <div className="scrollbar">
            <div
              className={`scrollbar-endpoint ${
                activeSection === "top" ? "active" : ""
              }`}
            >
              <button
                className="btn-scroll top"
                onClick={() => scrollToSection("top")}
              >
                <LuSofa size={20} />
              </button>
            </div>
            <div
              className={`scrollbar-endpoint ${
                activeSection === "middle" ? "active" : ""
              }`}
            >
              <button
                className="btn-scroll middle"
                onClick={() => scrollToSection("middle")}
              >
                i
              </button>
            </div>
            <div
              className={`scrollbar-endpoint ${
                activeSection === "bottom" ? "active" : ""
              }`}
            >
              <button
                className="btn-scroll bottom"
                onClick={() => scrollToSection("bottom")}
              >
                <FaRegStar size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

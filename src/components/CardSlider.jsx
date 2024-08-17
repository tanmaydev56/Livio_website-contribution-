import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import IMG1 from "../assets/img/carousel1.png";
import IMG2 from "../assets/img/carousel2.png";
import IMG3 from "../assets/img/carousel3.png";
import IMG4 from "../assets/img/carousel4.png";
import star from "../assets/4Star-img.png";
import ten from "../assets/10-img.png";
import hun from "../assets/100-img.png";
import right from "../assets/next-icon.png"; // Right arrow image
import left from "../assets/previous-icon.png"; // Left arrow image
import "../styles/CArdSlider.css";

const CardSlider = () => {
  const cards = [
    {
      imgSrc: IMG1,
      name: "Luxury Chair",
      description: "Ayal Production Ltd",
    },
    {
      imgSrc: IMG2,
      name: "Luxury Chair",
      description: "Ayal Production Ltd",
    },
    {
      imgSrc: IMG3,
      name: "Luxury Chair",
      description: "Ayal Production Ltd",
    },
    {
      imgSrc: IMG4,
      name: "Luxury Chair",
      description: "Ayal Production Ltd",
    },
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const arrowStyles = {
    width: "50px",
    height: "auto",
    cursor: "pointer",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
  };

  return (
    <section className="container">
      <Carousel
        swipeable
        draggable
        showDots
        responsive={responsive}
        ssr
        infinite
        autoPlay
        autoPlaySpeed={3000}
        keyBoardControl
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        customLeftArrow={
          <img
            src={left}
            alt="Previous"
            style={{ ...arrowStyles, left: "10px" }}
          />
        }
        customRightArrow={
          <img
            src={right}
            alt="Next"
            style={{ ...arrowStyles, right: "10px" }}
          />
        }
      >
        {cards.map((card, index) => (
          <div key={index} className="carouselContcard__article">
            <div className="card__image">
              <img src={card.imgSrc} alt={card.name} className="card__img" />
              <div className="card__shadow"></div>
            </div>
            <div className="card__data">
              <img src={ten} alt="Ten rating" className="ten-img" />
              <h3 className="card__name">{card.name}</h3>
              <img src={hun} alt="Hundred rating" />
              <br />
              <img src={star} alt="Star rating" className="card__button" />
              <p className="card__description">{card.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default CardSlider;

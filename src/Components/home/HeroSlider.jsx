import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import { Link } from "react-router-dom";

function HeroSlider() {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    fade: true,
    infinite: true,
    prevArrow: <button className="slick-prev"><i className="ion-chevron-left"></i></button>,
    nextArrow: <button className="slick-next"><i className="ion-chevron-right"></i></button>,
    responsive: [
      { breakpoint: 1501, settings: { slidesToShow: 1 } },
      { breakpoint: 1199, settings: { slidesToShow: 1, arrows: false } },
      { breakpoint: 991, settings: { slidesToShow: 1, arrows: false } },
      { breakpoint: 767, settings: { slidesToShow: 1, arrows: false } },
      { breakpoint: 575, settings: { slidesToShow: 1, arrows: false } },
      { breakpoint: 479, settings: { slidesToShow: 1, arrows: false } },
    ],
  };

  const slides = [
    {
      titleBig: "AMAZING PRODUCT!",
      titleSmall: "Led Desk Lamp Brand",
      desc: "Next generation LED lamp. A multi-function LED lamp that is environmentally friendly and soft on the eyes.",
      bgClass: "hero-slider-bg-10",
      link: "/shop-left-sidebar"
    },
    {
      titleBig: "New Arrivals",
      titleSmall: "DECOR CHAIR",
      desc: "An elegant selection of chairs combining comfort & practicality. Providing the perfect solution for large & small scale exhibition seating.",
      bgClass: "hero-slider-bg-11",
      link: "/shop-left-sidebar"
    },
    {
      titleBig: "New Arrivals",
      titleSmall: "Decorative Watch",
      desc: "The materials used in these exquisite accessories are of the same high quality marbles and granites that are found.",
      bgClass: "hero-slider-bg-6",
      link: "/shop-left-sidebar"
    },
  ];

  return (
    <div className="hero-slider-area section-space--30">
      <div className="hero-slider-wrapper">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="single-slider-item">
              <div className={`hero-slider-item-wrapper hero-slider-item-wrapper--fullwidth ${slide.bgClass}`}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="hero-slider-content">
                        <p className="slider-title slider-title--big-light">{slide.titleBig}</p>
                        <p className="slider-title slider-title--big-light">{slide.titleSmall}</p>
                        <p className="slider-title slider-title--small">{slide.desc}</p>
                        <Link className="theme-button hero-slider-button" to="/shop">
                          <i className="ion-ios-plus-empty"></i> SHOP NOW
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default HeroSlider;

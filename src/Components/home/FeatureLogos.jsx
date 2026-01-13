import React from "react";

// import icons
import freeShipping from "../../assets/img/icons/free_shipping.webp";
import moneyBack from "../../assets/img/icons/money_back.webp";
import support247 from "../../assets/img/icons/support247.webp";

// features array
const features = [
  {
    img: freeShipping,
    title: "FREE SHIPPING WORLDWIDE",
    desc: "We offer free shipping via Standard Shipping on orders over $200.00",
  },
  {
    img: moneyBack,
    title: "MONEY BACK GUARANTEE",
    desc: "If you're not satisfied with our product, we'll refund the purchase price*.",
  },
  {
    img: support247,
    title: "ONLINE SUPPORT 24/7",
    desc: "Our friendly support team is available to help you 24 hours a day, seven days a week",
  },
];

function FeatureLogos() {
  return (
    <div className="feature-logo-wrapper section-space--inner feature-logo-wrapper--bottom-border container">
      <div className="row">
        {features.map((feature, index) => (
          <div key={index} className="col-md-4">
            <div className="single-feature-logo">
              <div className="single-feature-logo__image">
                <img
                  width="52"
                  height="52"
                  src={feature.img}
                  className="img-fluid"
                  alt={feature.title}
                />
              </div>
              <div className="single-feature-logo__content">
                <h4 className="title">{feature.title}</h4>
                <p className="short-desc">{feature.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureLogos;

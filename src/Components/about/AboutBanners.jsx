import React from "react";

// import banners images
import banner7 from "../../assets/img/banners/banner7.webp";
import banner8 from "../../assets/img/banners/banner8.webp";
import banner9 from "../../assets/img/banners/banner9.webp";

// create banners array
const banners = [banner7, banner8, banner9];

const AboutBanners = () => {
  return (
    <div className="container">
      <div className="row row-10">
        {banners.map((img, i) => (
          <div className="col-md-4" key={i}>
            <div className="single-banner">
              <img src={img} className="img-fluid" alt={`Banner ${i + 1}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutBanners;

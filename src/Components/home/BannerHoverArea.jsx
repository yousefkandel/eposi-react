// src/components/BannerHoverArea.jsx
import React, { useState } from "react";
import bannerData from "../data/bannerData";
import { Link } from "react-router-dom";

const BannerHoverArea = () => {
  // استخدام useState لتحميل البيانات (لو حبيت ممكن تتغير لاحقًا ديناميكي)
  const [banners] = useState(bannerData);

  return (
    <div className="banner-hover-area section-space">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Banner Hover Wrapper */}
            <div className="banner-hover-wrapper">
              <div className="row">
                {banners.map((banner) => (
                  <div className="col-md-6" key={banner.id}>
                    <div className="single-hover-banner">
                      <div className="single-hover-banner__image position-relative">
                        <Link to='/shop'>
                          <img
                            width="570"
                            height="319"
                            src={banner.img}
                            className="img-fluid"
                            alt={banner.titleBig}
                          />
                        </Link>
                        <div className="single-hover-banner__content position-absolute">
                          <h4 className="small-text">{banner.titleSmall}</h4>
                          <h3 className="big-text">{banner.titleBig}</h3>
                          <Link
                            className={`banner-link ${banner.textColor} text-decoration-none`}
                            to='{/Shop}'
                          >
                            SHOP NOW
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* End of Banner Hover Wrapper */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerHoverArea;

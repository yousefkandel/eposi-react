// src/components/FooterArea.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const FooterArea = () => {
  return (
    <div className="footer-area footer-area--light-bg">
      <div className="footer-navigation section-space--inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/*=======  footer navigation wrapper  =======*/}
              <div className="footer-navigation-wrapper">
                <div className="row">
                  <div className="col-lg-5 col-md-9">
                    {/*=======  footer short desc  =======*/}
                    <div className="footer-short-desc">
                      <div className="image">
                        <Link to="/">
                          <img
                            width="93"
                            height="25"
                            src="assets/img/logo.webp"
                            className="img-fluid"
                            alt="Logo"
                          />
                        </Link>
                      </div>
                      <p className="message">
                        Duis autem vel eum iriure dolor in hendrerit in vulputate
                        velit esse molestie consequat, vel illum dolore eu feugiat
                        nulla facilisis.
                      </p>
                      <div className="footer-social-section">
                        <h4 className="social-title">Follow Us On Social:</h4>
                        <ul className="social-link">
                          <li>
                            <Link to="/">
                              <i className="fa fa-facebook"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <i className="fa fa-twitter"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <i className="fa fa-google-plus"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <i className="fa fa-youtube"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/*=======  End of footer short desc  =======*/}
                  </div>

                  <div className="col-lg-2 offset-lg-1 col-sm-4">
                    {/*=======  single footer widget  =======*/}
                    <div className="single-footer-widget">
                      <h3 className="single-footer-widget__title">Open Time</h3>
                      <div className="single-footer-widget__content">
                        <p className="time">Mon - Fri: 8AM - 10PM</p>
                        <p className="time">Sat: 9AM-8PM</p>
                        <p className="time">Sun: Closed</p>
                        <p className="time time--extra-margin">
                          We Work All The Holidays
                        </p>
                      </div>
                    </div>
                    {/*=======  End of single footer widget  =======*/}
                  </div>

                  <div className="col-lg-2 col-sm-4">
                    {/*=======  single footer widget  =======*/}
                    <div className="single-footer-widget">
                      <h3 className="single-footer-widget__title">Information</h3>
                      <div className="single-footer-widget__content">
                        <ul className="footer-navigation">
                          <li>
                            <Link  className="text-decoration-none text-dark" to="/">About Us</Link>
                          </li>
                          <li>
                            <Link  className="text-decoration-none text-dark" to="/">Delivery Information</Link>
                          </li>
                          <li>
                            <Link  className="text-decoration-none text-dark" to="/">Privacy Policy</Link>
                          </li>
                          <li>
                            <Link  className="text-decoration-none text-dark" to="/">Terms & Conditions</Link>
                          </li>
                          <li>
                            <Link  className="text-decoration-none text-dark" to="/">Contact Us</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/*=======  End of single footer widget  =======*/}
                  </div>

                  <div className="col-lg-2 col-sm-4">
                    {/*=======  single footer widget  =======*/}
                    <div className="single-footer-widget">
                      <h3 className="single-footer-widget__title">Extras</h3>
                      <div className="single-footer-widget__content">
                        <ul className="footer-navigation">
                          <li>
                            <Link  className="text-decoration-none text-dark" to="/">Brands</Link>
                          </li>
                          <li>
                            <Link  className="text-decoration-none text-dark" to="/">Gift Certificates</Link>
                          </li>
                          <li>
                            <Link  className="text-decoration-none text-dark" to="/">Affiliate</Link>
                          </li>
                          <li>
                            <Link  className="text-decoration-none text-dark" to="/">Specials</Link>
                          </li>
                          <li>
                            <Link  className="text-decoration-none text-dark" to="/">Order History</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/*=======  End of single footer widget  =======*/}
                  </div>
                </div>
              </div>
              {/*=======  End of footer navigation wrapper  =======*/}
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
  );
};

export default FooterArea;

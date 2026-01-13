import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.webp"; // استدعاء اللوغو

const MobileHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="header-mobile-navigation d-block d-lg-none border-bottom p-2">
      <div className="row align-items-center">
        <div className="col-6 col-md-6">
          <div className="header-logo">
            <Link to="/">
              <img
                width="93"
                height="25"
                src={logo}
                className="img-fluid"
                alt="Eposi Logo"
              />
            </Link>
          </div>
        </div>

        <div className="col-6 col-md-6 text-end">
          <div className="header-icon-wrapper d-flex justify-content-end align-items-center gap-2">
            {/* Cart */}
            <Link to="/cart" className="position-relative text-dark">
              <i className="ion-bag fs-4"></i>
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: "0.7rem" }}
              >
                3
              </span>
            </Link>

            {/* Hamburger Toggle */}
            <button
              type="button"
              className="btn "
              onClick={toggleMenu}
              style={{ borderRadius: "4px" }}
            >
              <div style={{ width: "22px", height: "2px", backgroundColor: "black", margin: "4px 0" }} />
              <div style={{ width: "22px", height: "2px", backgroundColor: "black", margin: "4px 0" }} />
              <div style={{ width: "22px", height: "2px", backgroundColor: "black", margin: "4px 0" }} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu content */}
      {menuOpen && (
        <div className="mobile-menu-content mt-2 bg-light p-3 rounded shadow-sm">
          <ul className="list-unstyled mb-0">
            <li className="mb-2">
              <Link to="/" className="text-dark fw-bold">
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/shop" className="text-dark fw-bold">
                Shop
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/about" className="text-dark fw-bold">
                About
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/contact" className="text-dark fw-bold">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileHeader;

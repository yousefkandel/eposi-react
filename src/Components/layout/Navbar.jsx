import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

function Navbar() {
  const { user, logout } = useAuth();
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (window.initActive) {
      window.initActive();
    }
  }, []);

  const handleLogout = () => {
    logout();
    clearCart();
    navigate("/login");
  };

  return (
    <div className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Header Wrapper */}
            <div className="header-wrapper d-none d-lg-flex">

              {/* Logo */}
              <div className="logo">
                <Link to="/">
                  <img
                    width="93"
                    height="25"
                    src="/assets/img/logo.webp"
                    className="img-fluid"
                    alt="Logo"
                  />
                </Link>
              </div>

              {/* Navigation */}
              <div className="navigation-menu-wrapper">
                <nav>
                  <ul>
                    <li>
                      <Link className="text-decoration-none text-dark" to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="text-decoration-none text-dark" to="/shop">
                        Shop
                      </Link>
                    </li>
                    <li>
                      <Link className="text-decoration-none text-dark" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="text-decoration-none text-dark" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Header Icons */}
              <div className="header-icon-wrapper">
                <ul className="icon-list">
              
                  {/* Cart */}
                  <li>
                    <div className="header-cart-icon">
                      <Link to="/cart" id="minicart-trigger">
                        <i className="ion-bag"></i>
                        {cartItems.length > 0 && (
                          <span className="counter">{cartItems.length}</span>
                        )}
                      </Link>
                    </div>
                  </li>

                  {/* Auth */}
                  <li>
                    {user ? (
                      <button
                        onClick={handleLogout}
                        className="btn btn-link text-decoration-none text-dark p-0"
                      >
                        Logout
                      </button>
                    ) : (
                      <Link
                        className="text-decoration-none text-dark"
                        to="/login"
                      >
                        Login
                      </Link>
                    )}
                  </li>
                </ul>
              </div>

            </div>
            {/* End Header Wrapper */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

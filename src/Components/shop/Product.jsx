import React from "react";
import { Link } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../../context/CartContext";

const Shop = () => {
  const { addToCart } = useCart();

  return (
    <div className="page-content-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-wrapper">
              <div className="page-content-wrapper">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="shop-page-content">
                      <div className="row shop-product-wrap grid four-column">
                        {products.map((product) => (
                          <div
                            key={product.id}
                            className="col-12 col-md-4 col-sm-6 col-lg-3"
                          >
                            <div className="single-grid-product grid-view-product">
                              <div className="single-grid-product__image">
                                <div className="single-grid-product__label">
                                  <span className="sale">-20%</span>
                                  <span className="new">New</span>
                                </div>

                                <Link to={`/single-product/${product.id}`}>
                                  <img
                                    src={product.image}
                                    className="img-fluid"
                                    alt=""
                                  />
                                  <img
                                    src={product.imageHover}
                                    className="img-fluid"
                                    alt=""
                                  />
                                </Link>

                                {/* زر الإضافة للكارت */}
                                <div className="hover-icons">
                                  <button
                                    onClick={() => addToCart(product)}
                                    className="border-0 bg-transparent"
                                  >
                                    <i className="ion-bag"></i>
                                  </button>
                                </div>
                              </div>

                              <div className="single-grid-product__content">
                                <div className="single-grid-product__category-rating">
                                  <span className="category">
                                    {product.category}
                                  </span>
                                </div>

                                <h3 className="single-grid-product__title">
                                  <Link
                                    className="text-decoration-none text-dark"
                                    to={`/single-product/${product.id}`}
                                  >
                                    {product.title}
                                  </Link>
                                </h3>

                                <p className="single-grid-product__price">
                                  <span className="discounted-price">
                                    ${product.price}.00
                                  </span>
                                  <span className="main-price discounted">
                                    ${product.oldPrice}.00
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

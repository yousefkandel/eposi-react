import React, { useState } from "react";
import { widgetsData } from "../data/data"; // جبت البيانات من الملف الخارجي
import { Link } from "react-router-dom";

const ProductWidgetArea = () => {
  // استخدم useState عشان تمثل بيانات الـ widgets
  const [widgets] = useState(widgetsData);

  return (
    <div className="product-widget-area section-space">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="product-widget-wrapper">
              <div className="row">
                {widgets.map((widget) => (
                  <div key={widget.id} className="col-lg-4">
                    {/*=======  product widget chunk wrapper  =======*/}
                    <div className="product-widget-chunk-wrapper">
                      {/*=======  widget product list title  =======*/}
                      <div className="widget-product-title-wrapper">
                        <h3 className="widget-product-title">{widget.title}</h3>
                      </div>
                      {/*=======  End of widget product list title  =======*/}

                      {/*=======  widget product list wrapper  =======*/}
                      <div className="widget-product-list-wrapper">
                        {widget.products.map((product) => (
                          <div key={product.id} className="single-grid-product single-grid-product--widget-mode">
                            <div className="single-grid-product--widget-mode__image">
                              <Link class="text-decoration-none" to="/shop">
                                <img
                                  width="100"
                                  height="133"
                                  src={product.img}
                                  className="img-fluid"
                                  alt={product.title}
                                />
                              </Link>
                            </div>

                            <div className="single-grid-product--widget-mode__content">
                              <div className="single-grid-product__category-rating">
                                <span className="category">
                                  <Link class="text-decoration-none" to="/shop">{product.category}</Link>
                                </span>
                                <span className="rating">
                                  {[...Array(5)].map((_, i) => (
                                    <i
                                      key={i}
                                      className={
                                        i < product.rating ? "ion-android-star active" : "ion-android-star-outline"
                                      }
                                    ></i>
                                  ))}
                                </span>
                              </div>

                              <h3 className="single-grid-product__title">
                                <Link class="text-decoration-none text-dark" to="/shop">{product.title}</Link>
                              </h3>
                              <p className="single-grid-product__price">
                                {product.discountedPrice && (
                                  <span className="discounted-price">{product.discountedPrice}</span>
                                )}
                                <span className={`main-price ${product.discountedPrice ? "discounted" : ""}`}>
                                  {product.mainPrice}
                                </span>
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      {/*=======  End of widget product list wrapper  =======*/}
                    </div>
                    {/*=======  End of product widget chunk wrapper  =======*/}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductWidgetArea;

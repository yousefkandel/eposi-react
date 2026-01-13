// src/Components/singleA/LatestArrivals.jsx
import React from "react";
import { Link } from "react-router-dom";
import productsArv from "../data/ProductArv";
import { useCart } from "../../context/CartContext";

const LatestArrivals = () => {
  const { addToCart } = useCart();

  return (
    <div className="latest-arrivals section-space">
      <div className="container">
        {/* Section Title */}
        <div className="row">
          <div className="col-12 text-center section-space--half">
            <h2 className="section-title">Latest Arrivals</h2>
            <p className="section-subtitle">
              Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas.
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="row">
          {productsArv.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="single-grid-product">
                <div className="single-grid-product__image">
                  {/* تحقق من وجود label قبل استخدام includes */}
                  {product.label?.includes("sale") && <span className="sale">-20%</span>}
                  {product.label?.includes("new") && <span className="new">New</span>}
<Link to={`/product-arv/${product.id}`}>
  <img
  src={product.image}
  alt={product.title}
  className="img-fluid"
/>

<img
  src={product.imageHover}
  alt={product.title}
  className="img-fluid"
/>

</Link>

                  <div className="hover-icons">
                    <button
                     onClick={() =>
    addToCart(
      {
        ...product,
        image: product.image // 👈 ده الحل
      },
      1
    )
  }
                    // onClick={() => addToCart(product, 1)}

                      className="border-0 bg-white p-2 rounded"
                    >
                      <i className="ion-bag"></i>
                    </button>
                  </div>
                </div>

                <div className="single-grid-product__content">
                  <div className="single-grid-product__category-rating">
                    <span className="category">{product.category || "Uncategorized"}</span>
                    <span className="rating">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={i < (product.rating || 0) ? "ion-android-star active" : "ion-android-star-outline"}
                        ></i>
                      ))}
                    </span>
                  </div>

                  <h3 className="single-grid-product__title">{product.title || "Untitled Product"}</h3>

                  <p className="single-grid-product__price">
                    {product.discountedPrice && <span className="discounted-price">${product.discountedPrice}</span>}
                    <span className={`main-price ${product.discountedPrice ? "discounted" : ""}`}>
                      ${product.mainPrice || product.price || 0}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestArrivals;

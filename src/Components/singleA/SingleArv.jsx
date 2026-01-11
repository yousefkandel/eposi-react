import React, { useState } from "react";
import { useParams } from "react-router-dom";
import productsArv from "../data/ProductArv";
import { useCart } from "../../context/CartContext";

const SingleArv = () => {
  const { id } = useParams();
  const product = productsArv.find(item => item.id === Number(id));

  // Hooks لازم تتنادى دايمًا في أول المكون
  const [mainImage, setMainImage] = useState(product?.img1 || "");
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  // بعد استدعاء الـ hooks، نرجع رسالة لو المنتج مش موجود
  if (!product) {
    return <h2 style={{ padding: "50px", textAlign: "center" }}>Product Not Found</h2>;
  }

  const galleryImages = [product.img1, product.img2].filter(Boolean);

  const handleAddToCart = () => {
    addToCart({ ...product }, quantity);
    alert(`${product.title} added to cart (${quantity})`);
  };

  return (
    <div className="single-product-main-content-area section-space container">
      <div className="row">
        {/* صورة المنتج */}
        <div className="col-lg-6">
          <div className="product-details-slider-area">
            <div className="big-image-wrapper">
              <img
                src={mainImage}
                alt={product.title}
                className="img-fluid"
                style={{ width: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="product-details-small-image-wrapper d-flex gap-2 mt-2">
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  className="single-image"
                  style={{
                    width: 80,
                    height: 80,
                    cursor: "pointer",
                    overflow: "hidden",
                    borderRadius: "5px",
                  }}
                  onClick={() => setMainImage(img)}
                >
                  <img
                    src={img}
                    alt={`${product.title}-${index}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* تفاصيل المنتج */}
        <div className="col-lg-6">
          <div className="single-product-content-description">
            <p className="single-info">
              Brands: <a href="#">{product.category}</a>
            </p>
            <h4 className="product-title">{product.title}</h4>
            <p className="single-grid-product__price">
              <span className="discounted-price">${product.price}</span>
              {product.oldPrice && (
                <span className="main-price discounted ms-2">${product.oldPrice}</span>
              )}
            </p>
            <p className="single-info">
              Product Code: <span className="value">{product.code}</span>
            </p>
            <p className="single-info">
              Reward Points: <span className="value">{product.rewardPoints}</span>
            </p>
            <p className="single-info">
              Availability: <span className="value">{product.stock}</span>
            </p>
            <p className="product-description">{product.description}</p>

            <div className="product-actions mt-3">
              <div className="quantity-selection mb-2">
                <label>Qty</label>
                <input
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Number(e.target.value) > 0 ? Number(e.target.value) : 1)
                  }
                  className="form-control w-25"
                />
              </div>

              <button className="cart-btn" onClick={handleAddToCart}>
                <i className="ion-bag"></i> ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleArv;

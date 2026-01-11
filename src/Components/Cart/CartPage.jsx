// src/Components/Cart/CartPage.jsx
import React from "react";
import { useCart } from "../../context/CartContext";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  const handleQuantityChange = (id, value) => {
    if (value < 1) return;
    updateQuantity(id, value);
  };

  const subTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingCost = 0; // ممكن تخليها ديناميكية لاحقًا
  const grandTotal = subTotal + shippingCost;

  return (
    <div className="page-content-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-wrapper">
              <div className="page-content-wrapper">
                <form>
                  <div className="cart-table table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="pro-thumbnail">Image</th>
                          <th className="pro-title">Product</th>
                          <th className="pro-price">Price</th>
                          <th className="pro-quantity">Quantity</th>
                          <th className="pro-subtotal">Total</th>
                          <th className="pro-remove">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.length === 0 ? (
                          <tr>
                            <td colSpan="6" style={{ textAlign: "center" }}>
                              Your cart is empty
                            </td>
                          </tr>
                        ) : (
                          cartItems.map(item => (
                            <tr key={item.id}>
                              <td className="pro-thumbnail">
                                <a href={`/product/${item.id}`}>
                                  <img src={item.image} className="img-fluid" alt={item.title} />
                                </a>
                              </td>
                              <td className="pro-title">
                                <a href={`/product/${item.id}`}>{item.title}</a>
                              </td>
                              <td className="pro-price"><span>${item.price.toFixed(2)}</span></td>
                              <td className="pro-quantity">
                                <div className="quantity-selection">
                                  <input
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    onChange={e => handleQuantityChange(item.id, Number(e.target.value))}
                                  />
                                </div>
                              </td>
                              <td className="pro-subtotal"><span>${(item.price * item.quantity).toFixed(2)}</span></td>
                              <td className="pro-remove">
                                <button
                                  type="button"
                                  className="btn btn-link"
                                  onClick={() => removeFromCart(item.id)}
                                >
                                  <i className="fa fa-trash-o"></i>
                                </button>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </form>

                <div className="row">
                  <div className="col-lg-6 col-12">
                    {/* Shipping & Coupon Sections ممكن تسيبهم زي ما هما */}
                  </div>

                  <div className="col-lg-6 col-12 d-flex">
                    <div className="cart-summary">
                      <div className="cart-summary-wrap">
                        <h4>Cart Summary</h4>
                        <p>Sub Total <span>${subTotal.toFixed(2)}</span></p>
                        <p>Shipping Cost <span>${shippingCost.toFixed(2)}</span></p>
                        <h2>Grand Total <span>${grandTotal.toFixed(2)}</span></h2>
                      </div>
                      <div className="cart-summary-button">
                        <button className="checkout-btn">Checkout</button>
                        <button className="update-btn" onClick={clearCart}>Clear Cart</button>
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

export default CartPage;

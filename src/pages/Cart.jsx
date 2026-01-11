import React from "react";
import Breadcrumb from "../Components/layout/Breadcrumb";
import Navbar from "../Components/layout/Navbar";
import FooterArea from "../Components/layout/FooterArea";
import Product from "../Components/shop/Product";
import NewsletterArea from "../Components/layout/NewsletterArea";
import CartPage from "../Components/Cart/CartPage";

const Cart = () => {
  const breadcrumbLinks = [
    { name: "Home", path: "/" },
    { name: "Cart", active: true }
  ];

  return (
    <>
    <Navbar/>
      <Breadcrumb title="Cart" links={breadcrumbLinks} />



      <CartPage/>
      <NewsletterArea/>
      <FooterArea/>
      {/* باقي محتوى صفحة الشوب */}
    </>
  );
};

export default Cart;

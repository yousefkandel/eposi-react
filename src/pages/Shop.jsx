import React from "react";
import Breadcrumb from "../Components/layout/Breadcrumb";
import Navbar from "../Components/layout/Navbar";
import FooterArea from "../Components/layout/FooterArea";
import Product from "../Components/shop/Product";
import NewsletterArea from "../Components/layout/NewsletterArea";

const Shop = () => {
  const breadcrumbLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", active: true }
  ];

  return (
    <>
    <Navbar/>
      <Breadcrumb title="Shop" links={breadcrumbLinks} />



      <Product/>
      <NewsletterArea/>
      <FooterArea/>
      {/* باقي محتوى صفحة الشوب */}
    </>
  );
};

export default Shop;

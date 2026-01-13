import React from "react";
import Breadcrumb from "../Components/layout/Breadcrumb";
import Navbar from "../Components/layout/Navbar";
import FooterArea from "../Components/layout/FooterArea";
import Product from "../Components/shop/Product";
import NewsletterArea from "../Components/layout/NewsletterArea";
import LoginPage from "../Components/Login/LoginPage";
import MobileHeader from "../Components/layout/MobileHeader";

const Login = () => {
  const breadcrumbLinks = [
    { name: "Home", path: "/" },
    { name: "Login", active: true }
  ];

  return (
    <>
    <Navbar/>
              <MobileHeader />

      <Breadcrumb title="Login" links={breadcrumbLinks} />



      <LoginPage/>
      <NewsletterArea/>
      <FooterArea/>
      {/* باقي محتوى صفحة الشوب */}
    </>
  );
};


export default Login
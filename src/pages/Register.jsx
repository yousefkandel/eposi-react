import React from "react";
import Breadcrumb from "../Components/layout/Breadcrumb";
import Navbar from "../Components/layout/Navbar";
import FooterArea from "../Components/layout/FooterArea";
import Product from "../Components/shop/Product";
import NewsletterArea from "../Components/layout/NewsletterArea";
import LoginPage from "../Components/Login/LoginPage";
import RegisterPage from "../Components/Register/RegisterPage";
import MobileHeader from "../Components/layout/MobileHeader";

const Register = () => {
  const breadcrumbLinks = [
    { name: "Home", path: "/" },
    { name: "Register", active: true }
  ];

  return (
    <>
    <Navbar/>
              <MobileHeader />

      <Breadcrumb title="Register" links={breadcrumbLinks} />



      <RegisterPage/>
      <NewsletterArea/>
      <FooterArea/>
      {/* باقي محتوى صفحة الشوب */}
    </>
  );
};


export default Register
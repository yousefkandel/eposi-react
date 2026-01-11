import React from 'react'
import ProductData from '../Components/shop/ProductData'
import Navbar from '../Components/layout/Navbar'
import Breadcrumb from '../Components/layout/Breadcrumb'
import NewsletterArea from '../Components/layout/NewsletterArea'
import FooterArea from '../Components/layout/FooterArea'
import SingleArv from '../Components/singleA/SingleArv'

function ProductArv() {
     const breadcrumbLinks = [
        { name: "Home", path: "/" },
        { name: "Shop", active: true }
      ];
    
  return (
    <>
 <Navbar/>
      <Breadcrumb title="Shop" links={breadcrumbLinks} />
            <SingleArv />


 <NewsletterArea/>
      <FooterArea/>    </>
  )
}

export default ProductArv
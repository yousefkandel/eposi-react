import React from 'react'
import ProductData from '../Components/shop/ProductData'
import Navbar from '../Components/layout/Navbar'
import Breadcrumb from '../Components/layout/Breadcrumb'
import NewsletterArea from '../Components/layout/NewsletterArea'
import FooterArea from '../Components/layout/FooterArea'
import MobileHeader from '../Components/layout/MobileHeader'

function SingleProduct() {
     const breadcrumbLinks = [
        { name: "Home", path: "/" },
        { name: "Shop", active: true }
      ];
    
  return (
    <>
 <Navbar/>
           <MobileHeader />

      <Breadcrumb title="About" links={breadcrumbLinks} />
            <ProductData />


 <NewsletterArea/>
      <FooterArea/>    </>
  )
}

export default SingleProduct
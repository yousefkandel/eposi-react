import React from 'react'
import ProductData from '../Components/shop/ProductData'
import Navbar from '../Components/layout/Navbar'
import Breadcrumb from '../Components/layout/Breadcrumb'
import NewsletterArea from '../Components/layout/NewsletterArea'
import FooterArea from '../Components/layout/FooterArea'
import SingleArv from '../Components/singleA/SingleArv'
import MobileHeader from '../Components/layout/MobileHeader'

function ProductArv() {
     const breadcrumbLinks = [
        { name: "Home", path: "/" },
        { name: "Shop", active: true }
      ];
    
  return (
    <>
 <Navbar/>
           <MobileHeader />

      <Breadcrumb title="Shop" links={breadcrumbLinks} />
            <SingleArv />


 <NewsletterArea/>
      <FooterArea/>    </>
  )
}

export default ProductArv
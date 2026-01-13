import React from 'react'
import Navbar from '../Components/layout/Navbar'
import NewsletterArea from '../Components/layout/NewsletterArea'
import FooterArea from '../Components/layout/FooterArea'
import Breadcrumb from '../Components/layout/Breadcrumb';
import AboutIntro from '../Components/about/AboutIntro';
import AboutBanners from '../Components/about/AboutBanners';
import MissionVision from '../Components/about/MissionVision';
import Features from '../Components/about/Features';
import MobileHeader from '../Components/layout/MobileHeader';

function About() {
    const breadcrumbLinks = [
      { name: "Home", path: "/" },
      { name: "About", active: true }
    ];
  
  return (
<>
    <Navbar/>
          <MobileHeader />

      <Breadcrumb title="About" links={breadcrumbLinks} />

  <AboutIntro/>
  <AboutBanners/>
  <MissionVision/>
  <Features/>
  <NewsletterArea/>
      <FooterArea/>
</>

)
}

export default About
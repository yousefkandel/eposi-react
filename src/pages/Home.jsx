import React from 'react';
import Navbar from '../Components/layout/Navbar';
import HeroSlider from '../Components/home/HeroSlider';
import FeatureLogos from '../Components/home/FeatureLogos';
import LatestArrivals from '../Components/home/LatestArrivals';
import ProductWidgetArea from '../Components/home/ProductWidgetArea';
import BannerHoverArea from '../Components/home/BannerHoverArea';
import NewsletterArea from '../Components/layout/NewsletterArea';
import FooterArea from '../Components/layout/FooterArea';

function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider/>
      <FeatureLogos/>
      <LatestArrivals />
      <ProductWidgetArea />
      <BannerHoverArea />
      <NewsletterArea />
      <FooterArea />
    </>
  );
}

export default Home;

import React, { Component } from "react";
import WOW from "wowjs";
import { Helmet } from "react-helmet";

import Header from "../components/header/header";
import InnerBannerFa from "../components/inner-banner-fa/inner-banner-fa";
import FaInfo from "../components/fa-info/fa-info";
import FaFeature from "../components/fa-feature/fa-feature";
import OrngBg from "../components/orng-bg/orng-bg";
import isaback2 from "../images/isa-back2.png";
import TestiSection from "../components/testi-section/testi-section";
import LetsStartMain from "../components/lets-start-main/lets-start-main";
import Footer from "../components/footer/footer";

class FashionAndApparelPage extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>
            Stay one step ahead with Essential Fashion Commerce Features
          </title>
          <meta
            name="description"
            content="Fashion retailers always look for something different and unique statement which they can bring in their online store. We at Mage Monkeys blend the right features for your eCommerce store that represent your brand personality. Make your brand stand unique in the line of commoners by providing the perfect link of features and our below listed features will help in building your brand."
          ></meta>
          <link
            rel="canonical"
            href="https://www.magemonkeys.com/fashion-apparel-magento-ecommerce-solution/"
          ></link>
        </Helmet>
        <Header />
        <InnerBannerFa />
        <FaInfo />
        <FaFeature />
        <OrngBg image={isaback2} />
        <TestiSection />
        <LetsStartMain />
        <Footer />
      </div>
    );
  }
}

export default FashionAndApparelPage;

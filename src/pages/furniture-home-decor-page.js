import React, { Component } from "react";
import WOW from "wowjs";
import { Helmet } from "react-helmet";

import Header from "../components/header/header";
import InnerBannerFhd from "../components/inner-banner-fhd/inner-banner-fhd";
import FhdInfo from "../components/fhd-info/fhd-info";
import FhdFeature from "../components/fhd-feature/fhd-feature";
import OrngBg from "../components/orng-bg/orng-bg";
import furback2 from "../images/fur-back2.png";
import TestiSection from "../components/testi-section/testi-section";
import LetsStartMain from "../components/lets-start-main/lets-start-main";
import Footer from "../components/footer/footer";

class FurnitureHomeDecorPage extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>
            Furniture - Home &amp; Decor E-Commerce Development Solutions
          </title>
          <link
            rel="canonical"
            href="https://www.magemonkeys.com/furniture-home-decor-magento-ecommerce-solution/"
          ></link>
        </Helmet>
        <Header />
        <InnerBannerFhd />
        <FhdInfo />
        <FhdFeature />
        <OrngBg image={furback2} />
        <TestiSection />
        <LetsStartMain />
        <Footer />
      </div>
    );
  }
}

export default FurnitureHomeDecorPage;

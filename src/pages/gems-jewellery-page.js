import React, { Component } from "react";
import WOW from "wowjs";

import Header from "../components/header/header";
import InnerBannerGems from "../components/inner-banner-gems/inner-banner-gems";
import GemsInfo from "../components/gems-info/gems-info";
import GemsFeature from "../components/gems-feature/gems-feature";
import OrngBg from "../components/orng-bg/orng-bg";
import gemsback2 from "../images/gems-back2.png";
import TestiSection from "../components/testi-section/testi-section";
import LetsStartMain from "../components/lets-start-main/lets-start-main";
import Footer from "../components/footer/footer";

class GemsJewelleryPage extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div>
        <Header />
        <InnerBannerGems />
        <GemsInfo />
        <GemsFeature />
        <OrngBg image={gemsback2} />
        <TestiSection />
        <LetsStartMain />
        <Footer />
      </div>
    );
  }
}

export default GemsJewelleryPage;

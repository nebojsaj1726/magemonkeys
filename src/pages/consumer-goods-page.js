import React, { Component } from "react";
import WOW from "wowjs";

import Header from "../components/header/header";
import InnerBannerCg from "../components/inner-banner-cg/inner-banner-cg";
import CgInfo from "../components/cg-info/cg-info";
import CgFeature from "../components/cg-feature/cg-feature";
import OrngBg from "../components/orng-bg/orng-bg";
import cgback from "../images/cg-back.png";
import TestiSection from "../components/testi-section/testi-section";
import LetsStartMain from "../components/lets-start-main/lets-start-main";
import Footer from "../components/footer/footer";

class ConsumerGoodsPage extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div>
        <Header />
        <InnerBannerCg />
        <CgInfo />
        <CgFeature />
        <OrngBg image={cgback} />
        <TestiSection />
        <LetsStartMain />
        <Footer />
      </div>
    );
  }
}

export default ConsumerGoodsPage;

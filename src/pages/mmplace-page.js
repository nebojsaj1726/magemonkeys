import React, { Component } from "react";
import WOW from "wowjs";

import Header from "../components/header/header";
import InnerBannerMmp from "../components/inner-banner-mmp/inner-banner-mmp";
import MmpDetail from "../components/mmp-detail/mmp-detail";
import BlackBackMmp from "../components/black-back-mmp/black-back-mmp";
import LetsStartMain from "../components/lets-start-main/lets-start-main";
import Footer from "../components/footer/footer";

class MagentoMarketPlacePage extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div>
        <Header />
        <InnerBannerMmp />
        <MmpDetail />
        <BlackBackMmp />
        <LetsStartMain />
        <Footer />
      </div>
    );
  }
}

export default MagentoMarketPlacePage;

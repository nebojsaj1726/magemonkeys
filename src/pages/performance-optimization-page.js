import React, { Component } from "react";
import WOW from "wowjs";

import Header from "../components/header/header";
import InnerBannerPo from "../components/inner-banner-po/inner-banner-po";
import ApiRowPo from "../components/api-row-po/api-row-po";
import PoMain from "../components/po-main/po-main";
import OnlyCntMain from "../components/only-cnt-main/only-cnt-main";
import BlackBackPo from "../components/black-back-po/black-back-po";
import OnlyCnt from "../components/only-cnt/only-cnt";
import LetsStartMain from "../components/lets-start-main/lets-start-main";
import Footer from "../components/footer/footer";

class PerformanceOptimizationPage extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div>
        <Header />
        <InnerBannerPo />
        <ApiRowPo />
        <PoMain />
        <OnlyCntMain />
        <BlackBackPo />
        <OnlyCnt />
        <LetsStartMain />
        <Footer />
      </div>
    );
  }
}

export default PerformanceOptimizationPage;

import React, { Component } from "react";
import WOW from "wowjs";

import Header from "../components/header/header";
import InnerBannerEcom from "../components/inner-banner-ecom/inner-banner-ecom";
import EcomMain from "../components/ecom-main/ecom-main";
import BlackBackImg from "../components/black-back-img/black-back-img";
import WayMainEcom from "../components/way-main-ecom/way-main-ecom";
import WayCnt from "../components/way-cnt/way-cnt";
import LetsStartMain from "../components/lets-start-main/lets-start-main";
import Footer from "../components/footer/footer";

class EcommercePage extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div>
        <Header />
        <InnerBannerEcom />
        <EcomMain />
        <BlackBackImg />
        <WayMainEcom />
        <WayCnt />
        <LetsStartMain />
        <Footer />
      </div>
    );
  }
}

export default EcommercePage;

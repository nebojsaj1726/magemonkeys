import React, { Component } from "react";
import WOW from "wowjs";

import Header from "../components/header/header";
import InnerBannerPack from "../components/inner-banner-pack/inner-banner-pack";
import AboutInfo from "../components/about-info/about-info";
import BlackBackPack from "../components/black-back-pack/black-back-pack";
import PackagesMain from "../components/packages-main/packages-main";
import OnlyCntPack from "../components/only-cnt-pack/only-cnt-pack";
import LetsStartMain from "../components/lets-start-main/lets-start-main";
import Footer from "../components/footer/footer";

class PackagesPage extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div>
        <Header />
        <InnerBannerPack />
        <AboutInfo />
        <BlackBackPack />
        <PackagesMain />
        <OnlyCntPack />
        <LetsStartMain />
        <Footer />
      </div>
    );
  }
}

export default PackagesPage;

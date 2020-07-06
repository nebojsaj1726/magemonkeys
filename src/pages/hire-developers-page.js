import React, { Component } from "react";
import WOW from "wowjs";

import Header from "../components/header/header";
import InnerBannerHd from "../components/inner-banner-hd/inner-banner-hd";
import HdCnt from "../components/hd-cnt/hd-cnt";
import BlackBackHd from "../components/black-back-hd/black-back-hd";
import ApiHd from "../components/api-hd/api-hd";
import OnlyCntHd from "../components/only-cnt-hd/only-cnt-hd";
import LetsStartMain from "../components/lets-start-main/lets-start-main";
import Footer from "../components/footer/footer";

class HireDevelopersPage extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div>
        <Header />
        <InnerBannerHd />
        <HdCnt />
        <BlackBackHd />
        <ApiHd />
        <OnlyCntHd />
        <LetsStartMain />
        <Footer />
      </div>
    );
  }
}

export default HireDevelopersPage;

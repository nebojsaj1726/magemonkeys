import React, { Component } from "react";
import WOW from "wowjs";

import Header from "../components/header/header";
import InnerBannerB2b from "../components/inner-banner-b2b/inner-banner-b2b";
import ApiRowAm from "../components/api-row-am/api-row-am";
import BlackBackImg from "../components/black-back-img/black-back-img";
import WayMain from "../components/way-main/way-main";
import LetsStartMain from "../components/lets-start-main/lets-start-main";
import Footer from "../components/footer/footer";

class B2BPage extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div>
        <Header />
        <InnerBannerB2b />
        <ApiRowAm />
        <BlackBackImg />
        <WayMain />
        <LetsStartMain />
        <Footer />
      </div>
    );
  }
}

export default B2BPage;

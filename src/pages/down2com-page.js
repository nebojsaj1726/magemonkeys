import React, { Component } from "react";
import WOW from "wowjs";

import Header from "../components/header/header";
import InnerBannerD2c from "../components/inner-banner-d2c/inner-banner-d2c";
import ApiRowD2c from "../components/api-row-d2c/api-row-d2c";
import BlackBackD2c from "../components/black-back-d2c/black-back-d2c";
import LetsStartMain from "../components/lets-start-main/lets-start-main";
import Footer from "../components/footer/footer";

class Down2comPage extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div>
        <Header />
        <InnerBannerD2c />
        <ApiRowD2c />
        <BlackBackD2c />
        <LetsStartMain />
        <Footer />
      </div>
    );
  }
}

export default Down2comPage;

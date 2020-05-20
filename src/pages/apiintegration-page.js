import React, { Component } from "react";
import WOW from "wowjs";

import Header from "../components/header/header";
import InnerBannerApi from "../components/inner-banner-api/inner-banner-api";
import ApiRowApi from "../components/api-row-api/api-row-api";
import BlackBackApi from "../components/black-back-api/black-back-api";
import LetsStartMain from "../components/lets-start-main/lets-start-main";
import Footer from "../components/footer/footer";

class ApiintegrationPage extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div>
        <Header />
        <InnerBannerApi />
        <ApiRowApi />
        <BlackBackApi />
        <LetsStartMain />
        <Footer />
      </div>
    );
  }
}

export default ApiintegrationPage;

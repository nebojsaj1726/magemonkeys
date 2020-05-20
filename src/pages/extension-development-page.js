import React, { Component } from "react";
import WOW from "wowjs";

import Header from "../components/header/header";
import InnerBannerExt from "../components/inner-banner-ext/inner-banner-ext";
import ApiRowExt from "../components/api-row-ext/api-row-ext";
import BlackBackExt from "../components/black-back-ext/black-back-ext";
import LetsStartMain from "../components/lets-start-main/lets-start-main";
import Footer from "../components/footer/footer";

class ExtensionDevelopmentPage extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div>
        <Header />
        <InnerBannerExt />
        <ApiRowExt />
        <BlackBackExt />
        <LetsStartMain />
        <Footer />
      </div>
    );
  }
}

export default ExtensionDevelopmentPage;

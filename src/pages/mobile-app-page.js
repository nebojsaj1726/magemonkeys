import React, { Component } from "react";
import WOW from "wowjs";

import Header from "../components/header/header";
import InnerBannerMma from "../components/inner-banner-mma/inner-banner-mma";
import MmaMain from "../components/mma-main/mma-main";
import BlackBackMma from "../components/black-back-mma/black-back-mma";
import ApiRowMma from "../components/api-row-mma/api-row-mma";
import BlackBackExt from "../components/black-back-ext/black-back-ext";
import LetsStartMain from "../components/lets-start-main/lets-start-main";
import Footer from "../components/footer/footer";

class MobileAppPage extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div>
        <Header />
        <InnerBannerMma />
        <MmaMain />
        <BlackBackMma />
        <ApiRowMma />
        <BlackBackExt />
        <LetsStartMain />
        <Footer />
      </div>
    );
  }
}

export default MobileAppPage;

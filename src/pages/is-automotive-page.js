import React, { Component } from "react";
import WOW from "wowjs";

import Header from "../components/header/header";
import InnerBannerIsaut from "../components/inner-banner-isaut/inner-banner-isaut";
import AutomotiveInfo from "../components/automotive-info/automotive-info";
import AutomFeature from "../components/autom-feature/autom-feature";
import OrngBg from "../components/orng-bg/orng-bg";
import magentoplatimg from "../images/magento_plat_img.png";
import TestiSection from "../components/testi-section/testi-section";
import LetsStartMain from "../components/lets-start-main/lets-start-main";
import Footer from "../components/footer/footer";

class IsAutomotivePage extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div>
        <Header />
        <InnerBannerIsaut />
        <AutomotiveInfo />
        <AutomFeature />
        <OrngBg image={magentoplatimg} />
        <TestiSection />
        <LetsStartMain />
        <Footer />
      </div>
    );
  }
}

export default IsAutomotivePage;

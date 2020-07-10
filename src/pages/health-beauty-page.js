import React, { Component } from "react";
import WOW from "wowjs";

import Header from "../components/header/header";
import InnerBannerHb from "../components/inner-banner-hb/inner-banner-hb";
import HbInfo from "../components/hb-info/hb-info";
import HbFeature from "../components/hb-feature/hb-feature";
import OrngBg from "../components/orng-bg/orng-bg";
import hbback2 from "../images/hb-back2.png";
import TestiSection from "../components/testi-section/testi-section";
import LetsStartMain from "../components/lets-start-main/lets-start-main";
import Footer from "../components/footer/footer";

class HealthBeautyPage extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div>
        <Header />
        <InnerBannerHb />
        <HbInfo />
        <HbFeature />
        <OrngBg image={hbback2} />
        <TestiSection />
        <LetsStartMain />
        <Footer />
      </div>
    );
  }
}

export default HealthBeautyPage;

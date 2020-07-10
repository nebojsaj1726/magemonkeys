import React, { Component } from "react";
import WOW from "wowjs";

import Header from "../components/header/header";
import InnerBannerFa from "../components/inner-banner-fa/inner-banner-fa";
import FaInfo from "../components/fa-info/fa-info";
import FaFeature from "../components/fa-feature/fa-feature";
import OrngBg from "../components/orng-bg/orng-bg";
import isaback2 from "../images/isa-back2.png";
import TestiSection from "../components/testi-section/testi-section";
import LetsStartMain from "../components/lets-start-main/lets-start-main";
import Footer from "../components/footer/footer";

class FashionAndApparelPage extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div>
        <Header />
        <InnerBannerFa />
        <FaInfo />
        <FaFeature />
        <OrngBg image={isaback2} />
        <TestiSection />
        <LetsStartMain />
        <Footer />
      </div>
    );
  }
}

export default FashionAndApparelPage;

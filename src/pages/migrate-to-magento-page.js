import React, { Component } from "react";
import WOW from "wowjs";

import Header from "../components/header/header";
import InnerBannerM2m from "../components/inner-banner-m2m/inner-banner-m2m";
import MegntoTechSec from "../components/megnto_tech_sec/megnto_tech_sec";
import StepSection from "../components/step-section/step-section";
import ContentBor from "../components/content-bor/content-bor";
import LetsStartMain from "../components/lets-start-main/lets-start-main";
import Footer from "../components/footer/footer";

class MigrateToMagentoPage extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div>
        <Header />
        <InnerBannerM2m />
        <MegntoTechSec />
        <StepSection />
        <ContentBor />
        <LetsStartMain />
        <Footer />
      </div>
    );
  }
}

export default MigrateToMagentoPage;

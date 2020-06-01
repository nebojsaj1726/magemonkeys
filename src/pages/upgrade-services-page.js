import React, { Component } from "react";
import WOW from "wowjs";

import Header from "../components/header/header";
import UpgradeBanner from "../components/upgrade-banner/upgrade-banner";
import ServicesInfo from "../components/services-info/services-info";
import UpgradeService from "../components/upgrade-service/upgrade-service";
import ProcessFollow from "../components/process-follow/process-follow";
import ActionTake from "../components/action-take/action-take";
import MmAdvantage from "../components/mm-advantage/mm-advantage";
import LetsStartMain from "../components/lets-start-main/lets-start-main";
import Footer from "../components/footer/footer";

class UpgradeServicesPage extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div>
        <Header />
        <UpgradeBanner />
        <ServicesInfo />
        <UpgradeService />
        <ProcessFollow />
        <ActionTake />
        <MmAdvantage />
        <LetsStartMain />
        <Footer />
      </div>
    );
  }
}

export default UpgradeServicesPage;

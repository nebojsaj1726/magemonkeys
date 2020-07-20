import React, { Component } from "react";
import WOW from "wowjs";
import { Helmet } from "react-helmet";

import Header from "../components/header/header";
import InnerBannerPack from "../components/inner-banner-pack/inner-banner-pack";
import AboutInfo from "../components/about-info/about-info";
import BlackBackPack from "../components/black-back-pack/black-back-pack";
import PackagesMain from "../components/packages-main/packages-main";
import OnlyCntPack from "../components/only-cnt-pack/only-cnt-pack";
import LetsStartMain from "../components/lets-start-main/lets-start-main";
import Footer from "../components/footer/footer";

class PackagesPage extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Magento eCommerce support | Magento website support</title>
          <meta
            name="description"
            content="Looking for a Magento team to support? Magemonkeys offers Magento developers who technically supports you with your Magento needs."
          ></meta>
          <link
            rel="canonical"
            href="https://www.magemonkeys.com/magento-support/"
          ></link>
        </Helmet>
        <Header />
        <InnerBannerPack />
        <AboutInfo />
        <BlackBackPack />
        <PackagesMain />
        <OnlyCntPack />
        <LetsStartMain />
        <Footer />
      </div>
    );
  }
}

export default PackagesPage;

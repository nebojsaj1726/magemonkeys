import React, { Component } from "react";
import WOW from "wowjs";
import { Helmet } from "react-helmet";

import Header from "../components/header/header";
import InnerBannerMmp from "../components/inner-banner-mmp/inner-banner-mmp";
import MmpDetail from "../components/mmp-detail/mmp-detail";
import BlackBackMmp from "../components/black-back-mmp/black-back-mmp";
import LetsStartMain from "../components/lets-start-main/lets-start-main";
import Footer from "../components/footer/footer";

class MagentoMarketPlacePage extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>
            Magento Marketplace Developers | Marketplace Development Service
          </title>
          <meta
            name="description"
            content="Magento Monkeys expertise in converting your magento store in to an online Marketplace. We're the leading marketplace multi vendor eCommerce websites/stores development company with years of experience."
          ></meta>
          <link
            rel="canonical"
            href="https://www.magemonkeys.com/magento-marketplace/"
          ></link>
        </Helmet>
        <Header />
        <InnerBannerMmp />
        <MmpDetail />
        <BlackBackMmp />
        <LetsStartMain />
        <Footer />
      </div>
    );
  }
}

export default MagentoMarketPlacePage;

import React, { Component } from "react";
import WOW from "wowjs";
import { Helmet } from "react-helmet";

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
        <Helmet>
          <title>
            Magento Extension Development Service India | Magento Extension
            Developers
          </title>
          <meta
            name="description"
            content="Magento extension development service is offered as a core development service by Mage Monkeys. Our certified Magento extension developers are well experienced."
          ></meta>
          <link
            rel="canonical"
            href="https://www.magemonkeys.com/magento-extension-development/"
          ></link>
        </Helmet>
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

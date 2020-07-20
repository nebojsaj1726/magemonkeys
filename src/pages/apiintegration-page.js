import React, { Component } from "react";
import WOW from "wowjs";
import { Helmet } from "react-helmet";

import Header from "../components/header/header";
import InnerBannerApi from "../components/inner-banner-api/inner-banner-api";
import ApiRowApi from "../components/api-row-api/api-row-api";
import BlackBackApi from "../components/black-back-api/black-back-api";
import LetsStartMain from "../components/lets-start-main/lets-start-main";
import Footer from "../components/footer/footer";

class ApiintegrationPage extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>
            Magento API Integration Services | Magento Rest API Developer India
          </title>
          <meta
            name="description"
            content="Magento Monkeys expertise in Magento API integration services and solutions. Our Magento certified developers are experience with Magento rest API integration and development services."
          ></meta>
          <link
            rel="canonical"
            href="https://www.magemonkeys.com/magento-rest-api-integration/"
          ></link>
        </Helmet>
        <Header />
        <InnerBannerApi />
        <ApiRowApi />
        <BlackBackApi />
        <LetsStartMain />
        <Footer />
      </div>
    );
  }
}

export default ApiintegrationPage;

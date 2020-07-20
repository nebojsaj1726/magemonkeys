import React, { Component } from "react";
import WOW from "wowjs";
import { Helmet } from "react-helmet";

import Header from "../components/header/header";
import InnerBannerB2b from "../components/inner-banner-b2b/inner-banner-b2b";
import ApiRowAm from "../components/api-row-am/api-row-am";
import BlackBackImg from "../components/black-back-img/black-back-img";
import WayMain from "../components/way-main/way-main";
import LetsStartMain from "../components/lets-start-main/lets-start-main";
import Footer from "../components/footer/footer";

class B2BPage extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>
            Magento Enterprise B2B Solutions | Magento B2B Solution Provider
            India
          </title>
          <meta
            name="description"
            content="Magento Monkeys' team of Magento certified developers offer expert level Magento Enterprise B2B solutions and services for your eCommerce store."
          ></meta>
          <link
            rel="canonical"
            href="https://www.magemonkeys.com/magento-enterprise-b2b-solution/"
          ></link>
        </Helmet>
        <Header />
        <InnerBannerB2b />
        <ApiRowAm />
        <BlackBackImg />
        <WayMain />
        <LetsStartMain />
        <Footer />
      </div>
    );
  }
}

export default B2BPage;

import React, { Component } from "react";
import WOW from "wowjs";
import { Helmet } from "react-helmet";

import Header from "../components/header/header";
import InnerBannerEcom from "../components/inner-banner-ecom/inner-banner-ecom";
import EcomMain from "../components/ecom-main/ecom-main";
import BlackBackImg from "../components/black-back-img/black-back-img";
import WayMainEcom from "../components/way-main-ecom/way-main-ecom";
import WayCnt from "../components/way-cnt/way-cnt";
import LetsStartMain from "../components/lets-start-main/lets-start-main";
import Footer from "../components/footer/footer";

class EcommercePage extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>
            eCommerce Store Development | Magento eCommerce Development
          </title>
          <meta
            name="description"
            content="eCommerce Store Development Services - Mage monkey has team of experience ecom developers who can help you to create your new ecommerce store."
          ></meta>
          <link
            rel="canonical"
            href="https://www.magemonkeys.com/ecommerce-store-development-service/"
          ></link>
        </Helmet>
        <Header />
        <InnerBannerEcom />
        <EcomMain />
        <BlackBackImg />
        <WayMainEcom />
        <WayCnt />
        <LetsStartMain />
        <Footer />
      </div>
    );
  }
}

export default EcommercePage;

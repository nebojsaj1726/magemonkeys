import React, { Component } from "react";
import WOW from "wowjs";
import { Helmet } from "react-helmet";

import Header from "../components/header/header";
import InnerBannerWork from "../components/inner-banner-work/inner-banner-work";
import AllWork from "../components/all-work/all-work";
import LetsStartMain from "../components/lets-start-main/lets-start-main";
import Footer from "../components/footer/footer";

class WorkPage extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>
            Magento Projects | Magento website | Magento eCommerce Website
          </title>
          <meta
            name="description"
            content="Have a look on few projects which are developed by MageMonkeys. Consult us if you are looking for Magento web developer for your website needs."
          ></meta>
          <link rel="canonical" href="https://www.magemonkeys.com/work/"></link>
        </Helmet>
        <Header />
        <InnerBannerWork />
        <AllWork />
        <LetsStartMain />
        <Footer />
      </div>
    );
  }
}

export default WorkPage;

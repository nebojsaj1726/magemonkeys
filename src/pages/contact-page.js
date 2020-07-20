import React, { Component } from "react";
import WOW from "wowjs";
import { Helmet } from "react-helmet";

import Header from "../components/header/header";
import InnerBanner from "../components/inner-banner/inner-banner";
import LetsStartContact from "../components/lets-start-contact/lets-start-contact";
import CwuRowAm from "../components/cwu-row-am/cwu-row-am";
import Footer from "../components/footer/footer";

class ContactPage extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>
            Find Magento Developer | Looking for Magento Development Company
            India
          </title>
          <meta
            name="description"
            content="Are you looking for Magento Developers or Magento Development agency to hire Magento Developers then contact Magento Monkeys today."
          ></meta>
          <link
            rel="canonical"
            href="https://www.magemonkeys.com/contact/"
          ></link>
        </Helmet>
        <Header />
        <InnerBanner />
        <LetsStartContact />
        <CwuRowAm />
        <Footer />
      </div>
    );
  }
}

export default ContactPage;

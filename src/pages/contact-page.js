import React, { Component } from "react";
import WOW from "wowjs";

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

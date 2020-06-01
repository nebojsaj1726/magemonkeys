import React, { Component } from "react";
import WOW from "wowjs";

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

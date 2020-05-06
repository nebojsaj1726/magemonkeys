import React, { Component } from "react";
import WOW from "wowjs";

import Header from "../components/header/header";
import HomeBanner from "../components/home-banner/home-banner";
import ServiceMain from "../components/service-main/service-main";
import WorkMain from "../components/work-main/work-main";
import InstaMain from "../components/insta-main/insta-main";
import TestimonialMain from "../components/testimonial-main/testimonial-main";
import LetsStartMain from "../components/lets-start-main/lets-start-main";
import Footer from "../components/footer/footer";

class HomePage extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div>
        <Header />
        <HomeBanner />
        <ServiceMain />
        <WorkMain />
        <InstaMain />
        <TestimonialMain />
        <LetsStartMain />
        <Footer />
      </div>
    );
  }
}

export default HomePage;

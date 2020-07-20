import React, { Component } from "react";
import WOW from "wowjs";
import { Helmet } from "react-helmet";

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
        <Helmet>
          <title>
            Magento Development Company India | Magento eCommerce Development
            India
          </title>
          <meta
            name="description"
            content="Magento Monkeys is leading Magento eCommerce development company from India. We offers various ranges of Magento related services and solution. With Magento certified team of developers, we have 15+ years of experience in the market."
          ></meta>
          <link rel="canonical" href="https://www.magemonkeys.com/"></link>
        </Helmet>
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

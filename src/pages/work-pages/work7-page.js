import React, { Component } from "react";
import WOW from "wowjs";
import { Helmet } from "react-helmet";
import axios from "axios";

import Header from "../../components/header/header";
import InnerBannerWd from "../../components/inner-banner-wd/inner-banner-wd";
import WorkDetail from "../../components/work-detail/work-detail";
import WorkSlider from "../../components/work-slider/work-slider";
import NextPrev from "../../components/next-prev/next-prev";
import LetsStartMain from "../../components/lets-start-main/lets-start-main";
import Footer from "../../components/footer/footer";

class Work7Page extends Component {
  state = {
    title: "",
    content: "",
    loading: true,
  };

  componentDidMount() {
    new WOW.WOW().init();

    axios
      .get("https://www.magemonkeys.com/wp-json/wp/v2/ourprojects/1407")
      .then((res) =>
        this.setState({
          title: res.data.title.rendered,
          content: res.data.content.rendered,
          loading: false,
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    const { title, content, loading } = this.state;

    return (
      <div>
        <Helmet>
          <title>
            Home Furniture eCommerce Solution | Furniture store eCommerce
            Development
          </title>
          <link
            rel="canonical"
            href="https://www.magemonkeys.com/home-furniture-ecommerce-store-development/"
          ></link>
        </Helmet>
        <Header />
        <InnerBannerWd title={title} />
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <WorkDetail content={content} company="Homephilosophy" />
        )}
        <WorkSlider company="Homephilosophy" />
        <NextPrev
          prevcom="Thegoldsure"
          nextcom="Imustgarden"
          plink="gold-silver-biblical-coins-shop-ecommerce-development"
          nlink="garden-products-remedies-ecommerce-shop-development"
        />
        <LetsStartMain />
        <Footer />
      </div>
    );
  }
}

export default Work7Page;

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

class Work6Page extends Component {
  state = {
    title: "",
    content: "",
    loading: true,
  };

  componentDidMount() {
    new WOW.WOW().init();

    axios
      .get("https://www.magemonkeys.com/wp-json/wp/v2/ourprojects/1429")
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
            Gold, Silver and Biblical Coins eCommerce Development Solutions
          </title>
          <link
            rel="canonical"
            href="https://www.magemonkeys.com/gold-silver-biblical-coins-shop-ecommerce-development/"
          ></link>
        </Helmet>
        <Header />
        <InnerBannerWd title={title} />
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <WorkDetail content={content} company="Thegoldsure" />
        )}
        <WorkSlider company="Thegoldsure" />
        <NextPrev
          prevcom="Uberdoors"
          nextcom="Homephilosophy"
          plink="door-furniture-ecommerce-solution-uber-doors"
          nlink="home-furniture-ecommerce-store-development"
        />
        <LetsStartMain />
        <Footer />
      </div>
    );
  }
}

export default Work6Page;

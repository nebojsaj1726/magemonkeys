import React, { Component } from "react";
import WOW from "wowjs";
import axios from "axios";
import { Helmet } from "react-helmet";

import Header from "../../components/header/header";
import InnerBannerBd from "../../components/inner-banner-bd/inner-banner-bd";
import BlogDetal from "../../components/blog-detal/blog-detal";
import PrevNext from "../../components/prev-next/prev-next";
import LetsStartMain from "../../components/lets-start-main/lets-start-main";
import Footer from "../../components/footer/footer";

class Blog3Page extends Component {
  state = {
    title: "",
    content: "",
    loading: true,
  };

  componentDidMount() {
    new WOW.WOW().init();

    axios
      .get("https://www.magemonkeys.com/wp-json/wp/v2/posts/5221")
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
            Magento2 : Display New label of product in product list page
          </title>
          <link
            rel="canonical"
            href="https://www.magemonkeys.com/magento2-display-new-label-of-product-in-product-list-page/"
          ></link>
        </Helmet>
        <Header />
        <InnerBannerBd />
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <BlogDetal title={title} content={content} />
        )}
        <PrevNext />
        <LetsStartMain />
        <Footer />
      </div>
    );
  }
}

export default Blog3Page;

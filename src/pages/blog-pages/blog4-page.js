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

class Blog4Page extends Component {
  state = {
    title: "",
    content: "",
    loading: true,
  };

  componentDidMount() {
    new WOW.WOW().init();

    axios
      .get("https://www.magemonkeys.com/wp-json/wp/v2/posts/5219")
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
            What to do when Magento 2.3.1 created invoices miss items?
          </title>
          <link
            rel="canonical"
            href="https://www.magemonkeys.com/what-to-do-when-magento-2-3-1-created-invoices-miss-items/"
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

export default Blog4Page;

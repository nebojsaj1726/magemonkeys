import React, { Component } from "react";
import WOW from "wowjs";
import { Helmet } from "react-helmet";

import Header from "../components/header/header";
import InnerBannerBlog from "../components/inner-banner-blog/inner-banner-blog";
import BlogList from "../components/blog-list/blog-list";
import LetsStartMain from "../components/lets-start-main/lets-start-main";
import Footer from "../components/footer/footer";

class BlogPage extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Magento Blog | Magento News | Magento Articles</title>
          <meta
            name="description"
            content="Read latest trends and news from Magento Market by Magento Monkeys."
          ></meta>
          <link rel="canonical" href="https://www.magemonkeys.com/blog/"></link>
        </Helmet>
        <Header />
        <InnerBannerBlog />
        <BlogList />
        <LetsStartMain />
        <Footer />
      </div>
    );
  }
}

export default BlogPage;

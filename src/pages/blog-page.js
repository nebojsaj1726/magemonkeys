import React, { Component } from "react";
import WOW from "wowjs";

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

import React, { Component } from "react";
import WOW from "wowjs";

import Header from "../components/header/header";
import InnerBannerBd from "../components/inner-banner-bd/inner-banner-bd";
import BlogDetal from "../components/blog-detal/blog-detal";
import PrevNext from "../components/prev-next/prev-next";
import LetsStartMain from "../components/lets-start-main/lets-start-main";
import Footer from "../components/footer/footer";

class BlogDetailPage extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div>
        <Header />
        <InnerBannerBd />
        <BlogDetal />
        <PrevNext />
        <LetsStartMain />
        <Footer />
      </div>
    );
  }
}

export default BlogDetailPage;

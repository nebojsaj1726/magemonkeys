import React, { Component } from "react";
import WOW from "wowjs";
import axios from "axios";

import Header from "../components/header/header";
import InnerBannerBd from "../components/inner-banner-bd/inner-banner-bd";
import BlogDetal from "../components/blog-detal/blog-detal";
import PrevNext from "../components/prev-next/prev-next";
import LetsStartMain from "../components/lets-start-main/lets-start-main";
import Footer from "../components/footer/footer";

class BlogDetailPage extends Component {
  state = {
    title: "",
    content: "",
  };

  componentDidMount() {
    new WOW.WOW().init();

    const id = this.props.match.params.id;

    axios
      .get(`https://www.magemonkeys.com/wp-json/wp/v2/posts/${id}`)
      .then((res) =>
        this.setState({
          title: res.data.title.rendered,
          content: res.data.content.rendered,
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    const { title, content } = this.state;

    return (
      <div>
        <Header />
        <InnerBannerBd />
        <BlogDetal title={title} content={content} />
        <PrevNext />
        <LetsStartMain />
        <Footer />
      </div>
    );
  }
}

export default BlogDetailPage;

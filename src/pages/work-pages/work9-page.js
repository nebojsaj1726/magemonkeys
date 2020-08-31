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

class Work9Page extends Component {
  state = {
    title: "",
    content: "",
    loading: true,
    img1Url: "",
    img2Url: "",
    img3Url: "",
    img4Url: "",
  };

  componentDidMount() {
    new WOW.WOW().init();

    const getItems = axios.get(
      "https://www.magemonkeys.com/wp-json/wp/v2/ourprojects/1447"
    );
    const getImgs = axios.get(
      "https://demo.magemonkeys.com/wp-json/acf/v3/pages/3970"
    );

    Promise.all([getItems, getImgs])
      .then((res) => {
        this.setState({
          title: res[0].data.title.rendered,
          content: res[0].data.content.rendered,
          img1Url: res[1].data.acf.screen_sort_of_image[0].image,
          img2Url: res[1].data.acf.screen_sort_of_image[1].image,
          img3Url: res[1].data.acf.screen_sort_of_image[2].image,
          img4Url: res[1].data.acf.screen_sort_of_image[3].image,
          loading: false,
        });
      })
      .catch((err) => console.log(err));
    // axios
    //   .get("https://www.magemonkeys.com/wp-json/wp/v2/ourprojects/1447")
    //   .then((res) =>
    //     this.setState({
    //       title: res.data.title.rendered,
    //       content: res.data.content.rendered,
    //       loading: false,
    //     })
    //   )
    //   .catch((err) => console.log(err));
  }

  render() {
    const {
      title,
      content,
      loading,
      img1Url,
      img2Url,
      img3Url,
      img4Url,
    } = this.state;

    return (
      <div>
        <Helmet>
          <title>Canapebox</title>
          <link
            rel="canonical"
            href="https://www.magemonkeys.com/canapebox/"
          ></link>
        </Helmet>
        <Header />
        <InnerBannerWd title={title} />
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <WorkDetail content={content} company="Canapebox" />
        )}
        <WorkSlider
          company="Canapebox"
          imgPath1={img1Url}
          imgPath2={img2Url}
          imgPath3={img3Url}
          imgPath4={img4Url}
        />
        <NextPrev
          prevcom="Imustgarden"
          nextcom="Ink2print"
          plink="garden-products-remedies-ecommerce-shop-development"
          nlink="personalized-printing-ecommerce-solution-ink2print"
        />
        <LetsStartMain />
        <Footer />
      </div>
    );
  }
}

export default Work9Page;

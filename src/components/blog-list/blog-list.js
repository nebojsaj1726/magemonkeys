import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./blog-list.css";
import blog1 from "../../images/blog1.png";
import blog2 from "../../images/blog2.png";
import blog3 from "../../images/blog3.png";
import cright from "../../images/c-right.png";

class BlogList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post1Title: "",
      post1Content: "",
      post2Title: "",
      post2Content: "",
      post3Title: "",
      post3Content: "",
      post4Title: "",
      post4Content: "",
      post5Title: "",
      post5Content: "",
      post6Title: "",
      post6Content: "",
      post7Title: "",
      post7Content: "",
      post8Title: "",
      post8Content: "",
      post9Title: "",
      post9Content: "",
      post10Title: "",
      post10Content: "",
      showDivs: false,
      loading: true,
    };
    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState({
      showDivs: true,
    });
  }

  componentDidMount() {
    axios
      .get("https://www.magemonkeys.com/wp-json/wp/v2/posts")
      .then((res) =>
        this.setState({
          post1Title: res.data[0].title.rendered,
          post1Content: res.data[0].excerpt.rendered,
          post2Title: res.data[1].title.rendered,
          post2Content: res.data[1].excerpt.rendered,
          post3Title: res.data[2].title.rendered,
          post3Content: res.data[2].excerpt.rendered,
          post4Title: res.data[3].title.rendered,
          post4Content: res.data[3].excerpt.rendered,
          post5Title: res.data[4].title.rendered,
          post5Content: res.data[4].excerpt.rendered,
          post6Title: res.data[5].title.rendered,
          post6Content: res.data[5].excerpt.rendered,
          post7Title: res.data[6].title.rendered,
          post7Content: res.data[6].excerpt.rendered,
          post8Title: res.data[7].title.rendered,
          post8Content: res.data[7].excerpt.rendered,
          post9Title: res.data[8].title.rendered,
          post9Content: res.data[8].excerpt.rendered,
          post10Title: res.data[9].title.rendered,
          post10Content: res.data[9].excerpt.rendered,
          loading: false,
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    const {
      post1Title,
      post1Content,
      post2Title,
      post2Content,
      post3Title,
      post3Content,
      post4Title,
      post4Content,
      post5Title,
      post5Content,
      post6Title,
      post6Content,
      post7Title,
      post7Content,
      post8Title,
      post8Content,
      post9Title,
      post9Content,
      post10Title,
      post10Content,
      showDivs,
      loading,
    } = this.state;

    return (
      <div
        className="row-am blog-list hideme wow animated  fadeIn"
        data-wow-duration="2s"
      >
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="container">
            <div className="row  blog-lit-inr">
              <div
                className="hideme col-sm-12 col-lg-4 col-md-6 wow animated  fadeIn "
                data-wow-duration="2s"
              >
                <div className="blog-s">
                  <div className="blog-img">
                    <img src={blog1} alt="" />
                  </div>
                  <div className="blog-cont">
                    <Link to="/how-to-create-custom-link-for-my-account-section-in-magento-2">
                      <h4 className="black-title-small">{post1Title} </h4>
                    </Link>
                    <div
                      dangerouslySetInnerHTML={{ __html: post1Content }}
                    ></div>
                    <Link
                      to="/how-to-create-custom-link-for-my-account-section-in-magento-2"
                      className="read-more"
                    >
                      <img src={cright} alt="" />
                      Read article
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className="hideme col-sm-12 col-lg-4 col-md-6 wow animated  fadeIn "
                data-wow-duration="2s"
              >
                <div className="blog-s">
                  <div className="blog-img">
                    <img src={blog2} alt="" />
                  </div>
                  <div className="blog-cont">
                    <Link to="/how-to-get-category-count-in-magento-2">
                      <h4 className="black-title-small">{post2Title} </h4>
                    </Link>
                    <div
                      dangerouslySetInnerHTML={{ __html: post2Content }}
                    ></div>
                    <Link
                      to="/how-to-get-category-count-in-magento-2"
                      className="read-more"
                    >
                      <img src={cright} alt="" />
                      Read article
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className="hideme col-sm-12 col-lg-4 col-md-6 wow animated  fadeIn "
                data-wow-duration="2s"
              >
                <div className="blog-s">
                  <div className="blog-img">
                    <img src={blog3} alt="" />
                  </div>
                  <div className="blog-cont">
                    <Link to="/magento2-display-new-label-of-product-in-product-list-page">
                      <h4 className="black-title-small">{post3Title}</h4>
                    </Link>
                    <div
                      dangerouslySetInnerHTML={{ __html: post3Content }}
                    ></div>
                    <Link
                      to="magento2-display-new-label-of-product-in-product-list-page"
                      className="read-more"
                    >
                      <img src={cright} alt="" />
                      Read article
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="hideme col-sm-12 col-lg-4 col-md-6 wow animated  fadeIn "
                data-wow-duration="2s"
              >
                <div className="blog-s">
                  <div className="blog-img">
                    <img src={blog1} alt="" />
                  </div>
                  <div className="blog-cont">
                    <Link to="/what-to-do-when-magento-2-3-1-created-invoices-miss-items">
                      <h4 className="black-title-small">{post4Title}</h4>
                    </Link>
                    <div
                      dangerouslySetInnerHTML={{ __html: post4Content }}
                    ></div>
                    <Link
                      to="/what-to-do-when-magento-2-3-1-created-invoices-miss-items"
                      className="read-more"
                    >
                      <img src={cright} alt="" />
                      Read article
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="hideme col-sm-12 col-lg-4 col-md-6 wow animated  fadeIn "
                data-wow-duration="2s"
              >
                <div className="blog-s">
                  <div className="blog-img">
                    <img src={blog2} alt="" />
                  </div>
                  <div className="blog-cont">
                    <Link to="/how-to-add-new-button-on-sales-order-view-page-in-admin-side">
                      <h4 className="black-title-small">{post5Title}</h4>
                    </Link>
                    <div
                      dangerouslySetInnerHTML={{ __html: post5Content }}
                    ></div>
                    <Link
                      to="/how-to-add-new-button-on-sales-order-view-page-in-admin-side"
                      className="read-more"
                    >
                      <img src={cright} alt="" />
                      Read article
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="hideme col-sm-12 col-lg-4 col-md-6 wow animated  fadeIn "
                data-wow-duration="2s"
              >
                <div className="blog-s">
                  <div className="blog-img">
                    <img src={blog3} alt="" />
                  </div>
                  <div className="blog-cont">
                    <Link to="/in-magento-2-how-to-set-custom-price-for-products-in-cart">
                      <h4 className="black-title-small">{post6Title}</h4>
                    </Link>
                    <div
                      dangerouslySetInnerHTML={{ __html: post6Content }}
                    ></div>
                    <Link
                      to="/in-magento-2-how-to-set-custom-price-for-products-in-cart"
                      className="read-more"
                    >
                      <img src={cright} alt="" />
                      Read article
                    </Link>
                  </div>
                </div>
              </div>
              {showDivs && (
                <React.Fragment>
                  <div
                    className="hideme col-sm-12 col-lg-4 col-md-6 wow animated  fadeIn "
                    data-wow-duration="2s"
                  >
                    <div className="blog-s">
                      <div className="blog-img">
                        <img src={blog1} alt="" />
                      </div>
                      <div className="blog-cont">
                        <Link to="/magento-2-how-to-show-full-breadcrumbs-path-in-product-view-page">
                          <h4 className="black-title-small">{post7Title}</h4>
                        </Link>
                        <div
                          dangerouslySetInnerHTML={{ __html: post7Content }}
                        ></div>
                        <Link
                          to="/magento-2-how-to-show-full-breadcrumbs-path-in-product-view-page"
                          className="read-more"
                        >
                          <img src={cright} alt="" />
                          Read article
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="hideme col-sm-12 col-lg-4 col-md-6 wow animated  fadeIn "
                    data-wow-duration="2s"
                  >
                    <div className="blog-s">
                      <div className="blog-img">
                        <img src={blog2} alt="" />
                      </div>
                      <div className="blog-cont">
                        <Link to="/send-unique-coupon-code-on-every-new-subscriber">
                          <h4 className="black-title-small">{post8Title}</h4>
                        </Link>
                        <div
                          dangerouslySetInnerHTML={{ __html: post8Content }}
                        ></div>
                        <Link
                          to="/send-unique-coupon-code-on-every-new-subscriber"
                          className="read-more"
                        >
                          <img src={cright} alt="" />
                          Read article
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="hideme col-sm-12 col-lg-4 col-md-6 wow animated  fadeIn "
                    data-wow-duration="2s"
                  >
                    <div className="blog-s">
                      <div className="blog-img">
                        <img src={blog3} alt="" />
                      </div>
                      <div className="blog-cont">
                        <Link to="/how-to-upgrade-magento-2-using-command-line">
                          <h4 className="black-title-small">{post9Title}</h4>
                        </Link>
                        <div
                          dangerouslySetInnerHTML={{ __html: post9Content }}
                        ></div>
                        <Link
                          to="/how-to-upgrade-magento-2-using-command-line"
                          className="read-more"
                        >
                          <img src={cright} alt="" />
                          Read article
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="hideme col-sm-12 col-lg-4 col-md-6 wow animated  fadeIn "
                    data-wow-duration="2s"
                  >
                    <div className="blog-s">
                      <div className="blog-img">
                        <img src={blog1} alt="" />
                      </div>
                      <div className="blog-cont">
                        <Link to="/magento-bundle-product-price-shows-different-on-list-page-and-product-page">
                          <h4 className="black-title-small">{post10Title}</h4>
                        </Link>
                        <div
                          dangerouslySetInnerHTML={{ __html: post10Content }}
                        ></div>
                        <Link
                          to="/magento-bundle-product-price-shows-different-on-list-page-and-product-page"
                          className="read-more"
                        >
                          <img src={cright} alt="" />
                          Read article
                        </Link>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              )}
            </div>
            {showDivs ? null : (
              <div className="row">
                <div className="load-more">
                  <button
                    type="button"
                    onClick={this.loadMore}
                    className="load-more-btn"
                  >
                    LOAD MORE
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default BlogList;

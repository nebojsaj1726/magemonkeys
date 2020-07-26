import React, { Component } from "react";
import axios from "axios";

import "./blog-list.css";
import blog1 from "../../images/blog1.png";
import blog2 from "../../images/blog2.png";
import blog3 from "../../images/blog3.png";
import cright from "../../images/c-right.png";

class BlogList extends Component {
  state = {
    post1Title: "",
    post1Content: "",
    post1Url: "",
    post2Title: "",
    post2Content: "",
    post2Url: "",
    post3Title: "",
    post3Content: "",
    post3Url: "",
    post4Title: "",
    post4Content: "",
    post4Url: "",
    post5Title: "",
    post5Content: "",
    post5Url: "",
    post6Title: "",
    post6Content: "",
    post6Url: "",
  };

  componentDidMount() {
    const getPost1 = axios.get(
      "https://www.magemonkeys.com/wp-json/wp/v2/posts/5235"
    );
    const getPost2 = axios.get(
      "https://www.magemonkeys.com/wp-json/wp/v2/posts/5224"
    );
    const getPost3 = axios.get(
      "https://www.magemonkeys.com/wp-json/wp/v2/posts/5221"
    );
    const getPost4 = axios.get(
      "https://www.magemonkeys.com/wp-json/wp/v2/posts/5219"
    );
    const getPost5 = axios.get(
      "https://www.magemonkeys.com/wp-json/wp/v2/posts/5217"
    );
    const getPost6 = axios.get(
      "https://www.magemonkeys.com/wp-json/wp/v2/posts/5213"
    );

    Promise.all([
      getPost1,
      getPost2,
      getPost3,
      getPost4,
      getPost5,
      getPost6,
    ]).then((res) => {
      this.setState({
        post1Title: res[0].data.title.rendered,
        post1Content: res[0].data.excerpt.rendered,
        post1Url: res[0].data.link,
        post2Title: res[1].data.title.rendered,
        post2Content: res[1].data.excerpt.rendered,
        post2Url: res[1].data.link,
        post3Title: res[2].data.title.rendered,
        post3Content: res[2].data.excerpt.rendered,
        post3Url: res[2].data.link,
        post4Title: res[3].data.title.rendered,
        post4Content: res[3].data.excerpt.rendered,
        post4Url: res[3].data.link,
        post5Title: res[4].data.title.rendered,
        post5Content: res[4].data.excerpt.rendered,
        post5Url: res[4].data.link,
        post6Title: res[5].data.title.rendered,
        post6Content: res[5].data.excerpt.rendered,
        post6Url: res[5].data.link,
      });
    });
  }

  render() {
    const {
      post1Title,
      post1Content,
      post1Url,
      post2Title,
      post2Content,
      post2Url,
      post3Title,
      post3Content,
      post3Url,
      post4Title,
      post4Content,
      post4Url,
      post5Title,
      post5Content,
      post5Url,
      post6Title,
      post6Content,
      post6Url,
    } = this.state;
    const html1 = post1Content;
    const html2 = post2Content;
    const html3 = post3Content;
    const html4 = post4Content;
    const html5 = post5Content;
    const html6 = post6Content;

    return (
      <div
        className="row-am blog-list hideme wow animated  fadeIn"
        data-wow-duration="2s"
      >
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
                  <h4 className="black-title-small">{post1Title}</h4>
                  <div dangerouslySetInnerHTML={{ __html: html1 }}></div>
                  <a href={post1Url} className="read-more">
                    <img src={cright} alt="" />
                    Read article
                  </a>
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
                  <h4 className="black-title-small">{post2Title}</h4>
                  <div dangerouslySetInnerHTML={{ __html: html2 }}></div>
                  <a href={post2Url} className="read-more">
                    <img src={cright} alt="" />
                    Read article
                  </a>
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
                  <h4 className="black-title-small">{post3Title}</h4>
                  <div dangerouslySetInnerHTML={{ __html: html3 }}></div>

                  <a href={post3Url} className="read-more">
                    <img src={cright} alt="" />
                    Read article
                  </a>
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
                  <h4 className="black-title-small">{post4Title}</h4>
                  <div dangerouslySetInnerHTML={{ __html: html4 }}></div>

                  <a href={post4Url} className="read-more">
                    <img src={cright} alt="" />
                    Read article
                  </a>
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
                  <h4 className="black-title-small">{post5Title}</h4>
                  <div dangerouslySetInnerHTML={{ __html: html5 }}></div>

                  <a href={post5Url} className="read-more">
                    <img src={cright} alt="" />
                    Read article
                  </a>
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
                  <h4 className="black-title-small">{post6Title}</h4>
                  <div dangerouslySetInnerHTML={{ __html: html6 }}></div>

                  <a href={post6Url} className="read-more">
                    <img src={cright} alt="" />
                    Read article
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="load-more">
              <a href="/#" className="load-more-btn">
                LOAD MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogList;

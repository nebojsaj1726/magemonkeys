import React from "react";

import "./blog-list.css";
import blog1 from "../../images/blog1.png";
import blog2 from "../../images/blog2.png";
import blog3 from "../../images/blog3.png";
import cright from "../../images/c-right.png";

const BlogList = () => (
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
              <h4 className="black-title-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </h4>
              <p>
                Our dexterous developers always update clients with constant
                touch over communication channels regarding the progress of
                project development.
              </p>
              <a href="/#" className="read-more">
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
              <h4 className="black-title-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </h4>
              <p>
                Our dexterous developers always update clients with constant
                touch over communication channels regarding the progress of
                project development.
              </p>
              <a href="/#" className="read-more">
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
              <h4 className="black-title-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </h4>
              <p>
                Our dexterous developers always update clients with constant
                touch over communication channels regarding the progress of
                project development.
              </p>
              <a href="/#" className="read-more">
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
              <h4 className="black-title-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </h4>
              <p>
                Our dexterous developers always update clients with constant
                touch over communication channels regarding the progress of
                project development.
              </p>
              <a href="/#" className="read-more">
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
              <h4 className="black-title-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </h4>
              <p>
                Our dexterous developers always update clients with constant
                touch over communication channels regarding the progress of
                project development.
              </p>
              <a href="/#" className="read-more">
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
              <h4 className="black-title-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </h4>
              <p>
                Our dexterous developers always update clients with constant
                touch over communication channels regarding the progress of
                project development.
              </p>
              <a href="/#" className="read-more">
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

export default BlogList;

import React from "react";

import "./blog-detal.css";
import blogprsn from "../../images/blog-prsn.png";
import prsn from "../../images/prsn.png";

const BlogDetal = (props) => (
  <div
    className="row-am blog-detal hideme wow animated  fadeIn"
    data-wow-duration="2s"
  >
    <div className="container">
      <div className="row">
        <div className="blog-inr">
          <div className="blog-orange-title text-center">Services</div>
          <h4 className="black-title-small text-center">{props.title}</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-1 col-lg-1 col-sm-12"></div>
        <div className="col-md-10 col-lg-10 col-sm-12">
          <div className="blg-inr-prsns">
            <img src={blogprsn} alt="" />
          </div>
        </div>
        <div className="col-md-1 col-lg-1 col-sm-12"></div>
      </div>
      <div className="row flip">
        <div
          className="hideme col-sm-12 col-lg-8 col-md-12 wow left animated  fadeIn "
          data-wow-duration="2s"
        >
          <div
            dangerouslySetInnerHTML={{
              __html: props.content,
            }}
          ></div>

          <div className="r-gray left">
            <div className="prsn-inr">
              <img src={prsn} alt="" />
            </div>
            <div className="left">
              <div className="black">V. Brahmbhatt</div>
              <p>Magento Certified Developer</p>
            </div>
            <div className="right">
              <a href="/#" className="load-more-btn-orng">
                Hire me
              </a>
            </div>
          </div>
        </div>

        <div
          className="hideme col-sm-12 col-lg-4 col-md-12 wow right  animated  fadeIn "
          data-wow-duration="2s"
        >
          <div className="r-gray">
            <div className="left">
              <div className="blog-orange-title ">Author</div>
              <div className="black">V. Brahmbhatt</div>
              <p>Magento Certified Developer</p>
              <a href="/#" className="load-more-btn-orng">
                Hire me
              </a>
            </div>
            <div className="right">
              <div className="prsn-inr">
                <img src={prsn} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BlogDetal;

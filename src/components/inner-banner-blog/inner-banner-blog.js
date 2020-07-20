import React from "react";

import "./inner-banner-blog.css";
import innerbanner from "../../images/inner-banner.jpg";

const InnerBannerBlog = () => (
  <div className="inner-banner about_banner">
    <img src={innerbanner} alt="" className="w100" />
    <div className="inner-banner-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <h1
              className="yellow-title hideme wow animated blog fadeIn animated font_sml"
              data-wow-duration="2s"
            >
              Blog
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default InnerBannerBlog;

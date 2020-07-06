import React from "react";

import "./inner-banner-hd.css";
import aboutbanner from "../../images/about-baner.jpg";

const InnerBannerHd = () => (
  <div className="inner-banner">
    <img src={aboutbanner} alt="" className="w100" />
    <div className="inner-banner-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <h1
              className="yellow-title hideme wow animated hd font_sml fadeIn animated"
              data-wow-duration="2s"
            >
              Hire a<br />
              Magento Developer
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default InnerBannerHd;

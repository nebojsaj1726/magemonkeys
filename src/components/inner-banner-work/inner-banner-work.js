import React from "react";

import "./inner-banner-work.css";
import innerbanner from "../../images/inner-banner.jpg";

const InnerBannerWork = () => (
  <div className="inner-banner">
    <img src={innerbanner} alt="" className="w100" />
    <div className="inner-banner-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <h1
              className="yellow-title hideme wow animated work fadeIn animated"
              data-wow-duration="2s"
            >
              Portfolio
            </h1>
            <p className="c-left">
              We've worked on outstanding projects, with some great clients!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default InnerBannerWork;

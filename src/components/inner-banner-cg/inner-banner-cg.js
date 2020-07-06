import React from "react";

import "./inner-banner-cg.css";
import innerbanner from "../../images/inner-banner.jpg";

const InnerBannerCg = () => (
  <div className="inner-banner">
    <img src={innerbanner} alt="" className="w100" />
    <div className="inner-banner-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <h1
              className="yellow-title hideme wow animated fadeIn animated font_sml"
              data-wow-duration="2s"
            >
              Consumer Goods E-commerce
              <br />
              Development Solutions
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default InnerBannerCg;

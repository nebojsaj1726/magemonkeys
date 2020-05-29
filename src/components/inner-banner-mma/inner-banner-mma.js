import React from "react";

import "./inner-banner-mma.css";
import innerbanner from "../../images/inner-banner.jpg";

const InnerBannerMma = () => (
  <div className="inner-banner">
    <img src={innerbanner} alt="" className="w100" />
    <div className="inner-banner-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <h1
              className="yellow-title hideme wow animated mma fadeIn animated"
              data-wow-duration="2s"
            >
              Magento
              <br /> Mobile App
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default InnerBannerMma;

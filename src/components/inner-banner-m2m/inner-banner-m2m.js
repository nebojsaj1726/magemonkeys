import React from "react";

import "./inner-banner-m2m.css";
import innerbanner from "../../images/inner-banner.jpg";

const InnerBannerM2m = () => (
  <div className="inner-banner">
    <img src={innerbanner} alt="" className="w100" />
    <div className="inner-banner-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <h1
              className="yellow-title hideme wow animated m2m fadeIn animated"
              data-wow-duration="2s"
            >
              Migrate to
              <br />
              Magento
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default InnerBannerM2m;

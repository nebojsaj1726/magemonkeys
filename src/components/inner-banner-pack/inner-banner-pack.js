import React from "react";

import "./inner-banner-pack.css";
import innerbanner from "../../images/inner-banner.jpg";

const InnerBannerPack = () => (
  <div className="inner-banner packages_banner">
    <img src={innerbanner} alt="" className="w100" />
    <div className="inner-banner-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <h1
              className="yellow-title hideme wow animated pack fadeIn animated font_sml"
              data-wow-duration="2s"
            >
              Magento Packages
              <br />& Support
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default InnerBannerPack;

import React from "react";

import innerbanner from "../../images/inner-banner.jpg";

const InnerBannerGems = () => (
  <div className="inner-banner">
    <img src={innerbanner} className="w100" alt="" />
    <div className="inner-banner-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <h1
              className="yellow-title hideme wow animated gems  fadeIn animated font_sml"
              data-wow-duration="2s"
            >
              Gems & Jewelry E-commerce
              <br />
              Development Solutions
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default InnerBannerGems;

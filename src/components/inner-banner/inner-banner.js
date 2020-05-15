import React from "react";

import "./inner-banner.css";
import innerbanner from "../../images/inner-banner.jpg";

const InnerBanner = () => (
  <div className="inner-banner">
    <img src={innerbanner} alt="" className="w100" />
    <div className="inner-banner-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <h1
              className="yellow-title hideme wow animated cntct fadeIn animated"
              data-wow-duration="2s"
            >
              Contact Us
            </h1>{" "}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default InnerBanner;

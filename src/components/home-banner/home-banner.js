import React from "react";

import "./home-banner.css";
import homebanner from "../../images/home-banner.png";

const HomeBanner = () => (
  <div className="home-banner">
    <img src={homebanner} alt="" className="w100" />
    <div className="home-banner-content">
      <div className="container">
        <h1 className="yellow-title hideme wow animated  fadeInLeft animated">
          Hello Humans
        </h1>
        <p className="hideme wow animated  fadeInLeft animated">
          We don’t monkey around your magento store
        </p>
      </div>
    </div>
  </div>
);

export default HomeBanner;

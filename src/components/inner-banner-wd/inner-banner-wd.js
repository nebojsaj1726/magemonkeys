import React from "react";
import { Link } from "react-router-dom";

import "./inner-banner-wd.css";
import innerbanner from "../../images/inner-banner.jpg";
import back from "../../images/back.png";

const InnerBannerWd = (props) => (
  <div className="inner-banner">
    <img src={innerbanner} alt="" className="w100" />
    <div className="inner-banner-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <h1
              className="yellow-title wd hideme wow animated fadeIn font_sml  animated"
              data-wow-duration="2s"
            >
              {props.title}
            </h1>
            <div className="white-t">
              Luxury Interior, fashion & lifestyle eCommerce store
            </div>
            <Link to="/work" className="back-btn">
              <img src={back} alt="" />
              Back to projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default InnerBannerWd;

import React from "react";

import "./all-work.css";
import w1 from "../../images/w1.jpg";
import w2 from "../../images/w2.jpg";
import w3 from "../../images/w3.jpg";
import rightaerow from "../../images/right-aerow.png";

const AllWork = () => (
  <div className="work-main row-am">
    <div className="container">
      <div className="row all-work-row">
        <div className="col-lg-7 col-md-12 col-sm-12">
          <div className="all-work-img">
            <img src={w1} alt="" />
          </div>
        </div>

        <div className="col-lg-5 col-md-12 col-sm-12">
          <div className="all-work-cont">
            <h3
              className="black-title c-center  hideme wow animated  fadeIn c-left"
              data-wow-duration="2s"
            >
              GutRad
            </h3>
            <p>
              Gutrad approached us to develop ecommerce portal that facilitate
              them to expand their business operations.
            </p>
            <a href="/#" className="orange-btn">
              View Project
              <img src={rightaerow} alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="row all-work-row left-img">
        <div className="col-lg-7 col-md-12 col-sm-12">
          <div className="all-work-cont">
            <h3
              className="black-title c-center  hideme wow animated  fadeIn c-left"
              data-wow-duration="2s"
            >
              House of Hackney
            </h3>
            <p>
              House Of Hackney approached us to develop ecommerce portal that
              facilitate them to make a reach of their product globally.
            </p>
            <a href="/#" className="orange-btn">
              View Project
              <img src={rightaerow} alt="" />
            </a>
          </div>
        </div>
        <div className="col-lg-5 col-md-12 col-sm-12">
          <div className="all-work-img">
            <img src={w2} alt="" />
          </div>
        </div>
      </div>

      <div className="row all-work-row">
        <div className="col-lg-7 col-md-12 col-sm-12">
          <div className="all-work-img">
            <img src={w3} alt="" />
          </div>
        </div>

        <div className="col-lg-5 col-md-12 col-sm-12">
          <div className="all-work-cont">
            <h3
              className="black-title c-center  hideme wow animated  fadeIn c-left"
              data-wow-duration="2s"
            >
              INK2PRINT
            </h3>
            <p>
              They want to expand the growth in terms of customer reach and
              profitability of the business, want to develop an ecommerce site
              to take his business to the next level.
            </p>
            <a href="/#" className="orange-btn">
              View Project
              <img src={rightaerow} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AllWork;

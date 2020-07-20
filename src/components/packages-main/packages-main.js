import React from "react";

import "./packages-main.css";

const PackagesMain = () => (
  <div className="packages-main row-am about">
    <div className="container">
      <div className="row heading_spacing">
        <div className="col-lg-12 col-md-12">
          <h3
            className="big_heading heading c-center  hideme wow animated  fadeIn  animated"
            data-wow-duration="2s"
          >
            Support plans
          </h3>
          <p className="sub_txt">
            From just a few hours per month, to more comprehensive plans, we
            have plans that will work for you!
            <br />
            Contact one of our experts today and let us help determine which
            program is right for you.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="pack-inr">
          <div className="pall">
            <div className="hours">
              <span>40</span>hrs/month
            </div>
            <div className="dolar">$800</div>
            <button type="submit" className="btn btn-default orange-btn">
              Contact Us
            </button>
          </div>

          <div className="pall orange">
            <div className="recomended">Recommended</div>
            <div className="hours">
              <span>80</span>hrs/month
            </div>
            <div className="dolar">$1400</div>
            <button type="submit" className="btn btn-default orange-btn">
              Contact Us
            </button>
          </div>
          <div className="pall">
            <div className="hours">
              <span>160</span>hrs/month
            </div>
            <div className="dolar">$2400</div>
            <button type="submit" className="btn btn-default orange-btn">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PackagesMain;

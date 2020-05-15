import React from "react";

import "./cwu-row-am.css";
import uk from "../../images/uk.png";
import usa from "../../images/usa.png";
import aus from "../../images/aus.png";

const CwuRowAm = () => (
  <div className="cwu row-am">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-12 col-sm-12">
          <h2
            className="black-title c-center hideme wow animated  fadeIn"
            data-wow-duration="2s"
          >
            Connect with us
          </h2>
        </div>
      </div>
      <div className="row cwu-inr">
        <div
          className="col-md-12 col-lg-4 col-sm-12 c-center   hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="all-col">
            <img src={uk} alt="" />
            <p className="orange-title">UK</p>
            <a href="/#" target="_blank">
              +44 2081232989
            </a>
          </div>
        </div>
        <div
          className="col-md-12 col-lg-4 col-sm-12 c-center   hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="all-col">
            <img src={usa} alt="" />
            <p className="orange-title">USA</p>
            <a href="/#" target="_blank">
              +1 7077366533
            </a>
          </div>
        </div>
        <div
          className="col-md-12 col-lg-4 col-sm-12 c-center   hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="all-col">
            <img src={aus} alt="" />
            <p className="orange-title">AUS</p>
            <a href="/#" target="_blank">
              +61 390185455
            </a>
          </div>
        </div>
      </div>
      <div className="row mailto">
        <div
          className="col-md-12 col-lg-12 col-sm-12 c-center  hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <p>or email us on</p>
          <a href="/#" target="_blank">
            contact@magemonkeys.com
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default CwuRowAm;

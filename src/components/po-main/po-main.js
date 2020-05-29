import React from "react";

import "./po-main.css";
import speed from "../../images/speed.jpg";

const PoMain = () => (
  <div className="po-main row-am">
    <div className="container">
      <div className="row">
        <div
          className="col-lg-6 col-md-12 left hideme wow animated  fadeIn  animated"
          data-wow-duration="2s"
        >
          <div className="po-img">
            <img src={speed} alt="" />
          </div>
        </div>
        <div className="col-lg-6 col-md-12 right hideme wow animated  fadeIn  animated">
          <h3
            className="black-title c-left  hideme wow animated  fadeIn  animated"
            data-wow-duration="2s"
          >
            Magento® store speed test
          </h3>

          <ul
            className="hideme wow animated  fadeIn  animated"
            data-wow-duration="2s"
          >
            <li>Enable Magento caching</li>
            <li>Disable unneeded Magento modules</li>
            <li>W3C compliance</li>
            <li>Configure PHP options</li>
            <li>MySQL server tuning</li>
            <li>Compress images</li>
            <li>Enable flat catalogs for smaller webshops</li>
            <li>Compress output in general</li>
            <li>Session storage</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default PoMain;

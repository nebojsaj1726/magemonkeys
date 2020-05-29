import React from "react";

import "./mma-main.css";
import mmaleft from "../../images/mma-left.jpg";

const MmaMain = () => (
  <div className="mma-main row-am">
    <div className="container">
      <div className="row">
        <div
          className="col-lg-5 col-md-12 left hideme wow animated  fadeIn  animated"
          data-wow-duration="2s"
        >
          <div className="way-img">
            <img src={mmaleft} alt="" />
          </div>
        </div>
        <div className="col-lg-7 col-md-12 right hideme wow animated  fadeIn  animated">
          <h3
            className="orange-title c-left  hideme wow animated  fadeIn  animated"
            data-wow-duration="2s"
          >
            Progressive Web Apps (PWA) - the new in thing
          </h3>
          <p className="hideme wow animated  fadeIn  animated">
            Progressive web apps using Magento bring “a lot” to all of these-
            user experience and engagement, speed, reliability, and conversions.
          </p>
          <ul
            className="hideme wow animated  fadeIn  animated"
            data-wow-duration="2s"
          >
            <li>
              Irrespective of network issues, PWA loads instantly which improves
              the customer experience
            </li>
            <li>
              PWA offers superfast navigation and smooth user interactions
            </li>
            <li>PWA eliminates the need to launch the app on app stores</li>
            <li>And it is part of Magento’s product road-map</li>
          </ul>
          <div className="mma-in">
            <h3
              className="orange-title c-left  hideme wow animated  fadeIn  animated"
              data-wow-duration="2s"
            >
              Android & iOS-based Magento Mobile Apps
            </h3>
            <p className="hideme wow animated  fadeIn  animated">
              We build eminent, scalable and highly-secured Magento mobile apps
              on Android as well as on iOS to enrich your customer experience
              and support.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MmaMain;

import React from "react";

import "./about-info.css";

const AboutInfo = () => (
  <div className="about-info ">
    <div className="container">
      <div className="row about-info-inr row-am">
        <div
          className="col-sm-12 col-md-12 col-lg-12  info_cont_col hideme wow animated c-center fadeIn"
          data-wow-duration="2s"
        >
          <h2 className="info_heading orange-title">
            Grow your revenue with our Magento Managed Services and our flexible
            Support Packages
          </h2>
          <p>
            Your eCommerce website need constant monitoring and support to
            ensure the customer experience is top notch. With ever changing
            retail scenario, it’s all the more necessary for eCommerce store
            owners to be on top of their game to overcome competition and
            increase sales. That’s where our Magento Certified expert team come
            in, with continuous support to bug fixes, security patches
            implementation to overcoming a hackers attempt we ensure every bit
            of your user experience stays intact and on-top of your competition.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default AboutInfo;

import React from "react";

import mma1 from "../../images/mma1.jpg";
import mma2 from "../../images/mma2.jpg";
import mma3 from "../../images/mma3.jpg";
import mma4 from "../../images/mma4.jpg";
import mma5 from "../../images/mma5.jpg";
import mma6 from "../../images/mma6.jpg";
import mma7 from "../../images/mma7.jpg";

const ApiRowMma = () => (
  <div className="api-main row-am">
    <div className="container">
      <div className="row">
        <div
          className="col-sm-12 col-md-12 col-lg-12 hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <h3
            className="black-title c-center  hideme wow animated  fadeIn  animated"
            data-wow-duration="2s"
          >
            What it takes to make a<br />
            Magento mobile application move swiftly?
          </h3>
        </div>
      </div>

      <div className="row">
        <div
          className="col-sm-12 col-md-6 col-lg-3 hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="api-single">
            <img src={mma1} alt="" />
            <p>Excellent mobile app UI improves user navigation and sales</p>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-3 hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="api-single">
            <img src={mma2} alt="" />
            <p>Mobile transactions are super-fast and highly-secured</p>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-3 hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="api-single">
            <img src={mma3} alt="" />
            <p>Checkout process becomes easy, quick and intuitive</p>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-3 hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="api-single">
            <img src={mma4} alt="" />
            <p>
              Reduces the cart abandonment ratios to a great extent, as they
              keep persistent cart
            </p>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-3 hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="api-single">
            <img src={mma5} alt="" />
            <p>Customer support services are just a click away</p>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-3 hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="api-single">
            <img src={mma6} alt="" />
            <p>
              Personalized customer engagement happens using push notifications
            </p>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-3 hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="api-single">
            <img src={mma7} alt="" />
            <p>
              Deep linking eliminates the unwanted navigational steps and allow
              customers to directly jump to the product page
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ApiRowMma;

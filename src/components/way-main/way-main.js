import React from "react";

import "./way-main.css";
import way from "../../images/way.jpg";

const WayMain = () => (
  <div className="way-main row-am">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 col-md-12 left">
          <h3
            className="black-title c-left  hideme wow animated  fadeIn  animated"
            data-wow-duration="2s"
          >
            Grow Your B2B Business
            <br />
            by using power of Digital Commerce
          </h3>
          <p className="hideme wow animated  fadeIn  animated">
            B2B Commerce is an online business store where you welcome all the
            retailers or business owners to come and place the order for your
            products in bulk. Ideally it has features like permission based
            catalog showcase, request a quote, live negotiation, commission to
            middle person, etc.
          </p>

          <div className="way">
            <h3
              className="orange-title c-left  hideme wow animated  fadeIn  animated"
              data-wow-duration="2s"
            >
              Mage Monkeys Way
            </h3>
            <p className="hideme wow animated  fadeIn  animated">
              Mage Monkeys offers you a fully customized and easy-to-implement
              B2B digital commerce store to help you switch your wholesale
              business online in no time.
            </p>
          </div>
        </div>
        <div
          className="col-lg-5 col-md-12 right hideme wow animated  fadeIn  animated"
          data-wow-duration="2s"
        >
          <div className="way-img">
            <img src={way} alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WayMain;

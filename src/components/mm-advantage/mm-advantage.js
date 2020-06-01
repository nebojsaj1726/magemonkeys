import React from "react";

import "./mm-advantage.css";
import adv1 from "../../images/adv_icn1.png";
import adv2 from "../../images/adv_icn2.png";
import adv3 from "../../images/adv_icn3.png";
import adv4 from "../../images/adv_icn4.png";
import adv5 from "../../images/adv_icn5.png";

const MmAdvantage = () => (
  <div
    className="row-am mm_adv_sec hideme wow animated  fadeIn pt-0 "
    data-wow-duration="2s"
  >
    <div className="container">
      <div className="row">
        <div
          className="col-md-12 col-lg-12 col-sm-12 left hideme wow animated  fadeIn heading_spacing"
          data-wow-duration="2s"
        >
          <h3 className="text-center">The Mage Monkeys Advantage</h3>
        </div>
      </div>
      <div className="row  mm_adv_row">
        <div
          className=" col hideme wow animated  fadeIn "
          data-wow-duration="2s"
        >
          <div className="mm_adv_box">
            <div className="adv_icn">
              <img src={adv1} alt="" />
            </div>
            <p>Thorough quality testing before actual deployment of site</p>
          </div>
        </div>
        <div
          className=" col  hideme wow animated  fadeIn "
          data-wow-duration="2s"
        >
          <div className="mm_adv_box">
            <div className="adv_icn">
              <img src={adv2} alt="" />
            </div>
            <p>
              Constant monitor of security, speed and consistency during the
              upgrade process
            </p>
          </div>
        </div>
        <div
          className=" col hideme wow animated  fadeIn "
          data-wow-duration="2s"
        >
          <div className="mm_adv_box">
            <div className="adv_icn">
              <img src={adv3} alt="" />
            </div>
            <p>
              Till date successfully implemented all process of upgrade in
              Magento
            </p>
          </div>
        </div>
        <div
          className=" col hideme wow animated  fadeIn "
          data-wow-duration="2s"
        >
          <div className="mm_adv_box">
            <div className="adv_icn">
              <img src={adv4} alt="" />
            </div>
            <p>Competitive rates for Magento 2.0 upgrade service</p>
          </div>
        </div>
        <div
          className=" col hideme wow animated  fadeIn "
          data-wow-duration="2s"
        >
          <div className="mm_adv_box">
            <div className="adv_icn">
              <img src={adv5} alt="" />
            </div>
            <p>
              Deliver glitch free transition to latest version by monitoring the
              process continuously
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MmAdvantage;

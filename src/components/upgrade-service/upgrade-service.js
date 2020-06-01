import React from "react";

import "./upgrade-service.css";
import optimization from "../../images/optimization_icn.png";
import cartrate from "../../images/cart_rate_icn.png";
import userexperience from "../../images/user_exprience_icn.png";
import checkoutprocess from "../../images/checkout_process_icn.png";
import integrationtime from "../../images/integration_time.png";
import advancerate from "../../images/advance_rate.png";
import analycis from "../../images/analycis_icn.png";
import security from "../../images/security_icn.png";

const UpgradeService = () => (
  <div
    className="row-am  upgrade_service hideme wow animated  fadeIn "
    data-wow-duration="2s"
  >
    <div className="container">
      <div className="row">
        <div
          className="col-md-12 col-lg-12 col-sm-12 left hideme wow animated  fadeIn heading_spacing"
          data-wow-duration="2s"
        >
          <h3 className="orange-title text-center">
            When you perform Magento 2 upgrade service, your Magento store can
            deliver you:
          </h3>
        </div>
        <div className="row  upgrade_service_row">
          <div
            className="col-md-3 col-lg-3 col-sm-4 left hideme wow animated  fadeIn upgrade_ser_col"
            data-wow-duration="2s"
          >
            <div className="upgrade_service_box">
              <div className="upg_ser_icn">
                <img src={optimization} alt="" />
              </div>
              <p>Optimized page loading</p>
            </div>
          </div>
          <div
            className="col-md-3 col-lg-3 col-sm-4 left hideme wow animated  fadeIn upgrade_ser_col"
            data-wow-duration="2s"
          >
            <div className="upgrade_service_box">
              <div className="upg_ser_icn">
                <img src={cartrate} alt="" />
              </div>
              <p>Reduction in cart rejection rate</p>
            </div>
          </div>
          <div
            className="col-md-3 col-lg-3 col-sm-4 left hideme wow animated  fadeIn upgrade_ser_col"
            data-wow-duration="2s"
          >
            <div className="upgrade_service_box">
              <div className="upg_ser_icn">
                <img src={userexperience} alt="" />
              </div>
              <p>Engaging user Experience</p>
            </div>
          </div>
          <div
            className="col-md-3 col-lg-3 col-sm-4 left hideme wow animated  fadeIn upgrade_ser_col"
            data-wow-duration="2s"
          >
            <div className="upgrade_service_box">
              <div className="upg_ser_icn">
                <img src={checkoutprocess} alt="" />
              </div>
              <p>
                Modernized <br />
                checkout process
              </p>
            </div>
          </div>
          <div
            className="col-md-3 col-lg-3 col-sm-4 left hideme wow animated  fadeIn upgrade_ser_col"
            data-wow-duration="2s"
          >
            <div className="upgrade_service_box">
              <div className="upg_ser_icn">
                <img src={integrationtime} alt="" />
              </div>
              <p>
                Minimal extension <br />
                integration time
              </p>
            </div>
          </div>
          <div
            className="col-md-3 col-lg-3 col-sm-4 left hideme wow animated  fadeIn upgrade_ser_col"
            data-wow-duration="2s"
          >
            <div className="upgrade_service_box">
              <div className="upg_ser_icn">
                <img src={advancerate} alt="" />
              </div>
              <p>Advanced conversion rate</p>
            </div>
          </div>
          <div
            className="col-md-3 col-lg-3 col-sm-4 left hideme wow animated  fadeIn upgrade_ser_col"
            data-wow-duration="2s"
          >
            <div className="upgrade_service_box">
              <div className="upg_ser_icn">
                <img src={analycis} alt="" />
              </div>
              <p>
                In-depth analysis <br /> of your store
              </p>
            </div>
          </div>
          <div
            className="col-md-3 col-lg-3 col-sm-4 left hideme wow animated  fadeIn upgrade_ser_col"
            data-wow-duration="2s"
          >
            <div className="upgrade_service_box">
              <div className="upg_ser_icn">
                <img src={security} alt="" />
              </div>
              <p>Advanced Security</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default UpgradeService;

import React from "react";

import "./services-info.css";
import certificate from "../../images/certificate_icn.png";
import performance from "../../images/performance_icn.png";
import seo from "../../images/seo_icn.png";
import servicesinfo from "../../images/services_info_img.png";

const ServicesInfo = () => (
  <div className="services_info_sec ">
    <div className="container">
      <div className="row services_certi_sec ">
        <div
          className="col-sm-12 col-md-4 col-lg-4 hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="ser_cer_box">
            <div className="icn">
              <img src={certificate} alt="" />
            </div>
            <div className="ser_cont">
              Certified Developers & Designers will do the Upgrade.
            </div>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-4 col-lg-4 hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="ser_cer_box">
            <div className="icn">
              <img src={performance} alt="" />
            </div>
            <div className="ser_cont">
              Upgrade will perform with 0% downtime and no dataloss.
            </div>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-4 col-lg-4 hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="ser_cer_box">
            <div className="icn">
              <img src={seo} alt="" />
            </div>
            <div className="ser_cont">
              We'll make sure your SEO won't get disturbed.
            </div>
          </div>
        </div>
      </div>
      <div className="row services_letest_info row-am">
        <div
          className="col-sm-12 col-md-6 col-lg-6  info_cont_col hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <h2 className="info_heading orange-title">
            Migrate your Magento store to latest version without breaking a
            sweat!
          </h2>
          <p>
            A vital service of Magento platform known as Magento Upgrade service
            delivered by Mage Monkeys enables the e-commerce sellers to espouse
            the up to date version of Magento and take their online store to
            next level. Careful planning and analysis are the key, that’s why we
            deliver only tailored migration solutions. The solutions that will
            enable you to break new grounds with the revamped, more advanced
            platform.
          </p>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-6  info_img_col hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <img src={servicesinfo} alt="" />
        </div>
      </div>
    </div>
  </div>
);

export default ServicesInfo;

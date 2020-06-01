import React from "react";

import "./process-follow.css";
import databasemigrate from "../../images/database_migrate_icn.png";
import thememigrate from "../../images/theme_migrate.png";
import b3 from "../../images/b3.png";
import b4 from "../../images/b4.png";

const ProcessFollow = () => (
  <div className="process_follow row-am">
    <div className="container">
      <div className="row heading_spacing">
        <div className="col-lg-12 col-md-12">
          <h3
            className="big_heading heading c-center  hideme wow animated  fadeIn  animated"
            data-wow-duration="2s"
          >
            Process we follow at Mage Monkeys
          </h3>
          <p className="sub_txt">
            Take advantage of fast and effortless Magento 2 migration service.
            We will carefully guide you through the process migrating your data,
            SEO value, creating design and building custom functionality.
          </p>
        </div>
      </div>

      <div className="row">
        <div
          className="col-sm-12 col-md-3 col-lg-3 hideme wow animated  fadeIn process_follow_col"
          data-wow-duration="2s"
        >
          <div className="process_follow_box">
            <img src={databasemigrate} alt="" />
            <h4 className="orange-title-small">
              Core Database <br /> Migration
            </h4>
            <p>
              For your custom Magento extension requirements, we make a
              prototype that helps you evaluate and finalize. This resolves the
              need of creating multiple extensions differently and save you from
              spending excessive time and money unnecessarily.
            </p>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-3 col-lg-3 hideme wow animated  fadeIn process_follow_col"
          data-wow-duration="2s"
        >
          <div className="process_follow_box">
            <img src={thememigrate} alt="" />
            <h4 className="orange-title-small">
              Design Migration ~ <br />
              Theme Upgrade
            </h4>
            <p>
              For your custom Magento extension requirements, we make a
              prototype that helps you evaluate and finalize. This resolves the
              need of creating multiple extensions differently and save you from
              spending excessive time and money unnecessarily.
            </p>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-3 col-lg-3 hideme wow animated  fadeIn process_follow_col"
          data-wow-duration="2s"
        >
          <div className="process_follow_box">
            <img src={b3} alt="" />
            <h4 className="orange-title-small">
              Upgradation of <br /> Extensionst
            </h4>
            <p>
              For your custom Magento extension requirements, we make a
              prototype that helps you evaluate and finalize. This resolves the
              need of creating multiple extensions differently and save you from
              spending excessive time and money unnecessarily.
            </p>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-3 col-lg-3 hideme wow animated  fadeIn process_follow_col"
          data-wow-duration="2s"
        >
          <div className="process_follow_box">
            <img src={b4} alt="" />
            <h4 className="orange-title-small">
              Migrating Advanced
              <br />
              SEO Settings
            </h4>
            <p>
              For your custom Magento extension requirements, we make a
              prototype that helps you evaluate and finalize. This resolves the
              need of creating multiple extensions differently and save you from
              spending excessive time and money unnecessarily.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProcessFollow;

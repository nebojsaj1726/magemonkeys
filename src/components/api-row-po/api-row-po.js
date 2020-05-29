import React from "react";

import po1 from "../../images/po1.jpg";
import po2 from "../../images/po2.jpg";
import po3 from "../../images/po3.jpg";
import po4 from "../../images/po4.jpg";
import po5 from "../../images/po5.jpg";
import po6 from "../../images/po6.jpg";
import po7 from "../../images/po7.jpg";
import po8 from "../../images/po8.jpg";

const ApiRowPo = () => (
  <div className="api-main row-am">
    <div className="container">
      <div className="row">
        <div
          className="col-sm-12 col-md-12 col-lg-12 hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <h3
            className="black-title c-left  hideme wow animated  fadeIn  animated"
            data-wow-duration="2s"
          >
            Performance Optimization Service Includes:
          </h3>
        </div>
      </div>

      <div className="row">
        <div
          className="col-sm-12 col-md-6 col-lg-3 hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="api-single">
            <img src={po1} alt="" />
            <p>Magento® store speed test</p>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-3 hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="api-single">
            <img src={po2} alt="" />
            <p>
              Analysing your Magento extensions to check if one of them is
              slowing the store
            </p>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-3 hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="api-single">
            <img src={po3} alt="" />
            <p>Analysing your Magento database queries and response time</p>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-3 hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="api-single">
            <img src={po4} alt="" />
            <p>
              Analysing your Magento theme to check the speed of your website.
            </p>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-3 hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="api-single">
            <img src={po5} alt="" />
            <p>
              Analysing external API calls and services for your Magento
              Website.
            </p>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-3 hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="api-single">
            <img src={po6} alt="" />
            <p>Search for potential conflicts that might cause issues</p>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-3 hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="api-single">
            <img src={po7} alt="" />
            <p>Search for lzarge images and files that might slow your site</p>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-3 hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="api-single">
            <img src={po8} alt="" />
            <p>
              Search for JavaScript errors or files which are not loaded due to
              access restriction issues
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ApiRowPo;

import React from "react";
import { Link } from "react-router-dom";

import "./service-main.css";

const ServiceMain = () => (
  <div
    className="service-main hideme wow animated fadeIn"
    data-wow-duration="2s"
  >
    <div className="container">
      <div className="row ">
        <div className="col-md-6 col-lg-3 col-sm-12">
          <div className="ser1">
            <h3>eCommerce Store Development</h3>
            <p>
              Accelerate Your Business with a Digital eCommerce Store
              Development Services Most of the{" "}
            </p>
            <a href="/#" className="learn-more">
              Learn more <i className="far fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 col-sm-12">
          <div className="ser1">
            <h3>eCommerce Store Development</h3>
            <p>
              Grow Your B2B Business by using power of Digital Commerce B2B
              Commerce is an online eCommerce{" "}
            </p>
            <Link to="/b2b" className="learn-more">
              Learn more <i className="far fa-arrow-right"></i>
            </Link>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 col-sm-12">
          <div className="ser1">
            <h3>eCommerce Store Development</h3>
            <p>
              Improve the Performance of your Digital Commerce Store to
              Strengthen the Customer Experience{" "}
            </p>
            <a href="/#" className="learn-more">
              Learn more <i className="far fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 col-sm-12">
          <div className="ser1">
            <h3>eCommerce Store Development</h3>
            <p>
              Magento Mobile App Turns Your Business into a Million Dollar Brand
              We develop customized and
            </p>
            <a href="/#" className="learn-more">
              Learn more <i className="far fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ServiceMain;

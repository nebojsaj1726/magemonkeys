import React from "react";

import "./black-back-pack.css";
import icn1 from "../../images/icn1.png";
import icn2 from "../../images/icn2.png";
import icn3 from "../../images/icn3.png";
import icn4 from "../../images/icn4.png";

const BlackBackPack = () => (
  <div
    className="row-am black-back-img hideme wow animated po pack fadeIn animated"
    data-wow-duration="2s"
  >
    <div className="container">
      <div className="row">
        <div
          className="col-md-12 left hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <h2 className="orange-title-small c-center">
            Managed Support Services
          </h2>
          <p className="col-white c-center">
            Our needed end-to-end eCommerce expertise based on experience,
            analysis and skills required for your Magento project.
          </p>
        </div>
      </div>
      <div className="row  upgrade_service_row">
        <div
          className="col-md-3 col-lg-3 col-sm-3 left hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="about-s">
            <div className="icn">
              <img src={icn1} alt="" />
            </div>
            <h3 className="orange-title-small">Performance Optimization</h3>
            <p className="col-white">
              When it comes to an E-commerce website Magento performance
              optimization has an essential role. Our team of certified experts
              makes sure to deliver the best results for any service you
            </p>
            <a href="/#" className="orange-title-small learn-more2">
              Learn more<i className="fal fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
        <div
          className="col-md-3 col-lg-3 col-sm-3 left hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="about-s">
            <div className="icn">
              <img src={icn2} alt="" />
            </div>
            <h3 className="orange-title-small">Debugging & Troubleshooting</h3>
            <p className="col-white">
              Errors and issues are always there, you need an expert to fix
              those and ensure that they do not arise again. Is your Magento
              store facing a slow down issue?…
            </p>
            <a href="/#" className="orange-title-small learn-more2">
              Learn more<i className="fal fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
        <div
          className="col-md-3 col-lg-3 col-sm-3 left hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="about-s">
            <div className="icn">
              <img src={icn3} alt="" />
            </div>
            <h3 className="orange-title-small">Downgrade to Community</h3>
            <p className="col-white">
              Downgrading is a task which is complex and not as smooth as up
              gradation. Downgrading process requires expertise technical
              knowledge and experience. Mage Monkeys make sure that the process
              of
            </p>
            <a href="/#" className="orange-title-small learn-more2">
              Learn more<i className="fal fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
        <div
          className="col-md-3 col-lg-3 col-sm-3 left hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="about-s">
            <div className="icn">
              <img src={icn4} alt="" />
            </div>
            <h3 className="orange-title-small">Magento API Integration</h3>
            <p className="col-white">
              Magento Rest API is a part of Magento Enterprise and Community
              edition which helps to integrate business applications and make
              them reliable and secure. Mage Monkeys can undertake Magento REST…
            </p>
            <a href="/#" className="orange-title-small learn-more2">
              Learn more<i className="fal fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BlackBackPack;

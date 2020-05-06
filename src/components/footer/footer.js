import React from "react";

import "./footer.css";
import logo from "../../images/logo.png";

const Footer = () => (
  <div className="footer">
    <div className="container">
      <div className="f-first">
        <div className="row">
          <div className="col-md-3">
            <div className="logo-ftr hideme wow animated  fadeInLeftBig">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="col-md-9">
            <div className="row f-menu">
              <div className="col-md-3 hideme wow animated  fadeIn">
                <div className="col1">
                  <h6>Magento Development</h6>
                  <ul>
                    <li>
                      <a href="/#">New Store Development</a>
                    </li>
                    <li>
                      <a href="/#">B2B Solution</a>
                    </li>
                    <li>
                      <a href="/#">Migrate to Magento</a>
                    </li>
                    <li>
                      <a href="/#">Extension Development</a>
                    </li>
                    <li>
                      <a href="/#">Magento Mobile App</a>
                    </li>
                    <li>
                      <a href="/#">Magento Marketplace</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3 hideme wow animated  fadeIn">
                <div className="col1">
                  <h6>Magento Support</h6>
                  <ul>
                    <li>
                      <a href="/#">Magento Upgrade Service & Solution</a>
                    </li>
                    <li>
                      <a href="/#">Performance Optimization</a>
                    </li>
                    <li>
                      <a href="/#">Packages & Support</a>
                    </li>
                    <li>
                      <a href="/#">Downgrade to Community</a>
                    </li>
                    <li>
                      <a href="/#">Magento API Integration</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3 hideme wow animated  fadeIn">
                <div className="col1">
                  <h6>Hire Magento Developer</h6>
                  <ul>
                    <li>
                      <a href="/#">Hiring Models</a>
                    </li>
                    <li>
                      <a href="/#">Developer Expertise</a>
                    </li>
                    <li>
                      <a href="/#">Support Plans</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3 hideme wow animated  fadeIn">
                <div className="col1">
                  <h6>Mage Monkeys</h6>
                  <ul>
                    <li>
                      <a href="/#">About Us</a>
                    </li>
                    <li>
                      <a href="/#">Work</a>
                    </li>
                    <li>
                      <a href="/#">Contact Us</a>
                    </li>
                    <li>
                      <a href="/#">Blog</a>
                    </li>
                    <li className="get-quote">
                      <a href="/#">Get a Quote</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="f-second  ">
        <div className="social">
          <ul className="f-social hideme wow animated  fadeIn">
            <li>
              <a href="/#" target="_blank">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>

            <li>
              <a href="/#" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="/#" target="_blank">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
        <p className="hideme wow animated  fadeIn">
          © Copyright 2020. MageMonkeys. All Rights Reserved.
        </p>
      </div>
    </div>
  </div>
);

export default Footer;

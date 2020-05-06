import React from "react";

import "./work-main.css";
import work1 from "../../images/work1.png";
import work2 from "../../images/work2.png";
import work3 from "../../images/work3.png";
import work4 from "../../images/work4.png";
import m1 from "../../images/m1.png";
import m2 from "../../images/m2.png";
import m3 from "../../images/m3.png";
import m4 from "../../images/m4.png";
import m5 from "../../images/m5.png";

const WorkMain = () => (
  <div className="work-main">
    <div className="container">
      <div className="row">
        <h2
          className="black-title c-center  hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          Why shall you work with Mage Monkeys ?
        </h2>
        <p
          className="semi-head c-center  hideme wow animated  fadeIn"
          data-wow-duration="2s"
          data-wow-delay="1s"
        >
          Cut down on complexity and get the job done simply.
        </p>
      </div>
      <div className="row ">
        <div className="work-inr">
          <ul
            className="worl-calc-main hideme wow animated  fadeIn"
            data-wow-duration="2s"
            data-wow-delay="1s"
          >
            <li>
              <img src={work1} alt="" />
              <h4>Store Development</h4>
              <div className="numbers">200+</div>
            </li>
            <li>
              <img src={work2} alt="" />
              <h4>Migration/Upgradation</h4>
              <div className="numbers">60+</div>
            </li>
            <li>
              <img src={work3} alt="" />
              <h4>Custom Plugin Development</h4>
              <div className="numbers">30+</div>
            </li>
            <li>
              <img src={work4} alt="" />
              <h4>Magento Experts</h4>
              <div className="numbers">100+</div>
            </li>
          </ul>

          <div className="mage-icons">
            <ul>
              <li
                className="hideme wow animated  fadeInLeftBig"
                data-wow-duration="3s"
                data-wow-delay="1s"
              >
                <a href="/#">
                  <img src={m1} alt="" />
                </a>
              </li>
              <li
                className="hideme wow animated  fadeInLeftBig"
                data-wow-duration="3s"
                data-wow-delay="0.2s"
              >
                <a href="/#">
                  <img src={m2} alt="" />
                </a>
              </li>
              <li
                className="hideme wow animated  fadeIn"
                data-wow-duration="3s"
                data-wow-delay="0.2s"
              >
                <a href="/#">
                  <img src={m3} alt="" />
                </a>
              </li>
              <li
                className="hideme wow animated  fadeInRightBig"
                data-wow-duration="3s"
                data-wow-delay="0.2s"
              >
                <a href="/#">
                  <img src={m4} alt="" />
                </a>
              </li>
              <li
                className="hideme wow animated  fadeInRightBig"
                data-wow-duration="3s"
                data-wow-delay="1s"
              >
                <a href="/#">
                  <img src={m5} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WorkMain;

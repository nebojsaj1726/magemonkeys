import React from "react";

import hbback1 from "../../images/hb-back1.png";

const HbInfo = () => (
  <div className="automotive_info">
    <div
      className="col-lg-4 col-md-4 left hideme wow animated  fadeIn  animated  auto_img_col"
      data-wow-duration="2s"
    >
      <div className="way-img">
        <img src={hbback1} alt="" />
      </div>
    </div>
    <div className="autom_row_grid">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-4 col-md-4 left hideme wow animated  fadeIn  animated"
            data-wow-duration="2s"
          ></div>
          <div className="col-lg-8 col-md-8 right hideme wow animated  fadeIn  animated  autom_content font_play_fair">
            <div className="inner_cont">
              <p>
                Let your health and beauty products speak for themselves. Our
                customized web solutions are loaded with POS system integration,
                subscription and business intelligence which can help you
                capture more client market and loyal customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HbInfo;

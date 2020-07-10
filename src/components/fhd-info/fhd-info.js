import React from "react";

import furback1 from "../../images/fur-back1.png";

const FhdInfo = () => (
  <div className="automotive_info">
    <div
      className="col-lg-4 col-md-4 left hideme wow animated  fadeIn  animated  auto_img_col"
      data-wow-duration="2s"
    >
      <div className="way-img">
        <img src={furback1} alt="" />
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
                Build your home decor store with plenty of styles and modern
                concept. Let your customer know exactly what they get when they
                buy. Just trendy and impressive! This unique approach leads to
                enhanced acquisition and loyalty of customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FhdInfo;

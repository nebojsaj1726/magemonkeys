import React from "react";

import gemsback1 from "../../images/gems-back1.png";

const GemsInfo = () => (
  <div className="automotive_info">
    <div
      className="col-lg-4 col-md-4 left hideme wow animated  fadeIn  animated  auto_img_col"
      data-wow-duration="2s"
    >
      <div className="way-img">
        <img src={gemsback1} alt="" />
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
                Build your online jewelry business lucrative with the most
                attractive and pixel perfect shape and design. We provide the
                best eCommerce solution to create the most amazing online
                presence. We specialize in custom jewelry website design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default GemsInfo;

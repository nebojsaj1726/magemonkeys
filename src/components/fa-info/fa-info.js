import React from "react";

import isaback1 from "../../images/isa-back1.png";

const FaInfo = () => (
  <div className="automotive_info">
    <div
      className="col-lg-4 col-md-4 left hideme wow animated  fadeIn  animated  auto_img_col"
      data-wow-duration="2s"
    >
      <div className="way-img">
        <img src={isaback1} alt="" />
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
                For a luxury eCommerce store, the personalized shopping
                experience has become very important. Our enhanced fashion
                eCommerce solution gives a phenomenal shopping experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FaInfo;

import React from "react";

import "./automotive-info.css";
import automotiveleft from "../../images/automotive_left.jpg";

const AutomotiveInfo = () => (
  <div className="automotive_info">
    <div
      className="col-lg-4 col-md-4 left hideme wow animated  fadeIn  animated  auto_img_col"
      data-wow-duration="2s"
    >
      <div className="way-img">
        <img src={automotiveleft} alt="" />
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
                For a great user experience once needs to manage catalogue and
                inventory. Fast and significant search helps your online store
                to gain more customers. Make your online business faster and
                smarter by simplifying management and adding more value to it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AutomotiveInfo;

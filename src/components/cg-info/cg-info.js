import React from "react";

import cgback from "../../images/cg-back1.png";

const CgInfo = () => (
  <div className="automotive_info">
    <div
      className="col-lg-4 col-md-4 left hideme wow animated  fadeIn  animated  auto_img_col"
      data-wow-duration="2s"
    >
      <div className="way-img">
        <img src={cgback} alt="" />
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
                In the absence of physical interaction, brands need inspiring
                and helpful content to deliver superior experiences for
                customers shopping online. Give your customer the much needed
                simple yet wide range of consumer products so that they can buy
                from their mobiles, tabs, computer or even kiosk be present all
                over.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CgInfo;

import React from "react";

import isaback2 from "../../images/isa-back2.png";

const FaOrng = () => (
  <div className="orng_bg_cont_sec full_img_cont_wrap  cg">
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-md-12 col-lg-6 col-sm-12 left hideme wow animated  fadeIn animated col-white wrap_grid_7 content_col_grid "
          data-wow-duration="2s"
          style={{
            visibility: `visible`,
            animationDuration: `${2}s`,
            animationName: `fadeIn`,
            opacity: 1,
          }}
        >
          <div className="inner_grid">
            <div className="head_part">
              <h3 className="heading font_48">
                Magento – Not just a platform, but a tool for eCommerce success
              </h3>
              <p className="sub-title">
                Create an all-round web and digital experience for your business
              </p>
            </div>
            <p>
              Magento is an ultimate choice for building eCommerce sites and it
              has been used by more than 240,000 merchants globally. Magento is
              the first step towards creating a successful online shop. It is
              loaded with excellent features and functionalities to offer
              countless options for web developers to build an amazing online
              shop on a global network.
            </p>

            <p>
              Magento is unique because of its visually appealing interface,
              feature-laden functionalities and searches engine friendly website
              structure.
            </p>
          </div>
        </div>
        <div
          className="col-md-12 col-lg-6 col-sm-12  hideme wow animated  fadeIn animated full_img_grid right wrap_grid_5"
          data-wow-duration="2s"
          style={{
            visibility: `visible`,
            animationDuration: `${2}s`,
            animationName: `fadeIn`,
            opacity: 1,
          }}
        >
          <div className="img_grid">
            <img
              src={isaback2}
              className=" hideme wow animated  fadeIn animated"
              data-wow-duration="2s"
              style={{
                visibility: `visible`,
                animationDuration: `${2}s`,
                animationName: `fadeIn`,
                opacity: 1,
              }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FaOrng;

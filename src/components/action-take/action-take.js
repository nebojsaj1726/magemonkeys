import React from "react";

import "./action-take.css";
import actionstep1 from "../../images/action_step_1.png";
import actionstep2 from "../../images/action_step_2.png";
import actionstep3 from "../../images/action_step3.png";

const ActionTake = () => (
  <div className="action_take row-am">
    <div className="container">
      <div className="col-lg-12 col-md-12">
        <h3
          className="big_heading col-white c-center  hideme wow animated  fadeIn  animated"
          data-wow-duration="2s"
        >
          Actions we take
        </h3>
      </div>

      <div className="row action_take">
        <div
          className="col-sm-12 col-md-4 col-lg-4 hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="action_take_box">
            <img src={actionstep1} alt="" />
            <h4 className="step_head">Step 1</h4>
            <p>
              A testing site will be used to observe the actual process while
              upgrading functional behaviour. We ensure that the original data
              and site remains untouched.
            </p>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-4 col-lg-4 hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="action_take_box">
            <img src={actionstep2} alt="" />
            <h4 className="step_head">Step 2</h4>
            <p>
              Before implanting the process we make sure the back-up of your
              site and data is carefully stored. Online replacement of existing
              site with the updated one.
            </p>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-4 col-lg-4 hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="action_take_box">
            <img src={actionstep3} alt="" />
            <h4 className="step_head">Step 3</h4>
            <p>
              We deliver the environment specified Magento upgrade. Process of
              testing is being implemented in order to fix any of bugs or any
              show stopper issues.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ActionTake;

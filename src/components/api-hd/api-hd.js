import React from "react";

import h1 from "../../images/h1.png";
import h2 from "../../images/h2.png";
import h3 from "../../images/h3.png";

const ApiHd = () => (
  <div className="api-main row-am">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <h3
            className="black-title c-center  hideme wow animated  fadeIn  animated"
            data-wow-duration="2s"
          >
            Our Magento Developers are:
          </h3>
        </div>
      </div>

      <div className="row">
        <div
          className="col-sm-12 col-md-6 col-lg-4 hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="api-single">
            <img src={h1} alt="" />
            <h4 className="orange-title-small">Professional Executors</h4>
            <p>
              Our Magento Developers ensure that each and every module is
              integrated with precise detailed and is executed professionally.
            </p>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-4 hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="api-single">
            <img src={h2} alt="" />
            <h4 className="orange-title-small">Supreme Communicators</h4>
            <p>
              Our dexterous developers always update clients with constant touch
              over communication channels regarding the progress of project
              development.
            </p>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-4 hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="api-single">
            <img src={h3} alt="" />
            <h4 className="orange-title-small">Definite Developers</h4>
            <p>
              Developers hired by client will stalwartly work on only their
              projects to deliver the expected results.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ApiHd;

import React from "react";

import blackright from "../../images/black-right.png";

const BlackBackApi = () => (
  <div
    className="row-am black-back-img hideme wow animated  fadeIn"
    data-wow-duration="2s"
  >
    <div className="container">
      <div className="row">
        <div
          className="col-md-12 col-lg-7 col-sm-12 left hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <p>
            Magento Rest API is a part of Magento Enterprise and Community
            edition which helps to integrate business applications and make them
            reliable and secure. Mage Monkeys can undertake Magento REST API
            Integration with your business seamlessly and get you the desired
            results.
          </p>

          <p>
            With the help of REST and SOAP API the interaction between the
            business applications becomes easier and secure. Mage Monkeys team
            has hands on experience with REST, SOAP or XML-RC.
          </p>
        </div>
        <div
          className="col-md-12 col-lg-5 col-sm-12 right hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="r-img">
            <img
              src={blackright}
              alt=""
              className=" hideme wow animated  fadeIn"
              data-wow-duration="2s"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BlackBackApi;

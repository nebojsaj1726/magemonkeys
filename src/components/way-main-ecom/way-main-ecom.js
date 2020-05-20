import React from "react";

import swifty from "../../images/swifty.png";

const WayMainEcom = () => (
  <div className="way-main row-am">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 col-md-12 left">
          <h3
            className="black-title c-left  hideme wow animated  fadeIn  animated"
            data-wow-duration="2s"
          >
            Mage Monkeys
            <br />
            implement your digital store swiftly
          </h3>
          <p className="hideme wow animated  fadeIn  animated">
            For B2C industry, Mage Monkeys utilizes the power of Magento to
            develop your customized digital commerce store. Based on your
            product category and business model, we create customers’ persona
            and suggest relevant features for your digital success.
          </p>

          <p>
            We use Magento, a leading platform with more than 34% penetration
            globally, to make your digital store look super-creative, scalable,
            highly-innovative and secure that deliver ‘wow’ experience for your
            buyers.
          </p>

          <p>
            The best part is – Mage Monkeys build your eCommerce website in a
            way that helps in keeping your competitors, a 100 steps away. We
            have made successful businesses in the industries such as Fashion,
            Lifestyle, Home Furnishings, and Manufacturing.
          </p>
        </div>
        <div
          className="col-lg-5 col-md-12 right hideme wow animated  fadeIn  animated"
          data-wow-duration="2s"
        >
          <div className="way-img">
            <img src={swifty} alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WayMainEcom;

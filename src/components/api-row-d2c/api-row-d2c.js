import React from "react";

import dc1 from "../../images/dc1.png";
import dc2 from "../../images/dc2.png";
import dc3 from "../../images/dc3.png";
import dc4 from "../../images/dc4.png";

const ApiRowD2c = () => (
  <div className="api-main row-am">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <h3
            className="black-title c-center  hideme wow animated  fadeIn c-left animated"
            data-wow-duration="2s"
          >
            What is the transition process
            <br />
            being implemented by Mage Monkeys?
          </h3>
        </div>
      </div>
      <div className="row">
        <div
          className="col-sm-12 col-md-6 col-lg-6 hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="api-single">
            <img src={dc1} alt="" />
            <h4 className="black-title-small">Analysis</h4>
            <p>
              We take time to analyse so that we can identify and document the
              modifications and changes that are present in Enterprise Edition
              and can be copied to community edition.
            </p>

            <p>
              Extensions which are currently in use are check for the support in
              Community Edition
            </p>

            <p>
              For the process of Community Edition migration additional web
              hosting account is created. Mage Monkeys advised as not to tamper
              all the original Enterprise installations unless we get
              confirmation from the clients as what they want to migrate and
              replace in community edition.
            </p>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-6 hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="api-single">
            <img src={dc2} alt="" />
            <h4 className="black-title-small">Migration</h4>
            <p>Let’s talks about Theme Migration</p>

            <p>
              Integration of template (HTML)- replicate the enterprise edition
              to community edition
            </p>

            <p>
              Copying CSS from enterprise to community to make it feel same for
              your customers
            </p>

            <p>New theme for front end store</p>

            <p>Integration of local code in present template</p>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-6 hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="api-single">
            <img src={dc3} alt="" />
            <h4 className="black-title-small">Now for Database Migration</h4>
            <p>CSV format data for all your products</p>

            <p>
              Creation of products attributes sets along with groups as per
              enterprise edition
            </p>

            <p>
              Managing images with media import folder along with path change
            </p>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-6 hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="api-single">
            <img src={dc4} alt="" />
            <h4 className="black-title-small">
              Any other issues which Mage Monkeys take care of?
            </h4>
            <p>
              Yes, in enterprise edition if the login template does not work we
              make sure that community version work well when downgraded from
              enterprise edition.
            </p>

            <p>
              Data is vital and thus data of customer and products are exported
              from enterprise to community edition.
            </p>

            <p>
              Management regarding URL redirection is available in community
              edition where it is absent in enterprise edition.
            </p>

            <p>In community version index management is manual task</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ApiRowD2c;

import React from "react";

import "./work-detail.css";

const WorkDetail = (props) => (
  <div className="work-detail  row-am">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div
            dangerouslySetInnerHTML={{
              __html: props.content,
            }}
            className="c-center  hideme wow animated  fadeIn"
            data-wow-duration="2s"
          ></div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 col-md-12">
          <h3
            className="c-center black-title  hideme wow animated  fadeIn "
            data-wow-duration="2s"
          >
            <span className="orange">Mage Monkeys</span> helped House of hackney
            <br />
            to achieve below solutions:
          </h3>
          <p
            className="c-center  hideme wow animated  fadeIn"
            data-wow-duration="2s"
          >
            We successfully managed to achieve a full-functional ecommerce site
            with flawless coding & beautiful theme and delivered as expected by
            the client. Quality enhanced theme and custom work performed for
            homepage, product listing page, single checkout page to enhanced
            customer experience and dashboard page for getting quick view of the
            site.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default WorkDetail;

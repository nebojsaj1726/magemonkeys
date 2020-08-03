import React from "react";

import "./next-prev.css";

const NextPrev = () => (
  <div className="next-prev">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="all-btn">
            <div className="left">
              <a href="/#" className="btn prev">
                Previous Project
              </a>
              <p>iMustGarden</p>
            </div>

            <div className="right">
              <a href="/#" className="btn next">
                Next Project
              </a>
              <p>Surplus Industrial supply</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NextPrev;

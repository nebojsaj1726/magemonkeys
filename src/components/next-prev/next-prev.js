import React from "react";
import { Link } from "react-router-dom";

import "./next-prev.css";

const NextPrev = (props) => (
  <div className="next-prev">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="all-btn">
            <div className="left">
              <Link to={`/${props.plink}`} className="btn prev">
                Previous Project
              </Link>
              <p>{props.prevcom}</p>
            </div>

            <div className="right">
              <Link to={`/${props.nlink}`} className="btn next">
                Next Project
              </Link>
              <p>{props.nextcom}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NextPrev;

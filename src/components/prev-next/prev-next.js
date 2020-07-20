import React from "react";

import "./prev-next.css";

const PrevNext = () => (
  <div
    className="prev-next-main hideme wow animated row-am fadeIn"
    data-wow-duration="2s"
  >
    <div className="container">
      <div className="row">
        <div className="prev-next">
          <div className="prev">
            <a href="/#" className="load-more-btn">
              Previous
            </a>
            <p>Nullam tincidunt tellus tellus, accumsan auctor...</p>
          </div>
          <div className="next">
            <a href="/#" className="load-more-btn">
              Next
            </a>
            <p>Nullam tincidunt tellus tellus, accumsan auctor...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PrevNext;

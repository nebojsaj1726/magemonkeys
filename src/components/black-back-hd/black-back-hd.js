import React from "react";

import "./black-back-hd.css";

const BlackBackHd = () => (
  <div
    className="row-am black-back-img hd hideme wow animated po fadeIn"
    data-wow-duration="2s"
  >
    <div className="container">
      <div className="row">
        <div
          className="col-md-12 col-lg-12 col-sm-12 left hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <h2 className="c-left">Our Hiring Models</h2>
        </div>
      </div>
      <div className="row">
        <div
          className="col-md-6 col-lg-6 col-sm-6 left s-l hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <h3 className="orange-title c-left">Hourly Model</h3>

          <div className="b-inr">
            <ul>
              <li>You Buy Minimum 25 hours and use as and when required</li>
              <li>Rate includes the developer and project manager</li>
              <li>No Long term commitment required from your side</li>
              <li>
                Our commitment of ready available developer as and when required
              </li>
              <li>Very useful in time of emergency support</li>
              <li>Get regular Timesheet of hours used on task.</li>
            </ul>
          </div>
          <button type="submit" className="btn btn-default orange-btn ">
            Contact us to buy hours and know the pricing
          </button>
        </div>
        <div
          className="col-md-6 col-lg-6 col-sm-6 left s-l hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <h3 className="orange-title c-left">Time and Material</h3>

          <div className="b-inr">
            <ul>
              <li>Best model for ongoing work and when scope is not fixed</li>
              <li>
                This Model is appropriate for companies doing good business
              </li>
              <li>
                We always assign Magento Certified Developer in this model
              </li>
              <li>Daily Timesheets with number of hours for Tasks</li>
              <li>Live Tracking & On-time Delivery</li>
              <li>Periodic Reporting & Approvals</li>
              <li>
                Project starts on preliminary specifications and further goes on
              </li>
              <li>
                This model applicable while making plugins or complicated task.
              </li>
            </ul>
          </div>
          <button type="submit" className="btn btn-default orange-btn ">
            Contact us for technical discussion
          </button>
        </div>

        <div
          className="col-md-6 col-lg-6 col-sm-6 left s-l hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <h3 className="orange-title c-left">Dedicated Developer</h3>

          <div className="b-inr">
            <ul>
              <li>You can hire Full time developer from us</li>
              <li>
                Take an initial interview or give us certain hours of pilot
                project to test the resource
              </li>
              <li>
                Model applicable for mid to large size company and agencies who
                wants to hire developer at cheaper rates
              </li>
              <li>
                Developer will work as part of your team and you can assign your
                company email address too.
              </li>
              <li>Dedicated Project Manager</li>
              <li>Extended 24/7 Support & Maintenance</li>
              <li>Minimum commitment for 3 months</li>
              <li>We Assign Certified Magento developers to you</li>
            </ul>
          </div>
          <button type="submit" className="btn btn-default orange-btn ">
            Contact us to get the developers profile
          </button>
        </div>

        <div
          className="col-md-6 col-lg-6 col-sm-6 left s-l hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <h3 className="orange-title c-left">Fixed Price Project</h3>
          <div className="b-inr">
            <ul>
              <li>
                This is applicable than you have clear scope of task required
              </li>
              <li>
                Proper specifications need to be delivered to us for the same
              </li>
              <li>
                We will provide you fix price and timeline for completion of
                task
              </li>
              <li>No Hidden Costs</li>
              <li>Dedicated Project Manager</li>
              <li>
                Months of guarantee for any error on development done by us
              </li>
            </ul>
          </div>
          <button type="submit" className="btn btn-default orange-btn ">
            Contact us and we will connect you
            <br />
            with our tech leader to discuss requirement
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default BlackBackHd;

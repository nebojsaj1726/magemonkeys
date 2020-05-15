import React from "react";

import "./lets-start-contact.css";
import map from "../../images/map.png";

const LetsStartContact = () => (
  <div className="lets-start-main contact-page">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-7 col-sm-12">
          <div
            className="left hideme wow animated  fadeInBig"
            data-wow-duration="2s"
          >
            <h3 className="orange-title">We operate Globally</h3>
            <p>keys utilizes the powe</p>
            <div className="map">
              <img src={map} alt="" className="w100" />
            </div>
          </div>
        </div>

        <div className="col-md-12 col-lg-5 col-sm-12">
          <div className="test-form">
            <h2
              className="black-title c-left hideme wow animated  fadeIn"
              data-wow-duration="2s"
            >
              Let’s get started
            </h2>
            <form
              className="hideme wow animated  fadeIn"
              data-wow-duration="2s"
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="name"
                  className="form-control"
                  id="email"
                  placeholder=" "
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder=" "
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone-number" className="floating">
                  Phone
                </label>
                <div className="phone-number">
                  <select className="form-control phone-number-prefix">
                    <option>+91</option>
                  </select>
                  <input
                    className="form-control"
                    id="phone-number"
                    name="phone-number"
                    type="tel"
                    autoComplete="off"
                  />
                  <input
                    type="hidden"
                    id="phone-number-full"
                    name="phone-number-full"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="pwd">Message</label>
                <textarea></textarea>
              </div>

              <button type="submit" className="btn btn-default orange-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LetsStartContact;

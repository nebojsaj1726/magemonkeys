import React from "react";

import "./lets-start-main.css";

import tlogo1 from "../../images/t-logo1.png";
import tlogo2 from "../../images/t-logo2.png";
import tlogo3 from "../../images/t-logo3.png";

const LetsStartMain = () => (
  <div className="lets-start-main">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-7 col-sm-12">
          <div
            className="test-cont hideme wow animated  fadeIn"
            data-wow-duration="2s"
          >
            <p>
              Our Magento clientele list spans the globe and numbers more than
              500+. And we would love to count you among our clients.
            </p>
            <div className="test-logos">
              <ul>
                <li
                  className="hideme wow animated  fadeIn"
                  data-wow-duration="2s"
                  data-wow-delay="0.2s"
                >
                  <img src={tlogo1} alt="" />
                </li>
                <li
                  className="hideme wow animated  fadeIn"
                  data-wow-duration="2s"
                  data-wow-delay="0.3s"
                >
                  <img src={tlogo2} alt="" />
                </li>
                <li
                  className="hideme wow animated  fadeIn"
                  data-wow-duration="2s"
                  data-wow-delay="0.4s"
                >
                  <img src={tlogo3} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-12 col-lg-5 col-sm-12">
          <div className="test-form">
            <h2 className="black-title c-left hideme wow animated  fadeIn">
              Let’s get started
            </h2>
            <form
              action="/action_page.php"
              className="hideme wow animated  fadeIn"
              data-wow-duration="2s"
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="name"
                  className="form-control"
                  id="name"
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

export default LetsStartMain;

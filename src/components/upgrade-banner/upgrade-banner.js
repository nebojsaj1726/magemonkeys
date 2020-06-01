import React from "react";

import "./upgrade-banner.css";
import migrateservice from "../../images/migrate_service.jpg";

const UpgradeBanner = () => (
  <div className="inner-banner upgrade_banner">
    <img src={migrateservice} alt="" className="w100" />
    <div className="inner-banner-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8">
            <h1
              className="yellow-title hideme wow animated b2b fadeIn animated font_sml"
              data-wow-duration="2s"
            >
              Magento Upgrade
              <br />
              Service & Solution
            </h1>
          </div>
          <div className="col-lg-4 col-md-4 get_quote_col">
            <div className="get_quote">
              <form
                action=""
                className="hideme wow animated  fadeIn"
                data-wow-duration="2s"
              >
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="name"
                    className="form-control"
                    id="email"
                    placeholder="Ex. Mike Thompson "
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Ex. yourname@gmail.com "
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone-number" className="floating">
                    Phone
                  </label>

                  <input
                    placeholder="+1 123 456 7890 "
                    className="form-control"
                    id="phone-number"
                    name="phone-number"
                    type="tel"
                    autoComplete="off"
                  />
                </div>

                <button type="submit" className="btn btn-default yellow-btn">
                  Get free quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default UpgradeBanner;

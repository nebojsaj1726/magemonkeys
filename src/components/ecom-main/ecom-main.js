import React from "react";

import "./ecom-main.css";
import e1 from "../../images/e1.jpg";
import e2 from "../../images/e2.jpg";
import e3 from "../../images/e3.jpg";
import e4 from "../../images/e4.jpg";
import e5 from "../../images/e5.jpg";
import rocket from "../../images/rocket.jpg";

const EcomMain = () => (
  <div className="ecom-main row-am">
    <div className="container">
      <div className="row">
        <div
          className="col-md-2 col-lg-2 col-sm-12 left hideme wow animated fadeIn"
          data-wow-duration="2s"
        ></div>
        <div
          className="col-md-10 col-lg-10 col-sm-12 right hideme wow animated fadeIn"
          data-wow-duration="2s"
        >
          <h3 className="black-title">
            How can you go live in 4 Weeks with Mage Monkeys ?
          </h3>
        </div>
      </div>

      <div className="row week1 all-week">
        <div
          className="col-md-2 col-lg-2 col-sm-12 left hideme wow animated fadeIn"
          data-wow-duration="2s"
        >
          <button type="submit" className="btn btn-default orange-btn">
            Week 1
          </button>
        </div>
        <div
          className="col-md-10 col-lg-10 col-sm-12 right hideme wow animated fadeIn"
          data-wow-duration="2s"
        >
          <div className="e-com-div">
            <img src={e1} alt="" />
            <h3 className="orange-title">Template/Theme Selection</h3>
            <p>
              Mage Monkeys brings a curated list of high-quality and
              professional Magento themes that is completely in sync with your
              business needs and preferences.
            </p>
          </div>
        </div>
      </div>

      <div className="row week1 all-week">
        <div
          className="col-md-2 col-lg-2 col-sm-12 left hideme wow animated fadeIn"
          data-wow-duration="2s"
        >
          <button type="submit" className="btn btn-default orange-btn">
            Week 2
          </button>
        </div>
        <div
          className="col-md-10 col-lg-10 col-sm-12 right hideme wow animated fadeIn"
          data-wow-duration="2s"
        >
          <div className="e-com-div">
            <img src={e2} alt="" />
            <h3 className="orange-title">Magento Implementation</h3>
            <p>
              We customize and implement Magento platform based on your business
              workflow. We work on the minutest detail to ensure excellent
              customer experience is guaranteed with our Magento UI/UX design,
              development, integration, and quality assurance.
            </p>
          </div>
        </div>
      </div>

      <div className="row week1 all-week">
        <div
          className="col-md-2 col-lg-2 col-sm-12 left hideme wow animated fadeIn"
          data-wow-duration="2s"
        >
          <button type="submit" className="btn btn-default orange-btn">
            Week 3
          </button>
        </div>
        <div
          className="col-md-10 col-lg-10 col-sm-12 right hideme wow animated fadeIn"
          data-wow-duration="2s"
        >
          <div className="e-com-div">
            <img src={e3} alt="" />
            <h3 className="orange-title">Catalog Population</h3>
            <p>
              We help you populate product catalog easily. We help you upload
              product images, product details, size / attributes, etc.
            </p>
          </div>
          <div className="e-com-div">
            <img src={e4} alt="" />
            <h3 className="orange-title">Payment Gateway Integration</h3>
            <p>
              With Magento’s Payment Gateway Integration, your customers can
              make a payment for your products. We make it easy, quick and
              highly secure to help your customers stay loyal to your business.
            </p>
          </div>
        </div>
      </div>
      <div className="row week1 all-week">
        <div
          className="col-md-2 col-lg-2 col-sm-12 left hideme wow animated fadeIn"
          data-wow-duration="2s"
        >
          <button type="submit" className="btn btn-default orange-btn">
            Week 4
          </button>
          <div className="rocket desktop">
            <img src={rocket} alt="" />{" "}
          </div>
        </div>
        <div
          className="col-md-10 col-lg-10 col-sm-12 right hideme wow animated fadeIn"
          data-wow-duration="2s"
        >
          <div className="e-com-div">
            <img src={e5} alt="" />
            <h3 className="orange-title">Shipping Configuration</h3>
            <p>
              The right shipping options doubles the customer satisfaction ratio
              and drive more sales. With Magento, we bring you the ease to
              connect with your preferred shipping carriers and to showcase
              various shipping options with delivery dates based on your
              customers’ convenience.
            </p>
          </div>
          <div className="e-com-div">
            <h3 className="orange-title">Test and Go-live</h3>
            <p>
              Once the above steps are completed, we, along with you, test
              digital store from a technical and business point of view. Once we
              both agree, you go-live quickly.
            </p>
            <div className="rocket mobile">
              <img src={rocket} alt="" />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default EcomMain;

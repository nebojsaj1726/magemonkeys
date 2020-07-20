import React from "react";
import Carousel from "react-elastic-carousel";

import "./testi-section.css";

const TestiSection = () => {
  return (
    <div className="testi_section">
      <div className="container testi-c">
        <div className="row">
          <div className="col-md-12 col-lg-2 col-sm-12"></div>
          <div
            className="col-md-12 col-lg-8 hideme wow animated  fadeIn animate "
            data-wow-duration="2s"
          >
            <div className="header_section">
              <h3 className="text-center heading">
                Some words from our happy clients
              </h3>
            </div>

            <div className="testi_slider">
              <Carousel itemsToShow={1}>
                <div className="testi_slide">
                  <p>
                    Mage Monkeys has been a great partner in revamping our
                    Magento website. They listened to what we wanted, helped us
                    keep the feel of our old site, and transitioned us to a much
                    more versatile responsive theme. Their team is accommodating
                    and easy to work with, even when unforeseen technical issues
                    arise.
                  </p>
                  <div className="author_name">- Jackson Morgan</div>
                </div>
                <div className="testi_slide">
                  <p>
                    Mage Monkeys has been a great partner in revamping our
                    Magento website. They listened to what we wanted, helped us
                    keep the feel of our old site, and transitioned us to a much
                    more versatile responsive theme. Their team is accommodating
                    and easy to work with, even when unforeseen technical issues
                    arise.
                  </p>
                  <div className="author_name">- Jackson Morgan</div>
                </div>
                <div className="testi_slide">
                  <p>
                    Mage Monkeys has been a great partner in revamping our
                    Magento website. They listened to what we wanted, helped us
                    keep the feel of our old site, and transitioned us to a much
                    more versatile responsive theme. Their team is accommodating
                    and easy to work with, even when unforeseen technical issues
                    arise.
                  </p>
                  <div className="author_name">- Jackson Morgan</div>
                </div>
                <div className="testi_slide">
                  <p>
                    Mage Monkeys has been a great partner in revamping our
                    Magento website. They listened to what we wanted, helped us
                    keep the feel of our old site, and transitioned us to a much
                    more versatile responsive theme. Their team is accommodating
                    and easy to work with, even when unforeseen technical issues
                    arise.
                  </p>
                  <div className="author_name">- Jackson Morgan</div>
                </div>
              </Carousel>
            </div>
          </div>
          <div className="col-md-12 col-lg-2 col-sm-12"></div>
        </div>
      </div>
    </div>
  );
};

export default TestiSection;

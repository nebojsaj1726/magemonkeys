import React from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";

import "./work-slider.css";
import w1 from "../../images/w1.png";

const Slider = styled.div`
  .rec-carousel {
    height: 950px !important;
  }
  .rec-pagination {
    display: none !important;
  }
  .w-img {
    display: flex;
  }
  .w-img img {
    justify-content: center;
  }
  .rec-arrow {
    display: block;
    background-color: white;
    color: #ff7232;
  }
  .rec-arrow:hover {
    background-color: white;
    color: #ff7232;
  }
  .rec-arrow-left {
    position: absolute;
    top: 30%;
    left: 0;
  }
  .rec-arrow-right {
    position: absolute;
    top: 30%;
    right: 0;
  }
  @media (max-width: 1199px) {
    .rec-carousel {
      height: 830px !important;
    }
  }
  @media (max-width: 991px) {
    .rec-carousel {
      height: 780px !important;
    }
  }
  @media (max-width: 767px) {
    .rec-carousel {
      height: 620px !important;
    }
    .rec-arrow-left {
        position: absolute;
        top: 20%;
        left: 0;
      }
      .rec-arrow-right {
        position: absolute;
        top: 20%;
        right: 0;
  }
`;

const WorkSlider = () => {
  return (
    <div className="work-slider">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Slider>
              <Carousel itemsToShow={1}>
                <div className="item">
                  <div className="w-img">
                    <img src={w1} alt="" />
                  </div>
                  <div className="w-cont">
                    <h3
                      className="c-center black-title  hideme wow animated  fadeIn "
                      data-wow-duration="2s"
                    >
                      House of hackney achieved below benefits
                      <br />
                      by availing Mage Monkeys' tech service:
                    </h3>
                    <ul
                      className="hideme wow animated listing fadeIn  animated"
                      data-wow-duration="2s"
                    >
                      <li>Gain New Customers with Search Engine Visibility</li>
                      <li>Enable Deals, Bargains, Coupons</li>
                      <li>Overcome Geographical Limitations</li>
                      <li>
                        Create Targeted Communication based on Customer Segment
                      </li>
                      <li>Provide Comparison Shopping of products</li>
                      <li>
                        Create Markets for Niche Products and lowering
                        operational cost and investment
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item">
                  <div className="w-img">
                    <img src={w1} alt="" />
                  </div>
                  <div className="w-cont">
                    <h3
                      className="c-center black-title  hideme wow animated  fadeIn "
                      data-wow-duration="2s"
                    >
                      House of hackney achieved below benefits
                      <br />
                      by availing Mage Monkeys' tech service:
                    </h3>
                    <ul
                      className="hideme wow animated listing fadeIn  animated"
                      data-wow-duration="2s"
                    >
                      <li>Gain New Customers with Search Engine Visibility</li>
                      <li>Enable Deals, Bargains, Coupons</li>
                      <li>Overcome Geographical Limitations</li>
                      <li>
                        Create Targeted Communication based on Customer Segment
                      </li>
                      <li>Provide Comparison Shopping of products</li>
                      <li>
                        Create Markets for Niche Products and lowering
                        operational cost and investment
                      </li>
                    </ul>
                  </div>
                </div>
              </Carousel>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSlider;

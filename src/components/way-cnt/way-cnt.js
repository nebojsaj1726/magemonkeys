import React from "react";

import "./way-cnt.css";

const WayCnt = () => (
  <div className="way-main way-cnt row-am">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 left">
          <h3
            className="orange-title c-center  hideme wow animated  fadeIn  animated cnt"
            data-wow-duration="2s"
          >
            By default choice is B2C
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-12 all">
          <p>
            It is for a business owner who wants to accelerate sales selling on
            another channel directly to customers to whom he cannot connect
            personally. Business-to-consumer (B2C) is the most popular model to
            start an eCommerce store with. As a seller you know pulse of your
            buyers and know their requirements, shopping habits and decision
            making criterias.
          </p>

          <p>
            Due to digital market penetration, customers’ shopping habits have
            changed. Earlier, they used to buy from retail stores, then from web
            stores, and now from websites and apps.
          </p>
        </div>
        <div className="col-lg-6 col-md-12 all">
          <p>
            {" "}
            Ease of buying at your own leisure without travelling, act as fuel.
            Also, it saves huge infrastructure cost for business owners.
          </p>

          <p>
            Looking at the increasing competition and the demand of shopping
            influenced by social media, mobile app browsing, you need to have an
            digital commerce store.
          </p>

          <p>
            Statista says the number of online buyers is expected to reach 2.14
            billion by 2021. Take advantage of grabbing the market of online
            customers with your digital commerce store.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default WayCnt;

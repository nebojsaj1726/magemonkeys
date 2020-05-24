import React from "react";

import "./autom-feature.css";
import searchicn from "../../images/search_icn.png";
import elacticsearchicn from "../../images/elastic_search_icn.png";
import grageicn from "../../images/grage_icn.png";
import wholesaleordertracking from "../../images/wholeshale_order_tracking.png";
import multichanelicn from "../../images/multichanel_icn.png";
import pringicn from "../../images/pring_icn.png";
import suppliericn from "../../images/supplier_icn.png";
import anacliericn from "../../images/anaclier_icn.png";
import aftermarketicn from "../../images/after_market_icn.png";

const AutomFeature = () => (
  <div className="autom_feature">
    <div className="container">
      <div className="row">
        <div
          className="col-md-12 hideme wow animated  fadeIn animate header_section "
          data-wow-duration="2s"
        >
          <h3 className="orange-title text-center heading">
            Stay one step ahead with Automotive eCommerce Features
          </h3>
          <div className="sub_cont text-center">
            Our automotive eCommerce solution includes a user-friendly shopping
            cart, VIN-based search, etc. We blend the right features to make
            your online business much simpler, faster and smarter. Based on our
            research, we have listed some of the attractive features which can
            help you in engaging more customers and building loyalty for your
            brand.
          </div>
        </div>
        <div className="row feature_icn_box">
          <div
            className="col-sm-12 col-md-6 col-lg-4 hideme wow animated  fadeIn animated"
            data-wow-duration="2s"
            style={{
              visibility: `visible`,
              animationDuration: `${2}s`,
              animationName: `fadeIn`,
              opacity: 1,
            }}
          >
            <div className="api-single">
              <img src={searchicn} alt="" />
              <h4 className="orange-title-small">
                Parts Finder
                <br />
                (Make/Model/Year)
              </h4>
              <p>
                Parts Finder (make/model/year) filter will direct customers to
                their desired product. This feature is specially built for the
                automotive industry.
              </p>
            </div>
          </div>
          <div
            className="col-sm-12 col-md-6 col-lg-4 hideme wow animated  fadeIn animated"
            data-wow-duration="2s"
            style={{
              visibility: `visible`,
              animationDuration: `${2}s`,
              animationName: `fadeIn`,
              opacity: 1,
            }}
          >
            <div className="api-single">
              <img src={elacticsearchicn} alt="" />
              <h4 className="orange-title-small">
                Elastic Search/ <br />
                VIN Search
              </h4>
              <p>
                VIN search adds more flexibility to browse quickly and get a
                product with the right vehicle fit. This feature is the best
                companion of MMY searching.
              </p>
            </div>
          </div>

          <div
            className="col-sm-12 col-md-6 col-lg-4 hideme wow animated  fadeIn animated"
            data-wow-duration="2s"
            style={{
              visibility: `visible`,
              animationDuration: `${2}s`,
              animationName: `fadeIn`,
              opacity: 1,
            }}
          >
            <div className="api-single">
              <img src={grageicn} alt="" />
              <h4 className="orange-title-small">
                Garage & Service <br /> Management
              </h4>
              <p>
                Garage & service management allows your customer to book or
                contact garage for service requirements. Customer needs to
                register to connect to authorize garage chain.
              </p>
            </div>
          </div>

          <div
            className="col-sm-12 col-md-6 col-lg-4 hideme wow animated  fadeIn animated"
            data-wow-duration="2s"
            style={{
              visibility: `visible`,
              animationDuration: `${2}s`,
              animationName: `fadeIn`,
              opacity: 1,
            }}
          >
            <div className="api-single">
              <img src={wholesaleordertracking} alt="" />
              <h4 className="orange-title-small">
                Wholesale <br /> Order Tracking
              </h4>
              <p>
                With this feature, you can get all at one place right from
                placing bulk order to avail bulk pricing discount. You get
                separate access for the whole customer.
              </p>
            </div>
          </div>

          <div
            className="col-sm-12 col-md-6 col-lg-4 hideme wow animated  fadeIn  animated"
            style={{
              visibility: `visible`,
              animationDuration: `${2}s`,
              animationName: `fadeIn`,
              opacity: 1,
            }}
          >
            <div className="api-single">
              <img src={multichanelicn} alt="" />
              <h4 className="orange-title-small">
                Multi-channel <br /> Integration
              </h4>
              <p>
                The solution can be integrated flawlessly with in-store POS,
                ERP, CRM and facilitates seamless information flow crosses the
                information channel.
              </p>
            </div>
          </div>

          <div
            className="col-sm-12 col-md-6 col-lg-4 hideme wow animated  fadeIn animated"
            data-wow-duration="2s"
            style={{
              visibility: `visible`,
              animationDuration: `${2}s`,
              animationName: `fadeIn`,
              opacity: 1,
            }}
          >
            <div className="api-single">
              <img src={pringicn} alt="" />
              <h4 className="orange-title-small">
                Print <br /> Catalogue
              </h4>
              <p>
                Print catalogue feature will integrate with your solution to
                serve an offline channel sale. It comes in a predefined format.
              </p>
            </div>
          </div>

          <div
            className="col-sm-12 col-md-6 col-lg-4 hideme wow animated  fadeIn animated"
            data-wow-duration="2s"
            style={{
              visibility: `visible`,
              animationDuration: `${2}s`,
              animationName: `fadeIn`,
              opacity: 1,
            }}
          >
            <div className="api-single">
              <img src={suppliericn} alt="" />
              <h4 className="orange-title-small">
                Supplier Integration <br /> (Vendor Panel)
              </h4>
              <p>
                Our automotive solution will let you connect to OEM and
                aftermarket supplier which means you can manage orders and
                commission based on sales of the supplier.
              </p>
            </div>
          </div>

          <div
            className="col-sm-12 col-md-6 col-lg-4 hideme wow animated  fadeIn  animated"
            style={{
              visibility: `visible`,
              animationDuration: `${2}s`,
              animationName: `fadeIn`,
              opacity: 1,
            }}
          >
            <div className="api-single">
              <img src={anacliericn} alt="" />
              <h4 className="orange-title-small">
                Ancillary <br /> Personalization
              </h4>
              <p>
                Let your customer customize the model with this innovative
                feature. Here they can look the ancillary is best suited to
                their model.
              </p>
            </div>
          </div>

          <div
            className="col-sm-12 col-md-6 col-lg-4 hideme wow animated  fadeIn animated"
            data-wow-duration="2s"
            style={{
              visibility: `visible`,
              animationDuration: `${2}s`,
              animationName: `fadeIn`,
              opacity: 1,
            }}
          >
            <div className="api-single">
              <img src={aftermarketicn} alt="" />
              <h4 className="orange-title-small">
                OEM Vs. Aftermarket <br /> Pricing Matrix
              </h4>
              <p>
                Help your customer in making a more informed decision with a
                balance between cost and quality based on the choice of OEM or
                aftermarket auto part.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AutomFeature;

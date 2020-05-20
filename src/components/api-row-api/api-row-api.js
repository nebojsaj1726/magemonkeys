import React from "react";

import api1 from "../../images/api1.jpg";
import api2 from "../../images/api2.jpg";
import api3 from "../../images/api3.jpg";
import api4 from "../../images/api4.jpg";
import api5 from "../../images/api5.jpg";
import api6 from "../../images/api6.jpg";

const ApiRowApi = () => (
  <div className="api-main row-am">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <h3
            className="black-title c-center  hideme wow animated  fadeIn c-left"
            data-wow-duration="2s"
          >
            Let’s talk about some vital features of Magento API:
          </h3>
        </div>
      </div>

      <div className="row">
        <div
          className="col-sm-12 col-md-6 col-lg-4 hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="api-single">
            <img src={api1} alt="" />
            <h4 className="orange-title-small">Clients</h4>
            <p>
              Options to create, delete and update customer information along
              with the list fetching functionality of customers
            </p>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-4 hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="api-single">
            <img src={api2} alt="" />
            <h4 className="orange-title-small">Catalogue</h4>
            <p>
              To fetch the list of stock account and to upload the stock via
              list.
            </p>
          </div>
        </div>

        <div
          className="col-sm-12 col-md-6 col-lg-4 hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="api-single">
            <img src={api3} alt="" />
            <h4 className="orange-title-small">Products</h4>
            <p>Create, update and delete information about products.</p>
          </div>
        </div>

        <div
          className="col-sm-12 col-md-6 col-lg-4 hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="api-single">
            <img src={api4} alt="" />
            <h4 className="orange-title-small">Categories of Products</h4>
            <p>
              Get the list of categories assigned to your products, and you can
              also unassigned them as per your requirement.
            </p>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-4 hideme wow animated  fadeIn ">
          <div className="api-single">
            <img src={api5} alt="" />
            <h4 className="orange-title-small">Order for Sales</h4>
            <p>List of sales order along with specific order information</p>
          </div>
        </div>

        <div
          className="col-sm-12 col-md-6 col-lg-4 hideme wow animated  fadeIn"
          data-wow-duration="2s"
        >
          <div className="api-single">
            <img src={api6} alt="" />
            <h4 className="orange-title-small">
              Order items, comments and address
            </h4>
            <p>
              You can fetch the order items for a specified order and the
              address. You can also get the billing order along with shipment
              details. Comments for the specified order can also be obtained
              with the help of the list.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ApiRowApi;

import React from "react";

import "./step-section.css";
import magentobgimg from "../../images/magento_bg_img.png";

const StepSection = () => (
  <div className="step_section way_side_img row-am col-white ">
    <div
      className="col-lg-4 col-md-4 left hideme wow animated  fadeIn  animated  way_img_col left animated"
      data-wow-duration="2s"
      style={{
        visibility: `visible`,
        animationDuration: `${2}s`,
        animationName: `fadeIn`,
        opacity: 1,
      }}
    >
      <div className="way-img">
        <img
          src={magentobgimg}
          alt=""
          className=" hideme wow animated  fadeIn animated"
          data-wow-duration="2s"
          style={{
            visibility: `visible`,
            animationDuration: `${2}s`,
            animationName: `fadeIn`,
            opacity: 1,
          }}
        />
      </div>
    </div>
    <div className="step_row_grid">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 left"> </div>
          <div
            className="col-lg-8 col-md-8 right hideme wow animated  fadeIn  animated   animated"
            style={{
              visibility: `visible`,
              animationName: `fadeIn`,
              opacity: 1,
            }}
          >
            <h3 className="heading">
              How Mage Monkeys Help You Migrate Your eCommerce Store to Magento?
            </h3>
            <div className="step_process">
              <h4 className="step_title_cont">Step</h4>
              <div className="step_process_grid">
                <div className="step_process_block">
                  <h4 className="step_head">Detailed Analysis</h4>
                  <p>
                    We closely work with you to understand your business in
                    order to deliver the right Magento migration suggestions for
                    your eCommerce store. We listen, research, analyze, and
                    document each of your existing store details and
                    customizations. This helps us bring the perfect migration
                    plan for your eCommerce website on the table.
                  </p>
                </div>
              </div>
              <div className="step_process_grid">
                <div className="step_process_block">
                  <h4 className="step_head">Data Migration</h4>
                  <p>
                    Once, we are done with the complete analysis of your
                    eCommerce web store, we start working on actual data
                    migration of your existing website to the new and fresh
                    Magento website. And, we use a data migration tool from
                    Magento itself to ensure easy and effective data migration.
                    For your existing complex customized functionalities, we
                    build customized solution on Magento that helps you organize
                    the data of your digital commerce store more easy and
                    efficient.
                  </p>
                </div>
              </div>
              <div className="step_process_grid">
                <div className="step_process_block">
                  <h4 className="step_head">Responsive Design</h4>
                  <p>
                    Web store design is the most crucial part of the Magento
                    migration process. There are different design structures for
                    each of the eCommerce suites. Hence, we make a pixel-perfect
                    website design for your Magento eCommerce store that gives
                    an amazing user experience on all the devices- desktop,
                    mobile, and tablet.
                  </p>
                </div>
              </div>
              <div className="step_process_grid">
                <div className="step_process_block">
                  <h4 className="step_head">
                    Customization, Integrations and Extensions
                  </h4>
                  <p>
                    An eCommerce website consists of various custom
                    functionalities that differs from business to business,
                    industry to industry. We customize Magento’s ready solution
                    to fit to your requirements. If needed, we integrate or
                    develop highly scalable and robust extensions that help you
                    to manage and maintain your eCommerce web store more
                    accurately.
                  </p>
                </div>
              </div>
              <div className="step_process_grid">
                <div className="step_process_block">
                  <h4 className="step_head">Agile Methodology</h4>
                  <p>
                    We work on an Agile methodology that works on migrating your
                    eCommerce website to Magento and testing the same,
                    simultaneously. For an effective Magento migration, we keep
                    you in the loop for our development and testing stages. This
                    helps us to get your constant feedback for any upgrades or
                    changes required.
                  </p>
                </div>
              </div>
              <div className="step_process_grid">
                <div className="step_process_block">
                  <h4 className="step_head">Final Launch</h4>
                  <p>
                    As we promise to launch your Magento eCommerce store in no
                    more than 4 weeks, we literally mean it. With your consent
                    and feedback, we finally, launch your newly-made and
                    migrated Magento commerce website. The easier, faster, and
                    efficient Magento migration helps you boost the customer
                    experience of your store and bring in more customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default StepSection;

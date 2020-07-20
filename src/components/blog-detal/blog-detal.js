import React from "react";

import "./blog-detal.css";
import blogprsn from "../../images/blog-prsn.png";
import prsn from "../../images/prsn.png";

const BlogDetal = () => (
  <div
    className="row-am blog-detal hideme wow animated  fadeIn"
    data-wow-duration="2s"
  >
    <div className="container">
      <div className="row">
        <div className="blog-inr">
          <div className="blog-orange-title text-center">Services</div>
          <h4 className="black-title-small text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non
            nibh nec nisl sodales convallis. Aliquam eget enim ac turpis dictum
            gravida. Vestibulum sed lectus magna.
          </h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-1 col-lg-1 col-sm-12"></div>
        <div className="col-md-10 col-lg-10 col-sm-12">
          <div className="blg-inr-prsns">
            <img src={blogprsn} alt="" />
          </div>
        </div>
        <div className="col-md-1 col-lg-1 col-sm-12"></div>
      </div>
      <div className="row flip">
        <div
          className="hideme col-sm-12 col-lg-8 col-md-12 wow left animated  fadeIn "
          data-wow-duration="2s"
        >
          <p>
            Phasellus non sapien commodo, bibendum lacus tincidunt, facilisis
            tellus. Nullam tincidunt tellus tellus, accumsan auctor nisl mollis
            sit amet. Duis semper dui et suscipit mattis. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia curae;
            Phasellus faucibus nisi at nisi aliquam interdum. Quisque ac est ac
            lorem interdum egestas. Sed augue nisi, fringilla nec nibh vel,
            ultricies varius lacus. Donec efficitur interdum libero, a tristique
            velit mollis ut.
          </p>

          <p>
            Donec efficitur ornare iaculis. Etiam sagittis pulvinar sapien ac
            volutpat. Vestibulum condimentum condimentum ante eu vestibulum.
            Praesent efficitur ornare erat, a accumsan felis tempor sit amet.
            Donec aliquam vitae nisl ac pulvinar. Suspendisse at lectus vel
            nulla pretium malesuada. Proin sit amet leo sit amet nibh interdum
            faucibus. Sed volutpat ligula arcu, nec commodo ante faucibus eget.
            In posuere tortor neque, at tincidunt erat auctor in.
          </p>

          <p>
            In at massa gravida, feugiat massa vel, tincidunt lorem. Duis
            sollicitudin eget nisi eget tristique. Nunc in dolor magna. Cras
            vehicula erat a mollis dapibus. Nunc quis semper ipsum. Proin non
            pretium metus. Fusce hendrerit quam eu nunc lacinia, feugiat
            ultrices felis iaculis. Morbi placerat lorem in enim porta, at
            aliquam tellus hendrerit. Maecenas lorem lorem, interdum vel ligula
            eu, auctor varius felis. Nullam pretium vel mi sed placerat. Vivamus
            rutrum leo quis urna imperdiet cursus. Aliquam aliquam ut augue
            aliquam pulvinar. Morbi congue nibh quam. Praesent fringilla sem sit
            amet diam commodo, sed sagittis elit bibendum.
          </p>

          <div className="r-gray left">
            <div className="prsn-inr">
              <img src={prsn} alt="" />
            </div>
            <div className="left">
              <div className="black">V. Brahmbhatt</div>
              <p>Magento Certified Developer</p>
            </div>
            <div className="right">
              <a href="/#" className="load-more-btn-orng">
                Hire me
              </a>
            </div>
          </div>
        </div>

        <div
          className="hideme col-sm-12 col-lg-4 col-md-12 wow right  animated  fadeIn "
          data-wow-duration="2s"
        >
          <div className="r-gray">
            <div className="left">
              <div className="blog-orange-title ">Author</div>
              <div className="black">V. Brahmbhatt</div>
              <p>Magento Certified Developer</p>
              <a href="/#" className="load-more-btn-orng">
                Hire me
              </a>
            </div>
            <div className="right">
              <div className="prsn-inr">
                <img src={prsn} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BlogDetal;

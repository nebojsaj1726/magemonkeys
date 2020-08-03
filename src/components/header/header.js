import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./header.css";
import logo from "../../images/logo.png";
import menu from "../../images/menu.png";

class Header extends Component {
  openNav = () => {
    document.getElementById("sidenav").classList.add("expandmenu");
  };

  closeNav = () => {
    document.getElementById("sidenav").classList.remove("expandmenu");
  };

  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="logowrap">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="navright">
            <div id="mainmenu" className="menu nav main_menu">
              <ul className="firstul">
                <div className="dropdown">
                  <button className="dropbtn">Magento Development</button>

                  <div className="dropdown-content">
                    <Link to="/magento-enterprise-b2b-solution">
                      <span>
                        <i className="far fa-arrow-right"></i>
                      </span>{" "}
                      B2B Solution
                    </Link>
                    <Link to="/magento-extension-development">
                      <span>
                        <i className="far fa-arrow-right"></i>
                      </span>{" "}
                      Extension Development
                    </Link>
                    <Link to="/ecommerce-store-development-service">
                      <span>
                        <i className="far fa-arrow-right"></i>
                      </span>{" "}
                      E-Commerce
                    </Link>
                    <Link to="/migrate-ecommerce-store-website-magento">
                      <span>
                        <i className="far fa-arrow-right"></i>
                      </span>{" "}
                      Migrate to Magento
                    </Link>
                    <Link to="/magento-mobile-app-development">
                      <span>
                        <i className="far fa-arrow-right"></i>
                      </span>{" "}
                      Magento Mobile App
                    </Link>
                    <Link to="/magento-marketplace">
                      <span>
                        <i className="far fa-arrow-right"></i>
                      </span>{" "}
                      Magento Marketplace
                    </Link>
                  </div>
                </div>

                <div className="dropdown">
                  <button className="dropbtn">Magento Support</button>

                  <div className="dropdown-content">
                    <Link to="/upgrade-services">
                      <span>
                        <i className="far fa-arrow-right"></i>
                      </span>{" "}
                      Upgrade Services
                    </Link>
                    <Link to="/downgrading-magento-enterprise-to-community-edition">
                      <span>
                        <i className="far fa-arrow-right"></i>
                      </span>{" "}
                      Downgrade to Community
                    </Link>
                    <Link to="/magento-rest-api-integration">
                      <span>
                        <i className="far fa-arrow-right"></i>
                      </span>{" "}
                      API Integration
                    </Link>
                    <Link to="/magento-performance-optimization-service">
                      <span>
                        <i className="far fa-arrow-right"></i>
                      </span>{" "}
                      Performance Optimization
                    </Link>
                    <Link to="/automotive-magento-ecommerce-solution">
                      <span>
                        <i className="far fa-arrow-right"></i>
                      </span>{" "}
                      Automotive
                    </Link>
                  </div>
                </div>
                <li id="menu-item-25" className="menu-item ">
                  <Link to="#">Hire Magento Developer</Link>
                </li>
                <li id="menu-item-25" className="menu-item ">
                  <Link to="/work">Work</Link>
                </li>
                <li id="menu-item-25" className="menu-item ">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="get-quote">
              <a href="/#">Get a Quote</a>
            </div>
            <div className="menuicon">
              <Link to="#" id="mySidenav" onClick={this.openNav}>
                <img src={menu} alt="" />
                <span>Menu</span>
              </Link>
              <div className="sidenav" id="sidenav">
                <Link to="#" className="closebtn" onClick={this.closeNav}>
                  &times;
                </Link>
                <div id="sideMenu" className="menu deskmob">
                  <ul className="deskmenu">
                    <li id="menu-item-26" className="menu-item ">
                      <a className="" target="_self" href="/#">
                        Home
                      </a>
                    </li>
                    <li id="menu-item-27" className="menu-item ">
                      <a className="" target="_self" href="/#">
                        About
                      </a>
                    </li>
                    <li id="menu-item-28" className="menu-item ">
                      <Link to="/contact">Contact</Link>
                    </li>

                    <li id="menu-item-20" className="menu-item mobile">
                      <a className="" target="_self" href="/#">
                        Magento Development
                      </a>
                    </li>
                    <li id="menu-item-25" className="menu-item mobile">
                      <a className="" target="_self" href="/#">
                        Magento Support
                      </a>
                    </li>
                    <li id="menu-item-25" className="menu-item mobile">
                      <a className="" target="_self" href="/#">
                        Hire Magento Developer
                      </a>
                    </li>
                    <li id="menu-item-25" className="menu-item mobile">
                      <a className="" target="_self" href="/#">
                        Work
                      </a>
                    </li>
                    <li id="menu-item-25" className="menu-item mobile">
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

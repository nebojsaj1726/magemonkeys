import React, { Component } from "react";

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
            <a href="/#">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="navright">
            <div id="mainmenu" className="menu nav main_menu">
              <ul className="firstul">
                <li id="menu-item-20" className="menu-item ">
                  <a className="" target="_self" href="/#">
                    Magento Development
                  </a>
                </li>
                <li id="menu-item-25" className="menu-item ">
                  <a className="" target="_self" href="/#">
                    Magento Support
                  </a>
                </li>
                <li id="menu-item-25" className="menu-item ">
                  <a className="" target="_self" href="/#">
                    Hire Magento Developer
                  </a>
                </li>
                <li id="menu-item-25" className="menu-item ">
                  <a className="" target="_self" href="/#">
                    Work
                  </a>
                </li>
                <li id="menu-item-25" className="menu-item ">
                  <a className="" target="_self" href="/#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="get-quote">
              <a href="/#">Get a Quote</a>
            </div>
            <div className="menuicon">
              <a id="mySidenav" href="/#" onClick={this.openNav}>
                <img src={menu} alt="" />
                <span>Menu</span>
              </a>
              <div className="sidenav" id="sidenav">
                <a href="/#" className="closebtn" onClick={this.closeNav}>
                  &times;
                </a>
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
                      <a className="" target="_self" href="/#">
                        Contact
                      </a>
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
                      <a className="" target="_self" href="/#">
                        Contact
                      </a>
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

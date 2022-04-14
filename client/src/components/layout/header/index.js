import React from "react";
import logo from "../../../assets/images/logo-light.png";
import "./style.scss";
const Header = () => {
  return (
    <header className="header">
      <div className="grid wide">
        <div className="row">
          <div className="header-left col l-6 m-12 c-12">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="tab_menu">
              <ul>
                <li>
                  <a href="/">NEW ARRIVALS</a>
                </li>
                <li>
                  <a href="/">MEN </a>
                </li>
                <li>
                  <a href="/">WOMEN</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col l-6 m-0 c-0 header-right">
            <div className="icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="icon">
              <i className="fa-solid fa-user"></i>
            </div>
            <div className="icon">
              <i className="fa-solid fa-basket-shopping"></i>{" "}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

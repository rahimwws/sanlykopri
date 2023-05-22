import React from "react";
import { HomePage } from "../../assets/PagesText";
const Header = ({ index }) => {
  return (
    <div id="header">
      <div className="container">
      {/* <header className="row">
        <span>LOGO</span>
        <ul>
          <li>
            <a href="">{HomePage.NavBar1[index]}</a>
          </li>
          <li>
            <a href="">{HomePage.NavBar2[index]}</a>
          </li>
          <li>
            <a href="">{HomePage.NavBar3[index]}</a>
          </li>
          <li>
            <a href="">{HomePage.NavBar4[index]}</a>
          </li>
        </ul>
        <a href="" className="first-button">
          {HomePage.MainBtn[index]}
        </a>
      </header> */}
        <div className="row">
          <div className="col-2">
            <h1>{HomePage.mainTextH1[index]}</h1>
            <hr />
            <p>{HomePage.mainTextP1[index]}</p>
            <a href="" className="first-button">
              {HomePage.MainBtn[index]}
            </a>
          </div>
          <div className="col-2">
            <img src="images/header-icon.png" alt="" />
          </div>
        </div>
      </div>
      <div className="header-down">
        <div className="header-down-inner">
          <a href="#help">
            <img src="images/arrow-down.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

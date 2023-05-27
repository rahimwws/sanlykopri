import React from "react";
import { HomePage } from "../../assets/PagesText";
import { AppContext } from "../../App";
const Header = () => {
  const {index} = React.useContext(AppContext)
  return (
    <div id="header">
      <div className="container">
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
          <a href="#education">
            <img src="images/arrow-down.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

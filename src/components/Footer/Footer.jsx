import React from "react";
import { HomePage } from "../../assets/PagesText";
import { AppContext } from "../../App";
import { Sender } from "../Sender/Sender";
const Footer = () => {
  const {index} = React.useContext(AppContext)
  return (
    <footer id="footer">
      <div className="container">
        <div className="row"> 
        <h1>Оставь заявку</h1>
        <Sender></Sender>
        </div>
        <div className="row">
          <div className="col-2">
            <img className="footer-logo" src="images/logo.png" alt="" />
            <div className="row2">
              <img src="images/instagram.png" alt="" />
              <img src="images/vk.png" alt="" />
              <img src="images/facebook.png" alt="" />
            </div>
          </div>
          <div className="col-2 row">
            <ul>
              <li>
                <a href="">{HomePage.NavBar1[index]} </a>
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
            <div>
              <h4>+993 61 22-22-02</h4>
              <h3>sevencreative@sanly.tm</h3>
            </div>
          </div>
        </div>
        <hr />
        <p>2023 Sanly Köpri - All Rigts Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

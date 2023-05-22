import React from "react";
import { HomePage } from "../../assets/PagesText";
import { AppContext } from "../../App";
const HowEducate = () => {
  const {index} = React.useContext(AppContext)
  return (
    <div id="howeducate">
      <div className="container">
        <h2>
          {HomePage.HowMainText[index]}
        </h2>
        <div className="box row">
          <div className="col-3">
            <h1>01</h1>
            <h3>{HomePage.HowItemMain1[index]}</h3>
            <p>
            {HomePage.HowItemText1[index]}</p>
          </div>
          <div className="col-3">
            <h1>02</h1>
            <h3>{HomePage.HowItemMain2[index]}</h3>
            <p>
            {HomePage.HowItemText2[index]} 
            </p>
          </div>
          <div className="col-3">
            <h1>03</h1>
            <h3>{HomePage.HowItemMain3[index]}</h3>
            <p>
            {HomePage.HowItemText3[index]}
            </p>
          </div>
        </div>
        <div className="box-2">
          <div className="row2">
            <a href="" className="first-button">
              {HomePage.MainBtn[index]}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowEducate;

import React from "react";
import { WebText,HomePage } from "../../assets/PagesText";
import { AppContext } from '../../App'
const WebPage = () => {
  const {index} = React.useContext(AppContext)
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [])
  return (
    <div id="webpage">
      <div className="container">
        <h1> {WebText.mainText[index]} </h1>
        <p className="title">
         {WebText.text[index]}
        </p>
      </div>
      <div className="box">
        <div className="container row">
          <div className="col-2">
            <h2> {WebText.BoxMain[index]} </h2>
            <p className="box-text">
              {WebText.BoxText[index]}
              <br />
              <br />
              <br /> {WebText.BoxText1[index]}
            </p>
            <a href="" className="first-button">
              {HomePage.MainBtn[index]}
            </a>
          </div>
          <div className="col-2">
            <img src="images/web-page.png" alt="" />
          </div>
        </div>
      </div>
      <div className="container row">
        <div className="col-3">
          <h2 className="price-text">
            {WebText.PriceMain1[index]}
          </h2>
          <h4 className="price-desc">
          {WebText.PriceText1[index]}
          </h4>
        </div>
        <div className="col-3">
          <h2 className="price-text"> 
          {WebText.PriceMain2[index]}
          </h2>
          <h4 className="price-desc">
          {WebText.PriceText2[index]}
          </h4>
        </div>
      </div>
      <div className="container">
        <h5>
        {WebText["QuaMain"][index]}
        </h5>
        <ul>
          <li>
          {WebText["QuaItem-1"][index]}
          </li>
          <li>
          {WebText["QuaItem-2"][index]}
          </li>
          <li>
          {WebText["QuaItem-3"][index]}
          </li>
          <li>
            {WebText["QuaItem-4"][index]}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WebPage;

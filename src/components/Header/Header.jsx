import React from "react";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <h1>
              Школа программирования для тех, кому нужны реальные навыки, а не
              просто сертификат
            </h1>
            <hr />
            <p>
              Пройдите тестирование, чтобы получить доступ к бесплатным вводным
              урокам
            </p>
            <a href="" className="first-button">
              Пройти тестирование
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

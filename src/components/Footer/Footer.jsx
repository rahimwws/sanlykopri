import React from "react";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
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
                <a href="">Чему вы научитесь</a>
              </li>
              <li>
                <a href="">Процесс обучения</a>
              </li>
              <li>
                <a href="">Стоимость</a>
              </li>
              <li>
                <a href="">Контакты</a>
              </li>
              <li>
                <a href="">Регистрация</a>
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
    </div>
  );
};

export default Footer;

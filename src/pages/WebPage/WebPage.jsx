import React from "react";
import "./WebPage.scss";
import { Sender } from "../../components/Sender/Sender";
export const WebPage = () => {
  return (
    <div className="WebPage">
      <section className="Home">
        <div className="row container">
          <div className="col-1">
            <h1>Web development</h1>
            <p>
              We create functional and stylish websites where every pixel is
              designed to captivate
            </p>
            <a className="first-button">Get a quick consultation</a>
          </div>
          <div className="col-2">
            <div className="row">
              <div className="circle-1">
                <p>WEB</p>
              </div>
              <div className="circle-2"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="advantages">
        <div className="container">
          <div className="col-1">
            <h1>Преимущества</h1>
            {/* <img src="images/web-1.png" alt="" /> */}
          </div>
          <div className="col-2">
            <div className="item">
              <h2>Модульный подход к архитектуре приложений</h2>
              <div className="line"></div>
              <p>
                Модульность позволяет переиспользовать компоненты, упрощает
                поддержку, создает среду для предсказуемого развития, ускоряет
                рабочий процесс и сокращает количество ошибок.
              </p>
            </div>
            <div className="item">
              <h2>Используем востребованный стек</h2>
              <div className="line"></div>
              <p>
                Осознанно ограничиваем свой стек технологиями, в которых
                уверены, накопили опыт и наработки.
              </p>
            </div>
            <div className="item">
              <h2>Собственная выделенная команда</h2>
              <div className="line"></div>
              <p>
                Собственная команда специалистов и полный набор компетенций в
                команде: архитектура, front, back, тестирование, DevOps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="access">
        <div className="container">
          <div className="row">
            <h1>Подход</h1>
            <h4>
              Nimax Soft — это команда разработчиков, которая опирается на три
              принципа организации работы:
            </h4>
          </div>
          <div className="row">
            <img src="/images/web-1.png" alt="" />
            <div className="items">
              <div className="access-item">
                <p>Принцип №1</p>
                <h3>
                  Полный цикл разработки и все необходимые специалисты в штате.
                  Использование внешних подрядчиков минимизировано
                </h3>
              </div>
              <div className="access-item">
                <p>Принцип №2</p>
                <h3>
                  Полный цикл разработки и все необходимые специалисты в штате.
                  Использование внешних подрядчиков минимизировано
                </h3>
              </div>
              <div className="access-item">
                <p>Принцип №3</p>
                <h3>
                  Полный цикл разработки и все необходимые специалисты в штате.
                  Использование внешних подрядчиков минимизировано
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="project container">
        <div className="row">
          <div className="col-1">
            <p>Оставьте заявку</p>
          </div>
          <Sender></Sender>
        </div>
      </section>
    </div>
  );
};

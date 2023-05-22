import React from "react";
import { AppContext } from "../../App";
import { HomePage } from "../../assets/PagesText";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const { index, setIndex } = React.useContext(AppContext);
  const [hideNav, setHideNav] = React.useState(false)

  const onClickMenuIcon = () => {
    setHideNav(!hideNav)
  }
  const onClickCloseIcon = () => {
    setHideNav(!hideNav)
  }

  const onClickLanguageButton = (a) => {
    if(a == 0){setIndex(0)}
    if(a == 1){setIndex(1)}
    if(a == 2){setIndex(2)}
    setHideNav(!hideNav)
  }

  return (
    <div id="navbar">
      <div className="container">
        <nav className="row">
          <img src="images/logo.png" alt="" />
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
          <div className="row2">
            <p onClick={() => setIndex(0)} className={index == 0 && "active"}>
              Ru
            </p>
            <p onClick={() => setIndex(1)} className={index == 1 && "active"}>
              En
            </p>
            <p onClick={() => setIndex(2)} className={index == 2 && "active"}>
              Tm
            </p>
          </div>
          <RiMenu3Line onClick={onClickMenuIcon} className="menu-icon" />
        </nav>
        <div className={hideNav ? 'mobile-nav' : 'mobile-nav-hide'}>
          <div className={hideNav ? "right-side" : "right-side-hide"}>
            <div className="row">
              <div className="row2">
                <p onClick={() => onClickLanguageButton(0)} className={index == 0 && "active"}>Ru</p>
                <p onClick={() => onClickLanguageButton(1)} className={index == 1 && "active"}>En</p>
                <p onClick={() => onClickLanguageButton(2)} className={index == 2 && "active"}>Tm</p>
              </div>
              <RiCloseLine onClick={onClickCloseIcon} className="close-icon" />
            </div>
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
          <button className="first-button">Оставить заявку</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// package imports
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Auth } from "aws-amplify";
// non- package imports

import { WindowContext } from "AppContext";
import { SITE_TITLE } from "utils/constants";
import { logoutUser } from "redux/actions";
import "./NavMenu.scss";
// <div>Icons made by <a href="" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
import HamburgerImage from "assets/icons/hamburger.png";
import HomeImage from "assets/icons/home.png";
import LoginImage from "assets/icons/login.svg";
import LogoutImage from "assets/icons/logout.svg";
// <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
import RegisterImage from "assets/icons/register.svg";

const NavMenu = () => {
  const { isSignedIn, user } = useSelector((state) => state.auth);
  const [showNavMenu, setShowNavMenu] = useState(false);
  const { isNonMobileWidth, isNonMobileHeight } = useContext(WindowContext);
  const dispatch = useDispatch();

  const getNavMenuClass = () => (showNavMenu ? "show" : "hide");
  const getUserProfilePictureClass = () =>
    showUserDropdownMenu ? "active" : "";

  // event handler functions
  const navmenuOnOpenHandler = () => {
    setShowNavMenu(true);
  };

  const navmenuOnCloseHandler = () => {
    setShowNavMenu(false);
  };

  const userProfilePictureonClickHandler = (e) => {
    e.stopPropagation();
    if (!showUserDropdownMenu) setShowUserDropdownMenu(true);
    else setShowUserDropdownMenu(false);
  };

  const userDropdownMenuOnCloseHandler = () => {
    setShowUserDropdownMenu(false);
  };

  const logoutHandler = async () => {
    dispatch(logoutUser());
    await Auth.signOut();
  };

  const renderConditionalItems = () =>
    !isSignedIn ? (
      <>
        <Link to="/register" className="navmenu__item">
          <img
            className="navmenu__img--item"
            src={RegisterImage}
            alt="Register Image"
          />
          <span>Sign Up</span>
        </Link>
        <Link to="/login" className="navmenu__item">
          <img
            className="navmenu__img--item"
            src={LoginImage}
            alt="Login Image"
          />
          <span>Login</span>
        </Link>
      </>
    ) : (
      <button className="navmenu__item" onClick={logoutHandler}>
        <img
          className="navmenu__img--item"
          src={LogoutImage}
          alt="Logout Image"
        />
        <span>Logout</span>
      </button>
    );

  // render component
  return (
    <>
      {/*hamburger*/}
      <button
        className="navmenu__button"
        id="navmenu__button--hamburger"
        onClick={navmenuOnOpenHandler}
      >
        <img
          className=""
          id="navmenu__img--hamburger"
          src={HamburgerImage}
          alt="hamburger icon"
        />
      </button>
      {/*navmenu container & items*/}
      <div
        className={`navmenu__backdrop backdrop mobile-only ${getNavMenuClass()}`}
        onClick={navmenuOnCloseHandler}
      ></div>
      <nav className={`navmenu__nav--outer ${getNavMenuClass()}`}>
        <div className="navmenu__div--title-close">
          <Link to="/" id="navmenu__title-link">
            {SITE_TITLE}
          </Link>
          <CloseButton
            hideOnDesktop={true}
            className="navmenu__close"
            onClickHandler={navmenuOnCloseHandler}
          />
        </div>
        <ul className="navmenu__items">
          <Link to="/" className="navmenu__item">
            <img
              className="navmenu__img--item"
              src={HomeImage}
              alt="Home Image"
            />
            <span>Home</span>
          </Link>
          {renderConditionalItems()}
        </ul>
      </nav>
    </>
  );
};

export default NavMenu;

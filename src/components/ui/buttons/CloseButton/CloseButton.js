//TODO: do some refactoring to make this cleaner
//TODO: should I just make this a generic button tag instead?
// Package imports
import React from "react";
// Non-package imports
import CloseIconImg from "assets/icons/close-icon.png";
import "./CloseButton.scss";

const CloseButton = (props) => {
  const onClickHandler = (e) => {
    // guard against undefined
    if (props.onClickHandler) props.onClickHandler(e);
  };

  const getHideOnMobileClass = () =>
    props.hideOnMobile ? "hide-on-mobile" : "";

  const getHideOnDesktopClass = () =>
    props.hideOnDesktop ? "hide-on-desktop" : "";

  return (
    <>
      <div
        className={`close-button__div ${
          props.className || ""
        } ${getHideOnMobileClass()} ${getHideOnDesktopClass()}`}
      >
        <button
          className={`close-button__button ${props.className || ""}`}
          id={props.buttonId || ""}
          onClick={onClickHandler}
          type="button"
        >
          <img
            id={props.imageId || ""}
            className={`close-button__img ${props.className || ""}`}
            src={CloseIconImg}
            alt="X Icon"
          />
        </button>
      </div>
    </>
  );
};

export default CloseButton;

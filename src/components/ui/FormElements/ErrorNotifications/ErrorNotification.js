// Package imports
import React, { useState } from "react";
import { useDispatch } from "react-redux"; //TODO: make sure that connect is converted to useSelector
// Non-package imports
import { clearErrors } from "redux/actions";
import "./ErrorNotifications.scss";
import warningImg from "assets/icons/warning.png";

const ErrorNotification = ({ message }) => {
  const dispatch = useDispatch();
  const [containerClass, setContainerClass] = useState("");

  const onCloseHandler = () => {
    setContainerClass("hide");
    setTimeout(() => {
      dispatch(clearErrors());
    }, 300);
  };

  return (
    <div className={`error-notification__div ${containerClass}`} role="alert">
      <div className="error-notification__div--text">
        <img
          className="server-side error__img"
          src={warningImg}
          alt="warning sign"
        ></img>

        {/*//TODO: add guard against object type by retrieving the message property out of it*/}
        <span>{message ? message : null}</span>
      </div>
      <button
        type="button"
        className="server-side error close-button"
        data-dismiss="alert"
        aria-label="Close"
        onClick={onCloseHandler}
      >
        x
      </button>
    </div>
  );
};

export default ErrorNotification;

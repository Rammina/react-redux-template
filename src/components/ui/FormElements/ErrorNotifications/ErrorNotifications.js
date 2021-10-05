// Package imports
import React from "react";
// Non-package imports
import ErrorNotification from "./ErrorNotification";
import "./ErrorNotifications.scss";

const ErrorNotifications = ({ message }) => {
  //TODO: when there is extra time think about implementing displaying multiple error messages (probably make it into an array containing multiple error objects)
  return message ? (
    <div className="error-notifications__div" role="alert">
      <ErrorNotification message={message} />
    </div>
  ) : null;
};

export default ErrorNotifications;

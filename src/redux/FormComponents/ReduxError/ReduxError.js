// Package imports
import React from "react";
// Non-package imports
import warningImg from "assets/icons/warning.png";

export const ReduxError = ({ error, touched, formName }) => {
  // Creates an error message if there is an error and if the input field is touched
  return error && touched ? (
    <div className={`${formName} redux-error__div`}>
      <img className="error__img" src={warningImg} alt="warning sign"></img>
      {error}
    </div>
  ) : null;
};

export default ReduxError;

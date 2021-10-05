// Package imports
import React from "react";
import { Link } from "react-router-dom";
// Non-package imports
import "./ErrorPage.scss";

const ErrorPage = ({ errorHeading, errorCode, errorText }) => {
  const renderErrorMessage = () => {
    return (
      <>
        <h1 className="error-page__heading">{errorHeading || "Error"}</h1>
        {errorCode ? (
          <h2 className="error-page__heading">Error code: {errorCode}</h2>
        ) : null}

        <p className="error-page__p">
          {errorText || "Sorry, something went wrong."}
        </p>
      </>
    );
  };

  return (
    <main className="error-page page-container">
      <div className="error-page__message-container">
        {renderErrorMessage()}
        <br />
        <p className="error-page__p">
          Click the link below to be redirected to the homepage.
        </p>
        <div className="error-page button-container">
          <Link to="/" className="error-page__link">
            Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;

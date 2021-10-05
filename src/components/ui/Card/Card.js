// Package imports
import React from "react";
// Non-package imports
import "./Card.scss";

const Card = (props) => {
  const onMouseEnterHandler = () => {
    if (props.onMouseEnter) props.onMouseEnter();
  };
  const onMouseLeaveHandler = () => {
    if (props.onMouseLeave) props.onMouseLeave();
  };

  return (
    <div
      className={`card ${props.className}`}
      style={props.style}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      {props.children}
    </div>
  );
};

export default Card;

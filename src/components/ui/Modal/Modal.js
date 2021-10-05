// Package imports
import React, { useState } from "react";
// Non-package imports
import { clearErrors } from "redux/actions";
import { useDispatch } from "react-redux";
import ModalHeader from "./ModalHeader/ModalHeader";
import "./Modal.scss";

const Modal = (props) => {
  const dispatch = useDispatch();
  // state that controls styling
  const [modalOpen, setModalOpen] = useState(true);

  // changes className depending on state, used for styling
  const getModalOpenClass = () => (modalOpen ? "show" : "hide");

  // handles the closing of the modal (parent component function + CSS animations)
  const modalOnCloseHandler = () => {
    setModalOpen(false);
    setTimeout(() => {
      props.onModalClose();
      dispatch(clearErrors()); /*Remove any form errors from the redux store*/
    }, 300);
  };

  // stops event bubbling because of how React.createPortal works (still passes events to parent component even if outside it in DOM)
  //TODO: change this any type to something more specific like a generic event object
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  // render the header by default unless parent component explicitly says to render null
  const renderModalHeader = () => {
    if (props.noHeader) return null;
    return (
      <ModalHeader
        className={`${props.className}`}
        headerClassName={props.headerClassName}
        onModalClose={modalOnCloseHandler}
        headingText={props.headingText}
      />
    );
  };
  // render component
  return (
    <div onClick={stopPropagation}>
      <div
        className={`backdrop ${getModalOpenClass()} ${props.className}`}
        onClick={modalOnCloseHandler}
      ></div>
      <section
        className={`modal ${getModalOpenClass()} ${props.className}`}
        id={props.modalId || ""}
        style={props.modalStyle || {}}
        role="dialog"
        aria-label={props.ariaLabel || ""}
        onClick={stopPropagation}
      >
        {renderModalHeader()}
        {props.children}
      </section>
    </div>
  );
};
export default Modal;

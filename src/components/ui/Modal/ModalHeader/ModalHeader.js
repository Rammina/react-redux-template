// Package imports
import React from "react";
// Non-package imports
import CloseButton from "components/ui/buttons/CloseButton/CloseButton";

const ModalHeader = ({
  headingText,
  headerClassName,
  className,
  onModalClose,
}) => {
  // guard against undefined
  const onModalCloseHandler = () => {
    if (onModalClose) onModalClose();
  };

  return (
    <header
      className={`modal__header ${className || ""} ${headerClassName || ""}`}
    >
      <div className="modal__div--header modal-header__div--content">
        <h3
          className={`modal__heading modal-header__heading ${className || ""} `}
        >
          {headingText || ""}
        </h3>
        <CloseButton
          className={`modal-header ${className || ""}`}
          onClickHandler={onModalCloseHandler}
        />
      </div>
    </header>
  );
};
export default ModalHeader;

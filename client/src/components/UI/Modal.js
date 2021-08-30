import React from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

// components
const Backdrop = () => <div className={classes.backdrop} />;

const ModalOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

// modal portal
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(
        <ModalOverlay onConfirm={props.onConfirm}>
          {props.children}
        </ModalOverlay>,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Modal;

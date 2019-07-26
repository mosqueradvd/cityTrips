import React from "react";
import ReactDOM from "react-dom";

import "./styles/Modal.css";

export default function Modal(props) {
  if (!props.isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container">
        <buton onClick={props.onClose} className="Modal__close-button">
          X
        </buton>
        {props.children}
      </div>
    </div>,
    document.getElementById("modal")
  );
}

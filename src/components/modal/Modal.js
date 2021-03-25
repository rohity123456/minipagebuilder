import React from "react";
import { actionTypes } from "../../context/reducer";
import { useStateValue } from "../../context/StateProvider";
import "./Modal.css";
function Modal({ render, isOpen = false }) {
  const setIsModalOpen = (isOpen) => () => {
    dispatch({ type: actionTypes.SET_MODAL_OPEN, payload: isOpen });
  };
  const [, dispatch] = useStateValue();
  return (
    isOpen &&
    render && (
      <div className="modal_shadow">
        <div className="modal">{render(setIsModalOpen(false))}</div>
      </div>
    )
  );
}

export default Modal;

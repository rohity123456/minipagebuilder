import React, { useState } from "react";
import { VALID_TYPES } from "../../common/constants";
import { getElementFromList } from "../../common/helperfunctions";
import { actionTypes } from "../../context/reducer";
import { useStateValue } from "../../context/StateProvider";

function DroppedItemLogic(type, text, style = {}) {
  const [{ elementList }, dispatch] = useStateValue();
  const [isClicked, setIsClicked] = useState(false);
  const [label, input, button] = VALID_TYPES;
  let element;
  switch (type) {
    case label: {
      element = <p style={style}>{text}</p>;
      break;
    }
    case input: {
      element = <input style={style} defaultValue={text} />;
      break;
    }
    case button: {
      element = <button style={style}>{text}</button>;
      break;
    }
    default: {
      element = <p>{text}</p>;
    }
  }

  const handleClick = (e) => {
    setIsClicked(!isClicked);
  };
  const handleKeyPress = (e) => {
    let action;
    const id = e.currentTarget.id;
    if (e.key === "Enter" && isClicked) {
      const {
        data: { X, Y, type },
      } = getElementFromList(elementList, id) || {};
      action = {
        type: actionTypes.SET_CURRENT_ELEMENT,
        payload: {
          pageX: X,
          pageY: Y,
          type,
          id,
        },
      };
      setTimeout(
        () => dispatch({ type: actionTypes.SET_MODAL_OPEN, payload: true }),
        0
      );
    } else if (e.key === "Delete" && isClicked) {
      action = { type: actionTypes.DELETE_ELEMENT_FROM_LIST, payload: id };
    }
    action && dispatch(action);
    setTimeout(() => setIsClicked(false), 0);
    e.stopPropagation();
  };
  return { handleClick, handleKeyPress, element, isClicked };
}

export default DroppedItemLogic;

import React, { useState } from "react";
import { VALID_TYPES } from "../../common/constants";
import { getEl, getElementFromList } from "../../common/helperfunctions";
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
    const lastSelectedElement = getEl(
      e.currentTarget.parentElement,
      ".droppedItem.borderRed"
    );
    if (lastSelectedElement && e.currentTarget.id !== lastSelectedElement.id)
      lastSelectedElement.classList.remove("borderRed");
    e.currentTarget.classList.toggle("borderRed");
    setIsClicked(!isClicked);
  };
  const handleKeyPress = (e) => {
    const id = e.currentTarget.id;
    e.currentTarget.classList.remove("borderRed");
    if (e.key === "Enter" && isClicked) {
      const {
        data: { X, Y, type },
      } = getElementFromList(elementList, id) || {};
      setIsClicked(false);
      dispatch({
        type: actionTypes.SET_CURRENT_ELEMENT,
        payload: {
          pageX: X,
          pageY: Y,
          type,
          id,
        },
      });
      setTimeout(
        () => dispatch({ type: actionTypes.SET_MODAL_OPEN, payload: true }),
        100
      );
    } else if (e.key === "Delete" && isClicked) {
      dispatch({ type: actionTypes.DELETE_ELEMENT_FROM_LIST, payload: id });
    }
    e.stopPropagation();
  };
  return { handleClick, handleKeyPress, element };
}

export default DroppedItemLogic;

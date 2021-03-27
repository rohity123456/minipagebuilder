import React from "react";
import "./DroppedItem.css";
import DroppedItemLogic from "./DroppedItemLogic";
function DroppedItem({
  type,
  text,
  left,
  top,
  id,
  dragStart,
  dragEnd,
  fontWeight,
  fontSize,
}) {
  const {
    handleClick,
    handleKeyPress,
    element,
    isClicked,
  } = DroppedItemLogic(type, text, { fontWeight, fontSize });

  return (
    <div
      className={`droppedItem draggable ${isClicked ? "borderRed" : ""}`}
      style={{ left: +left || 100, top: +top || 100 }}
      id={id}
      draggable={true}
      onDragStart={dragStart}
      onDragEnd={dragEnd}
      onClick={handleClick}
      onKeyDown={handleKeyPress}
      tabIndex="0"
    >
      {element}
    </div>
  );
}

export default DroppedItem;

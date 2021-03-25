import React from "react";
import Grip from "../../resources/grip.svg";
import "./DraggableItemView.css";
function DraggableItemView({ label, type = "label", dragStart, dragEnd }) {
  return (
    <div
      className="draggableItemView draggable"
      onDragStart={dragStart}
      onDragEnd={dragEnd}
      data-type={type}
      draggable={true}
    >
      <img src={Grip} alt="..." draggable={false} />
      <p>{label}</p>
    </div>
  );
}

export default DraggableItemView;

import React from "react";
import DraggableItem from "../draggableItem/DraggableItem";
import DroppedItem from "../droppedItem/DroppedItem";
import "./DroppableArea.css";
import DroppableAreaController from "./DroppableAreaController";
function DroppableArea() {
  const { dragOver, drop, elementList } = DroppableAreaController();

  return (
    <div
      className="droppableArea scrollbar"
      onDragOver={dragOver}
      onDrop={drop}
    >
      {elementList.map(
        ({ data: { type, text, X, Y, fontWeight, fontSize }, id }) => {
          return (
            <DraggableItem
              key={id}
              render={(dragStart, dragEnd) => (
                <DroppedItem
                  dragStart={dragStart}
                  dragEnd={dragEnd}
                  type={type}
                  text={text}
                  left={X}
                  top={Y}
                  id={id}
                  fontWeight={fontWeight}
                  fontSize={fontSize}
                />
              )}
            />
          );
        }
      )}
    </div>
  );
}

export default DroppableArea;

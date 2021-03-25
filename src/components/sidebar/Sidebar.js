import React from "react";
import DraggableItem from "../draggableItem/DraggableItem";
import DraggableItemView from "../draggableItem/DraggableItemView";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <h4>BLOCKS</h4>
      <DraggableItem
        render={(dragStart, dragEnd) => (
          <DraggableItemView
            label="Label"
            type="label"
            dragStart={dragStart}
            dragEnd={dragEnd}
          />
        )}
      />
      <DraggableItem
        render={(dragStart, dragEnd) => (
          <DraggableItemView
            label="Input"
            type="input"
            dragStart={dragStart}
            dragEnd={dragEnd}
          />
        )}
      />
      <DraggableItem
        render={(dragStart, dragEnd) => (
          <DraggableItemView
            label="Button"
            type="button"
            dragStart={dragStart}
            dragEnd={dragEnd}
          />
        )}
      />
    </div>
  );
}

export default Sidebar;

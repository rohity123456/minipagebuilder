import React from "react";
import { dragEnd, dragStart } from "./DraggableItemController";
function DraggableItem({ render }) {
  return <>{render(dragStart, dragEnd)}</>;
}

export default DraggableItem;

import { getEl } from "../../common/helperfunctions";

export const removeBorderFromLastSelectedEL = (e) => {
  const lastSelectedElement = getEl(
    e.currentTarget.parentElement,
    ".droppedItem.borderRed"
  );
  if (lastSelectedElement && e.currentTarget.id !== lastSelectedElement.id)
    lastSelectedElement.classList.remove("borderRed");
};

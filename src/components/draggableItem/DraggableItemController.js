import { VALID_TYPES } from "../../common/constants";

const dragStart = (e) => {
  let elementType = "label";
  const target = e.currentTarget;
  const type = target?.dataset?.type;
  const id = target.id;
  if (type && VALID_TYPES.includes(type)) {
    elementType = type;
    e.dataTransfer.setData("text/plain/type", elementType);
  } else if (id) {
    setTimeout(() => (target.style.display = "none"), 0);
    e.dataTransfer.setData("text/plain/id", id);
  }
  e.dataTransfer.effectAllowed = "move";
};
const dragEnd = (e) => {
  if (e.target.id) e.target.style.display = "inline";
};

export { dragEnd, dragStart };

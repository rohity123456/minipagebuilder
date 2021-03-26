import { getElementFromList } from "../../common/helperfunctions";
import { actionTypes } from "../../context/reducer";
import { useStateValue } from "../../context/StateProvider";

function DroppableAreaController() {
  const [{ elementList }, dispatch] = useStateValue();
  const dragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const drop = (e) => {
    if (e.dataTransfer.types[0] === "text/plain/type") {
      const type = e.dataTransfer.getData("text/plain/type");
      dispatch({
        type: actionTypes.SET_CURRENT_ELEMENT,
        payload: {
          pageX: e.pageX,
          pageY: e.pageY,
          type: type,
        },
      });
      dispatch({ type: actionTypes.SET_MODAL_OPEN, payload: true });
    } else if (e.dataTransfer.types[0] === "text/plain/id") {
      const id = e.dataTransfer.getData("text/plain/id");
      const { ...element } = getElementFromList(elementList, id);
      element.data.X = e.pageX;
      element.data.Y = e.pageY;
      dispatch({
        type: actionTypes.UPDATE_ELEMENT_LIST,
        payload: element,
      });
    }
  };

  return { dragOver, drop, elementList };
}

export default DroppableAreaController;

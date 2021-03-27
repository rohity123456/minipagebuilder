import { useState } from "react";
import { getElementFromList } from "../../../../common/helperfunctions";
import { actionTypes } from "../../../../context/reducer";
import { useStateValue } from "../../../../context/StateProvider";

function FormLogic() {
  let initialState;
  const [{ currentElement, elementList }, dispatch] = useStateValue();
  const { id } = currentElement || {};
  if (id) {
    const element = getElementFromList(elementList, id);
    initialState = { ...element.data };
  } else {
    const { pageX, pageY, type, id } = currentElement || {};
    initialState = {
      X: pageX || 0,
      Y: pageY || 0,
      type: type,
      id: id,
      fontWeight: "",
      fontSize: "",
      text: "",
    };
  }
  const [inputState, setInputState] = useState(initialState);
  const { type } = initialState;
  const addNewElement = (e) => {
    e.preventDefault();
    //will do validation of values later
    if (!inputState.text || !inputState.text.trim()) return;
    if (type && !id)
      dispatch({
        type: actionTypes.SET_ELEMENT_LIST,
        payload: { data: inputState, id: new Date().getTime().toString() },
      });
    else if (id)
      dispatch({
        type: actionTypes.UPDATE_ELEMENT_LIST,
        payload: { data: inputState, id },
      });
    setTimeout(() => {
      dispatch({ type: actionTypes.SET_MODAL_OPEN, payload: false });
    }, 100);
  };
  const handleChange = (e) => {
    const input = e.target.value;
    if (input && input.trim() && e.target.name)
      setInputState({ ...inputState, [e.target.name]: input });
  };
  return {
    addNewElement,
    inputState,
    handleChange,
    type,
  };
}

export default FormLogic;

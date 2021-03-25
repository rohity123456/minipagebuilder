import {
  deleteElementFromList,
  getItemFromLocalStorage,
  getUpdatedList,
  persistState,
} from "../common/helperfunctions";

export const initialState = getItemFromLocalStorage("state") || {
  isModalOpen: false,
  elementList: [],
  currentElement: null,
  isLoading: false,
};
export const actionTypes = {
  SET_MODAL_OPEN: "SET_MODAL_OPEN",
  SET_LOADING: "SET_LOADING",
  SET_CURRENT_ELEMENT: "SET_CURRENT_ELEMENT",
  SET_ELEMENT_LIST: "SET_ELEMENT_LIST",
  UPDATE_ELEMENT_LIST: "UPDATE_ELEMENT_LIST",
  DELETE_ELEMENT_FROM_LIST: "DELETE_ELEMENT_FROM_LIST",
};
const reducer = (state, action) => {
  let updatedState;
  if (action) {
    switch (action.type) {
      case actionTypes.SET_MODAL_OPEN: {
        updatedState = { ...state, isModalOpen: action.payload };
        break;
      }
      case actionTypes.SET_LOADING: {
        updatedState = { ...state, isLoading: action.payload };
        break;
      }
      case actionTypes.SET_CURRENT_ELEMENT: {
        updatedState = { ...state, currentElement: action.payload };
        break;
      }
      case actionTypes.SET_ELEMENT_LIST: {
        updatedState = {
          ...state,
          elementList: [...state.elementList, action.payload],
        };
        break;
      }
      case actionTypes.UPDATE_ELEMENT_LIST: {
        updatedState = {
          ...state,
          elementList: getUpdatedList(state.elementList, action.payload),
        };
        break;
      }
      case actionTypes.DELETE_ELEMENT_FROM_LIST: {
        updatedState = {
          ...state,
          elementList: deleteElementFromList(state.elementList, action.payload),
        };
        break;
      }
      default:
        updatedState = state;
    }
    persistState(updatedState);
    return updatedState;
  }
};

export default reducer;

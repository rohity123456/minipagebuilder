export const debounce = (fn, delay) => {
  let timerId;
  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => fn(...args), delay);
  };
};
export const getUpdatedList = (list, elementData) => {
  if (elementData) {
    const newList = [...list];
    const element = getElementFromList(newList, elementData.id);
    if (element) {
      element.data = elementData.data;
    }
    return newList;
  }
  return list;
};
export const getElementFromList = (list, id) => {
  return list.find((i) => i.id === id);
};
export const deleteElementFromList = (list, id) => {
  return list.filter((i) => i.id !== id);
};
export const persistState = (newState) => {
  setItemsInLocalStorage([{ state: newState }]);
};
export const setItemsInLocalStorage = (Items) => {
  if (Items.length) {
    Items.forEach((item) => {
      const key = Object.keys(item)[0];
      localStorage.setItem(key, JSON.stringify(item[key]));
    });
  }
};
export const getItemFromLocalStorage = (itemKey, isItemNotInJsonFormat) => {
  return !isItemNotInJsonFormat
    ? JSON.parse(localStorage.getItem(itemKey))
    : localStorage.getItem(itemKey);
};
export const getEl = (reference, selector) => {
  return (
    reference && reference.querySelector && reference.querySelector(selector)
  );
};

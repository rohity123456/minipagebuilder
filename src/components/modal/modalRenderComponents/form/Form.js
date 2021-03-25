import React from "react";
import closeImg from "../../../../resources/close.png";
import "./Form.css";
import FormLogic from "./FormLogic";
function Form({ close }) {
  const { addNewElement, inputState, handleChange, type } = FormLogic();
  const { X, Y, fontWeight, fontSize, text } = inputState;

  return (
    <div className="form__container">
      <div className="form__container__top">
        <h4>Edit {type}</h4>
        <img src={closeImg} alt="close" onClick={close} />
      </div>
      <form onChange={handleChange}>
        <div className="input-container">
          <h4>Text</h4>
          <input type="text" name="text" autoFocus defaultValue={text} />
        </div>
        <div className="input-container">
          <h4>X</h4>
          <input type="text" name="X" defaultValue={X} />
        </div>
        <div className="input-container">
          <h4>Y</h4>
          <input type="text" name="Y" defaultValue={Y} />
        </div>
        <div className="input-container">
          <h4>Font Size</h4>
          <input
            type="text"
            placeholder="Enter in CSS format"
            name="fontSize"
            defaultValue={fontSize}
          />
        </div>
        <div className="input-container">
          <h4>Font Weight</h4>
          <input
            type="text"
            name="fontWeight"
            defaultValue={fontWeight}
            placeholder="Enter in CSS format"
          />
        </div>
        <button onClick={addNewElement}>Save Changes</button>
      </form>
    </div>
  );
}

export default Form;

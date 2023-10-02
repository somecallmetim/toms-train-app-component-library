import Checkbox from "./Checkbox";

/* eslint-disable react/prop-types */
function CheckboxArea({ arrayOfCheckboxes, formAreaName }) {
  return (
    <fieldset className="formBox">
      <legend>{formAreaName}</legend>
      {arrayOfCheckboxes.map((checkbox) => (
        <Checkbox key={checkbox.id} checkbox={checkbox} />
      ))}
    </fieldset>
  );
}

export default CheckboxArea;

import Checkbox from "./Checkbox";

/* eslint-disable react/prop-types */
function CheckboxArea({ arrayOfCheckboxes }) {
  return (
    <div className="formBox">
      {arrayOfCheckboxes.map((checkbox) => (
        <Checkbox key={checkbox.id} checkbox={checkbox} />
      ))}
    </div>
  );
}

export default CheckboxArea;

/* eslint-disable react/prop-types */
function Checkbox({ checkbox }) {

  return (
    <div>
      <input
        style={{ marginLeft: "-10px", verticalAlign: "middle" }}
        type="checkbox"
        name={checkbox.name}
        id={checkbox.id}
        onChange={checkbox.function}
      />
      <label
        style={{ paddingLeft: "5px", verticalAlign: "middle" }}
        htmlFor="test"
      >
        {checkbox.text}
      </label>
    </div>
  );
}

export default Checkbox;

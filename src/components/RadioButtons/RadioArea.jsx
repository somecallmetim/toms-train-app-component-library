/* eslint-disable react/prop-types */
function RadioArea({ name, listOfRadioButtons }) {
  return (
    <>
      <div style={{ width: "100px", paddingLeft: "55px" }}>
        {listOfRadioButtons.map((radioButton) => {
          return (
            <div key={radioButton.id} style={{ textAlign: "left" }}>
              <input
                type="radio"
                id={radioButton.id}
                name={name}
                value={radioButton.value}
                onChange={radioButton.function}
              />
              <label htmlFor={radioButton.value}>{radioButton.labelText}</label>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default RadioArea;

/* eslint-disable react/prop-types */

// legend
// name (which all radio buttons share)
// list of radio buttons
// id
// value / htmlFor
// label text
function RadioArea({ legend, name, listOfRadioButtons }) {

  return (
    <>
      <fieldset className="formBox">
        <legend>{legend}</legend>

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
                <label htmlFor={radioButton.value}>
                  {radioButton.labelText}
                </label>
              </div>
            );
          })}
        </div>
      </fieldset>
    </>
  );
}

export default RadioArea;

/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import Button from "./Button/Button";
import Checkbox from "./Checkbox/Checkbox";
import RangeSliderExample from "../pages/RangeSliderExample";
import RadioArea from "./RadioButtons/RadioArea";

function ControlAreaBuilder({
  controlComponentType,
  legend = "",
  displayBorder = false,
  childProps,
}) {
  function componentBuilder(controlComponentType) {
    switch (controlComponentType) {
      case "button":
        const { name, onClickFunction } = childProps;
        return <Button name={name} onClickFunction={onClickFunction} />;
      case "checkboxArea":
        const { arrayOfCheckboxes } = childProps;
        return arrayOfCheckboxes.map((checkbox) => (
          <Checkbox key={checkbox.id} checkbox={checkbox} />
        ));
      case "radio":
        const { name: radioName, listOfRadioButtons } = childProps;
        return <RadioArea legend={legend} name={radioName} listOfRadioButtons={listOfRadioButtons} />;
      case "rangeSlider":
        return <RangeSliderExample />;
      default:
        return "test";
    }
  }

  const controlComponentToRender = componentBuilder(controlComponentType);

  return (
    <>
      <div className="displayBoxForFormComponents">
        {displayBorder ? (
          <fieldset className="controlBoxWithBorder">
            <legend>{legend}</legend>
            {controlComponentToRender}
          </fieldset>
        ) : (
          controlComponentToRender
        )}
      </div>
    </>
  );
}

export default ControlAreaBuilder;

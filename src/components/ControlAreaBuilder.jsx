/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import Button from "./Button/Button";
import CheckboxExample from "../pages/CheckboxExample";
import RadioAreaExample from "../pages/RadioAreaExample";
import RangeSliderExample from "../pages/RangeSliderExample";

function ControlAreaBuilder({
  controlComponentType,
  legend = "",
  displayBorder = false,
  childProps
}) {
  function componentBuilder(controlComponentType) {
    switch (controlComponentType) {
      case "button":
        const {name, onClickFunction} = childProps;
        return <Button name={name} onClickFunction={onClickFunction} />;
      case "checkbox":
        return <CheckboxExample />;
      case "radio":
        return <RadioAreaExample />;
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

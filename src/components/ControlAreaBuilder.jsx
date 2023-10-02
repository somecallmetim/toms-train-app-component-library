/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import ButtonExample from "./ButtonExample";
import CheckboxExample from "./CheckboxExample";
import RadioAreaExample from "./RadioAreaExample";
import RangeSliderExample from "./RangeSliderExample";

function ControlAreaBuilder({
  controlComponentType,
  legend = "",
  displayBorder = false,
}) {
  function componentBuilder(testvar) {
    switch (testvar) {
      case "button":
        return <ButtonExample />;
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

/* eslint-disable react/prop-types */
import { useState } from "react";

function RangeSlider({
  name,
  id,
  sliderMin = 0,
  sliderMax = 100,
  initialSliderValue = 0,
  onInputFunction,
}) {
  const [sliderValue, setSliderValue] = useState(initialSliderValue);

  function onInput(e) {
    setSliderValue(e.target.value);
    onInputFunction(e.target.value);
  }

  const sliderValuePercentage = (sliderValue / sliderMax) * 100;

  return (
    <>
      <input
        type="range"
        name={name}
        id={id}
        min={sliderMin}
        max={sliderMax}
        style={{
          background: `linear-gradient(to right, #8b4513 ${sliderValuePercentage}%, #ccc ${sliderValuePercentage}%)`,
          "--thumb-rotate": `${(sliderValue / 100) * 2160}deg`,
        }}
        onInput={onInput}
        value={sliderValue}
      />
      <span
        style={{
          marginLeft: "15px",
          marginTop: "-3px",
          fontSize: "20px",
          width: "35px",
        }}
      >
        {Math.ceil(sliderValue)}
      </span>
    </>
  );
}

export default RangeSlider;

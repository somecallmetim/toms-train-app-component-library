import { useState } from "react";

function RangeSlider() {
  const [sliderValue, setSliderValue] = useState(0);

  const sliderMax = 100;

  function onInput(e) {
    setSliderValue((e.target.value / sliderMax)*100);
  }

  return (
    <>
      <input
        type="range"
        name="test"
        id="range"
        min={0}
        max={sliderMax}
        style={{
          background: `linear-gradient(to right, #8b4513 ${sliderValue}%, #ccc ${sliderValue}%)`,
          '--thumb-rotate': `${(sliderValue/100)*2160}deg`,

        }}
        onInput={onInput}
        value={sliderValue}
      />
      <span style={{marginLeft: "15px",marginTop: "-3px", fontSize: "20px"}}>{Math.ceil(sliderValue)}</span>
    </>
  );
}

export default RangeSlider;

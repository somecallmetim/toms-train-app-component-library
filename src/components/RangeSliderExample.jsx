import RangeSlider from "./RangeSlider";

function RangeSliderExample() {
  const onInputFunction = (sliderValue) => {
    console.log(sliderValue);
  };
  return (
    <div className="displayBoxForFormComponents">
      <RangeSlider
        name={"test"}
        id={"test1"}
        sliderMin={0}
        sliderMax={200}
        initialSliderValue={75}
        onInputFunction={onInputFunction}
      />
    </div>
  );
}

export default RangeSliderExample;

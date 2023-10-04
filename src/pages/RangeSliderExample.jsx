import RangeSlider from "../components/RangeSlider/RangeSlider";

function RangeSliderExample() {
  const onInputFunction = (sliderValue) => {
    console.log(sliderValue);
  };
  return (
    <RangeSlider
      name={"test"}
      id={"test1"}
      sliderMin={0}
      sliderMax={200}
      initialSliderValue={75}
      onInputFunction={onInputFunction}
      formAreaName={"Norm's Amazing Slider"}
    />
  );
}

export default RangeSliderExample;

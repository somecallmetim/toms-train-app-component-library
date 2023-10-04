import RadioArea from "../components/RadioButtons/RadioArea";

function RadioAreaExample() {
  function printRadioButtonClicked(e) {
    window.alert(e.target.value);
  }
  const listOfRadioButtons = [
    {
      id: "shay1",
      value: "shay",
      labelText: "Shay",
      function: printRadioButtonClicked,
    },
    {
      id: "heisler1",
      value: "heisler",
      labelText: "Heisler",
      function: printRadioButtonClicked,
    },
    {
      id: "climax1",
      value: "climax",
      labelText: "Climax",
      function: printRadioButtonClicked,
    },
  ];
  return (
    <RadioArea
      legend={"Select an Engine"}
      name={"engine selector"}
      listOfRadioButtons={listOfRadioButtons}
    />
  );
}

export default RadioAreaExample;

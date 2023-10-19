import ControlAreaBuilder from "../components/ControlAreaBuilder";

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

  const childProps = {
    name: "engine selector",
    listOfRadioButtons: listOfRadioButtons,
  };

  return (
    <ControlAreaBuilder
      controlComponentType={"radio"}
      legend={"Select an Engine"}
      displayBorder={true}
      childProps={childProps}
    />
  );
}

export default RadioAreaExample;

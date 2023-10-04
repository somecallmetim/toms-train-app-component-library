import ControlAreaBuilder from "../components/ControlAreaBuilder";

function CheckboxExample() {

  function functionOne(e) {
    if (e.target.checked) {
      window.alert("one checked");
    } else {
      window.alert("one unchecked");
    }
  }
  
  function functionTwo(e) {
    if (e.target.checked) {
      window.alert("two checked");
    } else {
      window.alert("two unchecked");
    }
  }

  const checkbox1 = {
    name: "test1",
    id: "test1",
    text: "test1",
    function: functionOne,
  };

  const checkbox2 = {
    name: "test2",
    id: "test2",
    text: "test2",
    function: functionTwo,
  };

  const childProps = { arrayOfCheckboxes: [checkbox1, checkbox2] }
  const legend = "Norman Clark's Checkboxes"

  return (
    <ControlAreaBuilder controlComponentType={"checkboxArea"} legend={legend} displayBorder={true} childProps={childProps}  />
  );
}

export default CheckboxExample;

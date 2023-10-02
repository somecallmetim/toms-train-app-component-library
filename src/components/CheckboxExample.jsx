import CheckboxArea from "./CheckboxArea";

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

function CheckboxExample() {
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

  return (
    <CheckboxArea
      arrayOfCheckboxes={[checkbox1, checkbox2]}
      formAreaName={"Norman Clark's Checkboxes"}
    />
  );
}

export default CheckboxExample;

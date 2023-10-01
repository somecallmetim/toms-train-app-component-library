/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import ButtonExample from "../components/ButtonExample";
import CheckboxExample from "../components/CheckboxExample";
import RadioAreaExample from "../components/RadioAreaExample";
import Range from "../components/Range";


function FormComponent({ formComponent }) {
  function componentBuilder(testvar) {
    switch (testvar) {
      case "button":
        return <ButtonExample />;
      case "checkbox":
        return <CheckboxExample />;
      case "radio":
        return <RadioAreaExample />;
      case "range":
        return <Range />;
      default:
        break;
    }
  }

  const renderedFormComponent = componentBuilder(formComponent);

  return (
    <>
      <div className="displayBoxForFormComponents">{renderedFormComponent}</div>
    </>
  );
}

export default FormComponent;

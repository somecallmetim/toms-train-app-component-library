/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import CheckboxExample from "../components/CheckboxExample";
import Radio from "../components/Radio";
import Range from "../components/Range";
import Reset from "../components/Reset";

function FormComponent({ formComponent }) {
  function componentBuilder(testvar) {
    switch (testvar) {
      case "checkbox":
        return <CheckboxExample />;
      case "radio":
        return <Radio />;
      case "range":
        return <Range />;
      case "reset":
        return <Reset />;
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

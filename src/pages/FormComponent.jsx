/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import Checkbox from "../components/Checkbox";
import Radio from "../components/Radio";
import Range from "../components/Range";
import Reset from "../components/Reset";

function FormComponent({ formComponent }) {
  function componentBuilder(testvar) {
    switch (testvar) {
      case "checkbox":
        return <Checkbox />;
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

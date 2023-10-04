import ControlAreaBuilder from "../components/ControlAreaBuilder";

function ButtonExample() {
    function onClickFunction() {
        window.alert("choo choo");
    }
    const childProps = {name: "Whistle", onClickFunction: onClickFunction}
  return (
    <ControlAreaBuilder controlComponentType={"button"} childProps={childProps} />
  )
}

export default ButtonExample;
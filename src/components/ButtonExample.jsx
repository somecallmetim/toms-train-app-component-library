import Button from "./Button";

function ButtonExample() {
    function onClickFunction() {
        window.alert("choo choo");
    }
  return (
    <Button name={"Whistle"} onClickFunction={onClickFunction} />
  )
}

export default ButtonExample;
/* eslint-disable react/prop-types */
function Button({ name, onClickFunction }) {
  console.log(name);
  return (
    <button type="button" className="btn" onClick={onClickFunction}>
      {name}
    </button>
  );
}

export default Button;

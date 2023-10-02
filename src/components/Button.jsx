/* eslint-disable react/prop-types */
function Button({ name, onClickFunction }) {
  return (
    <button type="button" className="btn" onClick={onClickFunction}>
      {name}
    </button>
  );
}

export default Button;

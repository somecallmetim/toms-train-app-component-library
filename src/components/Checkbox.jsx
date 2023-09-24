function Checkbox() {
  return (
    <div className="formBox">
      <input style={{marginLeft: "-10px", verticalAlign: "middle"}} type="checkbox" name="test" id="test" />
      <label style={{paddingLeft: "5px", verticalAlign: "middle"}} htmlFor="test">I am a checkbox</label>
    </div>
  );
}

export default Checkbox;

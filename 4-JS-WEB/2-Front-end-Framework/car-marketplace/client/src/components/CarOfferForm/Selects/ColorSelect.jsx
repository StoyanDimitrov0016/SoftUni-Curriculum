const ColorSelect = ({ colors, changeHandler, selectedColor }) => {
  return (
    <>
      <label htmlFor="color">Color:</label>

      <select id="color" name="color" required onChange={changeHandler}>
        <option value="">Please select</option>
        {colors.map((color) => (
          <option key={color} value={color} selected={selectedColor === color}>
            {color}
          </option>
        ))}
      </select>
    </>
  );
};

export default ColorSelect;

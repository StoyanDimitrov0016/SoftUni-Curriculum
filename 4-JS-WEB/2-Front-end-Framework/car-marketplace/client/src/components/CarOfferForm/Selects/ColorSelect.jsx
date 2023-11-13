const ColorSelect = ({ colors, changeHandler, selectedColor, isRequired = true }) => {
  return (
    <>
      <label htmlFor="color">Color:</label>

      <select
        id="color"
        name="color"
        required={isRequired}
        value={selectedColor}
        onChange={changeHandler}
      >
        <option value="">Please select</option>
        {colors.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
    </>
  );
};

export default ColorSelect;

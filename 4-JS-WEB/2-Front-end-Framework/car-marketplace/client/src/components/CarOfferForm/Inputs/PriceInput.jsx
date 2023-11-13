const PriceInput = ({ price, changeHandler, isRequired = true }) => {
  return (
    <>
      <label htmlFor="price">Price:</label>
      <input
        type="number"
        id="price"
        name="price"
        required={isRequired ? "required" : ""}
        value={price || ""}
        onChange={changeHandler}
      />
    </>
  );
};

export default PriceInput;

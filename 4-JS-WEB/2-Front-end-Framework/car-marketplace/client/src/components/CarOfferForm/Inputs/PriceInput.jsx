const PriceInput = ({price, changeHandler}) => {
  return (
    <>
      <label htmlFor="price">Price:</label>
      <input
        type="number"
        id="price"
        name="price"
        required
        value={price || ""}
        onChange={changeHandler}
      />
    </>
  );
};

export default PriceInput;

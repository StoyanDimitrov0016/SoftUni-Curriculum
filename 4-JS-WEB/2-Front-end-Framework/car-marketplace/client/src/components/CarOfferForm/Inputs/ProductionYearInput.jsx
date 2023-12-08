const ProductionYearInput = ({ productionYear, changeHandler, isRequired = true }) => {
  return (
    <>
      <label htmlFor="year">Production year:</label>
      <input
        type="number"
        id="year"
        min={1945}
        max={new Date().getFullYear()}
        name="productionYear"
        required={isRequired}
        value={productionYear || "2000"}
        onChange={changeHandler}
      />
    </>
  );
};

export default ProductionYearInput;

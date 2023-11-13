const ProductionYearInput = ({ productionYear, changeHandler, isRequired = true }) => {
  return (
    <>
      <label htmlFor="year">Production year:</label>
      <input
        type="number"
        id="year"
        name="productionYear"
        required={isRequired}
        value={productionYear || ""}
        onChange={changeHandler}
      />
    </>
  );
};

export default ProductionYearInput;

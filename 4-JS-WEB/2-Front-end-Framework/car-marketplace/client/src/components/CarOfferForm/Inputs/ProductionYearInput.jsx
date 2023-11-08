const ProductionYearInput = ({productionYear, changeHandler}) => {
  return (
    <>
      <label htmlFor="year">Production year:</label>
      <input
        type="number"
        id="year"
        name="productionYear"
        required
        value={productionYear || ""}
        onChange={changeHandler}
      />
    </>
  );
};

export default ProductionYearInput;

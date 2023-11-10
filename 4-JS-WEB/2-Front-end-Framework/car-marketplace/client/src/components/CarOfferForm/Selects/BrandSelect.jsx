const BrandSelect = ({ brands, changeHandler, selectedBrand }) => {
  return (
    <>
      <label htmlFor="brand">Brand:</label>

      <select id="brand" name="brand" required value={selectedBrand} onChange={changeHandler}>
        <option value="">Please select</option>
        {brands.map((brand) => (
          <option key={brand} value={brand} >
            {brand}
          </option>
        ))}
      </select>
    </>
  );
};

export default BrandSelect;

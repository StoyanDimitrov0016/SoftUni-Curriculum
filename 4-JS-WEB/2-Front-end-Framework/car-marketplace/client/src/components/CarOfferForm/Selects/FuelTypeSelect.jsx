const FuelTypeSelect = ({ fuelTypes, changeHandler, selectedFuelType }) => {
  return (
    <>
      <label htmlFor="fuelType">Fuel Type:</label>

      <select id="fuelType" name="fuelType" required value={selectedFuelType} onChange={changeHandler}>
        <option value="">Please select</option>
        {fuelTypes.map((fuelType) => (
          <option key={fuelType} value={fuelType} >
            {fuelType}
          </option>
        ))}
      </select>
    </>
  );
};

export default FuelTypeSelect;

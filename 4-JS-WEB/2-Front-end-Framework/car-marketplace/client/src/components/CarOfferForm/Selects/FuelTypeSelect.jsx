const FuelTypeSelect = ({ fuelTypes, changeHandler, selectedFuelType }) => {
  return (
    <>
      <label htmlFor="fuelType">Fuel Type:</label>

      <select id="fuelType" name="fuelType" required onChange={changeHandler}>
        <option value="">Please select</option>
        {fuelTypes.map((fuelType) => (
          <option key={fuelType} value={fuelType} selected={selectedFuelType === fuelType}>
            {fuelType}
          </option>
        ))}
      </select>
    </>
  );
};

export default FuelTypeSelect;

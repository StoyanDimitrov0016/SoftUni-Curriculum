const VehicleTypeSelect = ({ vehicleTypes, changeHandler, selectedVehicleType, isRequired=true }) => {
  return (
    <>
      <label htmlFor="vehicleType">Vehicle Type:</label>
      <select
        id="vehicleType"
        name="vehicleType"
        required={isRequired}
        value={selectedVehicleType}
        onChange={changeHandler}
      >
        <option value="">Please select</option>
        {vehicleTypes.map((vehicleType) => (
          <option key={vehicleType} value={vehicleType}>
            {vehicleType}
          </option>
        ))}
      </select>
    </>
  );
};

export default VehicleTypeSelect;

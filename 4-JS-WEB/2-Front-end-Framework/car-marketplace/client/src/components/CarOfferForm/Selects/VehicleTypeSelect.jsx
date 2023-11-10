const VehicleType = ({ vehicleTypes, changeHandler, selectedVehicleType }) => {
  return (
    <>
      <label htmlFor="vehicleType">Vehicle Type:</label>
      <select
        id="vehicleType"
        name="vehicleType"
        required
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

export default VehicleType;

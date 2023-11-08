const VehicleType = ({ vehicleTypes, changeHandler, selectedVehicleType }) => {
  return (
    <>
      <label htmlFor="vehicleType">Vehicle Type:</label>
      <select id="vehicleType" name="vehicleType" required onChange={changeHandler}>
        <option value="">Please select</option>
        {vehicleTypes.map((vehicleType) => (
          <option
            key={vehicleType}
            value={vehicleType}
            selected={selectedVehicleType === vehicleType}
          >
            {vehicleType}
          </option>
        ))}
      </select>
    </>
  );
};

export default VehicleType;

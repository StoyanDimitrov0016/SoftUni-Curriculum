const TransmissionTypeSelect = ({ transmissionTypes, changeHandler, selectedTransmissionType }) => {
  return (
    <>
      <label htmlFor="transmissionType">Transmission Type:</label>
      <select
        id="transmissionType"
        name="transmissionType"
        required
        value={selectedTransmissionType}
        onChange={changeHandler}
      >
        <option value="">Please select</option>
        {transmissionTypes.map((transmissionType) => (
          <option key={transmissionType} value={transmissionType} >
            {transmissionType}
          </option>
        ))}
      </select>
    </>
  );
};

export default TransmissionTypeSelect;

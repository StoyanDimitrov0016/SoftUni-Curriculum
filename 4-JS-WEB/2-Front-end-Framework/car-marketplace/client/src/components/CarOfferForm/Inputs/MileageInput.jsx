const MileageInput = ({ mileage, changeHandler, isRequired = true }) => {
  return (
    <>
      <label htmlFor="mileage">Mileage (in kilometers):</label>
      <input
        type="number"
        id="mileage"
        name="mileage"
        required={isRequired}
        value={mileage || ""}
        onChange={changeHandler}
      />
    </>
  );
};

export default MileageInput;

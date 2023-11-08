const MileageInput = ({mileage, changeHandler}) => {
  return (
    <>
      <label htmlFor="mileage">Mileage (in kilometers):</label>
      <input
        type="number"
        id="mileage"
        name="mileage"
        required
        value={mileage || ""}
        onChange={changeHandler}
      />
    </>
  );
};

export default MileageInput;

const RegionSelect = ({ regions, changeHandler, selectedRegion }) => {
  return (
    <>
      <label htmlFor="region">Region:</label>
      <select id="region" name="region" required value={selectedRegion} onChange={changeHandler}>
        <option value="">Please select</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </>
  );
};

export default RegionSelect;

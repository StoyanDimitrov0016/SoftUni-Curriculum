const ModelSelect = ({ models, changeHandler, selectedModel }) => {
  
  return (
    <>
      <label htmlFor="model">Model:</label>

      <select id="model" name="model" required value={selectedModel} onChange={changeHandler}>
        <option value="">Please select</option>
        {models.map((model) => (
          <option key={model} value={model} >
            {model}
          </option>
        ))}
      </select>
    </>
  );
};

export default ModelSelect;

const ModelSelect = ({ models, changeHandler, selectedModel }) => {

  return (
    <>
      <label htmlFor="model">Model:</label>

      <select id="model" name="model" required onChange={changeHandler}>
        <option value="">Please select</option>
        {models.map((model) => (
          <option key={model} value={model} selected={selectedModel === model}>
            {model}
          </option>
        ))}
      </select>
    </>
  );
};

export default ModelSelect;

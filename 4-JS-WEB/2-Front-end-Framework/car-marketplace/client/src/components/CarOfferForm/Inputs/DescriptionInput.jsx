const DescriptionInput = ({ description, changeHandler, isRequired = true }) => {
  return (
    <>
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        required={isRequired}
        value={description}
        onChange={changeHandler}
      ></textarea>
    </>
  );
};

export default DescriptionInput;

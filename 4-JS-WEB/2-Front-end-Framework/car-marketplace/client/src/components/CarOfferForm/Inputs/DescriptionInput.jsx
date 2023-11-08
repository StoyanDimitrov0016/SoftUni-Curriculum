const DescriptionInput = ({description, changeHandler}) => {
  return (
    <>
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        required
        value={description}
        onChange={changeHandler}
      ></textarea>
    </>
  );
};

export default DescriptionInput;

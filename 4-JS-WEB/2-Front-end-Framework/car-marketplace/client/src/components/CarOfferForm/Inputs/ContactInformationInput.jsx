const ContactInformationInput = ({ contactInformation, changeHandler, isRequired = true }) => {
  return (
    <>
      <label htmlFor="contactInformation">Contact Information:</label>
      <input
        type="text"
        id="contactInformation"
        name="contactInformation"
        placeholder="tel. or email"
        required={isRequired}
        value={contactInformation}
        onChange={changeHandler}
      />
    </>
  );
};

export default ContactInformationInput;

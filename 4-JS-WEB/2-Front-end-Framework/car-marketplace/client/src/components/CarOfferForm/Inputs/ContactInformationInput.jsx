const ContactInformationInput = ({contactInformation, changeHandler}) => {
  return (
    <>
      <label htmlFor="contactInformation">Contact Information:</label>
      <input
        type="text"
        id="contactInformation"
        name="contactInformation"
        placeholder="tel. or email"
        required
        value={contactInformation}
        onChange={changeHandler}
      />
    </>
  );
};

export default ContactInformationInput;

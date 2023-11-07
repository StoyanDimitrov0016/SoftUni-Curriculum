import { useForm } from "../../hooks/useForm";

const DealershipRegisterForm = ({register}) => {
  const { formValues, changeHandler, onSubmit } = useForm(
    {
      dealershipName: "",
      location: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      userType: "dealership",
    },
    register
  );

  return (
    <form className="dealership-register-form" onSubmit={onSubmit}>
      <label htmlFor="dealershipName">Dealership Name:</label>
      <input
        type="text"
        id="dealershipName"
        name="dealershipName"
        required
        className="dealership-input"
        value={formValues.dealershipName}
        onChange={changeHandler}
      />

      <label htmlFor="location">Location:</label>
      <input
        type="text"
        id="location"
        name="location"
        required
        className="dealership-input"
        value={formValues.location}
        onChange={changeHandler}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        className="dealership-input"
        value={formValues.email}
        onChange={changeHandler}
      />

      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        required
        className="dealership-input"
        value={formValues.phoneNumber}
        onChange={changeHandler}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        required
        className="dealership-input"
        value={formValues.password}
        onChange={changeHandler}
      />

      <label htmlFor="password">Confirm password:</label>
      <input
        type="password"
        id="password"
        name="confirmPassword"
        required
        className="dealership-input"
        value={formValues.confirmPassword}
        onChange={changeHandler}
      />

      <button type="submit" className="dealership-button">
        Register
      </button>
    </form>
  );
};

export default DealershipRegisterForm;

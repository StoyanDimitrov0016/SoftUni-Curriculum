import { useForm } from "../../hooks/useForm";
import dealershipRegisterValidation from "../../validations/dealershipRegisterValidation";

const DealershipRegisterForm = ({ register, setError, showPassword, setShowPassword }) => {
  const { formValues, changeHandler, onSubmit, resetFromValues } = useForm(
    {
      dealershipName: "",
      location: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      workingHours: "",
      userType: "dealership",
    },
    async () => {
      try {
        dealershipRegisterValidation(formValues);
        await register(formValues);

        resetFromValues();
        setError(null);
      } catch (error) {
        console.log("Error while user registration:", error);
        setError(error.message.split(";"));
      }
    }
  );

  function onClickSetErr() {
     setShowPassword(!showPassword)
  }
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
        placeholder="city:... street: ... №..."
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
        placeholder="0896..."
        value={formValues.phoneNumber}
        onChange={changeHandler}
      />

      <label htmlFor="password">Password:</label>
      <div className="password-input-container">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          required
          className="user-input"
          value={formValues.password}
          onChange={changeHandler}
        />
        <button type="button" className="password-toggle" onClick={onClickSetErr}>
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        required
        className="dealership-input"
        value={formValues.confirmPassword}
        onChange={changeHandler}
      />

      <label htmlFor="workingHours">Working Hours:</label>
      <input
        type="text"
        id="workingHours"
        name="workingHours"
        required
        placeholder="Working days: 9:00 - 20:00, Saturday: 10:00-20:00"
        className="dealership-input"
        value={formValues.workingHours}
        onChange={changeHandler}
      />

      <button type="submit" className="dealership-button">
        Register
      </button>
    </form>
  );
};

export default DealershipRegisterForm;

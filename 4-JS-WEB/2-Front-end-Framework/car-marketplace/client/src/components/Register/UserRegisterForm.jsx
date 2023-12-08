import { useForm } from "../../hooks/useForm";
import regularUserRegisterValidation from "../../validations/regularUserRegisterValidation";

const UserRegisterForm = ({ register, setError, showPassword, setShowPassword }) => {
  const { formValues, changeHandler, onSubmit, resetFromValues } = useForm(
    {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      userType: "regular",
    },
    async () => {
      try {
        regularUserRegisterValidation(formValues);
        await register(formValues);

        resetFromValues();
        setError(null);
      } catch (error) {
        console.log("Error while user registration:", error);
        setError(error.message.split(";"));
      }
    }
  );

  return (
    <form className="user-register-form" onSubmit={onSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        required
        className="user-input"
        value={formValues.firstName}
        onChange={changeHandler}
      />

      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        required
        className="user-input"
        value={formValues.lastName}
        onChange={changeHandler}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        className="user-input"
        value={formValues.email}
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
        <button className="password-toggle" onClick={() => {
          setShowPassword(!showPassword)}}>
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      <label htmlFor="confirmPassword">Confirm password:</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        required
        className="user-input"
        value={formValues.confirmPassword}
        onChange={changeHandler}
      />

      <button type="submit" className="user-button">
        Register
      </button>
    </form>
  );
};

export default UserRegisterForm;

import { useForm } from "../../hooks/useForm";

const UserRegisterForm = ({ register }) => {
  const { formValues, changeHandler, onSubmit } = useForm(
    {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    register
  );

  return (
    <form className="user-register-form" onSubmit={onSubmit}>
      <label htmlFor="firstname">First Name:</label>
      <input
        type="text"
        id="firstname"
        name="firstName"
        required
        className="user-input"
        value={formValues.firstName}
        onChange={changeHandler}
      />

      <label htmlFor="lastname">Last Name:</label>
      <input
        type="text"
        id="lastname"
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
      <input
        type="password"
        id="password"
        name="password"
        required
        className="user-input"
        value={formValues.password}
        onChange={changeHandler}
      />

      <label htmlFor="password">Confirm password:</label>
      <input
        type="password"
        id="password"
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

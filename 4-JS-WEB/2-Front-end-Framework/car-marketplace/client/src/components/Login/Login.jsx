import { useAuth } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";

const Login = () => {
  const { onLoginSubmit } = useAuth();

  const { formValues, changeHandler, onSubmit } = useForm(
    {
      email: "",
      password: "",
    },
    onLoginSubmit
  );

  return (
    <form className="login-form" onSubmit={onSubmit}>
      <label htmlFor="email" className="login-label">
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formValues.email}
        onChange={changeHandler}
        className="login-input"
        required
      />

      <label htmlFor="password" className="login-label">
        Password:
      </label>
      <input
        type="password"
        id="password"
        name="password"
        value={formValues.password}
        onChange={changeHandler}
        className="login-input"
        required
      />

      <button type="submit" className="login-button">
        Login
      </button>
    </form>
  );
};

export default Login;

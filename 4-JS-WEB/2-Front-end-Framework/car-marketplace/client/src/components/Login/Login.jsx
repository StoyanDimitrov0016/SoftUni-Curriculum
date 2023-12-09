import { useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";
import PUBLIC_ROUTES from "../../Routes/publicRoutes";

const Login = () => {
  const { login } = useAuthContext();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { formValues, changeHandler, onSubmit, resetFromValues } = useForm(
    {
      email: "",
      password: "",
    },
    async () => {
      try {
        setError(null);
        setLoading(true);
        await login(formValues);
        resetFromValues();
      } catch (error) {
        setError("Invalid email or password");
      } finally {
        setLoading(false);
      }
    }
  );

  return (
    <section className="login">
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

        <div className="password-input-container">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formValues.password}
            onChange={changeHandler}
            className="login-input"
            required
            aria-label="Password"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="toggle-password-button"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {error && (
          <p className="error-message" aria-live="assertive">
            {error}
          </p>
        )}

        <button type="submit" className="login-button" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        
        <div className="no-account">
          <p>Don't have an account?</p>
          <Link to={PUBLIC_ROUTES.REGISTER.path} className="register-link">
            {PUBLIC_ROUTES.REGISTER.label}
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Login;

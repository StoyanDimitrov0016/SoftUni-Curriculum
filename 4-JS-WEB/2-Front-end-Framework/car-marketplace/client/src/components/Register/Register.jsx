import { useState } from "react";
import { Link } from "react-router-dom";

import useAuthContext from "../../hooks/useAuthContext";

import UserRegisterForm from "./UserRegisterForm";
import DealershipRegisterForm from "./DealershipRegisterForm";
import PUBLIC_ROUTES from "../../Routes/publicRoutes";

const Register = () => {
  const { register } = useAuthContext();

  const [error, setError] = useState(null);
  const [isRegularUser, setIsRegularUser] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="register">
      <div className="controllers-register">
        <button
          className={`user-type-button ${isRegularUser ? "selected" : ""}`}
          onClick={() => {
            setIsRegularUser(true);
            setError(null);
          }}
        >
          Regular User
        </button>
        <button
          className={`user-type-button ${!isRegularUser ? "selected" : ""}`}
          onClick={() => {
            setIsRegularUser(false);
            setError(null);
          }}
        >
          Dealership
        </button>
      </div>

      {isRegularUser ? (
        <UserRegisterForm
          register={register}
          setError={setError}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
      ) : (
        <DealershipRegisterForm
          register={register}
          setError={setError}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
      )}

      {error && (
        <div className="error-container">
          {error.map((errorMessage, index) => (
            <p key={index} className="error-message">
              {errorMessage}
            </p>
          ))}
        </div>
      )}

      <div className="has-account">
        <p>Already have an account?</p>
        <Link to={PUBLIC_ROUTES.REGISTER.path} className="login-link">
          {PUBLIC_ROUTES.REGISTER.label}
        </Link>
      </div>
    </div>
  );
};

export default Register;

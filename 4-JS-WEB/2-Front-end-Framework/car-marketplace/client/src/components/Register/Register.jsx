import { useState } from "react";
import { Link } from "react-router-dom";

import useAuthContext from "../../hooks/useAuthContext";

import UserRegisterForm from "./UserRegisterForm";
import DealershipRegisterForm from "./DealershipRegisterForm";

const Register = () => {
  const [userType, setUserType] = useState("user");
  const { register } = useAuthContext();

  return (
    <div className="register">
      <div className="controllers">
        <button className="user-type-button" onClick={() => setUserType("user")}>
          Regular User
        </button>
        <button className="user-type-button" onClick={() => setUserType("dealership")}>
          Company
        </button>
      </div>

      {userType === "user" ? (
        <UserRegisterForm register={register} />
      ) : (
        <DealershipRegisterForm register={register} />
      )}

      <div className="has-account">
        <p>Already have an account?</p>
        <Link to="/login" className="login-link">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;

import { useState } from "react";
import { Link } from "react-router-dom";

import UserRegisterForm from "./UserRegisterForm";
import DealershipRegisterForm from "./DealershipRegisterForm";
import { useAuthContext } from "../../contexts/AuthContext";

const Register = () => {
  const [userType, setUserType] = useState("user");
  const { register } = useAuthContext();

  return (
    <>
      <p className="user-type-label">I am a :</p>
      <button className="user-type-button" onClick={() => setUserType("user")}>
        Regular User
      </button>
      <button className="user-type-button" onClick={() => setUserType("dealership")}>
        Company
      </button>

      {userType === "user" ? (
        <UserRegisterForm register={register} />
      ) : (
        <DealershipRegisterForm register={register} />
      )}

      <p>
        Already have an account?
        <Link to="/login" className="login-link">
          Login
        </Link>
      </p>
    </>
  );
};

export default Register;

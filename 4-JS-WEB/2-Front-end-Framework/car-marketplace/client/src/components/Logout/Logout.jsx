import React, { useEffect } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const Logout = () => {
  const { onLogout } = useAuthContext();

  useEffect(() => {
    onLogout();
  }, [onLogout]);

  return <Navigate to={"/"} />;
};

export default Logout;

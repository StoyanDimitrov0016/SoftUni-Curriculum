import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useAuthContext } from "../../contexts/AuthContext";

const Logout = () => {
  const { logout } = useAuthContext();

  logout();

  return <Navigate to={"/"} />;
};

export default Logout;

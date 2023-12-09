import { Navigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import { useEffect } from "react";
import PUBLIC_ROUTES from "../../Routes/publicRoutes";

const Logout = () => {
  const { logout } = useAuthContext();

  useEffect(() => {
    logout();
  }, [logout]);

  return <Navigate to={PUBLIC_ROUTES.HOME.path} />;
};

export default Logout;

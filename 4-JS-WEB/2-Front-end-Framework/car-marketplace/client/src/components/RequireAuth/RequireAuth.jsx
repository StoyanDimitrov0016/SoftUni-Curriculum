import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";

const RequireAuth = () => {
  const { userCredentials } = useAuthContext();
  const location = useLocation();

  return userCredentials.userId ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;

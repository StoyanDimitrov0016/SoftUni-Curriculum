import { Navigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";

const Logout = () => {
  const { logout } = useAuthContext();

  logout();

  return <Navigate to={"/"} />;
};

export default Logout;

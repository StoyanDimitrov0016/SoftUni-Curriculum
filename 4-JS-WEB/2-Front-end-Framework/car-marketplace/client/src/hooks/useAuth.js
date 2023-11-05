import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import userService from "../services/userService";

export const useAuth = () => {
  const [setAuth] = useAuthContext();
  const navigate = useNavigate();

  const onLoginSubmit = async ({ email, password }) => {
    try {
      const credentials = await userService.login(email, password);
      setAuth(credentials);
      navigate("/");
    } catch (error) {
      console.error("An error occurred while logging in:", error);
    }
  };

  const onRegisterSubmit = async (data) => {
    let credentials = null;

    try {
      if (data.password !== data.confirmPassword) {
        throw new Error("Passwords must match!");
      }

      if (data.userType === "regular") {
        credentials = await userService.userRegister(data);
      }

      if (data.userType === "dealership") {
        credentials = await userService.register(data);
      }

      if (credentials) {
        setAuth(credentials);
        navigate("/");
      }
    } catch (error) {
      console.error("An error occurred while registering:", error);
    }
  };

  const onLogout = async () => {
    await userService.logout();
    setAuth({});
  };

  // Return the functions to make them available to components
  return {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
  };
};

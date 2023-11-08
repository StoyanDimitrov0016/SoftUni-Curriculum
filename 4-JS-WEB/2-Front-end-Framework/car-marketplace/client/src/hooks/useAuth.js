import { useNavigate } from "react-router-dom";
import userService from "../services/userService";
import { useLocalStorage } from "./useLocalStorage";
import { useAuthContext } from "../contexts/AuthContext";

export const useAuth = () => {
  const navigate = useNavigate();

  // const [_, setLocalStorageState] = useLocalStorage('auth', {});
  const { setCallbackState} = useAuthContext()

  const onLoginSubmit = async ({ email, password }) => {
    try {
      const credentials = await userService.login(email, password);
      // console.log(credentials, 'received credentials in onLoginSubmit from user service login'); //receiving correct data
      setCallbackState(credentials);
      // console.log(_, 'Auth state after setAuth form onLoginSubmit in onLoginSubmit');
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
        setCallbackState(credentials);
        navigate("/");
      }
    } catch (error) {
      console.error("An error occurred while registering:", error);
    }
  };

  const onLogout = async () => {
    await userService.logout();
    setCallbackState({});
  };

  return {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
  };
};

import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import userService from "../services/userService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useLocalStorage("auth", {});

  const navigate = useNavigate();

  const onLoginSubmit = async ({ email, password }) => {
    
    try {
      const credentials = await userService.login( email, password );
      setAuth(credentials);
      navigate("/");
    } catch (error) {
      console.log("--- An error while logging in AuthContext occurred:", error);
    }
  };

  const onRegisterSubmit = async (data) => {
    let credentials = null;

    try {
      if (data.password !== data.confirmPassword) {
        throw new Error("The passwords must be the same!");
      }

      if (data.userType === "regular") {
        credentials = await userService.userRegister(data);
        console.log(credentials);
      }

      if (data.userType === "dealership") {
        credentials = await userService.register(data);
      }

      if (credentials) {
        setAuth(credentials);
        navigate("/");
      }
    } catch (error) {
      console.log("--- An error while registering in AuthContext occurred:", error);
    }
  };

  const onLogout = async () => {
    await userService.logout();
    setAuth({});
  };

  const contextValues = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    userId: auth._id,
    accessToken: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: auth.accessToken,
  };

  return <AuthContext.Provider value={contextValues}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};

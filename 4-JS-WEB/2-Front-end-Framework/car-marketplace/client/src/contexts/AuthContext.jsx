import { createContext, useContext, useState } from "react";
import userService from "../services/userService";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userCredentials, setUserCredentials] = useState(() => {
    const userCredentialsString = localStorage.getItem("userCredentials");

    if (!userCredentialsString) {
      return null;
    }

    const parsedUserCredentials = JSON.parse(userCredentialsString);
    return parsedUserCredentials;
  });

  const navigate = useNavigate();

  const login = async (credentials) => {
    try {
      const response = await userService.login(credentials.email, credentials.password);
      const userData = responseParser(response);

      setUserCredentials(userData);
      localStorage.setItem("userCredentials", JSON.stringify(userData));

      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const register = async (credentials) => {
    try {
      const response = await userService.userRegister(credentials);
      const userData = responseParser(response);

      setUserCredentials(userData);
      localStorage.setItem("userCredentials", JSON.stringify(userData));

      navigate("/");
    } catch (error) {
      console.error("Error registering in:", error);
    }
  };

  const logout = async () => {
    try {
      await userService.logout();
      setUserCredentials(null);

      localStorage.removeItem("userCredentials");
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const contextValues = { userCredentials, login, register, logout };

  return <AuthContext.Provider value={contextValues}>{children}</AuthContext.Provider>;
};

const responseParser = (response) => {
  return {
    userEmail: response.email,
    userId: response._id,
    accessToken: response.accessToken,
  };
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};

export default AuthProvider;

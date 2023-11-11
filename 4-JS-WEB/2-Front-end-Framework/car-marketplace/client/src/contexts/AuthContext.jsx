import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import regularUserService from "../services/RegularUserService";
import dealershipService from "../services/dealershipService";

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
      const response = await regularUserService.login(credentials.email, credentials.password);
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
      const { userType } = credentials;

      let userData = {};

      if (userType === "regular") {
        const response = await regularUserService.register(credentials);
        userData = responseParser(response);

        setUserCredentials(userData);
        localStorage.setItem("userCredentials", JSON.stringify(userData));
      }

      if (userType === "dealership") {
        const { dealershipName, email, password, ...additionalInfo } = credentials;

        const response = await dealershipService.register({
          dealershipName,
          email,
          password,
          userType,
        });

        userData = responseParser(response);
        console.log(userData);

        setUserCredentials(userData);
        localStorage.setItem("userCredentials", JSON.stringify(userData));

        const dealershipDataFromCollection = await dealershipService.createDealershipInCollection({
          ...additionalInfo,
          dealershipName,
          email,
        });

        console.log(dealershipDataFromCollection);

        setUserCredentials((state) => {
          const newState = { ...state, reference: dealershipDataFromCollection._id };
          localStorage.setItem("userCredentials", JSON.stringify(newState));
          return newState;
        });
        
        console.log(userCredentials, "the last clg");
        localStorage.clear();
      }

      navigate("/");
    } catch (error) {
      console.error("Error registering in:", error);
    }
  };

  const logout = async () => {
    try {
      await regularUserService.logout();
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

const responseParser = ({ _id, email, ...response }) => ({
  ...response,
  userId: _id,
  userEmail: email,
});

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};

export default AuthProvider;

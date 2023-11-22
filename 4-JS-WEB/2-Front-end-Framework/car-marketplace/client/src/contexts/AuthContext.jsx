import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import dealershipService from "../services/dealershipService";
import authenticationService from "../services/authenticationService";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userCredentials, setUserCredentials] = useState(() => {
    const userCredentialsString = localStorage.getItem("userCredentials");

    if (!userCredentialsString) {
      return { userId: null };
    }

    const parsedUserCredentials = JSON.parse(userCredentialsString);
    return parsedUserCredentials;
  });

  const navigate = useNavigate();

  const login = async (credentials) => {
    try {
      const response = await authenticationService.login(credentials.email, credentials.password);
      const userData = responseParser(response);

      if (userData.userType === "dealership") {
        const dealershipReference = await dealershipService.getReference(userData.userId);
        userData.reference = dealershipReference;
      }

      setUserCredentials(userData);
      localStorage.setItem("userCredentials", JSON.stringify(userData));

      navigate("/");
    } catch (error) {
      console.error("Error while logging in:", error);
    }
  };

  const register = async (credentials) => {
    try {
      const { userType } = credentials;
      let userData = {};

      if (userType === "regular") {
        const response = await authenticationService.regularUserRegister(credentials);
        userData = responseParser(response);

        setUserCredentials(userData);
        localStorage.setItem("userCredentials", JSON.stringify(userData));
      }

      if (userType === "dealership") {
        const { dealershipName, email, password, ...additionalInfo } = credentials;

        const response = await authenticationService.dealershipRegister({
          dealershipName,
          email,
          password,
          userType,
        });

        userData = responseParser(response);

        setUserCredentials(userData);
        localStorage.setItem("userCredentials", JSON.stringify(userData));

        const dealershipDataFromCollection = await dealershipService.createDealershipInCollection({
          dealershipName,
          email,
          ...additionalInfo,
        });

        setUserCredentials((state) => {
          const newState = { ...state, reference: dealershipDataFromCollection._id };
          localStorage.setItem("userCredentials", JSON.stringify(newState));
          return newState;
        });
      }

      navigate("/");
    } catch (error) {
      console.error("Error registering in:", error);
    }
  };

  const logout = async () => {
    try {
      await authenticationService.logout();
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

export default AuthProvider;

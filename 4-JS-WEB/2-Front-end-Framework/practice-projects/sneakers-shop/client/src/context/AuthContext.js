import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [userCredentials, setUserCredentials] = useState({
        email: '',
        accessToken: '',
        id: ''
    });

    return (
        <AuthContext.Provider value={{ userCredentials, setUserCredentials }}>
            {children}
        </AuthContext.Provider>);
}

export const useAuth = () => {
    return useContext(AuthContext);
};
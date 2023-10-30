import { createContext, useContext, useState } from "react";
import { authServiceFactory } from '../services/authService';
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useLocalStorage('auth',{});

    const authService = authServiceFactory(auth.accessToken);

    const navigate = useNavigate();

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data.email, data.password);
            setAuth(result);
            navigate('/');
        } catch (error) {
            console.log('Error while logging in occurred:', error);
        }
    };

    const onRegisterSubmit = async (data) => {
        const confirmPassword = data['confirm-password'];
        const password = data.password;

        //TODO: Further improving of password validation
        if (password !== confirmPassword) {
            return;
        }

        try {
            const result = await authService.register(data.email, data.password);
            setAuth(result);
            navigate('/');
        } catch (error) {
            console.log('Error while registering in occurred:', error);
        }
    };

    const onLogout = async () => {
        await authService.logout();
        setAuth({});
    };

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: auth.accessToken
    };
    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>);
};

export const useAuthPContext = () => {
    const context = useContext(AuthContext);
    return context;
};

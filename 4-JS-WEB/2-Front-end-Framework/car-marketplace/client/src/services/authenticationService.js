import requestHTTP from "./requestHTTP";
import { authenticationEndpoints as endpoints } from "./endpoints";

async function regularUserRegister({ firstName, lastName, email, password, userType }) {
    const userCredentials = await requestHTTP.post(endpoints.register, { firstName, lastName, email, password, userType });
    return userCredentials;
}

async function dealershipRegister({ dealershipName, email, password, userType }) {
    const userCredentials = await requestHTTP.post(endpoints.register, { dealershipName, email, password, userType });
    return userCredentials;
}

async function login(email, password) {
    const userCredentials = await requestHTTP.post(endpoints.login, { email, password });
    return userCredentials;
}

async function logout() {
    const logoutResult = await requestHTTP.get(endpoints.logout);
    return logoutResult;
}

const authenticationService = {
    regularUserRegister,
    dealershipRegister,
    login,
    logout
};

export default authenticationService;

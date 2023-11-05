import requestHTML from "./requestHTTP";

const userEndpoint = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
};

async function login(email, password) {
    const userCredentials = await requestHTML.post(userEndpoint.login, { email, password });
    return userCredentials;
}

async function userRegister({ firstName, lastName, email, password, userType }) {
    const userCredentials = await requestHTML.post(userEndpoint.register, { firstName, lastName, email, password, userType });
    return userCredentials;
}

async function dealershipRegister({ dealershipName, location, email, phoneNumber, password, userType }) {
    const userCredentials = await requestHTML.post(userEndpoint.register, { dealershipName, location, email, phoneNumber, password, userType });
    return userCredentials;
}

async function logout() {
    const result = await requestHTML.get(userEndpoint.logout);
    return result;
}

const userService = {
    login,
    userRegister,
    dealershipRegister,
    logout
};

export default userService;
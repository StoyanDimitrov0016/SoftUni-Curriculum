import requestHTTP from "./requestHTTP";

const regularUserEndpoint = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
};

async function login(email, password) {
    const userCredentials = await requestHTTP.post(regularUserEndpoint.login, { email, password });
    return userCredentials;
}

async function userRegister({ firstName, lastName, email, password, userType }) {
    const userCredentials = await requestHTTP.post(regularUserEndpoint.register, { firstName, lastName, email, password, userType });
    return userCredentials;
}

async function logout() {
    const result = await requestHTTP.get(regularUserEndpoint.logout);
    return result;
}

const regularUserService = {
    login,
    userRegister,
    logout
};

export default regularUserService;
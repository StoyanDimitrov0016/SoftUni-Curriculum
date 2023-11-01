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

async function register(email, password) {
    const userCredentials = await requestHTML.post(userEndpoint.register, { email, password });
    return userCredentials;
}

async function logout() {
    const result = await requestHTML.get(userEndpoint.logout);
    return result;
}

const userService = {
    login,
    register,
    logout
};

export default userService;
import { requestFactory } from "./requester";

export const authServiceFactory = (token) => {
    const requester = requestFactory(token);

    return {
        login: async (email, password) => await requester.post('/users/login', { email, password }),
        register: async (email, password) => await requester.post('/users/register', { email, password }),
        logout: async () => await requester.get('/users/logout')
    };
};
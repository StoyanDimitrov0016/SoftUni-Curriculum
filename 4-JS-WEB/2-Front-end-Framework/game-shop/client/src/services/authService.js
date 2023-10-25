import * as requester from './requester';

export const login = async (email, password) => {
    const result = await requester.post('/users/login', { email, password });
    return result;
};

export const register = async (username, password) => {

};
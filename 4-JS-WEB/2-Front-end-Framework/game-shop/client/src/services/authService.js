import * as requester from './requester';

export const login = (username, password ) => {
    const result = requester.post('users/login', { username, password });
    console.log(result);
    return result;
};

export const register = (username, password) => {

};
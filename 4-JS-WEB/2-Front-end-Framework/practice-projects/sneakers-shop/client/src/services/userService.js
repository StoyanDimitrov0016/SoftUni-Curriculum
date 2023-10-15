import { request } from "./requestService"

const BASE_URL = 'http://localhost:3030';

export const register = async ({ email, password }) => await request.post(`${BASE_URL}/users/register`, { email, password });

export const login = async ({ email, password }) => await request.post(`${BASE_URL}/users/login`, { email, password });

export const logout = async () => await request.get(`${BASE_URL}/users/logout`); //- returns an empty response I have to see the status code          
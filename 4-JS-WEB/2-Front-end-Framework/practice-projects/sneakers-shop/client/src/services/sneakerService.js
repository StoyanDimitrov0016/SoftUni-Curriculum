import { request } from "./requestService";

const BASE_URL = 'http://localhost:3030';

export const getAll = async () => {
    const res = await request.get(`${BASE_URL}/data/shoes`);
    console.log(res);
    return res
}

export const getOne = async (sneakerId) => await request.get(`${BASE_URL}/sneakers/${sneakerId}`);

export const create = async (sneakerData, accessToken) => await request.post(`${BASE_URL}/data/shoes`, sneakerData, accessToken);

export const edit = async () => { }

export const remove = async () => {

}
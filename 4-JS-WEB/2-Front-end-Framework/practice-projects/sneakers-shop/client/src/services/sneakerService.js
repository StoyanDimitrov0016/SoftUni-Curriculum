const BASE_URL = 'http://localhost:3030/jsonstore';

export const getAll = async () => {
    const response = await fetch(`${BASE_URL}/sneakers`);
    const data = await response.json();
    return data;
}

export const getOne = async (id) => {
    const response = await fetch(`${BASE_URL}/sneakers/${id}`);
    const data = await response.json();
    return data;
}

export const edit = () => {

}

export const remove = () => {

}
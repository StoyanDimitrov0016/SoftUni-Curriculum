const BASE_URL = 'http://localhost:3030/jsonstore';

export const getAll = async () => {
    const response = await fetch(`${BASE_URL}/sneakers`);
    const data = await response.json();
    return data;
}

export const getOne = async (sneakerId) => {
    const response = await fetch(`${BASE_URL}/sneakers/${sneakerId}`);
    const data = await response.json();
    return data;
}

export const create = async (sneakerData) => {
    const response = await fetch(`${BASE_URL}/sneakers`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(sneakerData),
    });

    if (!response.ok) {
        throw new Error('Failed to create sneaker'); 
    }

    const data = await response.json();

    return data;
}


export const edit = async () => {

}

export const remove = async () => {

}
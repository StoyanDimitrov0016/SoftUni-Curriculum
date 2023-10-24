import * as requester from './requester';

export const getAll = async () => {
    const games = await requester.get('/data/games?sortBy=_createdOn%20desc');
    return games;
};

export const create = async (gameData) => {
    const result = await requester.post('/data/games', gameData);
    return result;
};
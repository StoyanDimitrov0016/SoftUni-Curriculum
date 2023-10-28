import { requestFactory } from './requester';

export const gameServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const games = await request.get('/data/games?sortBy=_createdOn%20desc');
        return games;
    };

    const getOne = async (gameId) => {
        const game = await request.get(`/data/games/${gameId}`);
        return game;
    };

    const create = async (gameData) => {
        const result = await request.post('/data/games', gameData);
        return result;
    };

    return {
        getAll,
        getOne,
        create
    };
};
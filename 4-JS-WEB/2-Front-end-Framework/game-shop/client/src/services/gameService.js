import * as requester from './requester';

export const getAll = async () => {
    const games = await requester.get('/data/games?sortBy=_createdOn%20desc');
    return games;
};
import * as requester from './requester';

export const getAll = async (gameId) => {
    const comments = await requester.get(`/data/comments?where=gameId%3D%22${gameId}%22`);
    return comments;
};

export const create = async (gameId, comment) => {
    const result = await requester.post('/data/comments', { gameId, comment });
    return result;
};
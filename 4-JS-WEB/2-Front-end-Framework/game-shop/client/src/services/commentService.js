import { requestFactory } from "./requester";

export const commentServiceFactory = (token) => {
    const request = requestFactory(token);

    return {
        getAll: async (gameId) => await request.get(`/data/comments?where=gameId%3D%22${gameId}%22`),
        create: async (gameId, comment) => await request.post('/data/comments', { gameId, comment })
    };
};


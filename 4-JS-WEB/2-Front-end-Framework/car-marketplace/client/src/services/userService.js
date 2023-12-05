import requestHTTP from "./requestHTTP";

async function isAbleToCreate(userId, offersLimit) {
    const availableOffersCount = await requestHTTP.get(`/data/offers?where=_ownerId%3D%22${userId}%22&count`);
    return availableOffersCount < offersLimit;
}

async function createdOffersCount(userId) {
    const availableOffersCount = await requestHTTP.get(`/data/offers?where=_ownerId%3D%22${userId}%22&count`);
    return availableOffersCount;
}

const userService = {
    isAbleToCreate,
    createdOffersCount
};

export default userService;
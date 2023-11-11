import requestHTTP from "./requestHTTP";

const dealershipEndpoints = {
    login: '/users/login',
    register: '/users/register',
    dealershipCollection: '/data/dealerships',
    getDealershipEntity: (dealershipId) => `/data/dealerships/${dealershipId}`,
    logout: '/users/logout',
    deleteOffer: (offerId) => `/data/offers/${offerId}`
};

async function login(email, password) {
    const userCredentials = await requestHTTP.post(dealershipEndpoints.login, { email, password });
    return userCredentials;
}

async function register({ dealershipName, email, password, userType }) {
    const userCredentials = await requestHTTP.post(dealershipEndpoints.register, { dealershipName, email, password, userType });
    return userCredentials;
}

async function createDealershipInCollection({ dealershipName, location, phoneNumber, email, workingHours }) {
    const availableOffers = [];
    const createdEntry = await requestHTTP.post(dealershipEndpoints.dealershipCollection, { dealershipName, location, phoneNumber, email, workingHours, availableOffers });
    return createdEntry;
}

async function addOfferIdToAvailableOffers(dealershipId, offerId) {
    const dealershipEntity = await requestHTTP.get(dealershipEndpoints.getDealershipEntity(dealershipId));
    dealershipEntity.availableOffers.push(offerId);

    const result = await requestHTTP.put(dealershipEndpoints.getDealershipEntity(dealershipId), dealershipEntity);
    return result;
}

// async function deleteOffer(offerId) {
//     const result = await requestHTTP.delete(dealershipEndpoints.deleteOffer(offerId));
//     return result;
// }

async function removeOfferIdFromAvailableOffers(dealershipId, offerId) {
    const dealershipEntity = await requestHTTP.get(dealershipEndpoints.getDealershipEntity(dealershipId));

    const availableOffers = dealershipEntity.availableOffers.filter((id) => id !== offerId);
    dealershipEntity.availableOffers = availableOffers;

    const result = await requestHTTP.put(dealershipEndpoints.getDealershipEntity(dealershipId), dealershipEntity);
    return result;
}

async function logout() {
    const result = await requestHTTP.get(dealershipEndpoints.logout);
    return result;
}

const dealershipService = {
    login,
    register,
    logout,
    createDealershipInCollection,
    addOfferIdToAvailableOffers,
    // deleteOffer,
    removeOfferIdFromAvailableOffers
};

export default dealershipService;
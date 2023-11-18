import requestHTTP from "./requestHTTP";
import { dealershipEndpoints as endpoints, searchEndpoints } from "./endpoints";

async function createDealershipInCollection({ dealershipName, location, phoneNumber, email, workingHours }) {
    const availableOffers = [];
    const createdEntry = await requestHTTP.post(endpoints.dealershipsCollection,
        {
            dealershipName,
            location,
            phoneNumber,
            email,
            workingHours,
            availableOffers
        });
    return createdEntry;
}

async function getDealershipEntity(dealershipId) {
    const dealershipEntity = requestHTTP.get(endpoints.specificDealership(dealershipId));
    return dealershipEntity;
}

async function getReference(userId) {
    //TODO: add proper endpoint for getting this reference
    const dealershipEntity = await requestHTTP.get(`/data/dealerships?where=_ownerId%3D%22${userId}%22`);

    const reference = dealershipEntity[0]._id;
    return reference;
}

async function addOfferIdToAvailableOffers(dealershipId, offerId) {
    const dealershipEntity = await requestHTTP.get(endpoints.specificDealership(dealershipId));
    dealershipEntity.availableOffers.push(offerId);

    const result = await requestHTTP.put(endpoints.specificDealership(dealershipId), dealershipEntity);
    return result;
}

async function removeOfferIdFromAvailableOffers(dealershipId, offerId) {
    const dealershipEntity = await requestHTTP.get(endpoints.specificDealership(dealershipId));

    const filteredAvailableOffers = dealershipEntity.availableOffers.filter((id) => id !== offerId);
    dealershipEntity.availableOffers = filteredAvailableOffers;

    const result = await requestHTTP.put(endpoints.specificDealership(dealershipId), dealershipEntity);
    return result;
}

const dealershipService = {
    createDealershipInCollection,
    addOfferIdToAvailableOffers,
    removeOfferIdFromAvailableOffers,
    getDealershipEntity,
    getReference
};

export default dealershipService;
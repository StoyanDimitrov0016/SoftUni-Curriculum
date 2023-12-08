import requestHTTP from "./requestHTTP";
import { dealershipEndpoints as endpoints } from "./endpoints";

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
    const dealershipEntity = await requestHTTP.get(endpoints.specificDealershipById(dealershipId));
    return dealershipEntity;
}

async function getReference(userId) {
    const dealershipEntity = await requestHTTP.get(endpoints.specificDealershipByQuery(userId));

    const reference = dealershipEntity[0]._id;
    return reference;
}

async function addOfferIdToAvailableOffers(dealershipId, offerId) {
    const dealershipEntity = await requestHTTP.get(endpoints.specificDealershipById(dealershipId));
    dealershipEntity.availableOffers.push(offerId);

    const result = await requestHTTP.put(endpoints.specificDealershipById(dealershipId), dealershipEntity);
    return result;
}

async function removeOfferIdFromAvailableOffers(dealershipId, offerId) {
    const dealershipEntity = await requestHTTP.get(endpoints.specificDealershipById(dealershipId));

    const filteredAvailableOffers = dealershipEntity.availableOffers.filter((id) => id !== offerId);
    dealershipEntity.availableOffers = filteredAvailableOffers;

    const result = await requestHTTP.put(endpoints.specificDealershipById(dealershipId), dealershipEntity);
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
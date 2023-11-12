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
    removeOfferIdFromAvailableOffers
};

export default dealershipService;
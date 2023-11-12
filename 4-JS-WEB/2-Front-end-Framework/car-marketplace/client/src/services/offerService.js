import requestHTTP from "./requestHTTP";
import { offerEndpoints as endpoints } from "./endpoints";

async function getAll() {
    const offers = await requestHTTP.get(endpoints.offersCollection);

    const leanOffers = offers.map(offer => ({
        _id: offer._id,
        brand: offer.brand,
        model: offer.model,
        image: offer.image,
        productionYear: offer.productionYear,
        region: offer.region,
        price: offer.price,
        mileage: offer.mileage,
        fuelType: offer.fuelType,
    }));

    return leanOffers;
}
//TODO: add getNewest - first 10 offers or add criteria for getting the first 10 of most liked or newest

async function getOne(id) {
    const offer = await requestHTTP.get(endpoints.specificOffer(id));
    return offer;
}

async function create(offerData) {
    const result = await requestHTTP.post(endpoints.offersCollection, offerData);
    return result;
}

async function update(offerId, offerData) {
    const result = await requestHTTP.put(endpoints.specificOffer(offerId), offerData);
    return result;
}

async function del(offerId) {
    const result = await requestHTTP.delete(endpoints.specificOffer(offerId));
    return result;
}

async function getOfferOptions() {
    const options = await requestHTTP.get(endpoints.vehicleOptions);
    const formattedOptions = {
        brand: options[0],
        fuelType: options[1],
        color: options[2],
        transmissionType: options[3],
        vehicleType: options[4],
        region: options[5],
    }
    return formattedOptions;
}

async function getBrandModels(brand) {
    if (brand) {
        const brandModels = await requestHTTP.get(endpoints.brandModels(brand));
        return brandModels;
    }
    return [];
}

async function getUserOffers(id) {
    const offers = requestHTTP.get(endpoints.userOffers(id));
    return offers;
}

async function addToWatchList(offerId) {
    const result = await requestHTTP.post(endpoints.watchlistsCollection, { offerId });
    return result;
}
async function removeFromWatchList(offerId, userId) {
    const entry = await requestHTTP.get(endpoints.specificWatchlistByOfferAndUserId(offerId, userId));
    const entryId = entry[0]._id;
    console.log(endpoints.specificWatchlistById(entryId, userId));
    const result = await requestHTTP.delete(endpoints.specificWatchlistById(entryId));
    return result;
}


async function getWatchlistCountForOffer(offerId) {
    const result = await requestHTTP.get(endpoints.specificWatchlistCount(offerId), { offerId });
    return result;
}

async function canAddToWatchlist(offerId, userId) {
    const watchlistCount = await requestHTTP.get(endpoints.specificWatchlistCount(offerId, userId));
    return watchlistCount === 0;
}

const offerService = {
    getAll,
    getOne,
    create,
    update,
    delete: del,
    getOfferOptions,
    getBrandModels,
    getUserOffers,
    addToWatchList,
    getWatchlistCountForOffer,
    canAddToWatchlist,
    removeFromWatchList
};

export default offerService;
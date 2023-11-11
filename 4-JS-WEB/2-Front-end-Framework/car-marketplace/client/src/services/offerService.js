import requestHTTP from "./requestHTTP";

const offerEndpoints = {
    allOffers: '/data/offers',
    oneOffer: (id) => `/data/offers/${id}`,
    createOffer: '/data/offers',
    detailsOffer: (id) => `/data/offers/${id}`,
    updateOffer: (id) => `/data/offers/${id}`,
    deleteOffer: (id) => `/data/offers/${id}`,
    offerOptions: '/data/vehicle-properties',
    brandModels: (brand) => `/data/vehicle-models/${brand}`,
    userOffers: (id) => {
        const staticPart = '/data/offers/?where=';
        const encodedPart = encodeURIComponent(`_ownerId="${id}"`);
        return staticPart + encodedPart;
    },
    'watchlist-add': '/data/watchlist',
    'watchlist-count': (offerId) => `/data/watchlist?where=offerId%3D%22${offerId}%22&count`,
    'watchlist-remove': '/data/watchlist',

};

async function getAll() {
    const offers = await requestHTTP.get(offerEndpoints.allOffers);

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
    const offer = await requestHTTP.get(offerEndpoints.oneOffer(id));
    return offer;
}

async function getOfferDetails(offerId) {
    const offer = await requestHTTP.get(offerEndpoints.detailsOffer(offerId));
    return offer;
}

async function create(offerData) {
    const result = await requestHTTP.post(offerEndpoints.createOffer, offerData);
    return result;
}

async function update(offerId, offerData) {
    const result = await requestHTTP.put(offerEndpoints.updateOffer(offerId), offerData);
    return result;
}

async function del(offerId) {
    const result = await requestHTTP.delete(offerEndpoints.deleteOffer(offerId));
    return result;
}

async function getOfferOptions() {
    const options = await requestHTTP.get(offerEndpoints.offerOptions);
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
        const brandModels = await requestHTTP.get(offerEndpoints.brandModels(brand));
        return brandModels;
    }
    return [];
}

async function getUserOffers(id) {
    const offers = requestHTTP.get(offerEndpoints.userOffers(id));
    return offers;
}

async function addToWatchList(offerId) {
    const result = await requestHTTP.post(offerEndpoints["watchlist-add"], { offerId });
    return result;
}

async function getWatchlistCountForOffer(offerId) {
    // debugger
    const result = await requestHTTP.get(offerEndpoints["watchlist-count"](offerId), { offerId });
    return result;
}

const offerService = {
    getAll,
    getOne,
    getOfferDetails,
    create,
    update,
    delete: del,
    getOfferOptions,
    getBrandModels,
    getUserOffers,
    addToWatchList,
    getWatchlistCountForOffer
};

export default offerService;
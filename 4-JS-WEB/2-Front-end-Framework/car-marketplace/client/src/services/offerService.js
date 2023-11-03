import requestHTTP from "./requestHTTP";

const offerEndpoints = {
    allOffers: '/data/offers',
    oneOffer: (id) => `/data/offers/${id}`,
    createOffer: '/data/offers',
    detailsOffer: (id) => `/data/offers/${id}`,
    updateOffer: (id) => `/data/offers/${id}`,
    deleteOffer: (id) => `/data/offers/${id}`,
    offerOptions: '/data/vehicle-properties',
    brandModels: (brand) => `/data/vehicle-models/${brand}`
};

async function getAll() {
    const offers = await requestHTTP.get(offerEndpoints.allOffers);

    const leanOffers = offers.map(offer => ({
        id: offer._id,
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

async function update(offerId) {
    const result = await requestHTTP.put(offerEndpoints.updateOffer(offerId));
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

//TODO: Add getOfferOptions() and getBrandModels(brand) 

const offerService = {
    getAll,
    getOne,
    getOfferDetails,
    create,
    update,
    delete: del,
    getOfferOptions,
    getBrandModels
};

export default offerService;
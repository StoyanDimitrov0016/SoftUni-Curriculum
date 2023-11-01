import requestHTTP from "./requestHTTP";

const offerEndpoints = {
    allOffers: '/data/offers',
    oneOffer: (id) => `/data/offers/${id}`,
    createOffer: '/data/offers',
    detailsOffer: (id) => `/data/offers/${id}`,
    updateOffer: (id) => `/data/offers/${id}`,
    deleteOffer: (id) => `/data/offers/${id}`,
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

const offerService = {
    getAll,
    getOne,
    getOfferDetails,
    create,
    update,
    delete: del
};

export default offerService;
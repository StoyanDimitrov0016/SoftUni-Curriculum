const authenticationEndpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
};

const dealershipEndpoints = {
    dealershipsCollection: '/data/dealerships',
    specificDealershipById: (dealershipId) => `/data/dealerships/${dealershipId}`,
    specificDealershipByQuery: (userId) => `/data/dealerships?where=_ownerId%3D%22${userId}%22`,
    deleteOffer: (offerId) => `/data/offers/${offerId}`,
};

const offerEndpoints = {
    offersCollection: '/data/offers',
    specificOffer: (id) => `/data/offers/${id}`,
    vehicleOptions: '/data/vehicle-properties',
    offerCount: '/data/offers?count',
    brandModels: (brand) => `/data/vehicle-models/${brand}`,
    userOffers: (id) => {
        const staticPart = '/data/offers/?where=';
        const encodedPart = encodeURIComponent(`_ownerId="${id}"`);
        return staticPart + encodedPart;
    },
    watchlistsCollection: '/data/watchlists',
    specificWatchlistById: (watchlistId) => `/data/watchlists/${watchlistId}`,
    specificWatchlistByOfferAndUserId: (offerId, userId) => `/data/watchlists?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22`,
    specificWatchlistCount: (offerId) => `/data/watchlists?where=offerId%3D%22${offerId}%22&count`,
    checkWatchlist: (offerId, userId) =>
        `/data/watchlists?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22`
};

const reviewsEndpoints = {
    base: '/data/reviews',
    specificReview: (reviewId) => `/data/reviews/${reviewId}`
};

const watchlistEndpoints = {
    base: '/data/watchlists',
    allWatchlistsOfUser: (userId) => `/data/watchlists?where=_ownerId%3D%22${userId}%22`,
};

const searchEndpoints = {
    base: '/data/offers',
    reviewsBase: '/data/reviews',
    where: '?where=',
    queryString: (key, value) => `${key}%3D%22${value}%22`,
    and: '%20AND%20'
};

const paginationEndpoints = {
    queryString: (collection, offset, pageSize) => `/data/${collection}?offset=${offset}&pageSize=${pageSize}`
}

export {
    authenticationEndpoints,
    dealershipEndpoints,
    offerEndpoints,
    searchEndpoints,
    reviewsEndpoints,
    watchlistEndpoints,
    paginationEndpoints
};

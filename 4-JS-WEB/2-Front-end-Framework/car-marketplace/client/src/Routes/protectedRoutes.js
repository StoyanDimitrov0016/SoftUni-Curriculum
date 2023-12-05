const PROTECTED_ROUTES = {
    DETAILS: {
        label: "Details",
        dynamicPath: (offerId) => `/offer/${offerId}`,
        staticPath: '/offer/:offerId',
    },
    CREATE_OFFER: {
        label: "Create Offer",
        staticPath: '/create-offer',
    },
    MY_OFFERS: {
        label: "My Offers",
        staticPath: '/my-offers',
    },
    MY_WATCHLIST: {
        label: "My Watchlist",
        staticPath: '/my-watchlist',
    },
    LOGOUT: {
        label: "Logout",
        staticPath: '/logout',
    },
    EDIT_OFFER: {
        label: "Edit Offer",
        dynamicPath: (offerId) => `/offer/edit/${offerId}`,
        staticPath: '/offer/edit/:offerId',
    },
    DELETE_OFFER: {
        label: "Delete Offer",
        dynamicPath: (offerId) => `/offer/delete/${offerId}`,
        staticPath: '/offer/delete/:offerId',
    },
    DEALERSHIP_PAGE: {
        label: "Dealership Page",
        dynamicPath: (dealershipId) => `/dealerships/${dealershipId}`,
        staticPath: '/dealerships/:dealershipId',
    },
    SEARCH: {
        label: "Search",
        staticPath: '/search',
    },
};

export default PROTECTED_ROUTES;

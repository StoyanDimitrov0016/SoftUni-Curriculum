import PROTECTED_ROUTES from "../Routes/protectedRoutes";
import requestHTTP from "./requestHTTP"

const collections = {
    catalog: 'offers',
    watchlist: 'watchlist',
    myOffers: 'my'

};

const PAGE_SIZE = 6;

const fetchPaginatedEntities = async (collection, page, pageSize = PAGE_SIZE) => {
    page = page < 0 ? 0 : page;

    const offset = pageSize * (page - 1);

    const response = await requestHTTP.get(`/data/${collection}?offset=${offset}&pageSize=${pageSize}`);
    return response;
}

const paginationService = {
    offers: (page) => fetchPaginatedEntities(collections.catalog, page),
    watchlist: (page) => fetchPaginatedEntities(collections.watchlist, page),
    myOffers: (page) => fetchPaginatedEntities(collections.myOffers, page)
};

export default paginationService;
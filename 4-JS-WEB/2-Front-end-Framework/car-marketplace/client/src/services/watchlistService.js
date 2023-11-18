import { watchlistEndpoints } from "./endpoints";
import requestHTTP from "./requestHTTP";

async function getAllOffersFromWatchlist(userId) {
    const watchlistEntries = await requestHTTP.get(watchlistEndpoints.allWatchlistsOfUser(userId));
    const ids = watchlistEntries.map(e => e.offerId);
    return ids;
}

const watchlistService = {
    getAllOffersFromWatchlist
};

export default watchlistService;
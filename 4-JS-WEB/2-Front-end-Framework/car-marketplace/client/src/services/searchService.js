import requestHTTP from "./requestHTTP";
import { searchEndpoints as endpoints } from "./endpoints";
import offerService from "./offerService";

async function search(searchParameters) {
    const parameters = searchParameters.filter((p) => !p.includes('') && !p.includes(0));

    if (parameters.length === 0) {
        return await offerService.getAll();
    }

    const encodedUrl = parameters.map(([key, value]) => endpoints.queryString(key, value)).join(endpoints.and);

    const url = `${endpoints.base}${endpoints.where}${encodedUrl}`;
  
    return await requestHTTP.get(url);
}

const searchService = {
    search
};

export default searchService;

async function requester(method, url = '', body) {
    const BASE_URL = 'http://localhost:3030';

    const options = {
        method,
        headers: {}
    };

    if (body) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }

    // const user = getUser();
    // if (user) {
    //     options.headers['X-Authorization'] = user.accessToken;
    // }


    try {
        const response = await fetch(BASE_URL + url, options);

        if (response.ok !== true) {
            // if (response.status == 403) {
            //     clearUser();
            // }
            const err = await response.json();
            throw new Error(err.message);
        }

        if (response.status === 204) {
            return response; //maybe it has to return an empty object (204 - no content)
        } else {
            return response.json();
        }


    } catch (error) {
        console.log(error.message);
        throw error;
    }
}

const get = await requester.bind(null, 'get');
const post = await requester.bind(null, 'post');
const put = await requester.bind(null, 'put');
const del = await requester.bind(null, 'delete');

export { get, post, put, del };
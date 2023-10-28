async function requester(method, token, url = '', body) {
    const BASE_URL = 'http://localhost:3030';
   
    const options = {
        method,
        headers: {}
    };

    if (body) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }

    if (token) {
        options.headers['X-Authorization'] = token;
    }

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

export const requestFactory = (token) => {
    return {
        get: requester.bind(null, 'get', token),
        post: requester.bind(null, 'post', token),
        put: requester.bind(null, 'put', token),
        patch: requester.bind(null, 'patch', token),
        delete: requester.bind(null, 'delete', token),
    };
};
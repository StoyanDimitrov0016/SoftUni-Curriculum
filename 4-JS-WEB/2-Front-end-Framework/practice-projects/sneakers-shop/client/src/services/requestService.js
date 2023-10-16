const makeRequest = async (method, url, data = {}, accessToken = null) => {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    if (accessToken && method !== 'GET') {
        options.headers['X-Authorization'] = accessToken;
    }

    const response = await fetch(url, options);

    if (!response.ok) {
        throw new Error(`Request failed with status code: ${response.status}`);
    }

    return await response.json();
};

export const request = {
    get: makeRequest.bind(null, 'GET'),
    post: makeRequest.bind(null, 'POST'),
    put: makeRequest.bind(null, 'PUT'),
    delete: makeRequest.bind(null, 'DELETE')
};
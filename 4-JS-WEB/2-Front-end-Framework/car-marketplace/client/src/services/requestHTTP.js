const BASE_URL = 'http://localhost:3030';

async function request(url = '', options) {
    try {
        const response = await fetch(BASE_URL + url, options);

        if (response.ok !== true) {
            if (response.status == 403) {
                //clear local storage, because the token is invalid/expired
                localStorage.clear();
            }

            const err = await response.json();
            throw new Error(err.message);
        }

        if (response.status === 204) {
            return response; //logout GET request returns an empty response 
        } else {
            return response.json();
        }
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}

function getAccessToken() {
    const credentials = JSON.parse(localStorage.getItem('userCredentials'));
    if (credentials) {
        const accessToken = credentials.accessToken;
        return accessToken;
    }
    return null;
}

function createOptions(method, data) {
    const options = {
        method,
        headers: {}
    };

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const accessToken = getAccessToken();

    if (accessToken) {
        options.headers['X-Authorization'] = accessToken;
    }

    return options;
}

async function get(url) {
    return await request(url, createOptions('GET', null));
}

async function post(url, data) {
    return request(url, createOptions('POST', data));
}

async function put(url, data) {
    return request(url, createOptions('PUT', data));
}

async function del(url) {
    return request(url, createOptions('DELETE', null));
}

async function patch(url, data) {
    return request(url, createOptions('PATCH', data));
}

const requestHTTP = {
    get,
    post,
    put,
    delete: del,
    patch
};

export default requestHTTP;
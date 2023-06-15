function validator(request) {
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    const {method, uri, version, message} = request;

    if (!methods.includes(method)) {
        throw new Error(`Invalid request header: Invalid Method`);
    }

    const uriMatcher = /(^[\w.]+$)|\*/;

    if (!uriMatcher.test(uri) || uri == '' || uri === undefined) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!versions.includes(version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    const messageMatcher = /^[^<>\\&'"]*$/;

    if (!messageMatcher.test(message) || message == undefined) {
        throw new Error('Invalid request header: Invalid Message');
    }
    return request;
}

console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));

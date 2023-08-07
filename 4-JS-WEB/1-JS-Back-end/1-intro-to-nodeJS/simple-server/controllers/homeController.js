const { html } = require("../util");


function homePage(req, res) {
    res.write(html(`
    <h1>Home Page</h1>
    <p>Welcome to our site</p>`));
    res.end();
}

function aboutPage(req, res) {
    res.write(html(`
    <h1>About us</h1>
    <p>Contact us: +1-555-1793</p>`));
    res.end();
}

function defaultPage(req, res) {
    res.statusCode = 404;
    res.write(html(`
    <h1>404 not Found</h1>
    <p>The resource you requested cannot be found</p>`));
    res.end();
}

module.exports = {
    homePage,
    aboutPage,
    defaultPage
};
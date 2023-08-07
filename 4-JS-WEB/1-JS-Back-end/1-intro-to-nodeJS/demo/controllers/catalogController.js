const { html, data } = require("../util");
const { IncomingForm } = require('formidable');


function catalogPage(req, res) {
    res.write(html(`
    <h1>Catalog</h1>
    <p>List of items</p>
        <ul>
        ${data.map(itemPreview).join('\n')}
        </ul>`));
    res.end();
}

function createPage(req, res) {
    res.write(html(`
    <h1>Create item</h1>
    <form method="POST" action="/create">
        <label>Name: <input type="text" name="name"></label>
        <label>Color:
            <select name="color">
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
            </select>
        </label>
        <input type="submit" value="Create">
    </form>`));

    res.end();
}

function createItem(req, res) {
    const form = new IncomingForm();
    form.parse(req, (err, fields) => {

        const item = {
            id: ('abcd' + ('0000' + Math.random() * 9999 | 0)).slice(-4),
            name: fields.name,
            color: fields.color
        };

        data.push(item);

        res.writeHead(301, ['Location', '/catalog']);

        res.end();
    });
}

const itemPreview = (item) => `<li data-id"${item.id}">${item.name} - ${item.color}</li>`;

module.exports = {
    catalogPage,
    createPage,
    createItem
};

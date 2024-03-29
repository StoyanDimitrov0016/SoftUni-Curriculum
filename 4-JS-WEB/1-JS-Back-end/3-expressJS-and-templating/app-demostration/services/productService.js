const fs = require('fs');


const data = JSON.parse(fs.readFileSync('./services/data.json'));

function getList() {
    return data;
}

function getById(id) {
    return data.find(element => element.id == id);
}

async function create(name, price) {
    const id = 'abcd-' + ('0000' + (Math.random() * 99999 | 0)).slice(-4);

    data.push({
        id,
        name,
        price
    });

    await persist();
}

async function deleteById(id) {
    const index = data.findIndex(p => p.id == id);
    data.splice(index, 1);

    await persist();
}

async function persist() {
    return new Promise((resolve, reject) => {
        fs.writeFile(
            './services/data.json',
            JSON.stringify(data, null, 2),
            (err) => {
                if (err == null) {
                    resolve();
                } else {
                    reject(err);
                }
            });
    });
}

module.exports = {
    getList,
    getById,
    create,
    deleteById
};
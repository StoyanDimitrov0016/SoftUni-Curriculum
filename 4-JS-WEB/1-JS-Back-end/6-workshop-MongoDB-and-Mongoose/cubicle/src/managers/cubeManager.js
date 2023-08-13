const uniqid = require('uniqid');


const fs = require('fs');

const cubes = JSON.parse(fs.readFileSync('./src/db.json'));


function getAll(search, from, to) {
    let result = cubes.slice();

    if (search) {
        result = cubes.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (from) {
        result = cubes.filter(c => c.difficultyLevel >= Number(from));
    }

    if (to) {
        result = cubes.filter(c => c.difficultyLevel <= Number(to));
    }

    return result;
};

function getById(id) {
    const cube = cubes.find(c => c.id == id);
    return cube;
};

async function create(cubeData) {
    const newCube = {
        id: uniqid(),
        ...cubeData
    };

    cubes.push(newCube);

    await persist();

    return newCube;
}

async function persist() {
    return new Promise((resolve, reject) => {
        console.log(cubes);
        fs.writeFile(
            './src/db.json',
            JSON.stringify(cubes, null, 2),
            (err) => {
                if (err == null) {
                    resolve();
                } else {
                    reject(err);
                }
            });
    });
}

module.exports = { getAll, getById, create };
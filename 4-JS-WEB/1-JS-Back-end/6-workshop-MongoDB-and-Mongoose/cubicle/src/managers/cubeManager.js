const Cube = require('../models/Cube');
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
    return Cube.findById(id);
};

async function create(cubeData) {
    const cube = new Cube(cubeData);
    await cube.save();
    return cube;
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
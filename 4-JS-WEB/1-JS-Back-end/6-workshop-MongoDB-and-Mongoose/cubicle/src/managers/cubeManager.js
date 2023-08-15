const Cube = require('../models/Cube');


async function getAll(search, from, to) {
    let result = await Cube.find().lean();
    //TODO: implement these filters in the query not here
    if (search) {
        result = result.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
    }
    
    if (from) {
        result = result.filter(c => c.difficultyLevel >= Number(from));
    }
    
    if (to) {
        result = result.filter(c => c.difficultyLevel <= Number(to));
    }
    
    // console.log('>>>>>>',result);
    return result;
};

function getById(id) {
    return Cube.findById(id);
};

async function create(cubeData) {
    const cube = new Cube(cubeData);
    await cube.save();
    console.log(cube);
    return cube;
}

module.exports = { getAll, getById, create };
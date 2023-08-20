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

    return result;
};

function getById(id) {
    return Cube.findById(id);
};

function getByIdWithAccessories(id) {
    return this.getById(id).populate('accessories');
}

async function create(cubeData) {
    const cube = new Cube(cubeData);
    return cube.save();
}

async function update(cubeId, cubeData) {
    return Cube.findByIdAndUpdate(cubeId, cubeData);
}

async function deleteById(cubeId) {
    return Cube.findByIdAndDelete(cubeId)
}

async function attachAccessory(cubeId, accessoryId) {
    const cube = await Cube.findById(cubeId);
    cube.accessories.push(accessoryId);

    await cube.save();

    return cube;
}

module.exports = {
    getAll,
    getById,
    create,
    attachAccessory,
    getByIdAndAccessories: getByIdWithAccessories, 
    deleteById,
    update
};
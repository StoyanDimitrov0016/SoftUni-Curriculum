const Electronic = require("../models/Electronic");

async function getAll() {
    return Electronic.find({}).lean();
}

async function getById(id) {
    return Electronic.findById(id).lean();
}

async function create(electronicData) {
    return await Electronic.create(electronicData);
}

async function update(electronicId, electronicData) {
    const existingElectronic = await Electronic.findById(electronicId);

    existingElectronic.name = electronicData.name;
    existingElectronic.type = electronicData.type;
    existingElectronic.damages = electronicData.damages;
    existingElectronic.imageUrl = electronicData.imageUrl;
    existingElectronic.description = electronicData.description;
    existingElectronic.production = electronicData.production
    existingElectronic.exploitation = electronicData.exploitation;
    existingElectronic.price = electronicData.price;

    await existingElectronic.save();
}

async function deleteById(id) {
    await Electronic.findOneAndRemove(id);
}

async function buy(userId, electronicId) {
    const existingElectronic = await Electronic.findById(electronicId);

    if (existingElectronic.buyingList.includes(userId)) {
        return;
    }

    existingElectronic.buyingList.push(userId);

    await existingElectronic.save();
}

async function search(name, type) {
    const founds = await Electronic.find({
        $and: [
            { name: { $regex: new RegExp(name, 'i') } },
            { type: { $regex: new RegExp(type, 'i') } }]
    }).lean();
    
    return founds;
}



module.exports = {
    getAll,
    update,
    getById,
    create,
    deleteById,
    buy,
    search
};
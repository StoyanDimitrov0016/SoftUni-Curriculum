const Hotel = require("../models/Hotel");


async function getAll() {
    return await Hotel.find({}).lean();
}

async function getById(id) {
    return await Hotel.findOne({ _id: id }).lean();
}

async function getByUserBooking(userId) {
    return Hotel.find({ bookings: userId }).lean();
}

async function create(hotel) {
    return await Hotel.create(hotel).lean();
}

async function update(id, hotel) {
    // return await Hotel.findByIdAndUpdate(id, { ...hotel });

    const existingHotel = await Hotel.findById(id);

    existingHotel.name = hotel.name;
    existingHotel.city = hotel.city;
    existingHotel.imageUrl = hotel.imageUrl;
    existingHotel.rooms = hotel.rooms;

    await existingHotel.save();
}

async function deleteById(id) {
    await Hotel.findByIdAndRemove(id);
}

async function bookRoom(hotelId, userId) {
    const hotel = await Hotel.findById(hotelId);

    hotel.bookings.push(userId);
    await hotel.save();
}

module.exports = {
    getAll,
    getById,
    getByUserBooking,
    create,
    update,
    deleteById,
    bookRoom
};
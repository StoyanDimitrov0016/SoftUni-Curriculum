const { create, getById, update } = require('../services/hotelService');
const { parseError } = require('../util/parser');
const hotelController = require('express').Router();


hotelController.get('/:id/details', async (req, res) => {
    const hotel = await getById(req.params.id);

    if (hotel.owner == req.user._id) {
        hotel.isOwner = true
    }

    res.render('booking/details', { title: 'Hotel Details', hotel });
});

hotelController.get('/create', (req, res) => {
    res.render('booking/create', { title: 'Create Hotel', user: req.user });
});

hotelController.post('/create', async (req, res) => {
    const hotel = {
        name: req.body.name,
        city: req.body.city,
        rooms: Number(req.body.rooms),
        imageUrl: req.body.imageUrl,
        owner: req.user._id
    };

    try {
        if (Object.values(hotel).some(v => !v)) {
            throw new Error('All fields must be filled in!');
        }

        await create(hotel);
        res.redirect('/');
    } catch (err) {
        res.render('booking/create', {
            title: 'Create Hotel',
            errors: parseError(err),
            body: hotel
        });
    }
});

hotelController.get('/:id/edit', async (req, res) => {
    const hotel = await getById(req.params.id);

    if (hotel.owner != req.user._id) {
        return res.redirect('/auth/login');
    }

    res.render('booking/edit', { title: 'Edit Hotel', hotel });
});

hotelController.post('/:id/edit', async (req, res) => {
    const hotelId = req.params.id
    const hotel = await getById(hotelId);

    if (hotel.owner != req.user._id) {
        return res.redirect('/auth/login');
    }

    const editedHotel = {
        name: req.body.name,
        city: req.body.city,
        rooms: req.body.rooms,
        imageUrl: req.body.imageUrl
    };

    try {
        if (Object.values(editedHotel).some(v => !v)) {
            throw new Error('All fields must be filled in!');
        }

        await update(hotelId, editedHotel);
        res.redirect(`/hotel/${hotelId}/details`);
    } catch (err) {
        res.render('booking/edit', {
            title: 'Create Hotel',
            errors: parseError(err),
            hotel: Object.assign(editedHotel, { _id: hotelId })
        });
    }

    res.render('booking/edit', { title: 'Edit Hotel', hotel });
});

module.exports = hotelController;
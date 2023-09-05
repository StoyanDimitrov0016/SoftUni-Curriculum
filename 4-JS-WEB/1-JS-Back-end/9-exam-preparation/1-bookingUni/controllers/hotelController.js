const { create } = require('../models/Hotel');
const { parseError } = require('../util/parser');
const hotelController = require('express').Router();


hotelController.get('/:id/details', (req, res) => {
    res.render('booking/details', { title: 'Hotel Details', user: req.user });
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

        const result = await create(hotel);
        res.redirect('/');
    } catch (err) {
        res.render('booking/create', {
            title: 'Create Hotel',
            errors: parseError(err),
            body: hotel
        });
    }
});

hotelController.get('/:id/edit', (req, res) => {
    res.render('booking/edit', { title: 'Edit Hotel', user: req.user });
});

module.exports = hotelController;
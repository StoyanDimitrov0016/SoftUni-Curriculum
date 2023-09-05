const { create, getById } = require('../services/hotelService');
const { parseError } = require('../util/parser');
const hotelController = require('express').Router();


hotelController.get('/:id/details', async (req, res) => {
    const hotel = await getById(req.params.id);
    console.log(hotel);
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
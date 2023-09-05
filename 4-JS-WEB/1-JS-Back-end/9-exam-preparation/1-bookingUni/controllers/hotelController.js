const hotelController = require('express').Router();


hotelController.get('/:id/details', (req, res) => {
    res.render('booking/details', { title: 'Hotel Details', user: req.user });
});

hotelController.get('/create', (req, res) => {
    res.render('booking/create', { title: 'Create Hotel', user: req.user });
});

hotelController.get('/:id/edit', (req, res) => {
    res.render('booking/edit', { title: 'Edit Hotel', user: req.user });
});

module.exports = hotelController;
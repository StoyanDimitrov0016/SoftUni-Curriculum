const catalogController = require('express').Router();
const electronicService = require('../services/electronicService');

catalogController.get('/', async (req, res) => {
    const electronics = await electronicService.getAll();

    res.render('catalog', { electronics });
});

module.exports = catalogController;
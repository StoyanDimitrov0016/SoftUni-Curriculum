const { register } = require('../services/userService');

const authController = require('express').Router();

authController.get('/register', (req, res) => {
    //TODO: replace with real register page
    res.render('register', { title: 'Register page' });
});

authController.post('/register', async(req, res) => {
    const token = await register(req.body.username, req.body.password);
    res.cookie('token', token);
    res.redirect('/auth/register');
});

module.exports = authController;

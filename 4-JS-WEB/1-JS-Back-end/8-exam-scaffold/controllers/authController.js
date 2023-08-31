const { Error } = require('mongoose');
const { register } = require('../services/userService');
const { parseError } = require('../util/parser');

const authController = require('express').Router();

authController.get('/register', (req, res) => {
    //TODO: replace with real register page
    res.render('register', { title: 'Register page' });
});

authController.post('/register', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const repass = req.body.repass;

    try {

        if (username === '' || password === '') {
            throw new Error('All fields must be filled!');
        }

        if (password !== repass) {
            throw new Error('Passwords must be the same!');
        }

        const token = await register(req.body.username, req.body.password);
        res.cookie('token', token);
        res.redirect('/auth/register');
    } catch (error) {
        const errors = parseError(error);
        
        //TODO: add error msg to actual page
        res.render('register', {
            title: 'Register Page',
            errors,
            body: { username }
        });
    }

});

module.exports = authController;

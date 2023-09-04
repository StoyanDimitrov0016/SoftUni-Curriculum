const { register, login } = require('../services/userService');
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

        const token = await register(username, password);

        //TODO: Check assignment to see if register has to create session
        res.cookie('token', token);
        res.redirect('/'); //TODO: Redirect by the assignment requirements
    } catch (error) {
        const errors = parseError(error);

        //TODO: Render the registration page with error messages
        res.render('register', {
            title: 'Register Page',
            errors,
            body: { username }
        });
    }

});

authController.get('/login', (req, res) => {
    res.render('login', { title: 'Log in Page' });
});

authController.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    try {
        const token = await login(username, password);;

        res.cookie('token', token);
        res.redirect('/'); //TODO: Redirect by the assignment requirements
    } catch (err) {
        const errors = parseError(err);
        res.render('login', {
            title: 'Log in Page',
            errors,
            body: { username: username }
        })
    }
});

module.exports = authController;

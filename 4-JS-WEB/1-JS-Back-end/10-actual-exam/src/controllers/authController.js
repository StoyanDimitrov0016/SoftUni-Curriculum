const { isGuest, hasUser } = require('../middlewares/guards');
const userService = require('../services/userService');
const { parseError } = require('../util/parser');

const authController = require('express').Router();

authController.get('/register', isGuest(), (req, res) => res.render('register'));

authController.post('/register', isGuest(), async (req, res) => {
    const { email, username, password, repass } = req.body;

    try {
        if (email.length < 10) {
            throw new Error('Your email length must be at least 10 characters long!');
        }

        if (username.length < 3) {
            throw new Error('Your username length must be at least 3 characters long!');
        }

        if (password.length < 4) {
            throw new Error('Your password must be at least 4 characters long!');
        }

        if (password !== repass) {
            throw new Error('Passwords must be the same!');
        }

        const token = await userService.register(email, username, password);

        res.cookie('token', token);
        res.redirect('/');
    } catch (error) {
        const errors = parseError(error);

        res.render('register', {
            errors,
            body: {
                email: req.body.email,
                username: req.body.username
            }
        });
    }
});

authController.get('/login', isGuest(), (req, res) => res.render('login'));

authController.post('/login', isGuest(), async (req, res) => {
    const { email, password } = req.body;

    try {
        if (email.length < 10) {
            throw new Error('Your email length must be at least 10 characters long!');
        }

        if (password.length < 4) {
            throw new Error('Your password must be at least 4 characters long!');
        }

        const token = await userService.login(email, password);

        res.cookie('token', token);
        res.redirect('/');
    } catch (error) {
        const errors = parseError(error);

        res.render('login', {
            errors,
            body: { email: req.body.email }
        });
    }
});

authController.get('/logout', hasUser(), (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});

module.exports = authController;
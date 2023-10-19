const { register, login } = require('../services/userService');
const { parseError } = require('../util/parser');

const authController = require('express').Router();

authController.get('/register', (req, res) => {
    res.render('register');
});

authController.post('/register', async (req, res) => {
    try {
        const { firstName, lastName, email, password, repass } = req.body;

        const isFieldEmpty = [firstName, lastName, email, password, repass].some(value => !value);

        if (isFieldEmpty) {
            throw new Error('All fields must be filled in!');
        }

        if (password.length < 4) {
            throw new Error('Password must be at least 4 characters long!');
        }

        if (password !== repass) {
            throw new Error('Passwords must be the same!');
        }

        const token = await register(firstName, lastName, email, password);

        res.cookie('token', token);
        res.redirect('/');
    } catch (error) {
        const errors = parseError(error);
        res.render('register', {
            errors,
            body: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email
            }
        });
    }
});

authController.get('/login', (req, res) => {
    res.render('login', { body: req.body });
});

authController.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const token = await login(email, password);

        res.cookie('token', token);
        res.redirect('/');
    } catch (error) {
        const errors = parseError(error);

        res.render('login', {
            errors,
            body: {
                email: req.body.email
            }
        });
    }
});

authController.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});

module.exports = authController;
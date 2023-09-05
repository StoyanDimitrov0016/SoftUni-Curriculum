const validator = require('validator');
const { register, login } = require('../services/userService');
const { parseError } = require('../util/parser');
const authController = require('express').Router();


authController.get('/register', (req, res) => {
    //TODO: replace with real register page
    res.render('user/register', { title: 'Register page' });
});

authController.post('/register', async (req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const repass = req.body.repass;

    try {
        if (validator.default.isEmail(email) == false) {
            throw new Error('Invalid email!');
        }

        if (username === '' || password === '') {
            throw new Error('All fields must be filled!');
        }

        if (password.length < 5) {
            throw new Error('Password must be at least 5 characters long!');
        }

        if (password !== repass) {
            throw new Error('Passwords must be the same!');
        }

        const token = await register(email, username, password);

        //TODO: Check assignment to see if register has to create session
        res.cookie('token', token);
        res.redirect('/'); //TODO: Redirect by the assignment requirements
    } catch (error) {
        const errors = parseError(error);

        //TODO: Render the registration page with error messages
        res.render('user/register', {
            title: 'Register Page',
            errors,
            body: {
                email,
                username
            }
        });
    }
});

authController.get('/login', (req, res) => {
    res.render('user/login', { title: 'Log in Page' });
});

authController.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const token = await login(email, password);;

        res.cookie('token', token);
        res.redirect('/'); //TODO: Redirect by the assignment requirements
    } catch (err) {
        const errors = parseError(err);
        //TODO add error display to actual template from assignment
        res.render('user/login', {
            title: 'Login Page',
            errors,
            body: { email }
        })
    }
});

authController.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});

module.exports = authController;

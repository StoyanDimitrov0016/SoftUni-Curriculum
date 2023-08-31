const authController = require('express').Router();

authController.get('/register', (req, res) => {
    //TODO: replace with real register page
    res.render('register', { title: 'Register page' });
});

authController.post('/register', (req, res) => {
    console.log(req.body);
    res.redirect('/auth/register');
});

module.exports = authController;

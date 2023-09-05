const profileController = require('express').Router();

profileController.get('/', (req, res) => {
    res.render('user/profile', { title: 'Profile Page', user: req.user });
});

module.exports = profileController;
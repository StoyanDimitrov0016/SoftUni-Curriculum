const postController = require('express').Router();

postController.get('/', (req, res) => {
    res.render('all-posts');
});

postController.get('/create', (req, res) => {
    res.render('create');
});

postController.get('/edit', (req, res) => {
    res.render('edit');
});

module.exports = postController;
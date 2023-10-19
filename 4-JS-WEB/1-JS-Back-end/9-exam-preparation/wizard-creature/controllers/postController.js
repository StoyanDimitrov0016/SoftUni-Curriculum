const { create, getAll, getById } = require('../services/animalService');
const { parseError } = require('../util/parser');

const postController = require('express').Router();

postController.get('/', async (req, res) => {
    const animals = await getAll();

    res.render('all-posts', { animals });
});

postController.get('/create', (req, res) => {
    res.render('create', { body: req.body });
});

postController.post('/create', async (req, res) => {
    const animal = {
        name: req.body.name,
        species: req.body.species,
        skinColor: req.body.skinColor,
        eyeColor: req.body.eyeColor,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        owner: req.user._id,
    }
    console.log(req.body.description);
    try {
        if (Object.values(animal).some(value => !value)) {
            throw new Error('All fields are required!');
        }

        await create(animal);
        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.render('create', {
            body: req.body,
            errors: parseError(error)
        });
    }
});

postController.get('/edit', (req, res) => {
    res.render('edit');
});

postController.post('/edit', (req, res) => {
    res.render('edit');
});

postController.get('/details/:id', async (req, res) => {
    const animal = await getById(req.params.id);

    console.log(animal);
    animal.authorNames = `${animal.owner.firstName} ${animal.owner.lastName}`;

    animal.isAuthor = animal.owner._id == req.user._id ? true : false;

    animal.isVoted = animal.votes.includes(req.user._id) ? true : false;

    res.render('details', { animal });
});

postController.get('/delete/:id', async (req, res) => {
    const animal = await getById(req.params.id);

    if (animal.owner != req.user._id) {
        return res.redirect('/auth/login');
    }

    await deleteById(req.params.id);
    res.redirect('/');
});

postController.get('/:id/book', async (req, res) => {
    const animal = await getById(req.params.id);

    try {
        if (animal.owner == req.user._id) {
            animal.isOwner = true;
            throw new Error('Cannot book your oun hotel!');
        }

        await bookRoom(req.params.id, req.user._id);
        res.redirect(`/hotel//details/${req.params.id}`);
    } catch (err) {
        req.render('details', {
            title: 'Hotel Details',
            hotel: animal,
            errors: parseError(err)
        });
    }
});

module.exports = postController;
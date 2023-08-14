const router = require('express').Router();

const cubeManager = require('../managers/cubeManager');

router.get('/create', (req, res) => {
    console.log(cubeManager.getAll())
    res.render('create');
});

router.post('/create', async (req, res) => {
    const { name,
        description,
        imageUrl,
        difficultyLevel
    } = req.body;

    await cubeManager.create({
        name,
        description,
        imageUrl,
        difficultyLevel: Number(difficultyLevel)
    });

    res.redirect('/');
});

router.get('/:cubeId/details', (req, res) => {
    const cubeId = req.params.cubeId;
    const cube = cubeManager.getById(cubeId);

    if (!cube) {
        res.redirect('/404');
    }

    res.render('details', cube);
});

module.exports = router;
const router = require('express').Router();

const cubeManager = require('../managers/cubeManager');
const accessoryManager = require('../managers/accessoryManager');

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
router.get('/:cubeId/details', async (req, res) => {
    const cubeId = req.params.cubeId;
    const cube = await cubeManager.getById(cubeId).lean();

    if (!cube) {
        res.redirect('/404');
    }

    res.render('details', cube);
});

router.get('/:cubeId/attach-accessories', async (req, res) => {
    const cubeId = req.params.cubeId;
    const cube = await cubeManager.getById(cubeId).lean();

    const accessories = await accessoryManager.getAll().lean();

    const hasAccessories = accessories.length > 0;

    res.render('accessory/attach', { cube, accessories, hasAccessories });
});

module.exports = router;
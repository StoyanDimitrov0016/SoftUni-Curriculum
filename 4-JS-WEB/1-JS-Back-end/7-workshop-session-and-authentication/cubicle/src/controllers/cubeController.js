const router = require('express').Router();

const cubeManager = require('../managers/cubeManager');
const accessoryManager = require('../managers/accessoryManager');

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {
    const user = req.user;
    
    const { name,
        description,
        imageUrl,
        difficultyLevel,
    } = req.body;
    
    await cubeManager.create({
        name,
        description,
        imageUrl,
        difficultyLevel: Number(difficultyLevel),
        owner: user._id
    });

    res.redirect('/');
});
router.get('/:cubeId/details', async (req, res) => {
    const cubeId = req.params.cubeId;
    const cube = await cubeManager.getByIdAndAccessories(cubeId).lean();

    if (!cube) {
        res.redirect('/404');
    }

    res.render('details', { cube });
});

router.get('/:cubeId/attach-accessories', async (req, res) => {
    const cubeId = req.params.cubeId;
    const cube = await cubeManager.getById(cubeId).lean();

    const accessories = await accessoryManager.getOthers(cube.accessories).lean();

    const hasAccessories = accessories.length > 0;

    res.render('accessory/attach', { cube, accessories, hasAccessories });
});

router.post('/:cubeId/attach-accessories', async (req, res) => {
    const { accessory: accessoryId } = req.body;
    const cubeId = req.params.cubeId;

    await cubeManager.attachAccessory(cubeId, accessoryId);

    res.redirect(`/cubes/${cubeId}/details`);
});

module.exports = router;
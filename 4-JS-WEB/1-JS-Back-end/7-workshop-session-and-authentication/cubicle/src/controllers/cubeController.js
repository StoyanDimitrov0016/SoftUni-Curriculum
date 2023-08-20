const router = require('express').Router();
const cubeManager = require('../managers/cubeManager');
const accessoryManager = require('../managers/accessoryManager');
const { getDifficultyLevelViewData } = require('../utils/viewHelpers');


router.get('/create', (req, res) => {
    res.render('cube/create');
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

    const userId = req.user._id;
    const isOwner = userId == cube.owner?.toString();

    res.render('cube/details', { cube, isOwner });
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

router.get('/:cubeId/delete', async (req, res) => {
    const cube = await cubeManager.getById(req.params.cubeId).lean();
    const options = getDifficultyLevelViewData(cube.difficultyLevel);

    res.render('cube/delete', { cube, options });
});

router.post('/:cubeId/delete', async (req, res) => {
    const cubeId = req.params.cubeId;
    await cubeManager.deleteById(cubeId);

    res.redirect('/');
});

router.get('/:cubeId/edit', async (req, res) => {
    const cube = await cubeManager.getById(req.params.cubeId).lean();
    const options = getDifficultyLevelViewData(cube.difficultyLevel);

    res.render('cube/edit', { cube, options });
});

router.post('/:cubeId/edit', async (req, res) => {
    const cubeId = req.params.cubeId;
    const cubeData = req.body;

    await cubeManager.update(cubeId, cubeData);

    res.redirect(`/cubes/${cubeId}/details`);
});

module.exports = router;
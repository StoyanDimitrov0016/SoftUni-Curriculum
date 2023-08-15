const router = require('express').Router();
const cubeManager = require('../managers/cubeManager');

router.get('/', async (req, res) => {
    const { search, from, to } = req.query;
    const cubes = await cubeManager.getAll(search, from, to);
    const ids = cubes.forEach(c => c.id)
    console.log(ids);

    res.render('index', { cubes, search, from, to });
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/404', (req, res) => {
    res.render('404');
});

module.exports = router;
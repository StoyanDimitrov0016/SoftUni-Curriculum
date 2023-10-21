const { hasUser } = require('../middlewares/guards');
const electronicService = require('../services/electronicService');
const { parseError } = require('../util/parser');

const electronicController = require('express').Router();

electronicController.get('/details/:id', async (req, res) => {
    const electronic = await electronicService.getById(req.params.id);

    const buyerIds = electronic.buyingList.map(b => b.toString());

    if (electronic.owner == req.user?._id) {
        electronic.isOwner = true;
    } else if (buyerIds.includes(req.user?._id.toString())) {
        electronic.isBought = true;
    }

    res.render('details', { electronic });
});

electronicController.get('/buy/:id', hasUser(), async (req, res) => {
    const electronicId = req.params.id;
    const userId = req.user._id;

    const electronic = await electronicService.getById(electronicId);

    if (!electronic.buyingList.includes(userId)) {
        await electronicService.buy(userId, electronic);
    }

    res.redirect(`/offer/details/${electronicId}`);
});


electronicController.get('/create', hasUser(), (req, res) => res.render('create'));

electronicController.post('/create', async (req, res) => {
    const electronic = {
        name: req.body.name,
        type: req.body.type,
        damages: req.body.damages,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        production: Number(req.body.production),
        exploitation: Number(req.body.exploitation),
        price: Number(req.body.price),
        owner: req.user._id
    };

    try {
        if (Object.values(electronic).some(value => !value)) {
            throw new Error('All fields must be filled in!');
        }

        await electronicService.create(electronic);
        res.redirect('/catalog');
    } catch (error) {
        res.render('create', {
            electronic,
            errors: parseError(error)
        });
    }
});

electronicController.get('/edit/:id', hasUser(), async (req, res) => {
    const electronic = await electronicService.getById(req.params.id);

    if (electronic.owner != req.user._id) {
        return res.redirect('/notfound');
    }

    res.render('edit', { electronic });
});

electronicController.post('/edit/:id', hasUser(), async (req, res) => {
    const electronicId = req.params.id;
    const electronic = await electronicService.getById(electronicId);

    if (electronic.owner != req.user._id) {
        return res.redirect('/notfound');
    }

    const editedElectronic = {
        name: req.body.name,
        type: req.body.type,
        damages: req.body.damages,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        production: Number(req.body.production),
        exploitation: Number(req.body.exploitation),
        price: Number(req.body.price),
        owner: req.user._id
    };

    try {
        if (Object.values(editedElectronic).some(value => !value)) {
            throw new Error('All fields must be filled in!')
        }

        await electronicService.update(electronicId, editedElectronic);
        res.redirect(`/offer/details/${electronicId}`);
    } catch (error) {
        res.render('edit', {
            electronic: Object.assign(editedElectronic, { _id: req.params.id }),
            errors: parseError(error)
        });
    }
});

electronicController.get('/delete/:id', hasUser(), async (req, res) => {
    const electronicId = req.params.id;
    const electronic = await electronicService.getById(electronicId);

    if (electronic.owner != req.user._id) {
        res.redirect('/notfound');
    } else {
        await electronicService.deleteById(electronicId);
        res.redirect('/catalog');
    }
});

electronicController.get('/search/', hasUser(), async (req, res) => {
    const electronics = await electronicService.getAll();
    res.render('search', { electronics });
});

electronicController.post('/search', hasUser(), async (req, res) => {
    const { name, type } = req.body;

    const foundElectronics = await electronicService.search(name, type);
    res.render('search', { electronics: foundElectronics, data: { name, type } });
});

module.exports = electronicController;
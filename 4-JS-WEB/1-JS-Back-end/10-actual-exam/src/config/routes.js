const homeController = require("../controllers/homeController");
const catalogController = require("../controllers/catalogController");
const authController = require("../controllers/authController");
const electronicController = require("../controllers/electronicsController");
const missingController = require("../controllers/missingPageController");

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/catalog', catalogController);
    app.use('/auth', authController);
    app.use('/offer', electronicController);
    app.use('*', missingController);
};
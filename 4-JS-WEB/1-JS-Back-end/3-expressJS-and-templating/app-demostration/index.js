const express = require('express');
const hbr = require('express-handlebars');


const homeController = require('./controllers/homeController');
const catalogController = require('./controllers/catalogController');
const createController = require('./controllers/createController');
const deleteController = require('./controllers/deleteController');

const handlebars = hbr.create({
    extname: '.hbs'
});

const app = express();

app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static('static'));

app.use(homeController);
app.use('/catalog', catalogController);
app.use('/create', createController);
app.use('/delete', deleteController);

app.listen(3000);
// the folder must be named views or we explicitly changed the settings in handlebars
//the render method will find the views folder and will match the given name with the
// html file from the folder and will render it
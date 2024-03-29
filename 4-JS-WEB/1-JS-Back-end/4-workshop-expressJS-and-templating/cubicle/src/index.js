const express = require('express');


const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const routes = require('./routes');

const app = express();
const PORT = 5000;

expressConfig(app);
handlebarsConfig(app);

app.use(routes);

app.listen(PORT);

//3 layer architecture
//controllers server layer data layer 

//mvs
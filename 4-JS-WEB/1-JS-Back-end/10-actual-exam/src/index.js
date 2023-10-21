const express = require('express');
const expressConfig = require('./config/express');
const databaseConfig = require('./config/database');
const routesConfig = require('./config/routes');
require('dotenv').config();

start();

async function start() {
    const app = express();

    expressConfig(app);
    await databaseConfig(app);
    routesConfig(app);

    const port = process.env.PORT;
    app.listen(port, () => console.log(`Server is listening on port: ${port}`));
}


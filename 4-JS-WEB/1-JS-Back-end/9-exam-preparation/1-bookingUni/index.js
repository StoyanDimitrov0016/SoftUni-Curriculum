const express = require('express');
const expressConfig = require('./config/express');
const databaseConfig = require('./config/database');
const routerConfig = require('./config/routes');

//TODO change port 
const port = 3000;

start();

async function start() {
    const app = express();

    expressConfig(app);
    await databaseConfig(app);
    routerConfig(app);

    app.listen(port, () => console.log(`Server is listening on port: ${port}`));
}
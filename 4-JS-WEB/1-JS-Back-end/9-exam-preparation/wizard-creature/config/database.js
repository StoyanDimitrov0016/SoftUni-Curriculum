const mongoose = require('mongoose');

module.exports = async (app) => {
    try {
        const connectionString = process.env.CONNECTION_STRING;

        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Database is connected successfully');
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};
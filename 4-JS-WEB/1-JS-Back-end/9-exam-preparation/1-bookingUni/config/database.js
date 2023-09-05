const mongoose = require('mongoose');


const dbName = 'booking-uni';
const CONNECTION_STRING = `mongodb://127.0.0.1:27017/${dbName}`;

module.exports = async (app) => {
    try {
        await mongoose.connect(CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Database connected');
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
};
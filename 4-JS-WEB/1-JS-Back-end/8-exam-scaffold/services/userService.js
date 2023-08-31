const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const JWT_SECRET = 'eba13b027f82a861ea3edc29a9e9435a';

async function register(username, password) {
    const existingUser = await User.findOne({ username })
        .collation({ locale: 'en', strength: 2 })
        .exec();

    if (existingUser) {
        throw new Error('This username is taken');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = User.create({
        username,
        hashedPassword
    });

    // TODO: Check if a session is required after registration, or if users should be
    // redirected to the login page to create a session.

    const token = createSession(user);
    return token;
}

async function login() {

}

function createSession(user) {
    const payload = {
        _id: user._id,
        username: user.username
    };

    const token = jwt.sign(payload, JWT_SECRET);
    return token;
}

function verifyToken() {

}

module.exports = {
    register,
    login,
    verifyToken
};

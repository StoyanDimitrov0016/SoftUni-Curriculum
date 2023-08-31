const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const JWT_SECRET = 'eba13b027f82a861ea3edc29a9e9435a';

//TODO: Check assignment fields for register - username, password etc.
async function register(username, password) {
    const existingUser = await User.findOne({ username }).collation({ locale: 'en', strength: 2 });

    if (existingUser) {
        throw new Error('This username is taken');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        username,
        hashedPassword
    });

    /* TODO: Check if a session is required after registration, or if users should be
     redirected to the login page to create a session.*/

    const token = createSession(user);
    return token;
}

//TODO: Check assignment fields for login - username, password etc.
async function login(username, password) {
    const user = await User.findOne({username}).collation({ locale: 'en', strength: 2 });

    if (!user) {
        throw new Error('Username or password is incorrect!');
    }

    const arePasswordsTheSame = await bcrypt.compare(password, user.hashedPassword);

    if (arePasswordsTheSame == false) {
        throw new Error('Username or password is incorrect!');
    }

    const token = createSession(username);
    return token;
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

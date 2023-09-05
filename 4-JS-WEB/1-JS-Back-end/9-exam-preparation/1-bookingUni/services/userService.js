const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const JWT_SECRET = 'eba13b027f82a861ea3edc29a9e9435a';

//TODO: Check assignment fields for register - username, password etc.
async function register(email, username, password) {
    const existingUsername = await User.findOne({ username }).collation({ locale: 'en', strength: 2 });

    if (existingUsername) {
        throw new Error('This username is taken');
    }

    const existingEmail = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });

    if (existingEmail) {
        throw new Error('This email is taken');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        email,
        username,
        hashedPassword
    });

    /* TODO: Check if a session is required after registration, or if users should be
     redirected to the login page to create a session.*/

    const token = createSession(user);
    return token;
}

//TODO: Check assignment fields for login - username, password etc.
async function login(email, password) {
    const user = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });

    if (!user) {
        throw new Error('Email or password is incorrect!');
    }

    const arePasswordsTheSame = await bcrypt.compare(password, user.hashedPassword);

    if (arePasswordsTheSame == false) {
        throw new Error('Email or password is incorrect!');
    }

    const token = createSession(user);
    return token;
}
//changed from "user"
function createSession({_id, email, username}) {
    const payload = {
        _id,
        email,
        username
    };

    const token = jwt.sign(payload, JWT_SECRET);
    return token;
}

function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET);
}

module.exports = {
    register,
    login,
    verifyToken
};

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

async function register(email, username, password) {
    const existingUsername = await User.findOne({ username }).collation({ locale: 'en', strength: 2 });

    if (existingUsername) {
        throw new Error('This username is already taken!');
    }

    const existingEmail = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });

    if (existingEmail) {
        throw new Error('This email is already taken!');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        email,
        username,
        hashedPassword
    });

    const token = createSession(user);

    return token;
}

async function login(email, password) {
    const existingUser = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });

    if (!existingUser) {
        throw new Error('Wrong email or password!');
    }

    const hasMatch = await bcrypt.compare(password, existingUser.hashedPassword);

    if (hasMatch == false) {
        throw new Error('Wrong email or password!');
    }

    const token = createSession(existingUser);
    return token;
}

function verifyToken(token) {
    const JWT_SECRET = process.env.JWT_SECRET;

    return jwt.verify(token, JWT_SECRET);
}

async function createSession({ _id, email, username }) {
    const JWT_SECRET = process.env.JWT_SECRET;

    const payload = {
        _id,
        email,
        username
    };

    const token = jwt.sign(payload, JWT_SECRET);
    return token;
}

module.exports = {
    register,
    login,
    verifyToken
};
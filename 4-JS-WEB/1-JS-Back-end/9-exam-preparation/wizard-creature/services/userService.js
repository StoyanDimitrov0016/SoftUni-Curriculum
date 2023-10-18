const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

async function register(firstName, lastName, email, password) {
    const existingUser = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });

    if (existingUser) {
        throw new Error('This email is already taken!');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        firstName,
        lastName,
        email,
        hashedPassword
    });

    //TODO: See if after register the user should be redirected to home, catalog or login page
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

async function createSession({ _id, email }) {
    const JWT_SECRET = process.env.JWT_SECRET;

    const payload = {
        _id,
        email,
        
    };

    const token = jwt.sign(payload, JWT_SECRET);
    return token;
}

module.exports = {
    register,
    login,
    verifyToken
}
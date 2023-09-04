const { Schema, model } = require('mongoose');

//TODO change the fields and their types, require and unique
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: [3, 'Username must be at least 3 characters long!']
    },
    hashedPassword: { type: String, required: true },
});

userSchema.index({ username: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);

module.exports = User;
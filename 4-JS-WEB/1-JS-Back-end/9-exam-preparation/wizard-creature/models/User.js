const { Schema, model } = require('mongoose');

//TODO: Make userSchema properties according to the assignment
const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        minlength: [3, 'First name should be at least 3 characters long!']
    },
    lastName: {
        type: String,
        required: true,
        minlength: [3, 'Last name should be at least 3 characters long!']
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [10, 'Username must be at least 10 characters long!']
    },
    hashedPassword: { type: String, required: true }
});

userSchema.index({ email: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);

module.exports = User;
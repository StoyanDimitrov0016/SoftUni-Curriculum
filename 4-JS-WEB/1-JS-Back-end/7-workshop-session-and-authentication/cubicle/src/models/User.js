const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: String,
    password: {
        type: String,
        // validate: {
        //     validator: function (value) {
        //         return this.repeatPassword === value;
        //     }, 
        //     message: 'The passwords must be the same.'
        // }
    }
});

userSchema.virtual('repeatPassword')
    .set(function (value) {
        if (value != this.password) {
            throw new mongoose.MongooseError('Passwords are not the same!');
        }
    });

userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
})

const User = mongoose.model('User', userSchema);

module.exports = User;
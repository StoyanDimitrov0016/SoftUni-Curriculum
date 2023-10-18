const { Schema, model } = require('mongoose');

//TODO: Make userSchema properties according to the assignment
const ANIMAL_IMAGE_PATTERN = /^https?:\/\/.+$/;

const animalSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: [2, 'Animal\'s name should be at least 2 characters long!']
    },
    species: {
        type: String,
        required: true,
        minlength: [3, 'Species name should be at least 3 characters long!']
    },
    imageUrl: {
        type: String,
        required: true,
        match: [ANIMAL_IMAGE_PATTERN, 'Invalid image URL']
    },
    skinColor: {
        type: String,
        required: true,
        minlength: [3, 'Skin color should be at least 3 characters long!']
    },
    eyeColor: {
        type: String,
        required: true,
        minlength: [3, 'Eye color should be at least 3 characters long!']
    },
    description: {
        type: String,
        required: true,
        minlength: [5, 'Description length must be between 5 and 500 characters long!'],
        maxlength: [500, 'Description length must be between 5 and 500 characters long!'],
    },
});

animalSchema.index({ name: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const Animal = model('Animal', animalSchema);

module.exports = Animal;
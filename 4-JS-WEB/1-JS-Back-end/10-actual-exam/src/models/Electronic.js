const { Schema, model, Types } = require('mongoose');

const URL_PATTERN = /^https?:\/\/.+$/i;

const electronicSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: [10, 'The electronic\'s name must be at least 10 characters long!']
    },
    type: {
        type: String,
        required: true,
        minlength: [2, 'The electronic\'s type must be at least 2 characters long!']
    },
    damages: {
        type: String,
        required: true,
        minlength: [10, 'The electronic\'s damages must be at least 10 characters long!']
    },
    imageUrl: {
        type: String,
        required: true, validate: {
            validator: (value) => URL_PATTERN.test(value),
            message: 'Image URL is not valid!'
        }
    },
    description: {
        type: String,
        required: true,
        minlength: [10, 'The electronic\'s description must be between 10 and 100 characters long!'],
        maxLength: [100, 'The electronic\'s description must be between 10 and 100 characters long!']
    },
    production: {
        type: Number,
        required: true,
        min: [1900, 'The electronic\'s production year must be between 1900 and 2023!'],
        max: [2023, 'The electronic\'s production year must be between 1900 and 2023!']
    },
    exploitation: {
        type: Number,
        required: true,
        min: [1, 'The electronic\'s exploitation must be a positive number!']
    },
    price: {
        type: String,
        required: true,
        min: [3, 'The electronic\'s price must be a positive number!']
    },
    buyingList: {
        type: [Types.ObjectId],
        ref: 'User',
        default: []
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User',
        required: true
    }
});

electronicSchema.index({ name: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const Electronic = model('Electronic', electronicSchema);

module.exports = Electronic;
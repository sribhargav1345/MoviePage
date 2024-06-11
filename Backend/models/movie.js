const mongoose = require('mongoose');
const { Schema } = mongoose;

const descriptionValidator = [
    {
        validator: function(value) {
            return value.split(/\s+/).filter(word => word.length > 0).length >= 50;
        },
        message: 'Description must be at least 50 words.'
    }
];

const MovieSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    picture:{
        type: String,
        required: true
    },
    short_description: {
        type: String,
        required: true
    },
    long_description: {
        type: String,
        required: true,
        validate: descriptionValidator
    },
    main: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Movie", MovieSchema);
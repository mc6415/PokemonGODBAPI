var mongoose = require('mongoose');

module.exports = mongoose.model('Sighting', {
    pokemon: {
        type: String,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    }
})

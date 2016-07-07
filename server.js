var mongoose = require('mongoose')
var express = require('express')
var app = express();
var bodyParser = require('body-parser')
var Sighting = require('./models/sighting.js')

mongoose.connect('mongodb://localhost:27017/PokemonGOSightings');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/api/addSighting', function (req, res) {
    var sighting = new Sighting();
    sighting.pokemon = req.body.pokemon;
    sighting.lat = req.body.lat;
    sighting.lng = req.body.lng;

    sighting.save();
})

app.get('/api/getSightings', function (req, res) {
    Sighting.find(function (err, data) {
        res.setHeader('Access-Control-Allow-Origin', null);
        res.json(data);
    })
})

app.listen(3000, function () {
    console.log("Server now listening on port 3000");
})

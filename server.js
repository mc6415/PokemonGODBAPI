var mongoose = require('mongoose')
var express = require('express')
var app = express();
var bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost:27017/PokemonGOSightings');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/api/addSighting', function (req, res) {
    console.log(req);
})

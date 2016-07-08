var mongoose = require('mongoose')
var express = require('express')
var app = express();
var bodyParser = require('body-parser')
var fs = require('fs')
var Sighting = require('./models/sighting.js')
var https = require('https')

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
        console.log(req.get('origin'));
        if (req.get('origin') == undefined) {
            res.setHeader('Access-Control-Allow-Origin', null)
        } else {
            res.setHeader('Access-Control-Allow-Origin', req.get('origin'));
        }


        res.json(data);
    })
})

https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}, app).listen(3000, function () {
    console.log("Server listening on port 3000")
})

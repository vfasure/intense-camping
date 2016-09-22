const PORT = process.env.PORT || 3000;

var _ = require('underscore');
var DB = require('./lib/db');
var express = require('express')

var app = express();
var bodyParser = require('body-parser')

app.use(express.static('public'));
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', function(req, res){
  res.render('index', { season: 'summer'});
});

app.get('/trips', function(req, res) {
  DB.queryTrips().then((trips) => {
      res.render('trips', trips);
    });
});

app.get('/reservations/new', function(req, res) {
  DB.queryTrips().then((trips) => {
    res.render('reservation', _.extend(trips, req.query));
  });
});

app.post('/reservations/new', function(req, res){
  DB.createReservation({
    name: req.body.name,
    email: req.body.email,
    trip_id: req.body.trip_id
  }).then(function() {
    res.status(201).send('Thanks! We’ll be in touch.');
  });
});

app.listen(PORT, function() {
  console.log(`Example app listening on port ${PORT}!`);
});

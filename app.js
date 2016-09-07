var express = require('express')
var app = express();

app.use(express.static('public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', function(req, res){
  res.render('index', { season: 'summer'});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
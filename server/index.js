var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var items = require('../database-mysql');
// var items = require('../database-mongo');
const models = require('../database-mysql/index.js');
var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(cors());
// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));
app.post('/api/scores', models.addScore);
app.post('/api/users', models.addUser);
app.get('/api/scores', models.getScores);
app.listen(3000, function() {
  console.log('listening on port 3000!');
});


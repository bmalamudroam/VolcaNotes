var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
var items = require('../database-mysql');
const models = require('../database-mysql/index.js');
var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(cors());

app.post('/api/scores', models.addScore);
app.post('/api/users', models.addUser);
app.get('/api/scores', models.getScores);
app.get('/api/challengesets', models.getChallengeSets);
app.get('/api/challenges/:challengeSetName', models.getQuestions);
app.post('/api/challenges', models.postChallengeSet);
app.listen(3000, function() {
  console.log('listening on port 3000!');
});


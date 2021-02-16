var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'pass',
  database : 'quizgame'
});

module.exports = {
  addUser: (req, res) => {
    const { username } = req.body;
    const queryString = `INSERT INTO users (username) VALUES ('${username}')`;
    connection.query(queryString, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    })
  },

  addScore: (req, res) => {
    const { username, score } = req.body;
    const queryString = `INSERT INTO scores (username, score) VALUES ('${username}', ${score})`;
    connection.query(queryString, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    })
  },

  getScores: (req, res) => {
    const queryString = `SELECT * FROM scores ORDER BY score DESC limit 8`;
    connection.query(queryString, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    })
  }
};

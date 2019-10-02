const express = require('express');
const data = require('./data');
const tournaments = require('./tournaments');

const app = express();
app.get('/api/players/:type', function(req, res) {
  res.send(data[req.params.type]);
});

app.get('/api/tournaments/:type', function(req, res) {
  res.send(tournaments[req.params.type]);
});
app.listen(3002, function() {
  console.log('i am listening on port 3002');
});

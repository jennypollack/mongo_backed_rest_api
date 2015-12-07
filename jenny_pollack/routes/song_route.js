var express = require('express');
var bodyParser = require('body-parser');
var Song = require(__dirname + '/../models/song');
var error = require(__dirname + '/../lib/error');

var songRouter = module.exports = exports = express.Router();

//not sure why this is here or what it does
songRouter.get('/', function(req, res){
  res.sendFile(__dirname + '/../public/index.html');
});

songRouter.get('/songs', function(req, res) {
  Song.find({}, function(err, data) {
    if (err) return error(err, res);
    res.json(data);
  });
});

songRouter.post('/songs', bodyParser.json(), function(req, res) {
  var newSong = new Song(req.body);
  newSong.save(function(err, data) {
    if (err) return handleError(err, res);

    res.json(data);
  });
});

songRouter.put('/songs/:id', bodyParser.json(), function(req, res) {
  var songData = req.body;
  delete songData._id;
  Song.update({_id: req.params.id}, songData, function(err, data) {
    if (err) return handleError(err, res);

    res.json({msg: 'success!'});
  });
});

songRouter.delete('/songs/:id', function(req, res) {
  Song.remove({_id: req.params.id}, function(err) {
    if (err) return handleError(err, res);

    res.json({msg: 'success!'});
  });
});
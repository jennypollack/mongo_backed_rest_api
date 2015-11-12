var express = require('express');
var bodyParser = require('body-parser');
var Playlist = require(__dirname + '/../models/playlist');
var error = require(__dirname + '/../lib/error');

var playlistRouter = module.exports = exports = express.Router();

playlistRouter.get('/playlist', function(req, res) {
  Playlist.find({}, function(err, data) {
    if (err) return error(err, res);

    res.json(data);
  });
});

var mongoose = require('mongoose');

var playlistSchema = new mongoose.Schema({
  title: String,
  artist: String
});

module.exports = mongoose.model('Playlist', playlistSchema);

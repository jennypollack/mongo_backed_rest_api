var mongoose = require('mongoose');

var songSchema = new mongoose.Schema({
	title: String,
	artist: String
});

module.exports = mongoose.model('Song', songSchema);

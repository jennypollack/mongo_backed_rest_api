var mongoose = require('mongoose');
var express = require('express');
var app = express();
var songRouter = require(__dirname + '/routes/song_route');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/songs_dev');

app.use(express.static(__dirname + '/public/'));

app.use('/api', songRouter);

app.listen(process.env.PORT || 3000, function() {
  console.log('server up');
});


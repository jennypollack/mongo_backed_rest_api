var mongoose = require('mongoose');
var express = require('express');
var app = express();
var playlistRouter = require(__dirname + '/routes/playlist_route');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/business_hours_dev');

app.use('/api', hoursRouter);

app.listen(process.env.PORT || 3000, function() {
  console.log('server up');
});
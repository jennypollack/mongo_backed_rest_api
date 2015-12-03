var mongoose = require('mongoose');
var express = require('express');
var app = express();
var songRouter = require(__dirname + '/routes/song_route');
var authRouter = require(__dirname + '/routes/auth_routes');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/songs_dev');
process.env.APP_SECRET = process.env.APP_SECRET || 'changemechangemechangeme';
//app.use(express.static(__dirname + '/public/'));
app.use(express.static(__dirname + '/build'));

app.use('/api', songRouter);
app.use('/api', authRouter); 

app.listen(process.env.PORT || 3000, function() {
  console.log('server up');
});


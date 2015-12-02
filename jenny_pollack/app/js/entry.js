require('angular/angular');
var angular = window.angular;

var songsApp = angular.module('SongsApp', []);
//require('./controllers/controllers')(bearStreamApp);
require('./songs/songs')(songsApp);
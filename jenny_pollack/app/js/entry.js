require('angular/angular');
var angular = window.angular;

var songsApp = angular.module('SongsApp', []);
//require('./controlalers/controllers')(bearStreamApp);
require('./songs/songs')(songsApp);
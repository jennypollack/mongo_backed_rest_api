require('angular/angular');
var angular = window.angular;

var songsApp = angular.module('SongsApp', []);
//require('./controlalers/controllers')(bearStreamApp);
require('./directives/directives')(songsApp); 
require('./songs/songs')(songsApp);
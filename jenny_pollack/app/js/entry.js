require('angular/angular');
require('angular-route');
var angular = window.angular;

var songsApp = angular.module('SongsApp', ['ngRoute']);

require('./filters/filters')(songsApp);
require('./services/services')(songsApp);
require('./controllers/controllers')(songsApp);
require('./directives/directives')(songsApp);

require('./songs/songs')(songsApp);


songsApp.config(['$routeProvider', function($route) {
  $route
    .when('/songs', {
      templateUrl: '/templates/songs_view.html',
      controller: 'SongsController'
    })
    .otherwise({
      redirectTo: '/songs'
    })
}]);
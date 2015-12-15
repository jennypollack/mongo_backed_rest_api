module.exports = function(app) {
  app.controller('SongsController', ['$scope', '$http', 'cfResource', function($scope, $http, cfResource) {
    $scope.songs = [];
    $scope.errors = [];
    $scope.defaults = {title: 'yellow submarine', artist: 'the beatles'};
    $scope.newSong = angular.copy($scope.defaults);
    $scope.messageOne = "hello from inside the controller";
    var songsResource = cfResource('songs');

    //$scope.newSong = null;
    //$scope.saveSong = null;

    $scope.getAll = function() {
      songsResource.getAll(function(err, data) {
        if (err) return err;

        $scope.songs = data;
      });
    };

    $scope.create = function(song) {
      songsResource.create(song, function(err, data){
        if (err) return err;
        $scope.songs.push(data);
        $scope.newSong = angular.copy($scope.defaults); 
      });
    };

    $scope.update = function(song){
      song.editing = false; 
      $http.put('/api/songs/' + song._id, song)
        .then (function(res){
        console.log('this song has a new title');
      }, function(err) {
        $scope.errors.push('could not change title');
        console.log(err.data);
      });
    };

    $scope.edit = function (song) {
      //console.log($scope);
      song.editing = true;
      $scope.copy = angular.copy($scope.data);
    };

    $scope.cancel = function () {
      song.editing = false;
      $scope.data = $scope.copy;
      console.log($scope)
      $scope.newSong = song;
      
    };
    $scope.remove = function(song) {
      $scope.songs.splice($scope.songs.indexOf(song), 1); 
      $http.delete('/api/songs/' + song._id)
       .then(function(res){
        console.log('song deleted'); 
       },
       function(err){
        console.log(err.data); 
        $scope.errors.push('could not remove ' + song.title); 
        $scope.getAll(); 
       });
    };
    
  }]);
};


module.exports = function(app) {
  app.controller('SongsController', ['$scope', '$http', function($scope, $http) {
    $scope.songs = [];
    $scope.errors = []; 
    var defaults = {title: 'songtitle', artist: 'the beatles'};

    $scope.newSong = Object.create(defaults);

    $scope.getAll = function() {
      $http.get('/api/songs')
        .then(function(res) {
          $scope.songs = res.data;
        }, function(err) {
          console.log(err.data);
        });
    };

    $scope.create = function(song) {
      $http.post('/api/songs', song)
        .then(function(res){
          $scope.songs.push(res.data);
          $scope.newSong = Object.create(defaults);
      }, function(err) {
          console.log(err.data); 
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

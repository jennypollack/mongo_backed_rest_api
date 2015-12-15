require(__dirname + '/../../app/js/entry');
require('angular-mocks');

describe('songs controller', function() {
  var $httpBackend;
  var $ControllerConstructor;
  var $scope;

  beforeEach(angular.mock.module('SongsApp'));

  beforeEach(angular.mock.inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    $ControllerConstructor = $controller;
  }));

  it('should be able to create a controller', function() {
    var controller = $ControllerConstructor('SongsController', {$scope: $scope});
    expect(typeof $scope).toBe('object');
    expect(typeof controller).toBe('object');
    expect(Array.isArray($scope.songs)).toBe(true);
  });

  it('should be able to cancel editing', function(){
    var controller = $ControllerConstructor('SongsController', {$scope: $scope});
    $scope.songs.push({_id:1, title: 'test song'});
    var song = $scope.songs[0];
    expect(song.title).toBe('test song');
    $scope.editSong(song);
    expect(song.editing).toBe(true);
  });
});

module.exports = function(app) {
  app.directive('songTranscludeDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: '/templates/song_transclude_directive.html',
      transclude: true,
      scope: {
        messageOne: '@'
      }
    }
  });
};

module.exports = function(app) {
  app.directive('songFormDirective', function() {
    return {
      restrict: 'AC',
      replace: true,
      templateUrl: 'templates/song_form_template.html',
      transclude: true,
      scope: {
        buttonText: '@',
        headingText: '@',
        formName: '@',
        song: '=',
        save: '&'
      }    
    }
  });
};

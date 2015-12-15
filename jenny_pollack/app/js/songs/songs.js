module.exports = function(app) {
  require('./controllers/songs_controller')(app);
  require('./directives/song_directive')(app);
  require('./directives/song_transclude_directive')(app);
  require('./directives/song_form_directive')(app);
};

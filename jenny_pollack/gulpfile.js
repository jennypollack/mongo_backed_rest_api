var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var webpack = require('webpack-stream');
var minifyCss = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
var gulpWatch = require('gulp-watch');

var appFiles = ['index.js', 'lib/**/*.js', 'bin/**/*.js', 'models/**/*.js', 'routes/**/*.js'];
var testFiles = ['./test/**/*.js'];
var cssFiles = ['']

gulp.task('css:dev', function(){
  return gulp.src([
    'app/css/base.css',
    'app/css/layout.css',
    'app/css/module.css'])
    .pipe(concatCss('styles.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('build/'));
});

gulp.task('css:watch', function(){
  gulp.watch('./app/css/**/*.css', ['css:dev']);
});

gulp.task('jshint:test', function() {
  return gulp.src(testFiles)
    .pipe(jshint({
      node: true,
      globals: {
        describe: true,
        it: true,
        before: true,
        after: true
      }
    }))
    .pipe(jshint.reporter('default'));
});

gulp.task('jshint:app', function() {
  return gulp.src(appFiles)
    .pipe(jshint({
      node: true
    })) 
    .pipe(jshint.reporter('default'));
});

gulp.task('mocha', function(){
  return gulp.src(testFiles)
    .pipe(jshint({
      node: true,
      globals: {
        describe: true,
        it: true
      }
    }))
    .pipe(mocha({reporter: 'spec'}));
});

gulp.task('static:dev', function() {
  gulp.src('app/**/*.html')
  .pipe(gulp.dest('build/'));
});

gulp.task('webpack:dev', function() {
  return gulp.src('app/js/entry.js')
  .pipe(webpack({
    output: {
      filename: 'bundle.js'
    }
  }))
  .pipe(gulp.dest('build/'));
});

gulp.task('build:dev', ['webpack:dev', 'static:dev', 'css:dev']);
gulp.task('jshint', ['jshint:test', 'jshint:app']);
gulp.task('default', ['jshint', 'mocha', 'build:dev']);
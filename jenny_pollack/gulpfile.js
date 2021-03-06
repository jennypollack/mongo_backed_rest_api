// var gulp = require('gulp');
// var jshint = require('gulp-jshint');
// var mocha = require('gulp-mocha');
// var webpack = require('webpack-stream');
// var minifyCss = require('gulp-minify-css');
// var concatCss = require('gulp-concat-css');
// var gulpWatch = require('gulp-watch');
// var sass = require('gulp-sass');
// var maps = require('gulp-sourcemaps');

// var appFiles = ['index.js', 'lib/**/*.js', 'bin/**/*.js', 'models/**/*.js', 'routes/**/*.js'];
// //how do i get it to not lint the test bundle
// var testFiles = ['./test/**/*.js'];
// var cssFiles = ['app/css/*.css']

// gulp.task('css:dev', function(){
//   return gulp.src([
//     'app/css/base.css',
//     'app/css/layout.css',
//     'app/css/module.css',
//     'app/css/state.css'])
//     .pipe(concatCss('styles.min.css'))
//     .pipe(minifyCss())
//     .pipe(gulp.dest('build/'));
// });

// gulp.task('css:watch', function(){
//   gulp.watch('./app/css/**/*.css', ['css:dev']);
// });

// gulp.task('sass:dev', function() {
//     gulp.src('./app/sass/application.scss')
//     .pipe(maps.init())
//     .pipe(sass().on('error', sass.logError))
//     .pipe(minifyCss())
//     .pipe(maps.write('./'))
//     .pipe(gulp.dest('build/'));
// });


// gulp.task('jshint:test', function() {
//   return gulp.src(testFiles)
//     .pipe(jshint({
//       node: true,
//       globals: {
//         describe: true,
//         it: true,
//         before: true,
//         after: true
//       }
//     }))
//     .pipe(jshint.reporter('default'));
// });

// gulp.task('jshint:app', function() {
//   return gulp.src(appFiles)
//     .pipe(jshint({
//       node: true
//     })) 
//     .pipe(jshint.reporter('default'));
// });

// gulp.task('mocha', function(){
//   return gulp.src(testFiles)
//     .pipe(jshint({
//       node: true,
//       globals: {
//         describe: true,
//         it: true
//       }
//     }))
//     .pipe(mocha({reporter: 'spec'}));
// });

// gulp.task('static:dev', function() {
//   gulp.src('app/**/*.html')
//   .pipe(gulp.dest('build/'));
// });

// gulp.task('webpack:dev', function() {
//   return gulp.src('app/js/entry.js')
//   .pipe(webpack({
//     output: {
//       filename: 'bundle.js'
//     }
//   }))
//   .pipe(gulp.dest('build/'));
// });

// gulp.task('webpack:test', function() {
//   return gulp.src('test/client/test_entry.js')
//   .pipe(webpack({
//     output: {
//       filename: 'test_bundle.js'
//     } 
//   }))
//   .pipe(gulp.dest('test/client/'));
// });

// gulp.task('sass', ['sass:dev']);
// gulp.task('build:dev', ['webpack:dev', 'static:dev', 'sass:dev']);
// gulp.task('webpack', ['webpack:dev', 'webpack:test']);
// gulp.task('jshint', ['jshint:test', 'jshint:app']);
// gulp.task('default', ['jshint', 'mocha', 'build:dev']);

var gulp = require('gulp');
var webpack = require('webpack-stream');

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

gulp.task('webpack:test', function() {
  return gulp.src('test/client/test_entry.js')
  .pipe(webpack({
    output: {
      filename: 'test_bundle.js'
    } 
  }))
  .pipe(gulp.dest('test/client/'));
});

gulp.task('build:dev', ['webpack:dev', 'static:dev']);
gulp.task('default', ['build:dev']);

var gulp = require('gulp');
var gls = require('gulp-live-server');

gulp.task('default', ['server'], function() {
});

gulp.task('server', function() {
  var server = gls('server.js');
  server.start();
})

var gulp = require('gulp');
var gls = require('gulp-live-server');
var bs = require('browser-sync').create();

gulp.task('default', ['server', 'browser-sync'], function() {
});

gulp.task('server', function() {
  var server = gls('server.js');
  server.start();
})

gulp.task('browser-sync', function() {
  bs.init({
    proxy: "http://localhost:1337"
  });
});

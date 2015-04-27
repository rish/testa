var gulp = require('gulp');
var gls = require('gulp-live-server');
var bs = require('browser-sync').create();

// TODO
// Set up a seperate server for the view layer and have server.js as
// a pure service layer that connects to the RethinkDB driver.
// The view layer will take advantage of Browser Sync's awesomeness
// Possibly use nodemon or pm2 to run the service layer

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

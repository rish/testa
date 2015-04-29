var gulp = require('gulp');
var bs = require('browser-sync').create();
var nodemon = require('gulp-nodemon');

// TODO
// Set up a seperate server for the view layer and have server.js as
// a pure service layer that connects to the RethinkDB driver.
// The view layer will take advantage of Browser Sync's awesomeness
// Possibly use nodemon or pm2 to run the service layer

gulp.task('default', ['server', 'browser-sync'], function() {
});

gulp.task('server', function() {
  nodemon({
    script: 'server.js',
    ext: 'js'
  });
})

gulp.task('browser-sync', function() {
  bs.init({
    server: {
      baseDir: 'app/views',
      index: 'layout.html'
    }
  });
});

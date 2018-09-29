var gulp = require('gulp');
var browserSync = require('browser-sync');
var harp = require('harp');

gulp.task('serve', function () {
  harp.server('.', {
    port: 9000
  }, function() {
    browserSync.init({
      proxy: "localhost:9000"
    });
  });
});

gulp.task('watch', function () {
  gulp.watch("**/*.jade", browserSync.reload);
  gulp.watch("css/*.sass", browserSync.reload);
});

gulp.task('default', ['serve', 'watch']);
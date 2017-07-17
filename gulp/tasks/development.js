import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('dev', ['clean'], function(cb) {

  global.isProd = false;

  // runSequence(['styles', 'images', 'fonts', 'translate', 'views', 'process-html'], 'browserify', 'watch', cb);
  runSequence(['styles', 'images', 'fonts', 'views', 'process-html'], 'browserify', 'watch', cb);

});

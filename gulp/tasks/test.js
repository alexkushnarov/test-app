import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('test', function() {

  return runSequence('unit', 'protractor',
	(err) => {
     if (err) {
      let exitCode = 2;
      console.log('[ERROR] gulp build task failed', err);
      console.log('[FAIL] gulp build task failed - exiting with code ' + exitCode);
      return process.exit(exitCode);
    }
  });

});

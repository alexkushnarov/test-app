import config from '../config';
import gulp   from 'gulp';
import del    from 'del';

gulp.task('clean', function() {
  // not delete directory but remove files in it
  const dir = `${config.buildDir}/**/*`;
  return del([dir]);
});

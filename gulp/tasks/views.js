import gulp          from 'gulp';
import merge         from 'merge-stream';
import templateCache from 'gulp-angular-templatecache';
import config        from '../config';

// Views task

gulp.task('views',['process-html'] ,function() {

  // Put our index.html in the dist folder
  // const indexFile = gulp.src(config.views.index)
  //   .pipe(gulp.dest(config.buildDir));


  // Process any other view files from app/views
  return gulp.src(config.views.src)
    .pipe(templateCache({
      standalone: true
    }))
    .pipe(gulp.dest(config.views.dest));

  //return merge(indexFile, views);
  return views;

});

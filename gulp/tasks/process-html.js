'use strict';

import gulp from 'gulp';
import browserSync from 'browser-sync';
import usemin from 'gulp-usemin';
import uglify from 'gulp-uglify';
import cleanCSS from 'gulp-clean-css';
import changed from 'gulp-changed';
import version from 'gulp-version-number';
import config from '../config';

gulp.task('process-html', () => {
  return gulp.src(config.views.index)
    .pipe(usemin({
      js: [
        uglify()
          .on('error', err => {
            console.error('Error in process-html uglify task', err.toString());
          })
      ],
      css: [
        cleanCSS()
          .on('error', err => {
            console.error('Error in process-html css task', err.toString());
          })
      ]
    }))
    .pipe(version(config.versionConfig))
    .pipe(gulp.dest(config.buildDir))
    .pipe(browserSync.stream());
});

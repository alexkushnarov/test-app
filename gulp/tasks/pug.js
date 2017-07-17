import config from '../config';
import gulp   from 'gulp';
import pug from 'gulp-pug';
//import path from 'path';
import htmlbeautify from 'gulp-html-beautify';


gulp.task('pug', function (done) {
  var options = {
    //config.htmlBeautifyOptions
    indentSize: 2
  };
  gulp.src(config.views.pug)
      .pipe(pug())
      //.pipe(gulp.dest(callback))
      .pipe(htmlbeautify(options))
      .pipe(gulp.dest(config.sourceDir + 'views/'))
      .on('end', done);
});

// function callback(file) {
//   if (file.path.search('index') !== -1) {
//     return config.sourceDir;
//   }
//   var folder = path.basename(file.path).replace(/\..*html/, '/');
//   return config.sourceDir + 'views/'+ folder;
// }

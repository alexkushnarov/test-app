import url         from 'url';
import browserSync from 'browser-sync';
import gulp        from 'gulp';
import config      from '../config';
import AppSettings from '../../app/js/constants.js';

gulp.task('browserSync', function () {

  const DEFAULT_FILE = 'index.html';
  const ASSET_EXTENSION_REGEX = new RegExp(`\\b(?!\\?)\\.(${config.assetExtensions.join('|')})\\b(?!\\.)`, 'i');

  browserSync.init({
    server: {
      baseDir: config.buildDir,
      middleware: [
          function (req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            next();
          },
          // {
          //     route: "/auth/instagram",
          //     handle: function (req, res, next) {
          //       res.end();
          //     }
          // },
          // {
          //     route: "/auth/soundcloud",
          //     handle: function (req, res, next) {
          //       res.end();
          //     }
          // },
          // {
          //     route: "/auth/youtube",
          //     handle: function (req, res, next) {
          //       res.end();
          //     }
          // },
          // {
          //     route: "/auth/twitter",
          //     handle: function (req, res, next) {
          //       res.end(JSON.stringify({"oauth_token":"SbSObwAAAAAAV4-IAAABVs0ro30","oauth_token_secret":"KsYTfGhzhZ3p8CiSFmt9dWHonnPhkICK","oauth_callback_confirmed":"true"}));
          //     }
          // },
          // {
          //     route: "/auth/facebook",
          //     handle: function (req, res, next) {
          //       res.end();
          //     }
          // },
          // function (req, res, next) {
          //   let fileHref = url.parse(req.url).href;
          //   if ( !ASSET_EXTENSION_REGEX.test(fileHref) ) {
          //     req.url = '/' + DEFAULT_FILE;
          //   }
          //   return next();
          // }
      ]
    },
  	port: config.browserPort,
  	ui: {
    	port: config.UIPort
    },
    ghostMode: {
      links: false
    }
  });

});

const BUILD_ID = process.env.BUILD_ID || '1';
const BUILD_ID_KEY = process.env.BUILD_ID_KEY || 'b_v';

export default {

  browserPort: 3000,
  UIPort: 3001,
  testPort: 3002,
  BUILD_ID,
  BUILD_ID_KEY,

  sourceDir: './app/',
  buildDir: './build/',

  versionConfig: {
    'value': BUILD_ID,
    'append': {
      'key': BUILD_ID_KEY,
      'to': ['css', 'js', 'image'],
    }
  },

  styles: {
    src: 'app/styles/**/*.scss',
    dest: 'build/css',
    prodSourcemap: false,
    sassIncludePaths: []
  },

  scripts: {
    src: 'app/js/**/*.js',
    dest: 'build/js',
    test: 'test/**/*.js',
    gulp: 'gulp/**/*.js'
  },

  images: {
    src: 'app/images/**/*',
    dest: 'build/images'
  },

  fonts: {
    src: ['app/fonts/**/*'],
    dest: 'build/fonts'
  },

  locales: {
    src: ['app/locales/**/*'],
    dest: 'build/locales'
  },

  assetExtensions: [
    'js',
    'css',
    'png',
    'jpe?g',
    'gif',
    'svg',
    'eot',
    'otf',
    'ttc',
    'ttf',
    'woff2?'
  ],

  views: {
    pug: 'templates.pug/**/*.pug',
    index: 'app/index.html',
    src: 'app/views/**/*.html',
    dest: 'app/js'
  },

  gzip: {
    src: 'build/**/*.{html,xml,json,css,js,js.map,css.map}',
    dest: 'build/',
    options: {}
  },

  browserify: {
    bundleName: 'main.js',
    prodSourcemap: false
  },

  test: {
    karma: 'test/karma.conf.js',
    protractor: 'test/protractor.conf.js'
  },

//   htmlBeautifyOptions: {
//     indent_size: 4,
//     indent_char: " ",
//     eol: "\n",
//     indent_level: 0,
//     indent_with_tabs: false,
//     preserve_newlines: true,
//     max_preserve_newlines: 10,
//     jslint_happy: true,
//     space_after_anon_function: true,
//     brace_style: "collapse",
//     keep_array_indentation: true,
//     keep_function_indentation: false,
//     space_before_conditional: true,
//     break_chained_methods: false,
//     eval_code: false,
//     unescape_strings: false,
//     wrap_line_length: 0,
//     wrap_attributes: "auto",
//     wrap_attributes_indent_size: 4,
//     end_with_newline: false
// },

  init: function () {
    this.views.watch = [
      this.views.index,
      this.views.src
    ];

    return this;
  }

}.init();

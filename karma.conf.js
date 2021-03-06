// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      "client/bower_components/angular/angular.js",
      "client/bower_components/json3/lib/json3.js",
      "client/bower_components/es5-shim/es5-shim.js",
      "client/bower_components/jquery/dist/jquery.js",
      "client/bower_components/angular-resource/angular-resource.js",
      "client/bower_components/angular-cookies/angular-cookies.js",
      "client/bower_components/angular-sanitize/angular-sanitize.js",
      "client/bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
      "client/bower_components/lodash/dist/lodash.compat.js",
      "client/bower_components/angular-ui-router/release/angular-ui-router.js",
      "client/bower_components/Sortable/Sortable.js",
      "client/bower_components/Sortable/ng-sortable.js",
      "client/bower_components/angular-touch/angular-touch.js",
      "client/bower_components/angular-file-upload/angular-file-upload.js",
      "client/bower_components/cropper/dist/cropper.js",
      "client/bower_components/ng-cropper/dist/ngCropper.all.js",
      "client/bower_components/modernizr/modernizr.js",
      "client/bower_components/bootstrap/dist/js/bootstrap.js",
      "client/bower_components/validator-js/validator.js",
      "client/bower_components/angular-toastr/dist/angular-toastr.tpls.js",
      "client/bower_components/angular-translate/angular-translate.js",
      "client/bower_components/trumbowyg/dist/trumbowyg.js",
      "client/bower_components/angular-relative-date/angular-relative-date.js",
      'client/bower_components/angular-mocks/angular-mocks.js',
      'client/app/app.js',
      'client/app/**/*.{js,css,html,jade}',
      'client/components/**/*.{js,css,html,jade}'
    ],

    preprocessors: {
      '**/*.jade': 'ng-jade2js',
      '**/*.html': 'html2js',
      '**/*.coffee': 'coffee',
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'client/'
    },

    ngJade2JsPreprocessor: {
      stripPrefix: 'client/'
    },

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_DISABLE,

    reporters: ['spec'],



    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};

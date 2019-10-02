const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const sass = require('gulp-sass');
const gulp = require('gulp');
const smaps = require('gulp-sourcemaps');
const bsync = require('browser-sync').create();
const url = require('url');
const proxy = require('http-proxy-middleware');

sass.compiler = require('node-sass');

function css() {
  return gulp
    .src('./client/scss/index.scss')
    .pipe(smaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(smaps.write())
    .pipe(gulp.dest('./client/css'))
    .pipe(bsync.stream());
}

function defaultTask(cb) {
  var proxyServer = proxy('/api/**', {
    target: 'http://localhost:3002/',
    changeOrigin: true,
    logLevel: 'debug',
  });
  bsync.init({
    server: {
      baseDir: './client',
      middleware: [proxyServer],
    },
    port: 3000,
    host: '192.168.8.103',
  });
  gulp.watch('./client/scss/**/*.scss', css);
  gulp.watch('./client/index.html').on('change', bsync.reload);
  cb();
}

exports.css = css;
exports.default = defaultTask;

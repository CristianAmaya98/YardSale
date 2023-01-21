const { series, parallel, src, dest, watch } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const connect = require('gulp-connect');
const cssmin = require('gulp-cssmin');
const htmlmin = require('gulp-htmlmin');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const eslint = require('gulp-eslint');

const babelify = require('babelify');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');
const uglify = require('gulp-uglify');

const paths = {
  src: {
    eslint: './src',
    css: './src/styles/*.css',
    js: './src/app.js',
    assets: './src/assets/**/*',
    html: './src/*.html',
  },
  build: {
    root: './dist',
    js: './dist/js',
    css: './dist/css',
    assets: './dist/assets',
    html: './dist',
  },
  watch: {
    js: './src/**/*.js',
  },
};

const esLint = () => {
  return src(paths.src.eslint)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
};

const transferirHTML = () => {
  return src(paths.src.html)
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
      })
    )
    .pipe(dest(paths.build.html))
    .pipe(connect.reload());
};

const config = {
  browserify: {
    fileName: 'app.js',
    extensions: ['.js'],
    transform: [babelify],
  },
};

const transferirJavaScript = () => {
  return browserify({
    entries: paths.src.js,
    debug: true,
    extensions: config.browserify.extensions,
    transform: config.browserify.transform,
  })
    .bundle()
    .pipe(source(config.browserify.fileName))
    .pipe(buffer())
    .pipe(
      babel({
        presets: ['@babel/env'],
        plugins: ['transform-es2015-modules-commonjs'],
      })
    )
    .pipe(concat('bundle.all.js'))
    .pipe(dest(paths.build.js))
    .pipe(connect.reload());
};

const transferirCSS = () => {
  return src(paths.src.css)
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest(paths.build.css))
    .pipe(connect.reload());
};

const assetsTransfer = () => {
  return src(paths.src.assets)
    .pipe(dest(paths.build.assets))
    .pipe(connect.reload());
};

const connectLiveReload = () => {
  connect.server({
    name: 'Restaurant',
    root: paths.build.root,
    livereload: true,
    port: 3070,
  });
};

const watchAndReload = () => {
  watch(paths.src.html, transferirHTML);
  watch(paths.src.css, transferirCSS);
  watch([paths.src.js, paths.watch.js], transferirJavaScript, esLint);
  watch(paths.src.assets, assetsTransfer);
};

exports.default = series(
  transferirHTML,
  transferirCSS,
  transferirJavaScript,
  esLint,
  assetsTransfer,
  parallel(watchAndReload, connectLiveReload)
);

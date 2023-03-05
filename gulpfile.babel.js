const { series, parallel, src, dest, watch } = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const connect = require('gulp-connect')
const cssmin = require('gulp-cssmin')
const htmlmin = require('gulp-htmlmin')
const rename = require('gulp-rename')
const concat = require('gulp-concat')
const babel = require('gulp-babel')
const sourcemaps = require('gulp-sourcemaps')
const eslint = require('gulp-eslint')
const sass = require('gulp-sass')(require('sass'))
const postcss = require('gulp-postcss')
const cssnano = require('cssnano')

const babelify = require('babelify')
const browserify = require('browserify')
const buffer = require('vinyl-buffer')
const source = require('vinyl-source-stream')

const paths = {
  src: {
    eslint: './src',
    scss: './src/scss/*.scss',
    js: './src/js/app.js',
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
    js: './src/js/**/*.js',
    scss: './src/scss/**/*.scss',
  },
}

const config = {
  browserify: {
    fileName: 'app.js',
    extensions: ['.js'],
    transform: [babelify],
  },
}

const esLint = () => {
  return src(paths.src.eslint)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError())
}

const taskCompilarHTML = () => {
  return src(paths.src.html)
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
      })
    )
    .pipe(dest(paths.build.html))
    .pipe(connect.reload())
}

const taskCompilarJS = () => {
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
    .pipe(connect.reload())
}

const taskCompilarSASS = () => {
  return src(paths.src.scss)
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: 'expanded',
      }).on('error', sass.logError)
    )
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(postcss([cssnano()]))
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(paths.build.css))
    .pipe(connect.reload())
}

const assetsTransfer = () => {
  return src(paths.src.assets)
    .pipe(dest(paths.build.assets))
    .pipe(connect.reload())
}

const connectLiveReload = () => {
  connect.server({
    name: 'YARDSALE',
    root: paths.build.root,
    livereload: true,
    port: 3070,
  })
}

const watchAndReload = () => {
  watch(paths.src.html, taskCompilarHTML)
  watch(paths.watch.scss, taskCompilarSASS)
  watch([paths.src.js, paths.watch.js], taskCompilarJS, esLint)
  watch(paths.src.assets, assetsTransfer)
}

exports.default = series(
  taskCompilarHTML,
  taskCompilarSASS,
  taskCompilarJS,
  esLint,
  assetsTransfer,
  parallel(watchAndReload, connectLiveReload)
)

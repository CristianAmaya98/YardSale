const { series, parallel, src, dest, watch } = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const concat = require('gulp-concat')
const connect = require('gulp-connect')
const cssmin = require('gulp-cssmin')
const htmlmin = require('gulp-htmlmin')
const rename = require('gulp-rename')
const requireModules = require('gulp-require-modules')
const sourcemaps = require('gulp-sourcemaps')

const routerBuild = './dist'
const routerGeneral = './src'

const routerCSS = `${routerGeneral}/styles`
const routerJavaScript = `${routerGeneral}/controllers`
const routerAssets = `${routerGeneral}/assets`
const routerHTML = `${routerGeneral}/`

const transferirHTML = () => {
  return src(`${routerHTML}/*.html`)
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true
      })
    )
    .pipe(dest(routerBuild))
    .pipe(connect.reload())
}
const transferirJavaScript = () => {
  return src(`${routerJavaScript}/*.js`)
    .pipe(sourcemaps.init())
    .pipe(
      requireModules({
        dist: true,
        fromDirectory: 'src',
        distDirectory: routerBuild
      })
    )
    .pipe(concat('main.all.js'))
    .pipe(sourcemaps.write())
    .pipe(dest(`${routerBuild}/js`))
    .pipe(connect.reload())
}

const transferirCSS = () => {
  return src(`${routerCSS}/*.css`)
    .pipe(
      autoprefixer({
        cascade: false
      })
    )
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest(`${routerBuild}/css`))
    .pipe(connect.reload())
}

const assetsTransfer = () => {
  return src(`${routerAssets}/**/*`)
    .pipe(dest(`${routerBuild}/assets`))
    .pipe(connect.reload())
}

const connectLiveReload = () => {
  connect.server({
    name: 'Restaurant',
    root: routerBuild,
    livereload: true,
    port: 3070
  })
}

const watchAndReload = () => {
  watch(routerHTML, transferirHTML)
  watch(routerCSS, transferirCSS)
  watch(routerJavaScript, transferirJavaScript)
  watch(routerAssets, assetsTransfer)
}

exports.default = series(
  transferirHTML,
  transferirCSS,
  transferirJavaScript,
  assetsTransfer,
  parallel(watchAndReload, connectLiveReload)
)

const { series, parallel } = require('gulp');
const connect = require('gulp-connect');

const routerBuild = './dist/';

const connectLiveReload = () => {
    connect.server({
        name: 'Restaurant',
        root: routerBuild,
        livereload: true,
        port: 3070
    })
}



exports.default = series(parallel(connectLiveReload));
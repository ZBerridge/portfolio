'use strict'

var gulp = require('gulp')
var dart = require('gulp-dart-sass')
var sourcemaps = require('gulp-sourcemaps')
var run = require('gulp-run')

gulp.task('dartsass', function () {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(dart({outputStyle: 'compressed'}).on('error', dart.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/css'))
})

gulp.task('webpack-js', function () {
  return run('npm run build').exec()
})

gulp.task('watch', function () {
  gulp.watch('./src/scss/**/*.scss', gulp.series('dartsass'))
  gulp.watch('./src/**/*.vue', gulp.series('webpack-js'))
  gulp.watch('./src/**/*.js', gulp.series('webpack-js'))
})
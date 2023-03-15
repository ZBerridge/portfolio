'use strict'

var gulp = require('gulp')
var dart = require('gulp-dart-sass')
var sourcemaps = require('gulp-sourcemaps')

gulp.task('dartsass', function () {
  return gulp.src('./src/styles/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(dart({outputStyle: 'compressed'}).on('error', dart.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/css'))
})

gulp.task('watch', function () {
  gulp.watch('./src/styles/**/*.scss', gulp.series('dartsass'))
})
'use strict';

var gulp  = require('gulp'),
    jshint = require('gulp-jshint'),
    mocha = require('gulp-mocha'),
    stylish = require('jshint-stylish');

// Lint
gulp.task('lint', function () {
  return gulp.src(['**/*.js', '!./node_modules/**'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});
// Default
gulp.task('default', ['test'], function () {
  gulp.watch(['**/*.js', '!./node_modules/**'], ['test']);
});
 require('./test/test');

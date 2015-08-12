'use strict';

var gulp  = require('gulp'),
    jshint = require('gulp-jshint'),
    mocha = require('gulp-mocha'),
    stylish = require('jshint-stylish'),
    test = require('./test/test');

    // Lint
    gulp.task('lint', function () {
    return gulp.src(['**/*.js', '!./node_modules/**'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
    });
    // Default
    gulp.task('default', ['test','lint'], function () {
    gulp.watch(['**/*.js', '!./node_modules/**'], ['test','lint']);
    });
    require('./test/test');
// Test
    gulp.task( 'test', function () {

    test() ;
    gulp.watch(['**/*.js', '!./node_modules/**'], ['test']);

  });

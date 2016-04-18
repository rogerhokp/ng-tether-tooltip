'use strict';

var gulp = require("gulp");
var browserify = require("browserify");
var babelify = require("babelify");
var source = require('vinyl-source-stream');
var babel = require("gulp-babel");

gulp.task('build-min', function() {
    return browserify("src/module.js")
        .external('angular')
        .external('tether-tooltip')
        .transform(babelify)
        .bundle()
        .pipe(source("browser.min.js"))
        .pipe(gulp.dest("dist"));
});

gulp.task('build', function() {
    return gulp.src("src/**/**.j")
        .pipe(babel())
        .pipe(gulp.dest("dist"));
});

gulp.task("default", ['build', 'build-min']);

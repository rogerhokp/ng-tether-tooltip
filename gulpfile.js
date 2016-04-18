'use strict';

var gulp = require("gulp");
var browserify = require("browserify");
var babelify = require("babelify");
var source = require('vinyl-source-stream');

gulp.task('build', function() {
    return browserify("src/module.js")
        .external('angular')
        .external('tether-tooltip')
        .transform(babelify)
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("dist"));
});

gulp.task("default", ['build']);

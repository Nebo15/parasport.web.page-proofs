var gulp = require('gulp');
var rimraf = require('rimraf');
var ghPages = require('gulp-gh-pages');
var config = require('../config');

gulp.task('watch', [
    'sprite:watch',
    'sass:watch',
    'copy:watch',
    'html:watch',
    'jade:watch',
    'font:watch',
    'js:watch'
]);


gulp.task('delete', function (cb) {
    rimraf('./'+config.dest.root, cb);
});
gulp.task('default', ['server', 'watch'], function() {});
gulp.task('build', ['html', 'jade','font','sprite','copy','js','sass'], function() {});
gulp.task('deploy', ['build'], function() {
    return gulp.src('./build/**/*')
        .pipe(ghPages());
});
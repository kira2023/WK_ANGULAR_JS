var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var clean = require('gulp-clean');

sass.compiler = require('node-sass');

var scssFilesPath = './app/**/*.scss';
var jsFilesPath = './app/**/*.js';

gulp.task('sass', function () {
  return gulp.src(scssFilesPath)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('js', function () {
  return gulp.src(jsFilesPath)
    .pipe(concat('index.js'))
    .pipe(gulp.dest('./dist'));
}); 

gulp.task('clean', function() {
  return gulp.src('./dist', { read: false })
    .pipe(clean())
})

gulp.task('watch', function() {
  gulp.watch(scssFilesPath, gulp.series('sass'));
  gulp.watch(jsFilesPath, gulp.series('js'));
  
});

gulp.task('default', gulp.parallel('clean', 'sass', 'js'));
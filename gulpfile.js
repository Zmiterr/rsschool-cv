/**
 * Created by zmiter on 002 02.03.17.
 */
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect');


gulp.task('connect', function(){
    connect.server({
        root: 'dist/',
        port: 9000,
        livereload: true
    });
});
  


gulp.task('html', function () {
  return gulp.src('index.html')
      .pipe(connect.reload({stream: true}))
});

gulp.task('sass', function () {
  return gulp.src('./css/sass/**/.*')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/gav'));
});

gulp.task('watch', function () {
    gulp.watch('css/sass/**/*.sass', ['sass', 'html']),
    gulp.watch('index.html', ['html']),
    gulp.watch('css/*.css', ['html']),
    gulp.watch('css/skins/*.css', ['html'])
});

gulp.task('default', ['sass', 'connect', 'watch', 'html']);

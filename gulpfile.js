// ./src/style/**/*.sass
// ./src/js/*.js
// ./src/view/*.slim
// ----
// ./css/*.css
// ./js/*.js
// ./*.html

var gulp =  require('gulp');
var sass = require('gulp-sass');
var slim = require('gulp-slim');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');

gulp.task('sass', function() {
  return gulp.src('./src/style/**/*.sass')
    .pipe(sass( {
      includePaths: ['./src/style'],
      outputStyle: 'expanded'
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./css'))
});

gulp.task('slim', function() {
  return gulp.src('./src/view/*.slim')
    .pipe(slim({ pretty: true}))
    .pipe(gulp.dest('./'))
});

gulp.task('uglify', function() {
  return gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./js'))
});
//[ 'sass', 'js' ]
gulp.task('watch', function() {
  gulp.watch('./src/style/**/*.sass', ['sass']);
  gulp.watch('./src/js/**/*.js', ['js']);
  gulp.watch('./src/view/**/*.slim', ['slim']);
});
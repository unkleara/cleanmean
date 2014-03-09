var gulp = require('gulp'),
    gutil = require('gulp-util'),
    nodemon = require('gulp-nodemon'),
    sass = require('gulp-ruby-sass');

var paths = {
  styles: {
    src:  './public/styles/sass/**/*.scss',
    dest: './public/styles/css'
  }
};

gulp.task('sass', function () {
  return gulp.src(paths.styles.src)
      .pipe(sass())
      .pipe(gulp.dest(paths.styles.dest));
});

gulp.task('watch', function () {
  gulp.watch(paths.styles.src, ['sass']);
});

gulp.task('default', ['sass', 'watch'], function () {
  nodemon({ script: 'server.js', ext: 'html js', ignore: ['ignored.js'] });
});

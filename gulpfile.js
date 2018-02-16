var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');

gulp.task('js', () => {
  return gulp.src('src/fuzzy-search.js')
  .pipe(sourcemaps.init())
  .pipe(babel({presets: ['env']}))
  .on('error', function(err) {
    console.error('[Compilation Error]');
    console.error(err.message + '\n');
    console.error(err.codeFrame);
    this.emit('end');
  })
  .pipe(uglify())
  .pipe(rename('fuzzy-search.min.js'))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('dist'))
});

gulp.task('watch', () => {
  gulp.watch('src/fuzzy-search.js', ['js']);
});

gulp.task('build', ['js']);

gulp.task('default', ['build', 'watch']);
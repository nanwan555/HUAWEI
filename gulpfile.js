const gulp = require('gulp');
const watch = require('gulp-watch');
const minihtml = require('gulp-minify-html');
const minicss = require('gulp-minify-css');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const es2015 = require('babel-preset-es2015');
const imagemin = require('gulp-imagemin');
gulp.task('uglifyhtml', () => {
    return gulp.src('src/*.html')
        .pipe(minihtml())
        .pipe(gulp.dest('dist/'));
});


gulp.task('uglifycss', () => {
    return gulp.src('src/css/*.css')
        .pipe(minihtml())
        .pipe(gulp.dest('dist/css'));
});
gulp.task('uglifyjs', () => {
    return gulp.src('src/script/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});
gulp.task('babeljs', () => {
    return gulp.src('src/script/js/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/script/js'));
});
gulp.task('uglifyimag', () => {
    return gulp.src('src/img/*.png')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});
gulp.task('default', function() {
    watch(['src/*.html', 'src/css/*.css', 'src/script/js/*.js', 'src/img/*.png'], gulp.parallel('uglifyhtml', 'uglifycss', 'uglifyjs', 'babeljs', 'dist/img'));
});
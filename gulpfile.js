const gulp = require('gulp');
const autoPrefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const ugly = require('gulp-uglify');

function autopre() {
    return gulp.src('./assets/css/style.css')
        .pipe(autoPrefixer({
            cascade: false,
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('./style'))
}

function es5() {
    return gulp.src('./webpackPasta/main.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(ugly())
        .pipe(gulp.dest('./script'))
}

gulp.task('default', autopre);
gulp.task('babel', es5);
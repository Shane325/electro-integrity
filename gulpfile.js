'use strict'

let gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  cssnano = require('gulp-cssnano'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  imagemin = require('gulp-imagemin'),
  rename = require('gulp-rename'),
  runSequence = require('run-sequence'),
  nodemon = require('gulp-nodemon'),
  del = require('del'),
  gutil = require('gulp-util')

// Start:prod
gulp.task('start:prod', function () {
  nodemon({
    script: 'server.js',
    env: {
      'NODE_ENV': 'production'
    }
  })
})

// Start
gulp.task('start', function () {
  nodemon({
    script: 'server.js',
    env: {
      'NODE_ENV': 'development'
    }
  })
})

// Styles
gulp.task('styles', function () {
  return gulp.src(['!public/css/font-awesome.min.css', 'public/css/**/*.css'])
    .pipe(autoprefixer('last 2 version'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(cssnano())
    .pipe(gulp.dest('public/dist/css'))
})

// FA Styles
gulp.task('fa-styles', function () {
  return gulp.src('public/css/font-awesome.min.css')
    .pipe(gulp.dest('public/dist/css'))
})

// Scripts
gulp.task('scripts', function () {
  return gulp.src(['!public/js/**/*.min.js', 'public/js/**/*.js'])
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(uglify())
    .pipe(gulp.dest('public/dist/js'))
})

// Min Scripts
gulp.task('min-scripts', function () {
  return gulp.src(['public/js/**/*.min.js'])
    .pipe(gulp.dest('public/dist/js'))
})

// Images
gulp.task('images', function () {
  return gulp.src('public/images/**/*')
    .pipe(imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('public/dist/images'))
})

// Fonts
gulp.task('fonts', function () {
  return gulp.src('public/fonts/**/*')
    .pipe(gulp.dest('public/dist/fonts'))
})

// Revolution
gulp.task('revolution', function () {
  return gulp.src(['!public/revolution/**/*.css', 'public/revolution/**/*'])
    .pipe(gulp.dest('public/dist/revolution'))
})

// Revolution css
gulp.task('revolution-css', function () {
  return gulp.src('public/revolution/**/*.css')
    .pipe(autoprefixer('last 2 version'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(cssnano())
    .pipe(gulp.dest('public/dist/revolution'))
})

// Owl css
gulp.task('owl-css', function () {
  return gulp.src('public/js/owlcarousel/assets/owl.carousel.css')
    .pipe(autoprefixer('last 2 version'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(cssnano())
    .pipe(gulp.dest('public/dist/js/owlcarousel/assets'))
})

// Clean
gulp.task('clean', function () {
  return del(['public/dist/images', 'public/dist/fonts', 'public/dist'])
})

// Run the project in production mode
gulp.task('prod', function (done) {
  runSequence('clean', ['styles', 'fa-styles', 'scripts', 'min-scripts', 'images', 'fonts', 'revolution', 'revolution-css', 'owl-css'], 'start:prod', done)
})

// Run the project in development / default mode
gulp.task('default', function (done) {
  runSequence('clean', 'start', done)
})

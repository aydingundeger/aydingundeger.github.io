/* global require */
const gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var notify = require("gulp-notify");
var plumber = require("gulp-plumber");
var path = require('path');
var data = require('gulp-data');
var concatCss = require('gulp-concat-css'); 
var csso = require('gulp-csso');
const autoprefixer = require('gulp-autoprefixer');
var sassdoc = require('sassdoc');
var converter = require('sass-convert');

/* Change your directory and settings here */
var settings = {
    publicDir: '_site',
    sassDir: '_layouts/_sass',
    layoutDir: '_layouts',
    partialsDir: '_layouts/_partials',
    dataDir: '_layouts/_data',
    cssDir: '_site/assets/css',
    /* change to disable system notification */
    systemNotify: true
}

/**
 * serve task, will launch browserSync and launch index.html files,
 * and watch the changes for pug and sass files.
 **/
gulp.task('serve', ['sass'], function() {

    /**
     * Launch BrowserSync from publicDir
     */
    browserSync.init({
        server: settings.publicDir
    });

    /**
     * watch for changes in sass files 
     */
    gulp.watch(settings.sassDir + "/*.sass", ['sass']);

    /**
     * watch for changes in pug files 
     */
    gulp.watch([settings.layoutDir + "/*.pug", settings.partialsDir + "/*.pug", settings.dataDir + "/*.pug.json"], ['pug']);

});

/**
 * sass task, will compile the .sass files,
 * and handle the error through plumber and notify through system message.
 */
gulp.task('sass', function() {
    return gulp.src(settings.sassDir + "/*.sass")
        .pipe(plumber({
            errorHandler: settings.systemNotify ? notify.onError("Error: <%= error.messageOriginal %>") : function(err) {
                console.log(" ************** \n " + err.messageOriginal + "\n ************** ");
                this.emit('end');
            }
        }))
        .pipe(sass({
            includePaths: ['./node_modules/breakpoint-sass/stylesheets']
        }))
        .pipe(gulp.dest(settings.cssDir))
        .pipe(browserSync.stream());
});

/**
 * pug task, will compile the pug,
 * and handle the error through plumber and notify through system message.
 */
gulp.task('pug', function() {
    return gulp.src(settings.layoutDir + "/*.pug")
        .pipe(data(function (file) {
            return require('./_layouts/_data/' + path.basename(file.path) + '.json');
        }))
        .pipe(plumber({
            errorHandler: settings.systemNotify ? notify.onError("Error: <%= error %>") : function(err) {
                console.log("************** \n " + err + "\n **************");
                this.emit('end');
            }
        }))
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest(settings.publicDir))
        .pipe(browserSync.stream());
});

gulp.task('default', function () {
  return gulp.src('_site/assets/css/*.css')
    .pipe(concatCss("_site/assets/css/include.css"))
    .pipe(gulp.dest('_site/assets/css'));
});

gulp.task('default', function () {
    return gulp.src('_site/assets/css/include.css')
        .pipe(csso())
        .pipe(gulp.dest('_site/assets/css'));
});
 
gulp.task('development', function () {
    return gulp.src('_site/assets/css/include.css')
        .pipe(csso({
            restructure: false,
            sourceMap: true,
            debug: true
        }))
        .pipe(gulp.dest('_site/assets/css'));
});

gulp.task('default', () =>
    gulp.src('_site/assets/css/include.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('_site/assets/css'))
);

 
gulp.task('sassdoc', function () {
  return gulp.src('_sass/*.+(sass|scss)')
    .pipe(converter({
      from: 'scss',
      to: 'sass',
    }))
    .pipe(sassdoc());
});


/**
 * Default task, running just `gulp` will compile the sass,
 * compile the site, launch BrowserSync then watch
 * files for changes
 */
gulp.task('default', ['serve']);

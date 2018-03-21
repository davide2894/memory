var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var image = require("gulp-image");
var imagemin = require('gulp-imagemin');
var responsive = require("gulp-responsive");
var $ = require("gulp-load-plugins")();
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');


// Development Tasks 
// -----------------

// Start browserSync server
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  })
})

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass().on('error', sass.logError)) // Passes it through a gulp-sass, log errors to console
    .pipe(gulp.dest('app/css')) // Outputs it in the css folder
    .pipe(browserSync.reload({ // Reloading with Browser Sync
      stream: true
    }));
})

// Watchers
gulp.task('watch', function() {
  gulp.watch('app/scss/**/*.scss', ['sass']).on("change", browserSync.reload);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
})

// Responsive images
gulp.task("images:responsive", function(){
    return gulp.src(["app/images/*.{png,jpg}"])
    .pipe($.responsive({
        // resize all JPGs to different resolutions
        "*.jpg": [{
                width: 300, 
                rename: {suffix: "-300px"},
            },
            {
                width: 500, 
                rename: {suffix: "-500px"},
            },
            {
                width: 650, 
                rename: {suffix: "-650px"},
            },
            {
                // compress, strip metadata and rename original image
                rename: {suffix: "-original"},
            }
        ],
        // resize all PNG to be retina ready
        "*.png": [
            {
                width: 250,
            },
            {
                width: 250*2,
                rename: {suffix: "@2x"},
            }
        ],
    }, {
        // Global configuration for all images
        // The output quality for JPEG, Webp and TIFF output formats
        quality: 70,
        // Use progressive (interlace) scan for JPEG and PNG output
        progressive: true,
        // Strip all metadata
        widthMetadata: false,
    }))
    .pipe(gulp.dest("app/images/responsive"));
});

// Optimization Tasks 
// ------------------

// Optimizing CSS and JavaScript 
gulp.task('useref', function() {

  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'));
});

// Optimizing Images 
gulp.task('images:minify', function() {
  return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
    .pipe(cache(imagemin({
      interlaced: true,
    })))
    .pipe(gulp.dest('dist/images'))
});

// Compress Images
gulp.task("images:compress", function () {
    gulp.src("images_src/**/*.*")
    .pipe(image({
        jpegRecompress: ['--strip', '--quality', 'medium', '--min', 6, '--max', 8],
        jpegoptim: false,
        mozjpeg: false,
        concurrent: 10,
    }))
    .pipe(gulp.dest("images_src/compressed2"));
});

// Copying fonts 
gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
})

// Cleaning 
gulp.task('clean', function() {
  return del.sync('dist').then(function(cb) {
    return cache.clearAll(cb);
  });
})

gulp.task('clean:dist', function() {
  return del.sync(['dist/**/*', 'dist/images', 'dist/images/**/*']);
});

// Build Sequences
// ---------------

gulp.task('default', function(callback) {
  runSequence(['sass', 'browserSync'], 'watch',
    callback
  )
});

gulp.task('build', function(callback) {
  runSequence(
    'clean:dist',
    'sass',
    ['useref', 'images:minify', 'fonts'],
    callback
  )
})
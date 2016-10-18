var gulp 		= require('gulp');
var less 		= require('gulp-less');
var cleanCSS 	= require('gulp-clean-css');
var rename 		= require("gulp-rename");
var concat 		= require('gulp-concat');

// Compile LESS files from /less into /css
gulp.task('less', function() {
    return gulp.src(['app/main.less','app/*/*.less'])
        .pipe(less())
        .pipe(concat('app.css'))
        .pipe(gulp.dest('tmp'))
});

// Minify compiled CSS
gulp.task('minify-css', ['less'], function() {
    return gulp.src('tmp/app.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('app'))
});

// Run everything
gulp.task('default', ['less', 'minify-css']);
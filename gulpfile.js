const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var sassGlob = require('gulp-sass-glob');
const del = require('del');
var rename = require("gulp-rename");
let uglify = require('gulp-uglify-es').default;
const browsersync = require("browser-sync")
const server = require("./server/server")

gulp.task('styles', () => {
    return gulp.src('./sass/styles.scss')
        .pipe(sassGlob())
        .pipe(rename(function (path) {
            return {
                dirname: path.dirname,
                basename: path.basename + ".min",
                extname: ".css"
            };
        }))
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./assets/css'))
        .pipe(browsersync.stream())
});

gulp.task('scripts', () => {
    return gulp.src("./js/*.js")
        .pipe(rename(function (path) {
            return {
                dirname: path.dirname,
                basename: path.basename + ".min",
                extname: ".js"
            };
        }))
       // .pipe(uglify())
        .pipe(gulp.dest("./assets/js"))
        .pipe(browsersync.stream())
});

gulp.task('cleanCss', () => {
    return del([
        './assets/css/*.css'
    ]);
});

gulp.task('cleanJs', () => {
    return del([
        './assets/js/*.js',
    ]);
});

gulp.task('default', gulp.series([ 'cleanCss', 'cleanJs', 'styles', 'scripts', server ]));

const compileSass = (done) => {
    gulp.series([ 'cleanCss', 'styles' ])(done);
}

const uglifyJs = (done) => {
    gulp.series([ 'cleanJs', 'scripts' ])(done);
}

gulp.task('watch', () => {
    gulp.watch('./index.html', compileSass);
    gulp.watch('sass/**/*.scss', compileSass);
    gulp.watch('js/*.js', uglifyJs);
});



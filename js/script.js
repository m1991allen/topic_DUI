$(document).ready(function () {

    //initialising fullpage.js in the jQuery way
    $('#fullpage').fullpage({
        navigation: true,
        slidesNavigation: true,
        navigationPosition: 'right',
        anchors: [
            '醉該萬死.p1',
            '人物訪談.p2',
            '人物訪談.p3',
            '人物訪談.p4',
            '人物訪談.p5',
            '數據.p6',
            '數據.p7',
            '數據.p8',
            '數據.p9',
            '休息多久.p10',
            '道路交通條例修正.p11',
            '道路交通條例修正.p12',
            '動手倒倒看.p13',
            '動手倒倒看.p14',
            '同車共責.p15',
            '同車共責.p16',
            '同車共責.p17',
            '酒精鎖.p18',
            '酒精鎖.p19',
            '酒精鎖.p20',
            '代駕制度.p21',
            '代駕制度.p22',
            '結論.p23'],
        navigationTooltips: [
            '醉該萬死.p1',
            '人物訪談.p2',
            '人物訪談.p3',
            '人物訪談.p4',
            '人物訪談.p5',
            '數據.p6',
            '數據.p7',
            '數據.p8',
            '數據.p9',
            '休息多久.p10',
            '道路交通條例修正.p11',
            '道路交通條例修正.p12',
            '動手倒倒看.p13',
            '動手倒倒看.p14',
            '同車共責.p15',
            '同車共責.p16',
            '同車共責.p17',
            '酒精鎖.p18',
            '酒精鎖.p19',
            '酒精鎖.p20',
            '代駕制度.p21',
            '代駕制度.p22',
            '結論.p23']
    });

    // calling fullpage.js methods using jQuery
    $('#moveSectionUp').click(function (e) {
        e.preventDefault();
        $.fn.fullpage.moveSectionUp();
    });

    $('#moveSectionDown').click(function (e) {
        e.preventDefault();
        $.fn.fullpage.moveSectionDown();
    });

    $(".various").fancybox({
        maxWidth: 800,
        maxHeight: 600,
        fitToView: false,
        width: '70%',
        height: '70%',
        autoSize: false,
        closeClick: false,
        openEffect: 'none',
        closeEffect: 'none'
    });
});

var gulp = require('gulp');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-clean-css');

gulp.task('css', function (done) {
    gulp.src('./src/fullpage.css')
        .pipe(sourcemaps.init())
        .pipe(gulp.dest('./dist'))
        .pipe(minifyCss({
            compatibility: 'ie8',
            advanced: false,
            keepSpecialComments: '1'
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
    done();
});

gulp.task('js', function (done) {
    gulp.src('./src/fullpage.js')
        .pipe(sourcemaps.init())
        .pipe(gulp.dest('./dist'))
        .pipe(uglify({
            output: {
                comments: 'some'
            }
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
    done();
});

gulp.task('vendors', function (done) {
    gulp.src([
        './vendors/scrolloverflow.js',
        './vendors/easings.js'
    ])
        .pipe(sourcemaps.init())
        .pipe(gulp.dest('./vendors'))
        .pipe(uglify({
            output: {
                comments: 'some'
            }
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./vendors'));
    done();
});


// private file
gulp.task('extensions', function (done) {
    gulp.src('./src/fullpage.extensions.js')
        .pipe(uglify({
            output: {
                comments: 'some'
            }
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist'));
    done();
});

gulp.task('default', gulp.parallel('css', 'js'));

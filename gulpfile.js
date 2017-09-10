var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var htmlRepalce = require('gulp-html-replace');
// html处理
gulp.task('html', function() {
    gulp.src(['src/**/*.html', 'index.html'])
        .pipe(htmlRepalce({
            style: gulp.src('src/html/common/style.html'),
            aside: gulp.src('src/html/common/aside.html'),
            header: gulp.src('src/html/common/header.html'),
        }))
        .pipe(htmlmin({
            collapseWhitespace: true, // 去掉空白字符
            minifyJS: true, //压缩页面JS
            minifyCSS: true, //压缩页面CSS
            removeComments: true //清除HTML注释
        }))
        .pipe(gulp.dest('dist'));
});

// less处理
gulp.task('less', function() {
    gulp.src('src/less/index.less')
        .pipe(less())
        .pipe(cleanCss())
        .pipe(gulp.dest('dist/css'));
});
//img
// gulp.task('img', function() {
//         gulp.src('src/img/*.*').pipe(gulp.dest('dist/img'));
//     })
// 配置要打包的第三包路径
var jsLibs = [
    'node_modules/art-template/lib/template-web.js',
    'node_modules/jquery/dist/jquery.js',
    'node_modules/bootstrap/dist/js/bootstrap.js',
    'node_modules/jquery-form/dist/jquery.form.min.js'
];
// 合并所有的第三方包为一个js
gulp.task('jsLib', function() {
    gulp.src(jsLibs)
        .pipe(concat('lib.js'))
        .pipe(gulp.dest('dist/js'));
});
//打包commonjs模块
// gulp.task('js', function() {
//     browserify('src/js/index.js')
//         .bundle().pipe(source('index.js'))
//         .pipe(buffer())
//         // .pipe(uglify())
//         .pipe(gulp.dest('dist/js'))
// })

// var jsModules = [
//     // 用户
//     'src/js/user/login.js',
//     'src/js/index.js',
//     'src/js/user/profile.js',
//     'src/js/user/repass.js',
//     // //teacher 讲师
//     'src/js/teacher/add.js',
//     'src/js/teacher/edit.js',
//     'src/js/teacher/list.js',
//     //curse 课程
//     'src/js/course/add.js',
//     'src/js/course/course_edit_step1.js',
//     'src/js/course/course_edit_step2.js',
//     'src/js/course/course_edit_step3.js',
//     'src/js/course/list.js',
//     //category 学科
//     'src/js/category/add.js',
//     'src/js/category/edit.js',
//     'src/js/category/list.js',
// ];
// jsModules.forEach(function(jsPath) {
//     var pathArr = jsPath.split('/');
//     var jsName = pathArr.pop();
//     pathArr.shift();
//     console.log('dist/' + pathArr.join('/'));

//     gulp.task('js', function() {
//         browserify(jsPath, { debug: true })
//             .bundle().pipe(source(jsName))
//             .pipe(buffer())
//             // .pipe(uglify())
//             .pipe(gulp.dest('dist/' + pathArr.join('/')))
//     })
// });

// gulp.task('build', function() {
//     gulp.run(['html', 'less', 'jsLib']);
// })
// gulp.task('default', function() {
//     gulp.run('build')
//     gulp.watch(['src/**/*.html', 'index.html'], function() {
//         gulp.run('html')
//     });
//     gulp.watch(['src/less/index.less'], function() {
//         gulp.run('less')
//     });
//     gulp.watch(['src/**/*.js'], function() {
//         gulp.run('js');
//     })
// })

// console.log('测试');
var jsModules = [
    // 首页
    'src/js/index.js',
    // 用户
    'src/js/user/login.js',
    'src/js/user/repass.js',
    'src/js/user/profile.js',
    // 讲师
    'src/js/teacher/add.js',
    'src/js/teacher/edit.js',
    'src/js/teacher/list.js',
    // 课程
    'src/js/course/add.js',
    'src/js/course/course_edit_step1.js',
    'src/js/course/course_edit_step2.js',
    'src/js/course/course_edit_step3.js',
    'src/js/course/list.js',
    // 学科分类
    'src/js/category/add.js',
    'src/js/category/edit.js',
    'src/js/category/list.js'
];
gulp.task('js', function() {
    jsModules.forEach(function(jsPath) {
        var pathArr = jsPath.split('/'); // jsPath变成['src', 'js', 'user', 'login.js']
        var jsName = pathArr.pop(); // 取出login.js，数组变成['src', 'js', 'user']
        pathArr.shift(); // 取出src，数组变成['js', 'user']
        browserify(jsPath, { debug: true }).bundle() // 打包index.js
            .pipe(source(jsName))
            .pipe(buffer())
            // .pipe(uglify())
            .pipe(gulp.dest('dist/' + pathArr.join('/'))); // 数组变成'js/user'
    });
});

// 添加统一打包的任务
gulp.task('build', function() {
    gulp.run(['html', 'less', 'jsLib', 'js']);
});
// 监听文件变化，自动打包
gulp.task('default', function() {
    gulp.run('build');
    gulp.watch(['src/**/*.html', 'index.html'], function() {
        gulp.run('html');
    });
    gulp.watch(['src/**/*.less'], function() {
        gulp.run('less');
    });
    gulp.watch(['src/**/*.js'], function() {
        gulp.run('js');
    });
});
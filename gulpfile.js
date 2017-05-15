/*npm uninstall gulp browser-sync gulp-concat gulp-clean-css gulp-rename gulp-notify -D*/
var gulp = require("gulp"),
  browserSync = require("browser-sync").create(), //静态服务
  concat = require('gulp-concat'), //文件合并
  cleanCSS = require('gulp-clean-css'), //css压缩
  rename = require('gulp-rename'), //文件更名
  notify = require('gulp-notify'), //提示信息
  reload = browserSync.reload; //重载

// 使用默认任务启动Browsersync
gulp.task('serve', ["css"], function() {
  // 从这个项目的根目录启动服务器
  browserSync.init({
    server: {
      baseDir: "./public/"
    }
  });
  gulp.watch("./public/css/main.css", ["css"]);
  gulp.watch("./public/css/*.css").on("change", reload);
  gulp.watch("./public/*.html").on("change", reload);
});

//css编译
gulp.task("css", function() {
  gulp.src(["./public/css/main.css"])
    .pipe(concat("main.min.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest("./public/css/"))
    .pipe(reload({
      stream: true
    }));
});
gulp.task('default', ['serve']);

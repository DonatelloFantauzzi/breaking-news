const nunjucksRender = require("gulp-nunjucks-render");
const gulp = require("gulp");
const data = require("gulp-data");

gulp.task("nunjucks", function () {
  // Gets .html and .nunjucks files in pages
  return (
    gulp
      .src("app/src/pages/**/*.+(html|njk)")
      .pipe(
        data(function () {
          return require("./app/data.json");
        })
      )
      // Renders template with nunjucks
      .pipe(
        nunjucksRender({
          path: ["app/src/"],
        })
      )
      // output files in app folder
      .pipe(gulp.dest("app/dist"))
  );
});

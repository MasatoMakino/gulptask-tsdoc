const { src, dest, watch, series } = require("gulp");
const typedoc = require("gulp-typedoc");
const replace = require("gulp-replace");
const path = require("path");

/**
 * @typedef Option
 * @param {string} [baseUrl = "./src"]
 * @param {string} [out = "./docs/api"]
 */

/**
 * TypeDoc生成タスクを取得する。
 * @param {Option} [option]
 * @return {Function} gulpタスク
 */
module.exports = option => {
  if (option == null) option = {};
  if (option.baseUrl == null) option.baseUrl = "./src";
  if (option.out == null) option.out = "./docs/api";
  const { baseUrl, out } = option;

  const docTask = () => {
    const srcGlob = path.resolve(process.cwd(), baseUrl, "**/*.ts");
    const option = require("./tsdocconfig");
    option.out = out;
    option.baseUrl = baseUrl;
    return src(srcGlob).pipe(typedoc(option));
  };

  const replaceTask = () => {
    const srcGlob = path.resolve(process.cwd(), out, "**/*.html");
    return src(srcGlob)
      .pipe(replace(/\/Users.*node_modules\//g, "node_modules/"))
      .pipe(dest(out));
  };

  return series(docTask, replaceTask);
};

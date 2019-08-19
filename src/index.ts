import { dest, series, src } from "gulp";
import path from "path";
import replace from "gulp-replace";
import typedoc from "gulp-typedoc";

/**
 * @typedef Option
 * @param {string} [baseUrl = "./src"]
 * @param {string} [out = "./docs/api"]
 */
export interface Option {
  baseUrl?: string;
  out?: string;
}
/**
 * TypeDoc生成タスクを取得する。
 * @param {Option} [option]
 * @return {Function} gulpタスク
 */
export function get(option: Option): Function {
  option = initOption(option);
  const { baseUrl, out } = option;

  const docTask = () => {
    const srcGlob = path.resolve(process.cwd(), baseUrl, "**/*.ts");
    const option = require("../tsdocconfig");
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
}

function initOption(option: Option): Option {
  if (option == null) option = {};
  if (option.baseUrl == null) option.baseUrl = "./src";
  if (option.out == null) option.out = "./docs/api";
  return option;
}

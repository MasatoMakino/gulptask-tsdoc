"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gulp_1 = require("gulp");
const path_1 = __importDefault(require("path"));
const gulp_replace_1 = __importDefault(require("gulp-replace"));
const gulp_typedoc_1 = __importDefault(require("gulp-typedoc"));
/**
 * TypeDoc生成タスクを取得する。
 * @param {Option} [option]
 * @return {Function} gulpタスク
 */
function get(option) {
    option = initOption(option);
    const { baseUrl, out } = option;
    const docTask = () => {
        const srcGlob = path_1.default.resolve(process.cwd(), baseUrl, "**/*.ts");
        const option = require("../tsdocconfig");
        option.out = out;
        option.baseUrl = baseUrl;
        return gulp_1.src(srcGlob).pipe(gulp_typedoc_1.default(option));
    };
    const replaceTask = () => {
        const srcGlob = path_1.default.resolve(process.cwd(), out, "**/*.html");
        return gulp_1.src(srcGlob)
            .pipe(gulp_replace_1.default(/\/Users.*node_modules\//g, "node_modules/"))
            .pipe(gulp_1.dest(out));
    };
    return gulp_1.series(docTask, replaceTask);
}
exports.get = get;
function initOption(option) {
    if (option == null)
        option = {};
    if (option.baseUrl == null)
        option.baseUrl = "./src";
    if (option.out == null)
        option.out = "./docs/api";
    return option;
}

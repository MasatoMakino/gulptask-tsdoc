"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTask = exports.get = void 0;
const TypeDocTask_1 = require("./TypeDocTask");
/**
 * @deprecated Use generateTask
 * @param option
 */
function get(option) {
    return generateTask(option);
}
exports.get = get;
/**
 * TypeDoc生成タスクを取得する。
 * @param option
 */
function generateTask(option) {
    option = initOption(option);
    return TypeDocTask_1.getDocTask(option);
}
exports.generateTask = generateTask;
function initOption(option) {
    var _a, _b;
    option !== null && option !== void 0 ? option : (option = {});
    (_a = option.baseUrl) !== null && _a !== void 0 ? _a : (option.baseUrl = "./src");
    (_b = option.out) !== null && _b !== void 0 ? _b : (option.out = "./docs/api");
    return option;
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
const TypeDocTask_1 = require("./TypeDocTask");
/**
 * TypeDoc生成タスクを取得する。
 * @param {Option} [option]
 * @return {Function} gulpタスク
 */
function get(option) {
    option = initOption(option);
    const docTask = TypeDocTask_1.getDocTask(option);
    return docTask;
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

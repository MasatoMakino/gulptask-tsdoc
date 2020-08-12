import { getDocTask } from "./TypeDocTask";

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
export function get(option?: Option): Function {
  option = initOption(option);
  const docTask = getDocTask(option);
  return docTask;
}

function initOption(option?: Option): Option {
  if (option == null) option = {};
  if (option.baseUrl == null) option.baseUrl = "./src";
  if (option.out == null) option.out = "./docs/api";
  return option;
}

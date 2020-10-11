import { getDocTask } from "./TypeDocTask";

/**
 * @typedef Option
 * @param {string} [baseUrl = "./src"]
 * @param {string} [out = "./docs/api"]
 */
export interface Option {
  baseUrl?: string;
  out?: string;
  ignoreCompilerErrors?:boolean
}

/**
 * @deprecated Use generateTask
 * @param option
 */
export function get(option?: Option): Function {
  return generateTask(option);
}

/**
 * TypeDoc生成タスクを取得する。
 * @param option
 */
export function generateTask(option?: Option): Function {
  option = initOption(option);
  return getDocTask(option);
}

function initOption(option?: Option): Option {
  option ??= {};
  option.baseUrl ??= "./src";
  option.out ??= "./docs/api";
  option.ignoreCompilerErrors ??= false;
  return option;
}

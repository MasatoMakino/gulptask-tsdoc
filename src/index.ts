import { getDocTask } from "./TypeDocTask";

/**
 * @type Option
 */
export interface Option {
  /**
   * @default "./src/index.ts"
   */
  baseUrl?: string;
  /**
   * @default "./docs/api"
   */
  out?: string;
  /**
   * @default "./tsconfig.json"
   */
  tsconfig?: string;
  /**
   * @deprecated use tsconfig option. Typedoc in ver 0.20 and later do not support "ignoreCompilerErrors" option.
   */
  ignoreCompilerErrors?: boolean;
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
  option.baseUrl ??= "./src/index.ts";
  option.out ??= "./docs/api";
  option.tsconfig ??= "./tsconfig.json";
  return option;
}

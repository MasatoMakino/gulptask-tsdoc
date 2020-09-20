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
 * @deprecated Use generateTask
 * @param option
 */
export declare function get(option?: Option): Function;
/**
 * TypeDoc生成タスクを取得する。
 * @param option
 */
export declare function generateTask(option?: Option): Function;
//# sourceMappingURL=index.d.ts.map
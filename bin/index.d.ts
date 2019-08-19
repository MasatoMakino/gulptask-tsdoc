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
export declare function get(option: Option): Function;
//# sourceMappingURL=index.d.ts.map
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
export declare function get(option?: Option): Function;
/**
 * TypeDoc生成タスクを取得する。
 * @param option
 */
export declare function generateTask(option?: Option): Function;
//# sourceMappingURL=index.d.ts.map
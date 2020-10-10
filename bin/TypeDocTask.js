"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDocTask = void 0;
const TypeDocTask = require("typedoc");
function getDocTask(option) {
    return () => {
        return new Promise((resolve, rejects) => {
            const app = new TypeDocTask.Application();
            app.bootstrap({
                mode: "file",
                target: "ES5",
                module: "CommonJS",
                experimentalDecorators: true,
                exclude: ["**/*.js"],
            });
            const project = app.convert(app.expandInputFiles([option.baseUrl]));
            if (project) {
                const outputDir = option.out;
                app.generateDocs(project, outputDir);
                resolve();
            }
        });
    };
}
exports.getDocTask = getDocTask;

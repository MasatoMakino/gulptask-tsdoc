import { Option } from "./index";
const TypeDocTask = require("typedoc");

export function getDocTask(option: Option): Function {
  return () => {
    return new Promise((resolve, rejects) => {
      const app = new TypeDocTask.Application();

      app.bootstrap({
        mode: "file",
        logger: "none",
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
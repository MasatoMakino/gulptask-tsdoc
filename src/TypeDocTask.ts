import { Option } from "./index";
const TypeDoc = require("typedoc");

export function getDocTask(option: Option): Function {
  return async () => {
    const app = new TypeDoc.Application();
    app.options.addReader(new TypeDoc.TSConfigReader());
    app.bootstrap({
      entryPoints: [option.baseUrl],
      tsconfig: option.tsconfig,
      exclude: ["**/*.js"],
    });

    const project = app.convert();
    if (project) {
      const outputDir = option.out;
      await app.generateDocs(project, outputDir);
    }
  };
}

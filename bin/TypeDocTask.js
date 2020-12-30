"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDocTask = void 0;
const TypeDoc = require("typedoc");
function getDocTask(option) {
    return () => __awaiter(this, void 0, void 0, function* () {
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
            yield app.generateDocs(project, outputDir);
        }
    });
}
exports.getDocTask = getDocTask;

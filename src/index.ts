import { CodeEngine } from "@code-engine/lib";

export * from "@code-engine/lib";

// Export `CodeEngine` as the default export
// tslint:disable: no-default-export
export default CodeEngine;

// CommonJS default export hack
if (typeof module === "object" && typeof module.exports === "object") {
  module.exports = Object.assign(module.exports.default, module.exports);  // tslint:disable-line: no-unsafe-any
}

import { CodeEngine } from "@code-engine/lib";

export { CodeEngine };
export { Generator, WatchConfig } from "@code-engine/cli";
export * from "@code-engine/types";

// Export `CodeEngine` as the default export
// tslint:disable: no-default-export
export default CodeEngine;

// CommonJS default export hack
if (typeof module === "object" && typeof module.exports === "object") {
  module.exports = Object.assign(module.exports.default, module.exports);  // tslint:disable-line: no-unsafe-any
}

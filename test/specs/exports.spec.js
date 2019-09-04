"use strict";

const commonJSExport = require("../../");
const { default: defaultExport, CodeEngine: namedExport } = require("../../");
const { expect } = require("chai");

describe("code-engine package exports", () => {

  it("should export the CodeEngine class as the default CommonJS export", () => {
    expect(commonJSExport).to.be.a("function");
    expect(commonJSExport.name).to.equal("CodeEngine");
  });

  it("should export the CodeEngine class as the default ESM export", () => {
    expect(defaultExport).to.be.a("function");
    expect(defaultExport).to.equal(commonJSExport);
  });

  it("should export the CodeEngine class as a named export", () => {
    expect(namedExport).to.be.a("function");
    expect(namedExport).to.equal(commonJSExport);
  });

  it("should not export anything else", () => {
    expect(commonJSExport).to.have.same.keys(
      "default",
      "CodeEngine",
    );
  });

});

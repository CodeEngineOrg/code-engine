"use strict";

const CodeEngine = require("../../");
const { expect } = require("chai");

describe("CodeEngine() API", () => {

  it("should work without any arguments", () => {
    let engine = new CodeEngine();
    expect(engine).to.be.an("object");
    expect(engine).to.be.an.instanceOf(CodeEngine);
  });

});

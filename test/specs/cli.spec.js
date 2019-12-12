"use strict";

const codeEngineCLI = require("../utils/code-engine-cli");
const { expect } = require("chai");

describe("code-engine CLI", () => {

  it("should show usage text", () => {
    let cli = codeEngineCLI("--help");

    expect(cli).to.have.exitCode(0);
    expect(cli).to.have.stderr("");
    expect(cli).to.have.stdout.that.matches(/\nUsage: code-engine \[options\]/);
  });

  it("should show the version number", () => {
    let cli = codeEngineCLI("--version");

    expect(cli).to.have.exitCode(0);
    expect(cli).to.have.stderr("");
    expect(cli).to.have.stdout.that.matches(/\d+\.\d+\.\d+\n/);
  });

  it("should error if an invalid argument is used", () => {
    let cli = codeEngineCLI("--fizzbuzz");

    expect(cli).to.have.exitCode(9);
    expect(cli).to.have.stdout("");
    expect(cli).to.have.stderr.that.matches(/^Unknown option: --fizzbuzz\n/);
  });

});

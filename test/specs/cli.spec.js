"use strict";

const codeEngine = require("../utils/code-engine");
const manifest = require("../../package.json");
const { expect } = require("chai");

describe("code-engine CLI", () => {

  it("should run without any arguments", () => {
    // Run the CLI without any arguments.
    let cli = codeEngine("");

    // It should have printed the default greeting
    expect(cli).to.exit.with.status(0);
  });

  it("should error if an invalid argument is used", () => {
    let cli = codeEngine("--fizzbuzz");

    expect(cli).to.have.exitCode(9);
    expect(cli).to.have.stdout("");
    expect(cli).to.have.stderr.that.matches(/^Unknown option: --fizzbuzz\n\nUsage: code-engine \[options\] \[files...\]\n/);
  });

  it("should error if an invalid shorthand argument is used", () => {
    let cli = codeEngine("-qhzt");

    expect(cli).to.have.exitCode(9);
    expect(cli).to.have.stdout("");
    expect(cli).to.have.stderr.that.matches(/^Unknown option: -z\n\nUsage: code-engine \[options\] \[files...\]\n/);
  });

});

describe("code-engine --help", () => {

  it("should show usage text", () => {
    let cli = codeEngine("--help");

    expect(cli).to.have.exitCode(0);
    expect(cli).to.have.stderr("");
    expect(cli).to.have.stdout.that.contains(manifest.description);
    expect(cli).to.have.stdout.that.matches(/\nUsage: code-engine \[options\] \[files...\]\n/);
  });

  it("should support -h shorthand", () => {
    let cli = codeEngine("-h");

    expect(cli).to.have.exitCode(0);
    expect(cli).to.have.stderr("");
    expect(cli).to.have.stdout.that.contains(manifest.description);
    expect(cli).to.have.stdout.that.matches(/\nUsage: code-engine \[options\] \[files...\]\n/);
  });

  it("should ignore other arguments", () => {
    let cli = codeEngine("--quiet --help --version");

    expect(cli).to.have.exitCode(0);
    expect(cli).to.have.stderr("");
    expect(cli).to.have.stdout.that.contains(manifest.description);
    expect(cli).to.have.stdout.that.matches(/\nUsage: code-engine \[options\] \[files...\]\n/);
  });

  it("should ignore other shorthand arguments", () => {
    let cli = codeEngine("-qhv");

    expect(cli).to.have.exitCode(0);
    expect(cli).to.have.stderr("");
    expect(cli).to.have.stdout.that.contains(manifest.description);
    expect(cli).to.have.stdout.that.matches(/\nUsage: code-engine \[options\] \[files...\]\n/);
  });

});

describe("code-engine --version", () => {

  it("should show the version number", () => {
    let cli = codeEngine("--version");

    expect(cli).to.have.exitCode(0);
    expect(cli).to.have.stderr("");
    expect(cli).to.have.stdout(manifest.version + "\n");
  });

  it("should support -v shorthand", () => {
    let cli = codeEngine("-v");

    expect(cli).to.have.exitCode(0);
    expect(cli).to.have.stderr("");
    expect(cli).to.have.stdout(manifest.version + "\n");
  });

  it("should ignore other arguments", () => {
    let cli = codeEngine("--quiet --version");

    expect(cli).to.have.exitCode(0);
    expect(cli).to.have.stderr("");
    expect(cli).to.have.stdout(manifest.version + "\n");
  });

  it("should ignore other shorthand arguments", () => {
    let cli = codeEngine("-qv");

    expect(cli).to.have.exitCode(0);
    expect(cli).to.have.stderr("");
    expect(cli).to.have.stdout(manifest.version + "\n");
  });

});

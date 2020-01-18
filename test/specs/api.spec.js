"use strict";

const CodeEngine = require("../../");
const { expect } = require("chai");

describe("CodeEngine() API", () => {

  it("should create a CodeEngine instance", () => {
    let engine = new CodeEngine();
    expect(engine).to.be.a("CodeEngine");
    expect(engine).to.be.an.instanceOf(CodeEngine);
  });

  it("should use CodeEngine plugins", async () => {
    let plugin1 = {
      async* read () {
        await delay(100);
        yield { path: "file1.txt", text: "Hello, world" };

        await delay(100);
        yield { path: "subdir/file2.html", text: "<h1>Hello, world</h1>" };

        await delay(100);
        yield { path: "sub/dir/file3.png", contents: Buffer.from([0, 1, 1, 0, 1, 0, 0, 1]) };
      }
    };

    function plugin2 (file) {
      if (file.extension === ".txt") {
        file.text += "!!!";
      }
      return file;
    }

    let plugin3 = {
      output: [],
      async* processFiles (files) {
        for await (let file of files) {
          this.output.push(file);
          yield file;
        }
      }
    };

    let engine = new CodeEngine();
    await engine.use(plugin1, plugin2, plugin3);
    let summary = await engine.run();

    expect(summary.input.fileCount).to.equal(3);
    expect(summary.input.fileSize).to.equal(41);

    expect(summary.output.fileCount).to.equal(3);
    expect(summary.output.fileSize).to.equal(44);

    expect(plugin3.output).to.have.lengthOf(3);
    expect(plugin3.output.find(file => file.name === "file1.txt")).to.have.property("text", "Hello, world!!!");
  });

  function delay (time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

});

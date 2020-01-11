#!/usr/bin/env node
"use strict";

const { CodeEngineCLI } = require("@code-engine/cli");
const manifest = require("../package.json");

let cli = new CodeEngineCLI({ manifest });
cli.main(process.argv.slice(2));

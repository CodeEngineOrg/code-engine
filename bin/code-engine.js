#!/usr/bin/env node
"use strict";

const { CodeEngineCLI } = require("@code-engine/cli");

let cli = new CodeEngineCLI();

cli.main(process.argv.slice(2));

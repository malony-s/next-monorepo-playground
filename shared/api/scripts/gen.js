#!/usr/bin/env node
const { join } = require("path");
const { existsSync } = require("fs");
const { exec } = require("child_process");

const CWD = process.cwd();
const DestinationPath = join(CWD, "src");
const hasSrc = existsSync(DestinationPath);
const Input = process.argv[2];

if (!Input) {
  console.error("Please input local path or url");
  return process.exit(-1);
}

if (!hasSrc) {
  const mkdir = exec(`mkdir ${DestinationPath}`);
  mkdir.on("exit", () => {
    console.log(`mkdir ${DestinationPath}`);
  });
}
const cmdTemplate = `docker run --rm -v ${DestinationPath}:/local openapitools/openapi-generator-cli generate -i ${Input} -g typescript-axios -o local/.`;

const openapitools = exec(cmdTemplate);
openapitools.stdout.pipe(process.stdout);
openapitools.on("exit", () => {
  const rmScript = exec(join(CWD, "scripts", "rm.js"));
  rmScript.stdout.pipe(process.stdout);
});

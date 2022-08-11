#!/usr/bin/env node
const { join } = require('path');
const { existsSync } = require('fs');
const { exec } = require('child_process');

const CWD = process.cwd();

const Input = process.argv[2];
const OutputDir = process.argv[3];
if (!Input) {
  console.error('Please input local path or url');
  return process.exit(-1);
}

if (!OutputDir) {
  console.error('Please input output dir');
  return process.exit(-1);
}

const DestinationPath = join(CWD, OutputDir);
const hasSrc = existsSync(DestinationPath);

if (!hasSrc) {
  const mkdir = exec(`mkdir ${DestinationPath}`);
  mkdir.on('exit', () => {
    console.log(`mkdir ${DestinationPath}`);
  });
}
const cmdTemplate = `docker run --rm -v ${DestinationPath}:/local openapitools/openapi-generator-cli generate -i ${Input} -g typescript-axios -o local/.`;

const openapitools = exec(cmdTemplate);
openapitools.stdout.pipe(process.stdout);
openapitools.on('exit', () => {
  const rmScript = exec(`${join(CWD, 'scripts', 'rm.js')} ${DestinationPath}`);
  rmScript.stdout.pipe(process.stdout);
});

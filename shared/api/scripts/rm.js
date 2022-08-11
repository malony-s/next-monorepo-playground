#!/usr/bin/env node
const { join } = require('path');
const { readdirSync } = require('fs');
const { exec } = require('child_process');

const DestinationPath = process.argv[2];

console.log('remove files is exclude *.ts...');

const isNotTSFiles = readdirSync(DestinationPath)
  .filter((file) => !/\.ts$/.test(file))
  .map((file) => join(DestinationPath, file));

const rm = exec(`rm -rf ${isNotTSFiles.join(' ')}`, (error) => {
  if (error) {
    console.log(error);
  }
});

rm.on('exit', () => console.log('End rm script.'));

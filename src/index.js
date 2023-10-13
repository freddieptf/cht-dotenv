#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const findAndReplace = require('./dotenv');

const printUsage = () => {
  console.log(`
NAME
  cht-dotenv - Helper for injecting environment variables into your config.
  Replaces instances of env.{NAME} with the value of {NAME} in your environment
  
FLAGS
  -f <path> - Path to file
`);
};

let filePath;
const fileArgIdx = process.argv.indexOf('-f');
if (fileArgIdx > -1) {
  filePath = process.argv[fileArgIdx + 1];
} else {
  filePath = path.join(process.cwd(), 'app_settings', 'base_settings.json');
  console.info('using default path', filePath);
}

if (!filePath) {
  console.error('missing flag value! Did you pass flag -f without a path?');
  printUsage();
  process.exit(1);
}

try {
  const fileContents = fs.readFileSync(filePath).toString();
  const updatedContent = findAndReplace(fileContents, process.env);
  if (updatedContent) {
    fs.writeFileSync(filePath, updatedContent);
  }
} catch (err) {
  console.error(err);
  process.exitCode = 1;
}

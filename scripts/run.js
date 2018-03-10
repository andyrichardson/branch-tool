#!/bin/node
const originalPath = process.cwd();

process.chdir(__dirname + '/../'); // change dir for .babelrc
require('@babel/register');

process.chdir(originalPath);  // return to original process path
require('../src/index.js');

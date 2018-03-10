/* eslint-env jest */
import { expect } from 'chai';
import { spawnSync } from 'child_process';

test('should run script without errors', () => {
  const exec = spawnSync('./scripts/run.js');
  expect(exec.stderr.data).to.be.an('undefined');
});

test('should run script and detect master branch', () => {
  const exec = spawnSync('./scripts/run.js');
  expect(exec.stdout.toString()).to.have.string('master');
});

test('should run script and provide help', () => {
  const exec = spawnSync('./scripts/run.js', ['--help']);
  expect(exec.stdout.toString()).to.have.string('help');
});

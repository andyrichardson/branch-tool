/* eslint-env jest */
import { expect } from 'chai';
import { spawnSync } from 'child_process';

const tmpdir = '/tmp/clone';
const npmRoot = `${spawnSync('npm', ['root', '-g']).stdout.toString().trim(2)}/../../bin`;

const executable = `${process.cwd()}/scripts/run.js`;

test('should install package globally without errors', () => {
  const exec = spawnSync('npm', ['i', '-g', '.']);
  expect(exec.stderr.data).to.be.an('undefined');
});

test('should have package in npm globals', () => {
  const ls = spawnSync('ls', [`${npmRoot}`]);
  expect(ls.stdout.toString()).to.have.string('branch-tool');
});

test('should clone git repository', () => {
  const exec = spawnSync('git', ['clone', 'https://github.com/defunkt/jquery-pjax.git', tmpdir]);
  expect(exec.stderr.data).to.be.an('undefined');
});

test('should navigate to git repository', () => {
  process.chdir(tmpdir);
  expect(process.cwd()).to.equal(tmpdir);
});

test('should execute without errors', () => {
  const exec = spawnSync('node', [executable]);
  expect(exec.status).to.equal(0);
});

test('should execute and detect master branch', () => {
  const exec = spawnSync('node', [executable]);
  expect(exec.stdout.toString()).to.have.string('master');
});

test('should execute and provide help', () => {
  const exec = spawnSync('node', [executable, '--help']);
  expect(exec.stdout.toString()).to.have.string('help');
});

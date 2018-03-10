// /* eslint-env jest */
import { expect } from 'chai';
import { Help } from 'src/lib/Help';

it('should be importable', () => {
  expect(Help).to.be.an('object');
});

it('should have a print function', () => {
  expect(Help.print).to.be.an('function');
});

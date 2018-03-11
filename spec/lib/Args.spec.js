/* eslint-env jest */
import { expect } from 'chai';
import { Args } from 'src/lib/Args';

it('should be importable', () => {
  expect(Args).to.be.an('object');
});

it('should have a options parameter', () => {
  expect(Args.options).to.be.an('object');
});

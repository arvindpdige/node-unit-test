import test from 'node:test';
import assert from 'node:assert';
import { add, multiply } from '../src/math.js';

test('add works', () => {
  assert.equal(add(2, 3), 5);
});

test('multiply works', () => {
  assert.equal(multiply(4, 5), 20);
});

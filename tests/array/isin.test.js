import { isIn } from "../../dist/ch";

test('should return true for valid string in string array', () => {
  const val = 'test';
  const list = ['test', 'example', 'sample'];
  expect(isIn(list, val)).toBe(true);
});

test('should return false for invalid string in string array', () => {
  const val = 'invalid';
  const list = ['test', 'example', 'sample'];
  expect(isIn(list, val)).toBe(false);
});

test('should return true for valid number in number array', () => {
  const val = 42;
  const list = [1, 2, 42, 100];
  expect(isIn(list, val)).toBe(true);
});

test('should return false for invalid number in number array', () => {
  const val = 99;
  const list = [1, 2, 42, 100];
  expect(isIn(list, val)).toBe(false);
});

test('should return true for valid boolean in boolean array', () => {
  const val = false;
  const list = [true, false, 'NA'];
  expect(isIn(list, val)).toBe(true);
});

test('should return false for invalid boolean in string array', () => {
  const val = true;
  const list = ['test', 'example', 'sample'];
  expect(isIn(list, val)).toBe(false);
});
import { isCustomType } from "../dist/ch";

test('should return true for valid string in string array', () => {
  const val = 'test';
  const customType = ['test', 'example', 'sample'];
  expect(isCustomType(val, customType)).toBe(true);
});

test('should return false for invalid string in string array', () => {
  const val = 'invalid';
  const customType = ['test', 'example', 'sample'];
  expect(isCustomType(val, customType)).toBe(false);
});

test('should return true for valid number in number array', () => {
  const val = 42;
  const customType = [1, 2, 42, 100];
  expect(isCustomType(val, customType)).toBe(true);
});

test('should return false for invalid number in number array', () => {
  const val = 99;
  const customType = [1, 2, 42, 100];
  expect(isCustomType(val, customType)).toBe(false);
});

test('should return true for valid key in object array', () => {
  const val = 'key1';
  const customType = [{ key1: 'value1' }, { key2: 'value2' }];
  expect(isCustomType(val, customType)).toBe(true);
});

test('should return false for invalid key in object array', () => {
  const val = 'invalidKey';
  const customType = [{ key1: 'value1' }, { key2: 'value2' }];
  expect(isCustomType(val, customType)).toBe(false);
});

test('should return true for valid boolean in boolean array', () => {
  const val = false;
  const customType = [true, false, 'NA'];
  expect(isCustomType(val, customType)).toBe(true);
});

test('should return false for invalid boolean in string array', () => {
  const val = true;
  const customType = ['test', 'example', 'sample'];
  expect(isCustomType(val, customType)).toBe(false);
});
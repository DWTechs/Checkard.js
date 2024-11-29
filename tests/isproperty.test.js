import { isProperty } from "../dist/ch";

const list = { key1: 'value1', key2: 'value2' };

test('should return true for valid key in object', () => {
  const val = 'key1';
  expect(isProperty(val, list)).toBe(true);
});

test('should return false for invalid key in object', () => {
  const val = 'invalidKey';
  expect(isProperty(val, list)).toBe(false);
});

test('should return false for invalid key  and valid value in object', () => {
  const val = 'value1';
  expect(isProperty(val, list)).toBe(false);
});

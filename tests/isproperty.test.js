import { isIn } from "../dist/ch";

test('should return true for valid key in object', () => {
  const val = 'key1';
  const list = { key1: 'value1', key2: 'value2' };
  expect(isIn(val, list)).toBe(true);
});

test('should return false for invalid key in object', () => {
  const val = 'invalidKey';
  const list = { key1: 'value1', key2: 'value2' };
  expect(isIn(val, list)).toBe(false);
});

test('should return false for invalid key  and valid value in object', () => {
  const val = 'value1';
  const list = { key1: 'value1', key2: 'value2' };
  expect(isIn(val, list)).toBe(false);
});

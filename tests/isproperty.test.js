import { isProperty } from "../dist/ch";

const strList = { key1: 'value1', key2: 'value2' };
const nbrList = { 1: 'value1', 2: 'value2' };
const nbrList2 = { '1': 'value1', '2': 'value2' };

test('should return true for valid string key in object', () => {
  const val = 'key1';
  expect(isProperty(val, strList)).toBe(true);
});

test('should return true for valid number key in object', () => {
  const val = 1;
  expect(isProperty(val, nbrList)).toBe(true);
});

test('should return true for valid number key as string in object', () => {
  const val = '1';
  expect(isProperty(val, nbrList2)).toBe(true);
});

test('should return false for invalid string key in object', () => {
  const val = 'invalidKey';
  expect(isProperty(val, strList)).toBe(false);
});

test('should return false for invalid string key and valid value in object', () => {
  const val = 'value1';
  expect(isProperty(val, strList)).toBe(false);
});

test('should return false for invalid number key in object', () => {
  const val = 3;
  expect(isProperty(val, nbrList)).toBe(false);
});

test('should return false for invalid number key and valid value in object', () => {
  const val = 3;
  expect(isProperty(val, nbrList)).toBe(false);
});

test('should return false for invalid number key as string in object', () => {
  const val = '3';
  expect(isProperty(val, nbrList2)).toBe(false);
});

test('should return false for invalid number key as string and valid value in object', () => {
  const val = '3';
  expect(isProperty(val, nbrList2)).toBe(false);
});

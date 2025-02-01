import { isProperty } from "../dist/ch";

const strList = { key1: 'value1', key2: 'value2' };
const nbrList = { 1: 'value1', 2: 'value2' };
const nbrList2 = { '1': 'value1', '2': 'value2' };

// Define a non-enumerable property
Object.defineProperty(strList, 'nonEnumerableProp', {
  value: 'This is a non-enumerable property',
  enumerable: false,
});
Object.defineProperty(nbrList, 3, {
  value: 'This is a non-enumerable property',
  enumerable: false,
});
Object.defineProperty(nbrList2, '3', {
  value: 'This is a non-enumerable property',
  enumerable: false,
});

test('should return true for valid string key in object', () => {
  const val = 'key1';
  expect(isProperty(val, strList, true, true)).toBe(true);
});

test('should return true for valid number key in object', () => {
  const val = 1;
  expect(isProperty(val, nbrList, true, true)).toBe(true);
});

test('should return true for valid number key as string in object', () => {
  const val = '1';
  expect(isProperty(val, nbrList2, true, true)).toBe(true);
});

test('should return false for invalid string key in object', () => {
  const val = 'invalidKey';
  expect(isProperty(val, strList, true, true)).toBe(false);
});

test('should return false for invalid string key and valid value in object', () => {
  const val = 'value1';
  expect(isProperty(val, strList, true, true)).toBe(false);
});

test('should return false for invalid number key in object', () => {
  const val = 3;
  expect(isProperty(val, nbrList, true, true)).toBe(false);
});

test('should return false for invalid number key and valid value in object', () => {
  const val = 3;
  expect(isProperty(val, nbrList, true, true)).toBe(false);
});

test('should return false for invalid number key as string in object', () => {
  const val = '3';
  expect(isProperty(val, nbrList2, true, true)).toBe(false);
});

test('should return false for invalid number key as string and valid value in object', () => {
  const val = '3';
  expect(isProperty(val, nbrList2, true, true)).toBe(false);
});

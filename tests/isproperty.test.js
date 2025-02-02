import { isProperty } from "../dist/ch";

// Define a parent object with a property
const parent = {
  inheritedProp: 'This is an inherited property'
};

// Create a child object that inherits from the parent
const strList = Object.create(parent);
const nbrList = Object.create(parent);
const nbrList2 = Object.create(parent);
Object.assign(strList, { key1: 'value1', key2: 'value2' });
Object.assign(nbrList, { 1: 'value1', 2: 'value2' });
Object.assign(nbrList2, { '1': 'value1', '2': 'value2' });

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

test('should return false for inherited key with enumerable = true and own = true', () => {
  const val = 'inheritedProp';
  expect(isProperty(strList, val, true, true)).toBe(false);
});

test('should return true for inherited key with enumerable = true and own = false', () => {
  const val = 'inheritedProp';
  expect(isProperty(strList, val, false, true)).toBe(true);
});

test('should return false for inherited key with enumerable = false and own = true', () => {
  const val = 'inheritedProp';
  expect(isProperty(strList, val, true, false)).toBe(false);
});

test('should return true for inherited key with enumerable = false and own = false', () => {
  const val = 'inheritedProp';
  expect(isProperty(strList, val, false, false)).toBe(true);
});

test('should return false for non-enumerable key with enumerable = true and own = true', () => {
  const val = 'nonEnumerableProp';
  expect(isProperty(strList, val, true, true)).toBe(false);
});

test('should return false for non-enumerable key with enumerable = true and own = false', () => {
  const val = 'nonEnumerableProp';
  expect(isProperty(strList, val, false, true)).toBe(false);
});

test('should return true for non-enumerable key with enumerable = false and own = true', () => {
  const val = 'nonEnumerableProp';
  expect(isProperty(strList, val, true, false)).toBe(true);
});

test('should return true for non-enumerable key with enumerable = false and own = false', () => {
  const val = 'nonEnumerableProp';
  expect(isProperty(strList, val, false, false)).toBe(true);
});

test('should return false for non-enumerable number key with enumerable = true and own = true', () => {
  const val = 3;
  expect(isProperty(nbrList, val, true, true)).toBe(false);
});

test('should return false for non-enumerable number key with enumerable = true and own = false', () => {
  const val = 3;
  expect(isProperty(nbrList, val, false, true)).toBe(false);
});

test('should return true for non-enumerable number key with enumerable = false and own = true', () => {
  const val = 3;
  expect(isProperty(nbrList, val, true, false)).toBe(true);
});

test('should return true for non-enumerable number key with enumerable = false and own = false', () => {
  const val = 3;
  expect(isProperty(nbrList, val, false, false)).toBe(true);
});

test('should return true for valid string key with own = false and enumerable = false', () => {
  const val = 'key1';
  expect(isProperty(strList, val, false, false)).toBe(true);
});

test('should return true for valid string key with own = false', () => {
  const val = 'key1';
  expect(isProperty(strList, val, false, true)).toBe(true);
});

test('should return true for valid string key with enumerable = false', () => {
  const val = 'key1';
  expect(isProperty(strList, val, true, false)).toBe(true);
});

test('should return true for valid string key in object', () => {
  const val = 'key1';
  expect(isProperty(strList, val, true, true)).toBe(true);
});

test('should return true for valid number key with own = false and enumerable = false', () => {
  const val = 1;
  expect(isProperty(nbrList, val, false, false)).toBe(true);
});

test('should return true for valid number key with own = false', () => {
  const val = 1;
  expect(isProperty(nbrList, val, false, true)).toBe(true);
});

test('should return true for valid number key with enumerable = false', () => {
  const val = 1;
  expect(isProperty(nbrList, val, true, false)).toBe(true);
});

test('should return true for valid number key in object', () => {
  const val = 1;
  expect(isProperty(nbrList, val, true, true)).toBe(true);
});

test('should return true for valid number key as string with own = false and enumerable = false', () => {
  const val = '1';
  expect(isProperty(nbrList2, val, false, false)).toBe(true);
});

test('should return true for valid number key as string with own = false', () => {
  const val = '1';
  expect(isProperty(nbrList2, val, false, true)).toBe(true);
});

test('should return true for valid number key as string with enumerable = false', () => {
  const val = '1';
  expect(isProperty(nbrList2, val, true, false)).toBe(true);
});

test('should return true for valid number key as string in object', () => {
  const val = '1';
  expect(isProperty(nbrList2, val, true, true)).toBe(true);
});

test('should return false for invalid string key with own = false and enumerable = false', () => {
  const val = 'invalidKey';
  expect(isProperty(strList, val, false, false)).toBe(false);
});

test('should return false for invalid string key with own = false', () => {
  const val = 'invalidKey';
  expect(isProperty(strList, val, false, true)).toBe(false);
});

test('should return false for invalid string key with nonEmurable = false', () => {
  const val = 'invalidKey';
  expect(isProperty(strList, val, true, false)).toBe(false);
});

test('should return false for invalid string key in object', () => {
  const val = 'invalidKey';
  expect(isProperty(strList, val, true, true)).toBe(false);
});

test('should return false for invalid string key and valid value with own = false and enumerable = false', () => {
  const val = 'value1';
  expect(isProperty(strList, val, false, false)).toBe(false);
});

test('should return false for invalid string key and valid value with own = false', () => {
  const val = 'value1';
  expect(isProperty(strList, val, false, true)).toBe(false);
});

test('should return false for invalid string key and valid value with enumerable = false', () => {
  const val = 'value1';
  expect(isProperty(strList, val, true, false)).toBe(false);
});

test('should return false for invalid string key and valid value in object', () => {
  const val = 'value1';
  expect(isProperty(strList, val, true, true)).toBe(false);
});

test('should return false for invalid number key in object', () => {
  const val = 3;
  expect(isProperty(nbrList, val, true, true)).toBe(false);
});

test('should return false for invalid number key and valid value in object', () => {
  const val = 3;
  expect(isProperty(nbrList, val, true, true)).toBe(false);
});

test('should return false for invalid number key as string in object', () => {
  const val = '3';
  expect(isProperty(nbrList2, val, true, true)).toBe(false);
});

test('should return false for invalid number key as string and valid value in object', () => {
  const val = '3';
  expect(isProperty(nbrList2, val, true, true)).toBe(false);
});

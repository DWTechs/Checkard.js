import { isFalsy } from "../../../dist/ch";

describe('isFalsy throwErr tests', () => {
  describe('when value is truthy', () => {
    test('should throw for boolean true', () => {
      expect(() => isFalsy(true, true)).toThrow();
    });

    test('should throw for positive number', () => {
      expect(() => isFalsy(1, true)).toThrow();
    });

    test('should throw for negative number', () => {
      expect(() => isFalsy(-1, true)).toThrow();
    });

    test('should throw for positive decimal', () => {
      expect(() => isFalsy(1.5, true)).toThrow();
    });

    test('should throw for negative decimal', () => {
      expect(() => isFalsy(-1.5, true)).toThrow();
    });

    test('should throw for Infinity', () => {
      expect(() => isFalsy(Infinity, true)).toThrow();
    });

    test('should throw for -Infinity', () => {
      expect(() => isFalsy(-Infinity, true)).toThrow();
    });

    test('should throw for non-empty string', () => {
      expect(() => isFalsy('hello', true)).toThrow();
    });

    test('should throw for single character string', () => {
      expect(() => isFalsy('a', true)).toThrow();
    });

    test('should throw for whitespace string', () => {
      expect(() => isFalsy(' ', true)).toThrow();
    });

    test('should throw for tab string', () => {
      expect(() => isFalsy('\t', true)).toThrow();
    });

    test('should throw for newline string', () => {
      expect(() => isFalsy('\n', true)).toThrow();
    });

    test('should throw for string with only spaces', () => {
      expect(() => isFalsy('   ', true)).toThrow();
    });

    test('should throw for string zero', () => {
      expect(() => isFalsy('0', true)).toThrow();
    });

    test('should throw for string false', () => {
      expect(() => isFalsy('false', true)).toThrow();
    });

    test('should throw for object', () => {
      expect(() => isFalsy({ key: 'value' }, true)).toThrow();
    });

    test('should throw for empty object', () => {
      expect(() => isFalsy({}, true)).toThrow();
    });

    test('should throw for array', () => {
      expect(() => isFalsy([1, 2, 3], true)).toThrow();
    });

    test('should throw for empty array', () => {
      expect(() => isFalsy([], true)).toThrow();
    });

    test('should throw for function', () => {
      expect(() => isFalsy(() => {}, true)).toThrow();
    });

    test('should throw for named function', () => {
      expect(() => isFalsy(function test() {}, true)).toThrow();
    });

    test('should throw for Date', () => {
      expect(() => isFalsy(new Date(), true)).toThrow();
    });

    test('should throw for RegExp', () => {
      expect(() => isFalsy(/pattern/, true)).toThrow();
    });

    test('should throw for Symbol', () => {
      expect(() => isFalsy(Symbol('test'), true)).toThrow();
    });

    test('should throw for Symbol.iterator', () => {
      expect(() => isFalsy(Symbol.iterator, true)).toThrow();
    });

    test('should throw for BigInt positive', () => {
      expect(() => isFalsy(BigInt(1), true)).toThrow();
    });

    test('should throw for BigInt negative', () => {
      expect(() => isFalsy(BigInt(-1), true)).toThrow();
    });

    test('should throw for BigInt large number', () => {
      expect(() => isFalsy(BigInt(9007199254740991), true)).toThrow();
    });
  });

  describe('edge cases with truthy values', () => {
    test('should throw for nested object', () => {
      expect(() => isFalsy({ nested: { key: 'value' } }, true)).toThrow();
    });

    test('should throw for nested array', () => {
      expect(() => isFalsy([[1, 2], [3, 4]], true)).toThrow();
    });

    test('should throw for Map', () => {
      expect(() => isFalsy(new Map(), true)).toThrow();
    });

    test('should throw for Set', () => {
      expect(() => isFalsy(new Set(), true)).toThrow();
    });

    test('should throw for WeakMap', () => {
      expect(() => isFalsy(new WeakMap(), true)).toThrow();
    });

    test('should throw for WeakSet', () => {
      expect(() => isFalsy(new WeakSet(), true)).toThrow();
    });

    test('should throw for Promise', () => {
      expect(() => isFalsy(Promise.resolve(), true)).toThrow();
    });

    test('should throw for Error object', () => {
      expect(() => isFalsy(new Error('test'), true)).toThrow();
    });

    test('should throw for ArrayBuffer', () => {
      expect(() => isFalsy(new ArrayBuffer(8), true)).toThrow();
    });

    test('should throw for DataView', () => {
      expect(() => isFalsy(new DataView(new ArrayBuffer(8)), true)).toThrow();
    });

    test('should throw for constructor function', () => {
      expect(() => isFalsy(String, true)).toThrow();
    });

    test('should throw for Math object', () => {
      expect(() => isFalsy(Math, true)).toThrow();
    });

    test('should throw for JSON object', () => {
      expect(() => isFalsy(JSON, true)).toThrow();
    });
  });

  describe('special numeric edge cases', () => {
    test('should throw for very small positive number', () => {
      expect(() => isFalsy(Number.MIN_VALUE, true)).toThrow();
    });

    test('should throw for epsilon', () => {
      expect(() => isFalsy(Number.EPSILON, true)).toThrow();
    });

    test('should throw for max safe integer', () => {
      expect(() => isFalsy(Number.MAX_SAFE_INTEGER, true)).toThrow();
    });

    test('should throw for min safe integer', () => {
      expect(() => isFalsy(Number.MIN_SAFE_INTEGER, true)).toThrow();
    });

    test('should throw for max value', () => {
      expect(() => isFalsy(Number.MAX_VALUE, true)).toThrow();
    });
  });

  describe('string edge cases', () => {
    test('should throw for unicode string', () => {
      expect(() => isFalsy('🚀', true)).toThrow();
    });

    test('should throw for string with null character', () => {
      expect(() => isFalsy('\0', true)).toThrow();
    });

    test('should throw for escape sequences', () => {
      expect(() => isFalsy('\b\f\r\v', true)).toThrow();
    });

    test('should throw for long string', () => {
      expect(() => isFalsy('a'.repeat(1000), true)).toThrow();
    });
  });
});
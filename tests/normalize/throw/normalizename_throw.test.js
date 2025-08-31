import { normalizeName } from "../../../dist/ch";

describe('normalizeName throwErr tests', () => {
  describe('when name is non-string type', () => {
    test('should throw for null name', () => {
      expect(() => normalizeName(null, true)).toThrow();
    });

    test('should throw for undefined name', () => {
      expect(() => normalizeName(undefined, true)).toThrow();
    });

    test('should throw for number name', () => {
      expect(() => normalizeName(123, true)).toThrow();
    });

    test('should throw for zero number', () => {
      expect(() => normalizeName(0, true)).toThrow();
    });

    test('should throw for negative number', () => {
      expect(() => normalizeName(-123, true)).toThrow();
    });

    test('should throw for float number', () => {
      expect(() => normalizeName(12.34, true)).toThrow();
    });

    test('should throw for boolean true', () => {
      expect(() => normalizeName(true, true)).toThrow();
    });

    test('should throw for boolean false', () => {
      expect(() => normalizeName(false, true)).toThrow();
    });

    test('should throw for object', () => {
      expect(() => normalizeName({}, true)).toThrow();
    });

    test('should throw for array', () => {
      expect(() => normalizeName([], true)).toThrow();
    });

    test('should throw for function', () => {
      expect(() => normalizeName(() => {}, true)).toThrow();
    });

    test('should throw for Date object', () => {
      expect(() => normalizeName(new Date(), true)).toThrow();
    });

    test('should throw for RegExp object', () => {
      expect(() => normalizeName(/test/, true)).toThrow();
    });

    test('should throw for Symbol', () => {
      expect(() => normalizeName(Symbol('test'), true)).toThrow();
    });

    test('should throw for BigInt', () => {
      expect(() => normalizeName(BigInt(123), true)).toThrow();
    });

    test('should throw for NaN', () => {
      expect(() => normalizeName(NaN, true)).toThrow();
    });

    test('should throw for Infinity', () => {
      expect(() => normalizeName(Infinity, true)).toThrow();
    });

    test('should throw for -Infinity', () => {
      expect(() => normalizeName(-Infinity, true)).toThrow();
    });
  });

  describe('when name is empty string', () => {
    test('should throw for empty string', () => {
      expect(() => normalizeName('', true)).toThrow();
    });
  });
});
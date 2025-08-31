import { isObject } from "../../../dist/ch";

describe('isObject throwErr tests', () => {
  describe('when value is not an object', () => {
    test('should throw for null', () => {
      expect(() => isObject(null, false, true)).toThrow();
    });

    test('should throw for undefined', () => {
      expect(() => isObject(undefined, false, true)).toThrow();
    });

    test('should throw for string', () => {
      expect(() => isObject('not object', false, true)).toThrow();
    });

    test('should throw for number', () => {
      expect(() => isObject(123, false, true)).toThrow();
    });

    test('should throw for boolean true', () => {
      expect(() => isObject(true, false, true)).toThrow();
    });

    test('should throw for boolean false', () => {
      expect(() => isObject(false, false, true)).toThrow();
    });

    test('should throw for array', () => {
      expect(() => isObject([1, 2, 3], false, true)).toThrow();
    });

    test('should throw for empty array', () => {
      expect(() => isObject([], false, true)).toThrow();
    });

    test('should throw for function', () => {
      expect(() => isObject(() => {}, false, true)).toThrow();
    });

    test('should not throw for Date (considered as object by typeof but not by this function)', () => {
      expect(() => isObject(new Date(), false, true)).not.toThrow();
    });

    test('should not throw for RegExp', () => {
      expect(() => isObject(/regex/, false, true)).not.toThrow();
    });

    test('should throw for Symbol', () => {
      expect(() => isObject(Symbol('test'), false, true)).toThrow();
    });

    test('should throw for BigInt', () => {
      expect(() => isObject(BigInt(123), false, true)).toThrow();
    });
  });

  describe('when checking for non-empty object', () => {
    test('should throw for empty object when empty=true', () => {
      expect(() => isObject({}, true, true)).toThrow();
    });

    test('should throw for null when empty=true', () => {
      expect(() => isObject(null, true, true)).toThrow();
    });

    test('should throw for undefined when empty=true', () => {
      expect(() => isObject(undefined, true, true)).toThrow();
    });

    test('should throw for string when empty=true', () => {
      expect(() => isObject('test', true, true)).toThrow();
    });

    test('should throw for number when empty=true', () => {
      expect(() => isObject(42, true, true)).toThrow();
    });

    test('should throw for boolean when empty=true', () => {
      expect(() => isObject(false, true, true)).toThrow();
    });

    test('should throw for array when empty=true', () => {
      expect(() => isObject([1, 2], true, true)).toThrow();
    });

    test('should throw for function when empty=true', () => {
      expect(() => isObject(function() {}, true, true)).toThrow();
    });
  });

  describe('edge cases', () => {
    test('should throw for empty Object.create(null) when empty=true', () => {
      expect(() => isObject(Object.create(null), true, true)).toThrow();
    });

    test('should throw for nested empty object when empty=true', () => {
      const obj = { nested: {} };
      expect(() => isObject(obj.nested, true, true)).toThrow();
    });
  });

  describe('with different empty parameter values', () => {
    test('should throw for empty object with empty=true', () => {
      expect(() => isObject({}, true, true)).toThrow();
    });

    test('should throw for non-object with empty=false', () => {
      expect(() => isObject('string', false, true)).toThrow();
    });

    test('should throw for non-object with empty=true', () => {
      expect(() => isObject('string', true, true)).toThrow();
    });
  });
});
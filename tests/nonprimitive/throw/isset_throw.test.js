import { isSet } from "../../../dist/ch";

describe('isSet throwErr tests', () => {
  describe('when value is not a Set', () => {
    test('should throw for null', () => {
      expect(() => isSet(null, null, null, true)).toThrow();
    });

    test('should throw for undefined', () => {
      expect(() => isSet(undefined, null, null, true)).toThrow();
    });

    test('should throw for string', () => {
      expect(() => isSet('not a set', null, null, true)).toThrow();
    });

    test('should throw for number', () => {
      expect(() => isSet(123, null, null, true)).toThrow();
    });

    test('should throw for boolean true', () => {
      expect(() => isSet(true, null, null, true)).toThrow();
    });

    test('should throw for boolean false', () => {
      expect(() => isSet(false, null, null, true)).toThrow();
    });

    test('should throw for object', () => {
      expect(() => isSet({}, null, null, true)).toThrow();
    });

    test('should throw for array', () => {
      expect(() => isSet([1, 2, 3], null, null, true)).toThrow();
    });

    test('should throw for Map', () => {
      expect(() => isSet(new Map(), null, null, true)).toThrow();
    });

    test('should throw for function', () => {
      expect(() => isSet(() => {}, null, null, true)).toThrow();
    });

    test('should throw for Date', () => {
      expect(() => isSet(new Date(), null, null, true)).toThrow();
    });

    test('should throw for Symbol', () => {
      expect(() => isSet(Symbol('test'), null, null, true)).toThrow();
    });
  });

  describe('when Set size comparison fails', () => {
    test('should throw for Set size not equal to limit', () => {
      expect(() => isSet(new Set([1, 2, 3]), '=', 5, true)).toThrow();
    });

    test('should throw for Set size not greater than limit', () => {
      expect(() => isSet(new Set([1, 2]), '>', 5, true)).toThrow();
    });

    test('should throw for Set size not less than limit', () => {
      expect(() => isSet(new Set([1, 2, 3, 4, 5]), '<', 3, true)).toThrow();
    });

    test('should throw for Set size not greater or equal to limit', () => {
      expect(() => isSet(new Set([1, 2]), '>=', 5, true)).toThrow();
    });

    test('should throw for Set size not less or equal to limit', () => {
      expect(() => isSet(new Set([1, 2, 3, 4, 5]), '<=', 3, true)).toThrow();
    });

    test('should throw for Set size not not equal to limit', () => {
      expect(() => isSet(new Set([1, 2, 3]), '!=', 3, true)).toThrow();
    });

    test('should throw for empty Set with non-empty comparator', () => {
      expect(() => isSet(new Set(), '!0', null, true)).toThrow();
    });

    test('should throw for non-empty Set with empty comparator', () => {
      expect(() => isSet(new Set([1]), '0', null, true)).toThrow();
    });
  });
});

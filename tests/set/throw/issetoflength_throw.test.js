import { isSetOfLength } from "../../../dist/ch";

describe('isSetOfLength throwErr tests', () => {
  describe('when value is not a Set', () => {
    test('should throw for null', () => {
      expect(() => isSetOfLength(null, 0, 10, true)).toThrow();
    });

    test('should throw for undefined', () => {
      expect(() => isSetOfLength(undefined, 0, 10, true)).toThrow();
    });

    test('should throw for array', () => {
      expect(() => isSetOfLength([1, 2, 3], 0, 10, true)).toThrow();
    });

    test('should throw for string', () => {
      expect(() => isSetOfLength('not a set', 0, 10, true)).toThrow();
    });

    test('should throw for object', () => {
      expect(() => isSetOfLength({}, 0, 10, true)).toThrow();
    });
  });

  describe('when Set size is below minimum', () => {
    test('should throw for empty Set with min=1', () => {
      expect(() => isSetOfLength(new Set(), 1, 10, true)).toThrow();
    });

    test('should throw for Set with 1 element when min=2', () => {
      expect(() => isSetOfLength(new Set([1]), 2, 10, true)).toThrow();
    });

    test('should throw for Set with 5 elements when min=10', () => {
      expect(() => isSetOfLength(new Set([1, 2, 3, 4, 5]), 10, 20, true)).toThrow();
    });
  });

  describe('when Set size is above maximum', () => {
    test('should throw for Set with 5 elements when max=3', () => {
      expect(() => isSetOfLength(new Set([1, 2, 3, 4, 5]), 0, 3, true)).toThrow();
    });

    test('should throw for Set with 10 elements when max=5', () => {
      expect(() => isSetOfLength(new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 0, 5, true)).toThrow();
    });
  });
});

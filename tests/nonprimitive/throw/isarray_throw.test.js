import { isArray } from "../../../dist/ch";

describe('isArray throwErr tests', () => {
  describe('when value is not an array', () => {
    test('should throw for null', () => {
      expect(() => isArray(null, null, null, true)).toThrow();
    });

    test('should throw for undefined', () => {
      expect(() => isArray(undefined, null, null, true)).toThrow();
    });

    test('should throw for string', () => {
      expect(() => isArray('not array', null, null, true)).toThrow();
    });

    test('should throw for number', () => {
      expect(() => isArray(123, null, null, true)).toThrow();
    });

    test('should throw for boolean true', () => {
      expect(() => isArray(true, null, null, true)).toThrow();
    });

    test('should throw for boolean false', () => {
      expect(() => isArray(false, null, null, true)).toThrow();
    });

    test('should throw for object', () => {
      expect(() => isArray({ length: 3 }, null, null, true)).toThrow();
    });

    test('should throw for function', () => {
      expect(() => isArray(() => {}, null, null, true)).toThrow();
    });

    test('should throw for Date', () => {
      expect(() => isArray(new Date(), null, null, true)).toThrow();
    });

    test('should throw for RegExp', () => {
      expect(() => isArray(/regex/, null, null, true)).toThrow();
    });

    test('should throw for Symbol', () => {
      expect(() => isArray(Symbol('test'), null, null, true)).toThrow();
    });

    test('should throw for BigInt', () => {
      expect(() => isArray(BigInt(123), null, null, true)).toThrow();
    });
  });

  describe('when array length comparison fails', () => {
    test('should throw for array length not equal to limit', () => {
      expect(() => isArray([1, 2, 3], '=', 5, true)).toThrow();
    });

    test('should throw for array length not greater than limit', () => {
      expect(() => isArray([1, 2], '>', 5, true)).toThrow();
    });

    test('should throw for array length not less than limit', () => {
      expect(() => isArray([1, 2, 3, 4, 5], '<', 3, true)).toThrow();
    });

    test('should throw for array length not greater or equal to limit', () => {
      expect(() => isArray([1, 2], '>=', 5, true)).toThrow();
    });

    test('should throw for array length not less or equal to limit', () => {
      expect(() => isArray([1, 2, 3, 4, 5], '<=', 3, true)).toThrow();
    });

    test('should throw for array length not not equal to limit', () => {
      expect(() => isArray([1, 2, 3], '!=', 3, true)).toThrow();
    });
  });

  describe('with empty array and comparisons', () => {
    test('should throw for empty array length not equal to limit', () => {
      expect(() => isArray([], '=', 1, true)).toThrow();
    });

    test('should throw for empty array length not greater than limit', () => {
      expect(() => isArray([], '>', 0, true)).toThrow();
    });

    test('should throw for empty array length not greater or equal to limit', () => {
      expect(() => isArray([], '>=', 1, true)).toThrow();
    });

    test('should throw for empty array length not not equal to limit', () => {
      expect(() => isArray([], '!=', 0, true)).toThrow();
    });
  });

  describe('with large array and comparisons', () => {
    const largeArray = new Array(100).fill(0);

    test('should throw for large array length not equal to small limit', () => {
      expect(() => isArray(largeArray, '=', 10, true)).toThrow();
    });

    test('should throw for large array length not less than small limit', () => {
      expect(() => isArray(largeArray, '<', 50, true)).toThrow();
    });

    test('should throw for large array length not less or equal to small limit', () => {
      expect(() => isArray(largeArray, '<=', 50, true)).toThrow();
    });
  });

  describe('with invalid comparator', () => {
    test('should throw for non-array with invalid comparator', () => {
      expect(() => isArray('not array', 'invalid', 5, true)).toThrow();
    });

    test('should throw for array with invalid comparator causing comparison failure', () => {
      expect(() => isArray([1, 2, 3], 'invalid', 3, true)).toThrow();
    });
  });

  describe('edge cases', () => {
    test('should throw for array-like object', () => {
      const arrayLike = { 0: 'a', 1: 'b', length: 2 };
      expect(() => isArray(arrayLike, null, null, true)).toThrow();
    });

    test('should throw for arguments object', () => {
      function testFunc() {
        expect(() => isArray(arguments, null, null, true)).toThrow();
      }
      testFunc(1, 2, 3);
    });

    test('should throw for NodeList (if available)', () => {
      if (typeof document !== 'undefined') {
        const nodeList = document.querySelectorAll('div');
        expect(() => isArray(nodeList, null, null, true)).toThrow();
      }
    });
  });

  describe('with negative limits', () => {
    test('should throw for array length not equal to negative limit', () => {
      expect(() => isArray([1, 2, 3], '=', -1, true)).toThrow();
    });

    test('should throw for array length not greater than negative limit (should pass but test failure case)', () => {
      expect(() => isArray([], '>', -1, true)).not.toThrow();
      expect(() => isArray([], '<', -1, true)).toThrow();
    });
  });

  describe('with zero limits', () => {
    test('should throw for non-empty array length not equal to zero', () => {
      expect(() => isArray([1], '=', 0, true)).toThrow();
    });

    test('should throw for non-empty array length not less or equal to zero', () => {
      expect(() => isArray([1], '<=', 0, true)).toThrow();
    });

    test('should throw for non-empty array length not less than zero', () => {
      expect(() => isArray([1], '<', 0, true)).toThrow();
    });
  });
});
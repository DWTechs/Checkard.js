import { isArrayOfLength } from "../../../dist/ch";

describe('isArrayOfLength throwErr tests', () => {
  describe('when array length is below minimum', () => {
    test('should throw for empty array with min=1', () => {
      expect(() => isArrayOfLength([], 1, 10, true)).toThrow();
    });

    test('should throw for array with 1 element when min=2', () => {
      expect(() => isArrayOfLength([1], 2, 10, true)).toThrow();
    });

    test('should throw for array with 5 elements when min=10', () => {
      expect(() => isArrayOfLength([1, 2, 3, 4, 5], 10, 20, true)).toThrow();
    });

    test('should throw for array with 0 elements when min=5', () => {
      expect(() => isArrayOfLength([], 5, 15, true)).toThrow();
    });

    test('should throw for small array when min is large', () => {
      expect(() => isArrayOfLength([1, 2], 100, 200, true)).toThrow();
    });

    test('should throw for array just below minimum', () => {
      expect(() => isArrayOfLength([1, 2, 3, 4], 5, 10, true)).toThrow();
    });
  });

  describe('when array length is above maximum', () => {
    test('should throw for array with 5 elements when max=3', () => {
      expect(() => isArrayOfLength([1, 2, 3, 4, 5], 0, 3, true)).toThrow();
    });

    test('should throw for array with 10 elements when max=5', () => {
      expect(() => isArrayOfLength([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0, 5, true)).toThrow();
    });

    test('should throw for large array when max is small', () => {
      const largeArray = new Array(100).fill(0);
      expect(() => isArrayOfLength(largeArray, 0, 10, true)).toThrow();
    });

    test('should throw for array just above maximum', () => {
      expect(() => isArrayOfLength([1, 2, 3, 4, 5, 6], 0, 5, true)).toThrow();
    });

    test('should throw for very large array with small max', () => {
      const veryLargeArray = new Array(1000).fill(0);
      expect(() => isArrayOfLength(veryLargeArray, 0, 100, true)).toThrow();
    });
  });

  describe('when array length is outside range on both sides', () => {
    test('should throw for empty array with range [5, 10]', () => {
      expect(() => isArrayOfLength([], 5, 10, true)).toThrow();
    });

    test('should throw for large array with narrow range', () => {
      const largeArray = new Array(50).fill(0);
      expect(() => isArrayOfLength(largeArray, 5, 10, true)).toThrow();
    });

    test('should throw for small array with high range', () => {
      expect(() => isArrayOfLength([1], 10, 20, true)).toThrow();
    });

    test('should throw for array with narrow range requirement', () => {
      expect(() => isArrayOfLength([1, 2, 3, 4, 5, 6, 7, 8], 2, 4, true)).toThrow();
    });
  });

  describe('edge cases with specific ranges', () => {
    test('should throw for array with length 0 when range is [1, 1]', () => {
      expect(() => isArrayOfLength([], 1, 1, true)).toThrow();
    });

    test('should throw for array with length 2 when range is [1, 1]', () => {
      expect(() => isArrayOfLength([1, 2], 1, 1, true)).toThrow();
    });

    test('should throw for array with length 0 when range is [3, 3]', () => {
      expect(() => isArrayOfLength([], 3, 3, true)).toThrow();
    });

    test('should throw for array with length 5 when range is [3, 3]', () => {
      expect(() => isArrayOfLength([1, 2, 3, 4, 5], 3, 3, true)).toThrow();
    });

    test('should throw for empty array when min equals max and both are positive', () => {
      expect(() => isArrayOfLength([], 7, 7, true)).toThrow();
    });
  });

  describe('when array parameter is null/undefined', () => {
    test('should throw for null array', () => {
      expect(() => isArrayOfLength(null, 0, 10, true)).toThrow();
    });

    test('should throw for undefined array', () => {
      expect(() => isArrayOfLength(undefined, 0, 10, true)).toThrow();
    });

    test('should throw for null array with specific range', () => {
      expect(() => isArrayOfLength(null, 5, 15, true)).toThrow();
    });

    test('should throw for undefined array with specific range', () => {
      expect(() => isArrayOfLength(undefined, 2, 8, true)).toThrow();
    });
  });

  describe('with negative minimum values', () => {
    test('should throw for empty array when min is negative and length is below max', () => {
      expect(() => isArrayOfLength([], -5, 0, true)).toThrow();
    });

    test('should throw for array that exceeds max when min is negative', () => {
      expect(() => isArrayOfLength([1, 2, 3, 4, 5], -10, 3, true)).toThrow();
    });

    test('should throw for large array with negative min but small max', () => {
      const array = new Array(20).fill(0);
      expect(() => isArrayOfLength(array, -5, 10, true)).toThrow();
    });
  });

  describe('with large maximum values', () => {
    test('should throw for array below minimum with very large max', () => {
      expect(() => isArrayOfLength([1], 5, 999999999, true)).toThrow();
    });

    test('should throw for empty array with large range', () => {
      expect(() => isArrayOfLength([], 10, 999999999, true)).toThrow();
    });
  });

  describe('with arrays containing different types', () => {
    test('should throw for mixed type array outside range', () => {
      const mixedArray = [1, 'string', {}, [], null, undefined];
      expect(() => isArrayOfLength(mixedArray, 10, 20, true)).toThrow();
    });

    test('should throw for array of objects outside range', () => {
      const objectArray = [{a: 1}, {b: 2}];
      expect(() => isArrayOfLength(objectArray, 5, 10, true)).toThrow();
    });

    test('should throw for array of arrays outside range', () => {
      const nestedArray = [[1, 2], [3, 4], [5, 6]];
      expect(() => isArrayOfLength(nestedArray, 10, 15, true)).toThrow();
    });

    test('should throw for array of functions outside range', () => {
      const funcArray = [() => {}, function() {}, function test() {}];
      expect(() => isArrayOfLength(funcArray, 10, 20, true)).toThrow();
    });
  });

  describe('boundary conditions', () => {
    test('should throw for array with length exactly one less than min', () => {
      const array = new Array(9).fill(0);
      expect(() => isArrayOfLength(array, 10, 20, true)).toThrow();
    });

    test('should throw for array with length exactly one more than max', () => {
      const array = new Array(11).fill(0);
      expect(() => isArrayOfLength(array, 0, 10, true)).toThrow();
    });

    test('should throw when min > max and array length is valid for neither', () => {
      expect(() => isArrayOfLength([1, 2, 3], 10, 5, true)).toThrow();
    });
  });

  describe('sparse arrays', () => {
    test('should throw for sparse array outside range', () => {
      const sparse = new Array(3);
      sparse[0] = 1;
      sparse[2] = 3;
      expect(() => isArrayOfLength(sparse, 10, 20, true)).toThrow();
    });

    test('should throw for large sparse array with small max', () => {
      const sparse = new Array(50);
      sparse[10] = 'value';
      expect(() => isArrayOfLength(sparse, 0, 10, true)).toThrow();
    });
  });
});
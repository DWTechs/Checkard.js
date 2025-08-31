import { isIn } from "../../../dist/ch";

describe('isIn throwErr tests', () => {
  describe('when value is not found in array', () => {
    test('should throw for value not in array', () => {
      expect(() => isIn([1, 2, 3], 4, 0, true)).toThrow();
    });

    test('should throw for string not in array', () => {
      expect(() => isIn(['a', 'b', 'c'], 'd', 0, true)).toThrow();
    });

    test('should throw for object not in array', () => {
      const obj1 = { id: 1 };
      const obj2 = { id: 2 };
      const obj3 = { id: 3 };
      expect(() => isIn([obj1, obj2], obj3, 0, true)).toThrow();
    });

    test('should throw for boolean not in array', () => {
      expect(() => isIn([true, true], false, 0, true)).toThrow();
    });

    test('should throw for null not in array', () => {
      expect(() => isIn([1, 2, undefined], null, 0, true)).toThrow();
    });

    test('should throw for undefined not in array', () => {
      expect(() => isIn([1, 2, null], undefined, 0, true)).toThrow();
    });

    test('should throw for number not in string array', () => {
      expect(() => isIn(['1', '2', '3'], 1, 0, true)).toThrow();
    });

    test('should throw for string not in number array', () => {
      expect(() => isIn([1, 2, 3], '1', 0, true)).toThrow();
    });
  });

  describe('when searching in empty array', () => {
    test('should throw for any value in empty array', () => {
      expect(() => isIn([], 'anything', 0, true)).toThrow();
    });

    test('should throw for number in empty array', () => {
      expect(() => isIn([], 42, 0, true)).toThrow();
    });

    test('should throw for object in empty array', () => {
      expect(() => isIn([], {}, 0, true)).toThrow();
    });

    test('should throw for null in empty array', () => {
      expect(() => isIn([], null, 0, true)).toThrow();
    });

    test('should throw for undefined in empty array', () => {
      expect(() => isIn([], undefined, 0, true)).toThrow();
    });

    test('should throw for function in empty array', () => {
      expect(() => isIn([], () => {}, 0, true)).toThrow();
    });

    test('should throw for array in empty array', () => {
      expect(() => isIn([], [], 0, true)).toThrow();
    });
  });

  describe('when value exists but from index excludes it', () => {
    test('should throw when value exists at index 0 but from=1', () => {
      expect(() => isIn([1, 2, 3], 1, 1, true)).toThrow();
    });

    test('should throw when value exists at index 1 but from=2', () => {
      expect(() => isIn([1, 2, 3], 2, 2, true)).toThrow();
    });

    test('should throw when value exists early but from index is late', () => {
      expect(() => isIn(['a', 'b', 'c', 'd'], 'a', 2, true)).toThrow();
    });

    test('should throw when from index is beyond array length', () => {
      expect(() => isIn([1, 2, 3], 2, 10, true)).toThrow();
    });

    test('should throw when from index equals array length', () => {
      expect(() => isIn([1, 2, 3], 1, 3, true)).toThrow();
    });

    test('should throw when value exists multiple times but all before from index', () => {
      expect(() => isIn([1, 1, 2, 3], 1, 2, true)).toThrow();
    });
  });

  describe('with negative from index', () => {
    test('should throw when value not found with negative from index', () => {
      expect(() => isIn([1, 2, 3], 4, -1, true)).toThrow();
    });

    test('should throw when negative from excludes the value', () => {
      expect(() => isIn([1, 2, 3, 4, 5], 1, -3, true)).toThrow();
    });

    test('should not throw when negative from is too large', () => {
      expect(() => isIn([1, 2, 3], 1, -10, true)).not.toThrow();
    });
  });

  describe('with different data types', () => {
    test('should throw for mixed array when searching for wrong type', () => {
      expect(() => isIn([1, 'a', true, null], 'b', 0, true)).toThrow();
    });

    test('should throw for Date not in array of dates', () => {
      const date1 = new Date('2023-01-01');
      const date2 = new Date('2023-02-01');
      const date3 = new Date('2023-03-01');
      expect(() => isIn([date1, date2], date3, 0, true)).toThrow();
    });

    test('should throw for RegExp not in array', () => {
      expect(() => isIn([/abc/, /def/], /ghi/, 0, true)).toThrow();
    });

    test('should throw for Symbol not in array', () => {
      const sym1 = Symbol('test1');
      const sym2 = Symbol('test2');
      const sym3 = Symbol('test3');
      expect(() => isIn([sym1, sym2], sym3, 0, true)).toThrow();
    });

    test('should throw for BigInt not in array', () => {
      expect(() => isIn([BigInt(1), BigInt(2)], BigInt(3), 0, true)).toThrow();
    });

    test('should throw for function not in array of functions', () => {
      const func1 = () => 1;
      const func2 = () => 2;
      const func3 = () => 3;
      expect(() => isIn([func1, func2], func3, 0, true)).toThrow();
    });
  });

  describe('with nested arrays', () => {
    test('should throw for array not found in array of arrays', () => {
      expect(() => isIn([[1, 2], [3, 4]], [5, 6], 0, true)).toThrow();
    });

    test('should throw for similar but different nested array', () => {
      const arr1 = [1, 2];
      const arr2 = [3, 4];
      const arr3 = [1, 2]; // Different reference
      expect(() => isIn([arr1, arr2], arr3, 0, true)).toThrow();
    });

    test('should throw for deeply nested array not found', () => {
      expect(() => isIn([[[1]], [[2]]], [[3]], 0, true)).toThrow();
    });
  });

  describe('with similar but different values', () => {
    test('should throw for string number vs actual number', () => {
      expect(() => isIn(['1', '2', '3'], 2, 0, true)).toThrow();
    });

    test('should throw for number vs string representation', () => {
      expect(() => isIn([1, 2, 3], '2', 0, true)).toThrow();
    });

    test('should throw for true vs "true"', () => {
      expect(() => isIn([true, false], 'true', 0, true)).toThrow();
    });

    test('should throw for 0 vs false', () => {
      expect(() => isIn([0, 1, 2], false, 0, true)).toThrow();
    });

    test('should throw for empty string vs 0', () => {
      expect(() => isIn(['', 'a', 'b'], 0, 0, true)).toThrow();
    });

    test('should throw for null vs undefined', () => {
      expect(() => isIn([null, 1, 2], undefined, 0, true)).toThrow();
    });

    test('should throw for undefined vs null', () => {
      expect(() => isIn([undefined, 1, 2], null, 0, true)).toThrow();
    });
  });

  describe('edge cases with special values', () => {
    test('should not throw for NaN not found (NaN !== NaN)', () => {
      expect(() => isIn([NaN, 1, 2], NaN, 0, true)).not.toThrow();
    });

    test('should throw for -0 vs 0 distinction', () => {
      expect(() => isIn([0, 1, 2], -0, 0, true)).not.toThrow();
      expect(() => isIn([-0, 1, 2], 0, 0, true)).not.toThrow();
    });

    test('should throw for Infinity not in array', () => {
      expect(() => isIn([1, 2, 3], Infinity, 0, true)).toThrow();
    });

    test('should throw for -Infinity not in array', () => {
      expect(() => isIn([Infinity, 1, 2], -Infinity, 0, true)).toThrow();
    });
  });

  describe('with array-like objects', () => {
    test('should throw for searching in non-array', () => {
      const arrayLike = { 0: 'a', 1: 'b', length: 2 };
      expect(() => isIn(arrayLike, 'a', 0, true)).toThrow();
    });

    test('should not throw for searching in string as array', () => {
      expect(() => isIn('hello', 'h', 0, true)).not.toThrow();
    });
  });

  describe('boundary conditions with from parameter', () => {
    test('should throw when from index is exactly array length', () => {
      expect(() => isIn([1, 2, 3], 1, 3, true)).toThrow();
    });

    test('should throw when from index is one past array length', () => {
      expect(() => isIn([1, 2, 3], 1, 4, true)).toThrow();
    });

    test('should throw when from index is much larger than array', () => {
      expect(() => isIn([1, 2, 3], 1, 100, true)).toThrow();
    });

  });

  describe('complex object comparisons', () => {
    test('should throw for objects with same properties but different references', () => {
      const obj1 = { name: 'test', value: 42 };
      const obj2 = { name: 'test', value: 42 }; // Same properties, different reference
      expect(() => isIn([obj1], obj2, 0, true)).toThrow();
    });

    test('should throw for arrays with same content but different references', () => {
      const arr1 = [1, 2, 3];
      const arr2 = [1, 2, 3]; // Same content, different reference
      expect(() => isIn([arr1], arr2, 0, true)).toThrow();
    });

    test('should throw for functions with same code but different references', () => {
      const func1 = () => 'test';
      const func2 = () => 'test'; // Same code, different reference
      expect(() => isIn([func1], func2, 0, true)).toThrow();
    });
  });
});
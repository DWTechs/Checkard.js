import { isArray } from "../../dist/ch";

const s1 = Symbol();

describe('isArray comparison tests', () => {
  
  test("sends NaN to isArray", () => {
    expect(isArray(Number.NaN)).toBe(false);
  });

  test("sends null to isArray", () => {
    expect(isArray(null)).toBe(false);
  });

  test("sends undefined to isArray", () => {
    expect(isArray(undefined)).toBe(false);
  });

  test("sends symbol to isArray", () => {
    expect(isArray(s1)).toBe(false);
  });

  test("sends true to isArray", () => {
    expect(isArray(true)).toBe(false);
  });

  test("sends false to isArray", () => {
    expect(isArray(false)).toBe(false);
  });

  test("sends string to isArray", () => {
    expect(isArray("string")).toBe(false);
  });

  test("sends positive even integer to isArray", () => {
    expect(isArray(2)).toBe(false);
  });

  test("sends positive odd integer to isArray", () => {
    expect(isArray(1)).toBe(false);
  });

  test("sends zero to isArray", () => {
    expect(isArray(0)).toBe(false);
  });

  test("sends positive float to isArray", () => {
    expect(isArray(1.1)).toBe(false);
  });

  test("sends negative odd integer to isArray", () => {
    expect(isArray(-1)).toBe(false);
  });

  test("sends negative even integer to isArray", () => {
    expect(isArray(-2)).toBe(false);
  });

  test("sends negative float to isArray", () => {
    expect(isArray(-1.1)).toBe(false);
  });

  test("sends object to isArray", () => {
    expect(isArray({})).toBe(false);
  });

  test("sends empty array to isArray", () => {
    expect(isArray([])).toBe(true);
  });

  test("sends array of 1 integer to isArray", () => {
    expect(isArray([2])).toBe(true);
  });

  test("sends array of 2 integers to isArray", () => {
    expect(isArray([2,1])).toBe(true);
  });

  test("sends array of 1 integer to isArray", () => {
    expect(isArray([2.1])).toBe(true);
  });

  test("sends array of 2 integers to isArray", () => {
    expect(isArray([2.1,1.1])).toBe(true);
  });

  test("sends array to isArray", () => {
    expect(isArray(["white", "grey", "black"])).toBe(true);
  });

  test("sends array of length 3 to isArray(2)", () => {
    expect(isArray(["white", "grey", "black"], '=', 2)).toBe(false);
  });

  test("sends array of length 3 to isArray(3)", () => {
    expect(isArray(["white", "grey", "black"], '=', 3)).toBe(true);
  });

  test("sends array of length 3 to isArray(4)", () => {
    expect(isArray(["white", "grey", "black"], '=', 4)).toBe(false);
  });

  const json = `{
    "actor": {
      "name": "Tom Cruise",
      "age": 56,
      "Born At": "Syracuse, NY",
      "Birthdate": "July 3 1962",
      "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
    }
  }`;

  test("sends json to isArray", () => {
    expect(isArray(json)).toBe(false);
  });

  const invalidjson = `{
    "actor: {
      "name": "Tom Cruise",
      "age": 56
      "Born At": "Syracuse, NY",
      "Birthdate": "July 3 1962",
      "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
    }
  }`;

  test("sends invalid json to isArray", () => {
    expect(isArray(invalidjson)).toBe(false);
  });

  function testFunction() {
    console.log("function");
  }

  test("sends function to isArray", () => {
    expect(isArray(testFunction)).toBe(false);
  });

  const para = document.createElement("p");

  test("sends htmlElement to isArray", () => {
    expect(isArray(para)).toBe(false);
  });

  const node = document.createTextNode("new node");

  test("sends node to isArray", () => {
    expect(isArray(node)).toBe(false);
  });

  test("sends regex to isArray", () => {
    expect(isArray(/ab+c/i)).toBe(false);
  });



  // with length
  test("sends empty array to isArray with empty comparator", () => {
    expect(isArray([], '0')).toBe(true);
  });

  test("sends empty array to isArray with empty comparator", () => {
    expect(isArray([], '!0')).toBe(false);
  });

  test("sends array to isArray with empty comparator", () => {
    expect(isArray([1], '0')).toBe(false);
  });

  test("sends empty array to isArray with empty comparator", () => {
    expect(isArray([1], '!0')).toBe(true);
  });

  test("sends null to isArray with length test of 2", () => {
    expect(isArray(null, '=', 2)).toBe(false);
  });

  test("sends undefined to isArray with length test of 2", () => {
    expect(isArray(undefined, '=', 2)).toBe(false);
  });

  test("sends symbol to isArray with length test of 2", () => {
    expect(isArray(s1, '=', 2)).toBe(false);
  });

  test("sends true to isArray with length test of 2", () => {
    expect(isArray(true, '=', 2)).toBe(false);
  });

  test("sends false to isArray with length test of 2", () => {
    expect(isArray(false, '=', 2)).toBe(false);
  });

  test("sends string to isArray with length test of 2", () => {
    expect(isArray("string", '=', 2)).toBe(false);
  });

  test("sends string of length 6 to isArray with length test of 6", () => {
    expect(isArray("string", '=', 6)).toBe(false);
  });

  test("sends positive even integer to isArray with length test of 2", () => {
    expect(isArray(2, '=', 2)).toBe(false);
  });

  test("sends positive odd integer to isArray with length test of 2", () => {
    expect(isArray(1, '=', 2)).toBe(false);
  });

  test("sends zero to isArray with length test of 2", () => {
    expect(isArray(0, '=', 2)).toBe(false);
  });

  test("sends positive float to isArray with length test of 2", () => {
    expect(isArray(1.1, '=', 2)).toBe(false);
  });

  test("sends negative odd integer to isArray with length test of 2", () => {
    expect(isArray(-1, '=', 2)).toBe(false);
  });

  test("sends negative even integer to isArray with length test of 2", () => {
    expect(isArray(-2, '=', 2)).toBe(false);
  });

  test("sends negative float to isArray with length test of 2", () => {
    expect(isArray(-1.1, '=', 2)).toBe(false);
  });

  test("sends object to isArray with length test of 2", () => {
    expect(isArray({}, '=', 2)).toBe(false);
  });

  test("sends empty array to isArray with length test of 2", () => {
    expect(isArray([], '=', 2)).toBe(false);
  });

  test("sends array to isArray with length test of 3", () => {
    expect(isArray(["white", "grey", "black"], '=', 3)).toBe(true);
  });

  test("sends array to isArray with length test greater than 3", () => {
    expect(isArray(["white", "grey", "black"], '>', 2)).toBe(true);
  });

  test("sends array to isArray with length test greater than or equal to 3", () => {
    expect(isArray(["white", "grey", "black"], '>=', 2)).toBe(true);
  });

  test("sends array to isArray with length test lower than 4", () => {
    expect(isArray(["white", "grey", "black"], '<', 4)).toBe(true);
  });

  test("sends array to isArray with length test lower than or equal to 4", () => {
    expect(isArray(["white", "grey", "black"], '<=', 4)).toBe(true);
  });

  test("sends array of length 3 to isArray with length test of 2", () => {
    expect(isArray(["white", "grey", "black"], '=', 2)).toBe(false);
  });

  test("sends array of length 3 to isArray with length greater than 3", () => {
    expect(isArray(["white", "grey", "black"], '>', 3)).toBe(false);
  });

  test("sends array of length 3 to isArray with length test of 4", () => {
    expect(isArray(["white", "grey", "black"], '=', 4)).toBe(false);
  });

  test("sends json to isArray with length test of 2", () => {
    expect(isArray(json, '=', 2)).toBe(false);
  });

  test("sends invalid json to isArray with length test of 2", () => {
    expect(isArray(invalidjson, '=', 2)).toBe(false);
  });

  test("sends function to isArray with length test of 2", () => {
    expect(isArray(testFunction, '=', 2)).toBe(false);
  });

  test("sends htmlElement to isArray with length test of 2", () => {
    expect(isArray(para, '=', 2)).toBe(false);
  });

  test("sends node to isArray with length test of 2", () => {
    expect(isArray(node, '=', 2)).toBe(false);
  });

  test("sends regex to isArray with length test of 2", () => {
    expect(isArray(/ab+c/i, '=', 2)).toBe(false);
  });

  test("sends wrong comparator to isArray with length test of 2", () => {
    expect(isArray([2,4], '+', 2)).toBe(false);
  });

  test("sends empty array of length 0 to isArray with wrong comparator", () => {
    expect(isArray([], '<>', 0)).toBe(false);
  });

  test("sends empty array to isArray with length test greater than 0", () => {
    expect(isArray([], '>', 0)).toBe(false);
  });

  test("sends string of length 6 to isArray with length test greater than 0", () => {
    expect(isArray("string", '=', 6)).toBe(false);
  });

  test("sends empty array to isArray with length test greater than 0", () => {
    expect(isArray(new Array(), '>', 0)).toBe(false);
  });

  test("sends empty array to isArray with length test greater than 0", () => {
    expect(isArray(Array.of(), '>', 0)).toBe(false);
  });

  test("sends empty array to isArray with length test greater than 0", () => {
    expect(isArray(Array.from([]), '>', 0)).toBe(false);
  });

  test("sends empty array to isArray with length test greater than 0", () => {
    expect(isArray(Array.from({}), '>', 0)).toBe(false);
  });

  test("sends empty array to isArray with length test greater than 0", () => {
    expect(isArray([...[]], '>', 0)).toBe(false);
  });

  test("sends empty array to isArray with length test greater than 0", () => {
    expect(isArray(Object.values({}), '>', 0)).toBe(false);
  });

  test("sends empty array to isArray with length test greater than 0", () => {
    expect(isArray(Object.keys({}), '>', 0)).toBe(false);
  });

  test("sends empty array to isArray with length test greater or equal to 1", () => {
    expect(isArray([], '>=', 1)).toBe(false);
  });

  test("sends empty array of length 1 to isArray with length test greater than 1", () => {
    expect(isArray(['R'], '>', 1)).toBe(false);
  });

  test("sends empty array of length 1 to isArray with length test greater or equal to 1", () => {
    expect(isArray(['R'], '>=', 1)).toBe(true);
  });

  describe('Invalid comparator tests', () => {
    test('should throw error when comparator is invalid string', () => {
      expect(() => {
        isArray([1, 2, 3], 'invalid', 5, true);
      }).toThrow('Comparison failed because of an invalid comparator : \'invalid\'');
    });

    test('should throw error when comparator is number', () => {
      expect(() => {
        isArray([1, 2], 123, 2, true);
      }).toThrow('Comparison failed because of an invalid comparator : \'123\'');
    });

    test('should throw error when comparator is object', () => {
      expect(() => {
        isArray(['a', 'b'], {}, 2, true);
      }).toThrow('Comparison failed because of an invalid comparator : \'[object Object]\'');
    });

    test('should throw error when comparator is array', () => {
      expect(() => {
        isArray([1], ['>', '<'], 1, true);
      }).toThrow('Comparison failed because of an invalid comparator : \'>,<\'');
    });

    test('should throw error when comparator is function', () => {
      const func = () => {};
      expect(() => {
        isArray([1, 2, 3], func, 3, true);
      }).toThrow('Comparison failed because of an invalid comparator : \'() => {}\'');
    });

    test('should return false for invalid comparator when throwErr is false', () => {
      expect(isArray([1, 2], 'bad', 2, false)).toBe(false);
    });
  });

  describe('Missing limit tests', () => {
    test('should throw error when limit is missing for equality comparator', () => {
      expect(() => {
        isArray([1, 2, 3], '=', null, true);
      }).toThrow('Comparator \'=\' requires a second value');
    });

    test('should throw error when limit is missing for greater than comparator', () => {
      expect(() => {
        isArray(['a', 'b'], '>', null, true);
      }).toThrow('Comparator \'>\' requires a second value');
    });

    test('should throw error when limit is missing for less than comparator', () => {
      expect(() => {
        isArray([true, false], '<', null, true);
      }).toThrow('Comparator \'<\' requires a second value');
    });

    test('should throw error when limit is missing for greater than or equal comparator', () => {
      expect(() => {
        isArray([1, 2, 3, 4], '>=', null, true);
      }).toThrow('Comparator \'>=\' requires a second value');
    });

    test('should throw error when limit is missing for less than or equal comparator', () => {
      expect(() => {
        isArray(['x', 'y'], '<=', null, true);
      }).toThrow('Comparator \'<=\' requires a second value');
    });

    test('should return false for missing limit when throwErr is false', () => {
      expect(isArray([1, 2], '>', null, false)).toBe(false);
    });
  });

  describe('Failed comparison tests', () => {
    test('should throw error when array length does not equal limit', () => {
      expect(() => {
        isArray([1, 2, 3], '=', 2, true);
      }).toThrow('3 = 2 returned false');
    });

    test('should throw error when array length is not greater than limit', () => {
      expect(() => {
        isArray(['a'], '>', 1, true);
      }).toThrow('1 > 1 returned false');
    });

    test('should throw error when array length is not less than limit', () => {
      expect(() => {
        isArray([1, 2, 3], '<', 3, true);
      }).toThrow('3 < 3 returned false');
    });

    test('should throw error when array length is not greater than or equal to limit', () => {
      expect(() => {
        isArray(['x'], '>=', 2, true);
      }).toThrow('1 >= 2 returned false');
    });

    test('should throw error when array length is not less than or equal to limit', () => {
      expect(() => {
        isArray([1, 2, 3, 4], '<=', 3, true);
      }).toThrow('4 <= 3 returned false');
    });

    test('should return false for failed comparison when throwErr is false', () => {
      expect(isArray([1, 2], '=', 3, false)).toBe(false);
    });
  });

  describe('Successful comparison tests', () => {
    test('should return true when array length equals limit', () => {
      expect(isArray([1, 2, 3], '=', 3, true)).toBe(true);
      expect(isArray(['a', 'b'], '=', 2, false)).toBe(true);
    });

    test('should return true when array length is greater than limit', () => {
      expect(isArray([1, 2, 3], '>', 2, true)).toBe(true);
      expect(isArray(['a', 'b', 'c', 'd'], '>', 3, false)).toBe(true);
    });

    test('should return true when array length is less than limit', () => {
      expect(isArray([1], '<', 2, true)).toBe(true);
      expect(isArray(['x', 'y'], '<', 5, false)).toBe(true);
    });

    test('should return true when array length is greater than or equal to limit', () => {
      expect(isArray([1, 2, 3], '>=', 3, true)).toBe(true);
      expect(isArray(['a', 'b', 'c', 'd'], '>=', 3, false)).toBe(true);
    });

    test('should return true when array length is less than or equal to limit', () => {
      expect(isArray([1, 2], '<=', 2, true)).toBe(true);
      expect(isArray(['x'], '<=', 3, false)).toBe(true);
    });
  });

  describe('Non-array value tests', () => {
    test('should throw error for string when throwErr is true', () => {
      expect(() => {
        isArray('not an array', '>', 0, true);
      }).toThrow('Expected array, but received string');
    });

    test('should throw error for number when throwErr is true', () => {
      expect(() => {
        isArray(123, '=', 3, true);
      }).toThrow('Expected array, but received number');
    });

    test('should throw error for object when throwErr is true', () => {
      expect(() => {
        isArray({length: 3}, '>=', 2, true);
      }).toThrow('Expected array, but received object');
    });

    test('should throw error for null when throwErr is true', () => {
      expect(() => {
        isArray(null, '<', 5, true);
      }).toThrow('Expected array, but received object');
    });

    test('should throw error for undefined when throwErr is true', () => {
      expect(() => {
        isArray(undefined, '<=', 10, true);
      }).toThrow('Expected array, but received undefined');
    });

    test('should return false for non-array values when throwErr is false', () => {
      expect(isArray('string', '>', 0, false)).toBe(false);
      expect(isArray(123, '=', 3, false)).toBe(false);
      expect(isArray({}, '>=', 0, false)).toBe(false);
      expect(isArray(null, '<', 1, false)).toBe(false);
      expect(isArray(undefined, '<=', 5, false)).toBe(false);
    });
  });

  describe('No comparison tests', () => {
    test('should return true for valid array without comparator', () => {
      expect(isArray([1, 2, 3], null, null, true)).toBe(true);
      expect(isArray(['a', 'b'], null, null, false)).toBe(true);
      expect(isArray([], null, null, true)).toBe(true);
    });

    test('should return false for non-array without comparator', () => {
      expect(isArray('string', null, null, false)).toBe(false);
      expect(isArray(123, null, null, false)).toBe(false);
    });

    test('should throw error for non-array without comparator when throwErr is true', () => {
      expect(() => {
        isArray('not array', null, null, true);
      }).toThrow('Expected array, but received string');
    });
  });

  describe('Edge cases', () => {
    test('should handle empty array correctly', () => {
      expect(isArray([], '=', 0, true)).toBe(true);
      expect(isArray([], '>', 0, false)).toBe(false);
      expect(isArray([], '<', 1, true)).toBe(true);
    });

    test('should handle large arrays correctly', () => {
      const largeArray = new Array(1000).fill(1);
      expect(isArray(largeArray, '=', 1000, true)).toBe(true);
      expect(isArray(largeArray, '>', 999, true)).toBe(true);
      expect(isArray(largeArray, '<', 1001, true)).toBe(true);
    });

    test('should handle arrays with mixed types', () => {
      const mixedArray = [1, 'string', {}, null, undefined, true];
      expect(isArray(mixedArray, '=', 6, true)).toBe(true);
      expect(isArray(mixedArray, '>', 5, true)).toBe(true);
    });

    test('should handle nested arrays correctly', () => {
      const nestedArray = [[1, 2], [3, 4], [5, 6]];
      expect(isArray(nestedArray, '=', 3, true)).toBe(true);
      expect(isArray(nestedArray, '>=', 2, true)).toBe(true);
    });
  });

});

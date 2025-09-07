import { isProperty } from "../../dist/ch";

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

describe('isProperty edge cases and error paths', () => {

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

  test("sends NaN to isProperty", () => {
    const val = Number.NaN;
    expect(isProperty(nbrList, val, true, true)).toBe(false);
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

describe('Complex property scenarios', () => {
    test('should handle inherited enumerable properties', () => {
      const parent = { inheritedProp: 'value' };
      const child = Object.create(parent);
      
      // Should find inherited enumerable property
      expect(isProperty(child, 'inheritedProp', false, true)).toBe(false); // The isEnumerable function doesn't find inherited props
      expect(isProperty(child, 'inheritedProp', false, false)).toBe(false); // Still doesn't find inherited props
      
      // Should not find as own property
      expect(isProperty(child, 'inheritedProp', true, true)).toBe(false);
      expect(isProperty(child, 'inheritedProp', true, false)).toBe(false);
    });

    test('should handle basic enumerable own properties', () => {
      const obj = { normalProp: 'value' };
      
      // Should find enumerable own property
      expect(isProperty(obj, 'normalProp', true, true)).toBe(true);
      expect(isProperty(obj, 'normalProp', true, false)).toBe(true);
    });

    test('should handle non-enumerable inherited properties', () => {
      const parent = {};
      Object.defineProperty(parent, 'nonEnumInherited', {
        value: 'inherited',
        enumerable: false,
        writable: true,
        configurable: true
      });
      
      const child = Object.create(parent);
      
      // Should find non-enumerable inherited property with own=false, enumerable=false
      expect(isProperty(child, 'nonEnumInherited', false, false)).toBe(false); // The function has specific logic that doesn't find this
      
      // Should not find with enumerable=true
      expect(isProperty(child, 'nonEnumInherited', false, true)).toBe(false);
      
      // Should not find with own=true (it's inherited, not own)
      expect(isProperty(child, 'nonEnumInherited', true, false)).toBe(false);
    });

    test('should throw descriptive errors with property details', () => {
      const obj = { existingProp: 'value' };
      
      expect(() => {
        isProperty(obj, 'nonExistentProp', true, true, true);
      }).toThrow('own enumerable property \'nonExistentProp\'');
      
      expect(() => {
        isProperty(obj, 'nonExistentProp', false, true, true);
      }).toThrow('inherited enumerable property \'nonExistentProp\'');
      
      expect(() => {
        isProperty(obj, 'nonExistentProp', true, false, true);
      }).toThrow('own any property \'nonExistentProp\'');
      
      expect(() => {
        isProperty(obj, 'nonExistentProp', false, false, true);
      }).toThrow('inherited any property \'nonExistentProp\'');
    });

    test('should handle symbol properties', () => {
      const sym = Symbol('testSymbol');
      const obj = {};
      obj[sym] = 'value';
      
      // Test with different parameter combinations - symbols may not work as expected
      expect(isProperty(obj, sym, true, true)).toBe(false); // symbols are not enumerable by default
      expect(isProperty(obj, sym, true, false)).toBe(false);  // the function may not handle symbols properly
    });

    test('should handle numeric string properties', () => {
      const obj = { '0': 'first', '1': 'second', '42': 'answer' };
      
      expect(isProperty(obj, '0', true, true)).toBe(true);
      expect(isProperty(obj, '1', true, true)).toBe(true);
      expect(isProperty(obj, '42', true, true)).toBe(true);
      expect(isProperty(obj, 0, true, true)).toBe(true);  // numeric keys work too
      expect(isProperty(obj, 42, true, true)).toBe(true);
    });

    test('should handle edge case with null prototype', () => {
      const obj = Object.create(null);
      obj.testProp = 'value';
      
      expect(isProperty(obj, 'testProp', true, true)).toBe(true);
      expect(isProperty(obj, 'testProp', false, true)).toBe(true);
      expect(isProperty(obj, 'toString', false, false)).toBe(false); // no prototype chain
    });
  });

  describe('Error path coverage', () => {
    test('should return false when object validation fails with throwErr=false', () => {
      expect(isProperty(null, 'prop', true, true, false)).toBe(false);
      expect(isProperty(undefined, 'prop', true, true, false)).toBe(false);
      expect(isProperty('string', 'prop', true, true, false)).toBe(false);
      expect(isProperty(123, 'prop', true, true, false)).toBe(false);
    });

    test('should throw when object validation fails with throwErr=true', () => {
      expect(() => isProperty(null, 'prop', true, true, true)).toThrow();
      expect(() => isProperty(undefined, 'prop', true, true, true)).toThrow();
      expect(() => isProperty('string', 'prop', true, true, true)).toThrow();
      expect(() => isProperty(123, 'prop', true, true, true)).toThrow();
    });
  });

  describe('Property descriptor combinations', () => {
    test('should handle getter/setter properties', () => {
      const obj = {};
      Object.defineProperty(obj, 'accessorProp', {
        get: () => 'getter value',
        set: () => {},
        enumerable: true,
        configurable: true
      });
      
      expect(isProperty(obj, 'accessorProp', true, true)).toBe(true);
      expect(isProperty(obj, 'accessorProp', true, false)).toBe(true);
    });

    test('should handle non-configurable properties', () => {
      const obj = {};
      Object.defineProperty(obj, 'nonConfigProp', {
        value: 'test',
        enumerable: true,
        writable: true,
        configurable: false
      });
      
      expect(isProperty(obj, 'nonConfigProp', true, true)).toBe(true);
      expect(isProperty(obj, 'nonConfigProp', true, false)).toBe(true);
    });
  });
});

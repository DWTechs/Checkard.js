import { isProperty } from "../../../dist/ch";

describe('isProperty throwErr tests', () => {
  describe('when object parameter is invalid', () => {
    test('should throw for null object', () => {
      expect(() => isProperty(null, 'prop', false, false, true)).toThrow();
    });

    test('should throw for undefined object', () => {
      expect(() => isProperty(undefined, 'prop', false, false, true)).toThrow();
    });

    test('should throw for string object', () => {
      expect(() => isProperty('notObject', 'prop', false, false, true)).toThrow();
    });

    test('should throw for number object', () => {
      expect(() => isProperty(123, 'prop', false, false, true)).toThrow();
    });

    test('should throw for boolean object', () => {
      expect(() => isProperty(true, 'prop', false, false, true)).toThrow();
    });

    test('should throw for array object', () => {
      expect(() => isProperty([], 'prop', false, false, true)).toThrow();
    });

    test('should throw for function object', () => {
      expect(() => isProperty(() => {}, 'prop', false, false, true)).toThrow();
    });
  });

  describe('when property parameter is invalid', () => {
    const validObj = { testProp: 'value' };

    test('should throw for null property', () => {
      expect(() => isProperty(validObj, null, false, false, true)).toThrow();
    });

    test('should throw for undefined property', () => {
      expect(() => isProperty(validObj, undefined, false, false, true)).toThrow();
    });

    test('should throw for number property', () => {
      expect(() => isProperty(validObj, 123, false, false, true)).toThrow();
    });

    test('should throw for boolean property', () => {
      expect(() => isProperty(validObj, true, false, false, true)).toThrow();
    });

    test('should throw for object property', () => {
      expect(() => isProperty(validObj, {}, false, false, true)).toThrow();
    });

    test('should throw for array property', () => {
      expect(() => isProperty(validObj, [], false, false, true)).toThrow();
    });

    test('should throw for function property', () => {
      expect(() => isProperty(validObj, () => {}, false, false, true)).toThrow();
    });
  });

  describe('when property does not exist on object', () => {
    const testObj = { existingProp: 'value' };

    test('should throw for non-existent own property', () => {
      expect(() => isProperty(testObj, 'nonExistent', true, false, true)).toThrow();
    });

    test('should throw for non-existent property (any)', () => {
      expect(() => isProperty(testObj, 'nonExistent', false, false, true)).toThrow();
    });

    test('should throw for non-existent enumerable property', () => {
      expect(() => isProperty(testObj, 'nonExistent', false, true, true)).toThrow();
    });

    test('should throw for non-existent own enumerable property', () => {
      expect(() => isProperty(testObj, 'nonExistent', true, true, true)).toThrow();
    });
  });

  describe('when property exists but conditions not met', () => {
    const testObj = {};
    Object.defineProperty(testObj, 'nonEnumerable', {
      value: 'test',
      enumerable: false,
      writable: true,
      configurable: true
    });
    testObj.enumerable = 'test';

    test('should throw when checking for enumerable property but property is non-enumerable', () => {
      expect(() => isProperty(testObj, 'nonEnumerable', false, true, true)).toThrow();
    });

    test('should throw when checking for own enumerable property but property is non-enumerable', () => {
      expect(() => isProperty(testObj, 'nonEnumerable', true, true, true)).toThrow();
    });
  });

  describe('when inherited property conditions not met', () => {
    const parent = { inheritedProp: 'value' };
    const child = Object.create(parent);
    child.ownProp = 'ownValue';

    test('should throw when checking for own property but property is inherited', () => {
      expect(() => isProperty(child, 'inheritedProp', true, false, true)).toThrow();
    });

    test('should throw when checking for own enumerable property but property is inherited', () => {
      expect(() => isProperty(child, 'inheritedProp', true, true, true)).toThrow();
    });
  });

  describe('edge cases with inherited non-enumerable properties', () => {
    const parent = {};
    Object.defineProperty(parent, 'inheritedNonEnum', {
      value: 'test',
      enumerable: false,
      writable: true,
      configurable: true
    });
    const child = Object.create(parent);

    test('should throw when checking for enumerable inherited property but property is non-enumerable', () => {
      expect(() => isProperty(child, 'inheritedNonEnum', false, true, true)).toThrow();
    });

    test('should throw when checking for own enumerable property but property is inherited and non-enumerable', () => {
      expect(() => isProperty(child, 'inheritedNonEnum', true, true, true)).toThrow();
    });
  });

  describe('special property names', () => {
    const testObj = { '': 'empty', '123': 'number', ' ': 'space' };

    test('should throw for non-existent empty string property', () => {
      const emptyObj = {};
      expect(() => isProperty(emptyObj, '', false, false, true)).toThrow();
    });

    test('should throw for non-existent numeric string property', () => {
      const emptyObj = {};
      expect(() => isProperty(emptyObj, '123', false, false, true)).toThrow();
    });

    test('should throw for non-existent space property', () => {
      const emptyObj = {};
      expect(() => isProperty(emptyObj, ' ', false, false, true)).toThrow();
    });
  });
});
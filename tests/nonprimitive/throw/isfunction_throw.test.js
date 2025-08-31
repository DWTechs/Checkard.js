import { isFunction } from "../../../dist/ch";

describe('isFunction throwErr tests', () => {
  describe('when value is not a function', () => {
    test('should throw for null', () => {
      expect(() => isFunction(null, true)).toThrow();
    });

    test('should throw for undefined', () => {
      expect(() => isFunction(undefined, true)).toThrow();
    });

    test('should throw for string', () => {
      expect(() => isFunction('not function', true)).toThrow();
    });

    test('should throw for function string', () => {
      expect(() => isFunction('function() {}', true)).toThrow();
    });

    test('should throw for number', () => {
      expect(() => isFunction(123, true)).toThrow();
    });

    test('should throw for boolean true', () => {
      expect(() => isFunction(true, true)).toThrow();
    });

    test('should throw for boolean false', () => {
      expect(() => isFunction(false, true)).toThrow();
    });

    test('should throw for object', () => {
      expect(() => isFunction({ call: 'method' }, true)).toThrow();
    });

    test('should throw for array', () => {
      expect(() => isFunction([1, 2, 3], true)).toThrow();
    });

    test('should throw for Date', () => {
      expect(() => isFunction(new Date(), true)).toThrow();
    });

    test('should throw for RegExp', () => {
      expect(() => isFunction(/regex/, true)).toThrow();
    });

    test('should throw for Symbol', () => {
      expect(() => isFunction(Symbol('test'), true)).toThrow();
    });

    test('should throw for BigInt', () => {
      expect(() => isFunction(BigInt(123), true)).toThrow();
    });
  });

  describe('edge cases with function-like objects', () => {
    test('should throw for object with call method', () => {
      const fakeFunction = {
        call: function() {},
        apply: function() {},
        bind: function() {}
      };
      expect(() => isFunction(fakeFunction, true)).toThrow();
    });

    test('should throw for object with function properties', () => {
      const objWithFuncProp = {
        myFunction: function() { return 'test'; }
      };
      expect(() => isFunction(objWithFuncProp, true)).toThrow();
    });

    test('should not throw for Function.prototype', () => {
      expect(() => isFunction(Function.prototype, true)).not.toThrow();
    });

    test('should throw for function string representation', () => {
      const func = function test() { return 42; };
      expect(() => isFunction(func.toString(), true)).toThrow();
    });

    test('should throw for callable object without proper tag', () => {
      // Create an object that might look like a function but isn't
      const notFunction = Object.create(Function.prototype);
      expect(() => isFunction(notFunction, true)).toThrow();
    });
  });

  describe('with various non-function callables', () => {
    test('should throw for bound function result (if it somehow fails)', () => {
      // This is tricky since bound functions are still functions
      // Testing edge case where bind might not work as expected
      const func = function() {};
      const pseudoBound = { bound: func.bind({}) };
      expect(() => isFunction(pseudoBound, true)).toThrow();
    });

    test('should throw for constructor function reference', () => {
      // Testing reference to constructor vs the constructor itself
      const ConstructorRef = { constructor: Function };
      expect(() => isFunction(ConstructorRef, true)).toThrow();
    });

    test('should throw for empty object', () => {
      expect(() => isFunction({}, true)).toThrow();
    });

    test('should throw for null prototype object', () => {
      expect(() => isFunction(Object.create(null), true)).toThrow();
    });
  });

  describe('with different types that are not functions', () => {
    test('should throw for Map', () => {
      expect(() => isFunction(new Map(), true)).toThrow();
    });

    test('should throw for Set', () => {
      expect(() => isFunction(new Set(), true)).toThrow();
    });

    test('should throw for WeakMap', () => {
      expect(() => isFunction(new WeakMap(), true)).toThrow();
    });

    test('should throw for WeakSet', () => {
      expect(() => isFunction(new WeakSet(), true)).toThrow();
    });

    test('should throw for Promise', () => {
      expect(() => isFunction(Promise.resolve(), true)).toThrow();
    });

    test('should throw for Error', () => {
      expect(() => isFunction(new Error(), true)).toThrow();
    });

    test('should throw for ArrayBuffer', () => {
      expect(() => isFunction(new ArrayBuffer(8), true)).toThrow();
    });

    test('should throw for DataView', () => {
      expect(() => isFunction(new DataView(new ArrayBuffer(8)), true)).toThrow();
    });
  });

  describe('special numeric values', () => {
    test('should throw for NaN', () => {
      expect(() => isFunction(NaN, true)).toThrow();
    });

    test('should throw for Infinity', () => {
      expect(() => isFunction(Infinity, true)).toThrow();
    });

    test('should throw for -Infinity', () => {
      expect(() => isFunction(-Infinity, true)).toThrow();
    });

    test('should throw for zero', () => {
      expect(() => isFunction(0, true)).toThrow();
    });

    test('should throw for negative zero', () => {
      expect(() => isFunction(-0, true)).toThrow();
    });
  });

  describe('edge cases with strings', () => {
    test('should throw for empty string', () => {
      expect(() => isFunction('', true)).toThrow();
    });

    test('should throw for whitespace string', () => {
      expect(() => isFunction('   ', true)).toThrow();
    });

    test('should throw for newline string', () => {
      expect(() => isFunction('\n', true)).toThrow();
    });

    test('should throw for eval string', () => {
      expect(() => isFunction('eval', true)).toThrow();
    });

    test('should throw for function keyword string', () => {
      expect(() => isFunction('function', true)).toThrow();
    });
  });
});
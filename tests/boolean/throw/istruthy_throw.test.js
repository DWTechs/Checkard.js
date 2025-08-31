import { isTruthy } from "../../../dist/ch";

describe('isTruthy throwErr tests', () => {
  describe('when value is falsy', () => {
    test('should throw for boolean false', () => {
      expect(() => isTruthy(false, true)).toThrow();
    });

    test('should throw for number zero', () => {
      expect(() => isTruthy(0, true)).toThrow();
    });

    test('should throw for negative zero', () => {
      expect(() => isTruthy(-0, true)).toThrow();
    });

    test('should throw for empty string', () => {
      expect(() => isTruthy('', true)).toThrow();
    });

    test('should throw for null', () => {
      expect(() => isTruthy(null, true)).toThrow();
    });

    test('should throw for undefined', () => {
      expect(() => isTruthy(undefined, true)).toThrow();
    });

    test('should throw for NaN', () => {
      expect(() => isTruthy(NaN, true)).toThrow();
    });

    test('should throw for BigInt zero', () => {
      expect(() => isTruthy(BigInt(0), true)).toThrow();
    });

    test('should throw for BigInt negative zero', () => {
      expect(() => isTruthy(BigInt(-0), true)).toThrow();
    });
  });

  describe('edge cases with falsy values', () => {
    test('should throw for explicitly false', () => {
      expect(() => isTruthy(Boolean(false), true)).toThrow();
    });

    test('should throw for Number(0)', () => {
      expect(() => isTruthy(Number(0), true)).toThrow();
    });

    test('should throw for String("")', () => {
      expect(() => isTruthy(String(''), true)).toThrow();
    });

    test('should throw for parseInt of non-numeric', () => {
      expect(() => isTruthy(parseInt('abc'), true)).toThrow();
    });

    test('should throw for parseFloat of non-numeric', () => {
      expect(() => isTruthy(parseFloat('abc'), true)).toThrow();
    });

    test('should throw for 0/1 division', () => {
      expect(() => isTruthy(0/1, true)).toThrow();
    });

    test('should throw for 0*5 multiplication', () => {
      expect(() => isTruthy(0*5, true)).toThrow();
    });

    test('should throw for Math.min() with no arguments', () => {
      expect(() => isTruthy(Math.min(), true)).toThrow();
    });

    test('should throw for void 0', () => {
      expect(() => isTruthy(void 0, true)).toThrow();
    });

    test('should throw for void expression', () => {
      expect(() => isTruthy(void (1 + 1), true)).toThrow();
    });
  });

  describe('mathematical operations resulting in falsy', () => {
    test('should throw for 1 - 1', () => {
      expect(() => isTruthy(1 - 1, true)).toThrow();
    });

    test('should throw for 5 - 5', () => {
      expect(() => isTruthy(5 - 5, true)).toThrow();
    });

    test('should throw for 0 + 0', () => {
      expect(() => isTruthy(0 + 0, true)).toThrow();
    });

    test('should throw for 0 - 0', () => {
      expect(() => isTruthy(0 - 0, true)).toThrow();
    });

    test('should throw for 0 * 100', () => {
      expect(() => isTruthy(0 * 100, true)).toThrow();
    });

    test('should throw for 0 / 100', () => {
      expect(() => isTruthy(0 / 100, true)).toThrow();
    });

    test('should throw for 0 % 5', () => {
      expect(() => isTruthy(0 % 5, true)).toThrow();
    });

    test('should throw for 0 ** 5', () => {
      expect(() => isTruthy(0 ** 5, true)).toThrow();
    });

    test('should throw for Math.floor(0.9) - 1', () => {
      expect(() => isTruthy(Math.floor(0.9) - 1, true)).toThrow();
    });
  });

  describe('bitwise operations resulting in falsy', () => {
    test('should throw for 0 & 1', () => {
      expect(() => isTruthy(0 & 1, true)).toThrow();
    });

    test('should throw for 0 | 0', () => {
      expect(() => isTruthy(0 | 0, true)).toThrow();
    });

    test('should throw for 0 ^ 0', () => {
      expect(() => isTruthy(0 ^ 0, true)).toThrow();
    });

    test('should throw for ~(-1)', () => {
      expect(() => isTruthy(~(-1), true)).toThrow();
    });

    test('should throw for 0 << 1', () => {
      expect(() => isTruthy(0 << 1, true)).toThrow();
    });

    test('should throw for 0 >> 1', () => {
      expect(() => isTruthy(0 >> 1, true)).toThrow();
    });

    test('should throw for 0 >>> 1', () => {
      expect(() => isTruthy(0 >>> 1, true)).toThrow();
    });
  });

  describe('string operations resulting in falsy', () => {
    test('should throw for empty substring', () => {
      expect(() => isTruthy('hello'.substring(2, 2), true)).toThrow();
    });

    test('should throw for empty slice', () => {
      expect(() => isTruthy('hello'.slice(2, 2), true)).toThrow();
    });

    test('should throw for replace all characters', () => {
      expect(() => isTruthy('abc'.replace(/./g, ''), true)).toThrow();
    });

    test('should throw for filter empty array join', () => {
      expect(() => isTruthy([].join(''), true)).toThrow();
    });

    test('should throw for repeat zero times', () => {
      expect(() => isTruthy('a'.repeat(0), true)).toThrow();
    });
  });

  describe('complex falsy scenarios', () => {
    test('should throw for variable assigned undefined', () => {
      let undefinedVar;
      expect(() => isTruthy(undefinedVar, true)).toThrow();
    });

    test('should throw for object property that does not exist', () => {
      const obj = {};
      expect(() => isTruthy(obj.nonExistent, true)).toThrow();
    });

    test('should throw for array element that does not exist', () => {
      const arr = [];
      expect(() => isTruthy(arr[0], true)).toThrow();
    });

    test('should throw for function returning undefined', () => {
      function returnsUndefined() {}
      expect(() => isTruthy(returnsUndefined(), true)).toThrow();
    });

    test('should throw for function returning null', () => {
      function returnsNull() { return null; }
      expect(() => isTruthy(returnsNull(), true)).toThrow();
    });

    test('should throw for function returning false', () => {
      function returnsFalse() { return false; }
      expect(() => isTruthy(returnsFalse(), true)).toThrow();
    });

    test('should throw for function returning 0', () => {
      function returnsZero() { return 0; }
      expect(() => isTruthy(returnsZero(), true)).toThrow();
    });

    test('should throw for function returning empty string', () => {
      function returnsEmpty() { return ''; }
      expect(() => isTruthy(returnsEmpty(), true)).toThrow();
    });

    test('should throw for function returning NaN', () => {
      function returnsNaN() { return NaN; }
      expect(() => isTruthy(returnsNaN(), true)).toThrow();
    });
  });

  describe('type conversion falsy cases', () => {
    test('should throw for Number("")', () => {
      expect(() => isTruthy(Number(''), true)).toThrow();
    });

    test('should throw for Number(false)', () => {
      expect(() => isTruthy(Number(false), true)).toThrow();
    });

    test('should throw for Number(null)', () => {
      expect(() => isTruthy(Number(null), true)).toThrow();
    });

    test('should throw for Boolean(0)', () => {
      expect(() => isTruthy(Boolean(0), true)).toThrow();
    });

    test('should throw for Boolean("")', () => {
      expect(() => isTruthy(Boolean(''), true)).toThrow();
    });

    test('should throw for Boolean(null)', () => {
      expect(() => isTruthy(Boolean(null), true)).toThrow();
    });

    test('should throw for Boolean(undefined)', () => {
      expect(() => isTruthy(Boolean(undefined), true)).toThrow();
    });

    test('should throw for Boolean(NaN)', () => {
      expect(() => isTruthy(Boolean(NaN), true)).toThrow();
    });
  });
});
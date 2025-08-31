import { isRegex } from "../../../dist/ch";

describe('isRegex throwErr tests', () => {
  describe('when type=true (instanceof check)', () => {
    describe('when value is not a RegExp instance', () => {
      test('should throw for null', () => {
        expect(() => isRegex(null, true, true)).toThrow();
      });

      test('should throw for undefined', () => {
        expect(() => isRegex(undefined, true, true)).toThrow();
      });

      test('should throw for string', () => {
        expect(() => isRegex('not regex', true, true)).toThrow();
      });

      test('should throw for valid regex string', () => {
        expect(() => isRegex('[a-z]+', true, true)).toThrow();
      });

      test('should throw for regex literal string', () => {
        expect(() => isRegex('/test/g', true, true)).toThrow();
      });

      test('should throw for number', () => {
        expect(() => isRegex(123, true, true)).toThrow();
      });

      test('should throw for boolean true', () => {
        expect(() => isRegex(true, true, true)).toThrow();
      });

      test('should throw for boolean false', () => {
        expect(() => isRegex(false, true, true)).toThrow();
      });

      test('should throw for object', () => {
        expect(() => isRegex({ pattern: 'test' }, true, true)).toThrow();
      });

      test('should throw for array', () => {
        expect(() => isRegex(['/test/', 'g'], true, true)).toThrow();
      });

      test('should throw for function', () => {
        expect(() => isRegex(() => {}, true, true)).toThrow();
      });

      test('should throw for Date', () => {
        expect(() => isRegex(new Date(), true, true)).toThrow();
      });

      test('should throw for Symbol', () => {
        expect(() => isRegex(Symbol('test'), true, true)).toThrow();
      });

      test('should throw for BigInt', () => {
        expect(() => isRegex(BigInt(123), true, true)).toThrow();
      });
    });

    describe('edge cases with type=true', () => {
      test('should throw for empty string', () => {
        expect(() => isRegex('', true, true)).toThrow();
      });

      test('should throw for regex-like string', () => {
        expect(() => isRegex('/pattern/flags', true, true)).toThrow();
      });

      test('should throw for escaped regex string', () => {
        expect(() => isRegex('\\w+', true, true)).toThrow();
      });
    });
  });

  describe('when type=false (constructor check)', () => {
    describe('when value cannot be converted to RegExp', () => {
      test('should throw for invalid regex pattern', () => {
        expect(() => isRegex('[', false, true)).toThrow();
      });

      test('should throw for invalid character class', () => {
        expect(() => isRegex('[a-', false, true)).toThrow();
      });

      test('should not throw for invalid quantifier', () => {
        expect(() => isRegex('a{', false, true)).not.toThrow();
      });

      test('should throw for invalid group', () => {
        expect(() => isRegex('(', false, true)).toThrow();
      });

      test('should throw for unmatched parentheses', () => {
        expect(() => isRegex('(abc', false, true)).toThrow();
      });

      test('should throw for unmatched closing parentheses', () => {
        expect(() => isRegex('abc)', false, true)).toThrow();
      });

      test('should throw for invalid escape sequence', () => {
        expect(() => isRegex('\\', false, true)).toThrow();
      });

      test('should throw for invalid lookbehind', () => {
        expect(() => isRegex('(?<', false, true)).toThrow();
      });

      test('should throw for invalid lookahead', () => {
        expect(() => isRegex('(?=', false, true)).toThrow();
      });

      test('should throw for invalid named group', () => {
        expect(() => isRegex('(?<name', false, true)).toThrow();
      });

      test('should throw for duplicate named group', () => {
        expect(() => isRegex('(?<name>a)(?<name>b)', false, true)).toThrow();
      });

      test('should throw for invalid flag combination', () => {
        // Note: This might not throw in all engines, but testing invalid patterns
        expect(() => isRegex('(?i)(?-i)', false, true)).toThrow();
      });
    });

    describe('complex invalid patterns', () => {
      test('should throw for nested incomplete groups', () => {
        expect(() => isRegex('((abc)', false, true)).toThrow();
      });

      test('should throw for invalid character class range', () => {
        expect(() => isRegex('[z-a]', false, true)).toThrow();
      });

      test('should throw for incomplete character class', () => {
        expect(() => isRegex('[abc', false, true)).toThrow();
      });

      test('should throw for invalid negated character class', () => {
        expect(() => isRegex('[^', false, true)).toThrow();
      });
    });

    describe('edge cases that might throw in strict mode', () => {
      test('should throw for certain complex invalid patterns', () => {
        expect(() => isRegex('(?:', false, true)).toThrow();
      });

    });
  });

  describe('with non-string, non-RegExp values when type=false', () => {

    test('should throw for Symbol when type=false', () => {
      expect(() => isRegex(Symbol('test'), false, true)).toThrow();
    });

  });
});
import { isJson } from "../../../dist/ch";

describe('isJson throwErr tests', () => {
  describe('when value is not a string', () => {
    test('should throw for null', () => {
      expect(() => isJson(null, true)).toThrow();
    });

    test('should throw for undefined', () => {
      expect(() => isJson(undefined, true)).toThrow();
    });

    test('should throw for number', () => {
      expect(() => isJson(123, true)).toThrow();
    });

    test('should throw for boolean true', () => {
      expect(() => isJson(true, true)).toThrow();
    });

    test('should throw for boolean false', () => {
      expect(() => isJson(false, true)).toThrow();
    });

    test('should throw for object', () => {
      expect(() => isJson({ key: 'value' }, true)).toThrow();
    });

    test('should throw for array', () => {
      expect(() => isJson([1, 2, 3], true)).toThrow();
    });

    test('should throw for function', () => {
      expect(() => isJson(() => {}, true)).toThrow();
    });

    test('should throw for Date', () => {
      expect(() => isJson(new Date(), true)).toThrow();
    });

    test('should throw for RegExp', () => {
      expect(() => isJson(/regex/, true)).toThrow();
    });

    test('should throw for Symbol', () => {
      expect(() => isJson(Symbol('test'), true)).toThrow();
    });

    test('should throw for BigInt', () => {
      expect(() => isJson(BigInt(123), true)).toThrow();
    });
  });

  describe('when string is empty or too short', () => {
    test('should throw for empty string', () => {
      expect(() => isJson('', true)).toThrow();
    });

    test('should throw for single character string', () => {
      expect(() => isJson('a', true)).toThrow();
    });
  });

  describe('when string is not valid JSON', () => {
    test('should throw for invalid JSON syntax', () => {
      expect(() => isJson('{ invalid json }', true)).toThrow();
    });

    test('should throw for malformed object', () => {
      expect(() => isJson('{ "key": }', true)).toThrow();
    });

    test('should throw for malformed array', () => {
      expect(() => isJson('[1, 2, ]', true)).toThrow();
    });

    test('should throw for unquoted keys', () => {
      expect(() => isJson('{ key: "value" }', true)).toThrow();
    });

    test('should throw for single quotes', () => {
      expect(() => isJson("{ 'key': 'value' }", true)).toThrow();
    });

    test('should throw for trailing comma in object', () => {
      expect(() => isJson('{ "key": "value", }', true)).toThrow();
    });

    test('should throw for trailing comma in array', () => {
      expect(() => isJson('[1, 2, 3, ]', true)).toThrow();
    });

    test('should throw for undefined value', () => {
      expect(() => isJson('{ "key": undefined }', true)).toThrow();
    });

    test('should throw for function value', () => {
      expect(() => isJson('{ "key": function() {} }', true)).toThrow();
    });

    test('should throw for comment', () => {
      expect(() => isJson('{ "key": "value" /* comment */ }', true)).toThrow();
    });

    test('should throw for missing quotes around string', () => {
      expect(() => isJson('{ "key": value }', true)).toThrow();
    });

    test('should throw for extra characters', () => {
      expect(() => isJson('{ "key": "value" } extra', true)).toThrow();
    });

    test('should throw for leading characters', () => {
      expect(() => isJson('extra { "key": "value" }', true)).toThrow();
    });

    test('should throw for incomplete object', () => {
      expect(() => isJson('{ "key": "value"', true)).toThrow();
    });

    test('should throw for incomplete array', () => {
      expect(() => isJson('[1, 2, 3', true)).toThrow();
    });

    test('should throw for incomplete string', () => {
      expect(() => isJson('"incomplete string', true)).toThrow();
    });

    test('should throw for unescaped special characters', () => {
      expect(() => isJson('{ "key": "line\nbreak" }', true)).toThrow();
    });

    test('should throw for invalid number format', () => {
      expect(() => isJson('{ "key": 01 }', true)).toThrow();
    });

    test('should throw for hex numbers', () => {
      expect(() => isJson('{ "key": 0x1A }', true)).toThrow();
    });

    test('should throw for NaN', () => {
      expect(() => isJson('{ "key": NaN }', true)).toThrow();
    });

    test('should throw for Infinity', () => {
      expect(() => isJson('{ "key": Infinity }', true)).toThrow();
    });

    test('should throw for -Infinity', () => {
      expect(() => isJson('{ "key": -Infinity }', true)).toThrow();
    });
  });

  describe('edge cases with almost valid JSON', () => {
    test('should throw for object with no closing brace', () => {
      expect(() => isJson('{ "key": "value" ', true)).toThrow();
    });

    test('should throw for array with no closing bracket', () => {
      expect(() => isJson('[1, 2, 3 ', true)).toThrow();
    });

    test('should throw for nested incomplete JSON', () => {
      expect(() => isJson('{ "nested": { "key": "value" }', true)).toThrow();
    });

    test('should throw for mixed quotes', () => {
      expect(() => isJson('{ "key": \'value\' }', true)).toThrow();
    });
  });

  describe('JavaScript-specific but invalid JSON', () => {
    test('should throw for JavaScript object literals', () => {
      expect(() => isJson('{ a: 1, b: 2 }', true)).toThrow();
    });

    test('should throw for new operator', () => {
      expect(() => isJson('{ "date": new Date() }', true)).toThrow();
    });

    test('should throw for regex literals', () => {
      expect(() => isJson('{ "pattern": /test/ }', true)).toThrow();
    });
  });
});